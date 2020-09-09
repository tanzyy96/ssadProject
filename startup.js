const express = require("express");
const port = process.env.PORT || 3001;
const users = require("./routes/user");
const logins = require("./routes/login");
const error = require("./middleware/error");
const cookieParser = require("cookie-parser");
const cors = require("cors");

module.exports = function (app) {
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());
  app.use("/api/users", users);
  app.use("/api/logins", logins);
  app.use(error);
};
