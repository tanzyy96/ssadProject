const mongoose = require("mongoose");
const _ = require("lodash");

const scoreSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    level: Number,
  },
  { strict: false }
);

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
