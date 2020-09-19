const mongoose = require("mongoose");
const _ = require("lodash");

const playerdataSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    lastLevelPlayed: {
      level: {
        type: Number,
        required: true,
      },
      checkpoint: {
        type: Number,
        default: 1,
      },
    },
    currentCharacterSprite: {
      type: Number,
      default: 1,
    }, //not sure what you need
  },
  { strict: false }
);

const PlayerData = mongoose.model("PlayerData", playerdataSchema);

module.exports = PlayerData;
