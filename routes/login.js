const { User } = require("../db/models/user");
const bcrypt = require("bcrypt");
const route = require("express-promise-router")();

route.post("/", async (req, res) => {
  const { userName, password } = req.body;
  let user = await User.findOne({ userName: userName });
  if (!user) {
    return res.status(400).send({ userName: "No such user!" });
  }

  if (await bcrypt.compare(password, user.hashedPassword)) {
    const token = user.generateAuthToken();
    res.setHeader("x-username", userName);
    return res
      .cookie("jwtToken", token, { maxAge: 600000, httpOnly: true })
      .header("access-control-expose-headers", "x-username")
      .send(token);
  } else {
    return res.status(404).send({ password: "Wrong password." });
  }
});

module.exports = route;
