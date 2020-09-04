const { User } = require("../db/models/user");
const bcrypt = require("bcrypt");
const route = require("express-promise-router")();
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const config = require("config");

route.post("/", async (req, res) => {
  const { userName, password } = req.body;
  let user = await User.findOne({ userName: userName });
  if (!user) {
    return res.status(400).send("No such user!");
  }

  if (await bcrypt.compare(password, user.hashedPassword)) {
    const token = jwt.sign(
      _.pick(user, ["userName", "isTeacher", "isAdmin"]),
      config.get("jwtPrivateKey")
    );
    res
      .cookie("jwtToken", token, { maxAge: 600000, httpOnly: true })
      .send(token);
  } else {
    return res.status(404).send("Invalid password!");
  }
});

module.exports = route;
