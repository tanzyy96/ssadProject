const route = require("express-promise-router")();
const _ = require("lodash");
const { User } = require("../db/models/user");
const PlayerData = require("../db/models/playerdata");

route.get("/:username", async (req, res) => {
  const user = await User.find({ userName: req.params.username });
  if (!user) {
    return res.status(400).send("No such user.");
  }
  const data = await PlayerData.find({ user: user._id }).populate(
    "user",
    "userName -_id"
  );
  res.send(data);
});

route.post("/:username", async (req, res) => {
  const user = await User.findOne({ userName: req.params.username });
  if (!user) {
    return res.status(400).send("No such user.");
  }

  const data = await PlayerData.findOne({ user: user._id });

  if (data)
    return res
      .status(500)
      .send("Player data already exists. Use POST to update instead.");
  const newData = await PlayerData.create({
    user: user._id,
    lastLevelPlayed: req.body.lastLevelPlayed,
    currentCharacterSprite: req.body.spriteNumber,
  });

  return res.send(newData);
});

route.put("/:username", async (req, res) => {
  const user = await User.find({ userName: req.params.username });
  if (!user) {
    return res.status(400).send("No such user.");
  }

  const updatedData = await PlayerData.findOneAndUpdate(
    { user: user._id },
    { $set: req.body }
  );

  return res.send(updatedData);
});

route.delete("/:username", async (req, res) => {
  const user = await User.findOne({ userName: req.params.username });
  if (!user) {
    return res.status(400).send("No such user.");
  }

  let deletedData = await PlayerData.findOneAndDelete({ user: user._id });
  return res.send(deletedData);
});

module.exports = route;
