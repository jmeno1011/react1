const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send({ title: "위치 : home" });
});

module.exports = route;
