const route = require("express-promise-router")();
const { isNumber } = require("lodash");
const _ = require("lodash");
const Score = require("../db/models/score");
const { User } = require("../db/models/user");

route.get("/", async (req, res) => {
  let scores = await Score.find().populate("user", "userName -_id");
  res.send(scores);
});

route.get("/:level/:username", async (req, res) => {
  const { username, level } = req.params;
  let user = await User.findOne({ userName: username });
  if (!user) {
    return res.status(404).send("User does not exist.");
  }

  if (level == "all") {
    let scores = await Score.find({ user: user._id });
    return res.send(
      scores.map((score) => {
        const date = new Date(score._id.getTimestamp());
        newScore = {
          userName: username,
          date,
          level: score.level,
          score: score.score,
        };
        return newScore;
      })
    );
  }

  let scores = await Score.find({ level, user: user._id });
  return res.send(
    scores.map((sc) => {
      const formattedScore = {
        user: user.userName,
        time: new Date(sc._id.getTimestamp()),
        score: sc.score,
        level: sc.level,
      };
      return formattedScore;
    })
  );
});

route.get("/:level", async (req, res) => {
  try {
    const scores = await Score.find({ level: req.params.level }).populate(
      "user",
      "userName -_id"
    );

    return res.send(
      scores.map((sc) => {
        const formattedScore = {
          user: sc.user.userName,
          time: new Date(sc._id.getTimestamp()),
          score: sc.score,
          level: sc.level,
        };
        return formattedScore;
      })
    );
  } catch (err) {
    return res.send(err.message);
  }
});

route.post("/", async (req, res) => {
  let { userName, newScore, level } = req.body;
  if (!level) {
    return res.status(404).send("Please input your level.");
  }

  let user = await User.findOne({ userName });
  if (!user) {
    return res.status(404).send("User does not exist.");
  }

  if (newScore === undefined) {
    return res.status(404).send("Bad request.");
  }

  score = await Score.create({ user: user._id, score: newScore, level });
  return res.send(score);
});

route.put("/:username", async (req, res) => {
  let user = User.findOne({ userName: req.params.username });

  let updatedScore = await Score.findByIdAndUpdate(
    { user: user._id },
    {
      $set: req.body,
    }
  );
  return res.send(updatedScore);
});

route.delete("/", async (req, res) => {
  //you need to retrieve the ObjectId of the score document first..
  const deletedScore = await Score.findByIdAndDelete(req.body._id);
  return res.send(deletedScore);
});

module.exports = route;
