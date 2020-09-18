const route = require("express-promise-router")();
const _ = require("lodash");
const Score = require("../db/models/score");
const { User } = require("../db/models/user");
const mongoose = require("mongoose");

route.get("/", async (req, res) => {
  let scores = await Score.find().populate("user", "userName -_id");
  res.send(scores);
});

route.get("/:username", async (req, res) => {
  let user = await User.findOne({ userName: req.params.username });

  if (!user) {
    return res.status(404).send("User does not exist.");
  }

  let scores = await Score.find().populate({
    path: "user",
    match: { userName: { $eq: `${req.params.username}` } },
    select: "userName -_id",
  });
  const newScores = scores.map((sc) => {
    const { user, score, _id } = sc;
    let time = _id.getTimestamp();
    time = new Date(time);

    const newSc = {
      username: user.userName,
      score,
      time: time.toString(),
    };
    return newSc;
  });

  res.send(newScores);
});

route.post("/", async (req, res) => {
  let { userName, newScore } = req.body;
  let user = await User.findOne({ userName });

  if (!user) {
    return res.status(404).send("User does not exist.");
  }

  if (newScore === undefined) {
    return res.status(404).send("Bad request.");
  }

  score = await Score.create({ user: user._id, score: newScore });
  score.time = score._id.getTimestamp();
  score = await score.save();
  return res.send(score);
});

route.put("/", async (req, res) => {
  let updatedScore = await Score.findByIdAndUpdate(req.body._id, {
    $set: req.body,
  });
  return res.send(updatedScore);
});

route.delete("/", async (req, res) => {
  const deletedScore = await Score.findByIdAndDelete(req.body._id);
  return res.send(deletedScore);
});

module.exports = route;
