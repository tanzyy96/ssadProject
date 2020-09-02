const express = require("express");
const port = process.env.PORT || 3000;
const users = require("./routes/user");
const error = require("./middleware/error");

module.exports = function (app) {
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });

  app.use(express.json());
  app.use("/api/users", users);
  app.use(error);
  app.get("/", (req, res) => {
    res.send({ title: "Hello World" });
  });
};
