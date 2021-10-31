const express = require("express");
const db = require("../config/db");
const route = express.Router();

route.get("/", (req, res) => {
  res.send({ title: "위치 : api" });
});

route.get("/chart", (req, res) => {
  const line = "select * from linechart";
  const bar = "select * from barchart";
  let line_values, bar_values;

  //line chart 값 가져오기
  db.query(line, (err, result) => {
    if (err) {
      throw err;
    } else {
      // console.log(result);
      line_values = result;
    }
  });

  //bar chart 값 가져오기
  db.query(bar, (err, result) => {
    if (err) {
      throw err;
    } else {
      bar_values = result;
      res.send({ line_values: line_values, bar_values: bar_values });
      // res.json()
    }
  });
});

module.exports = route;
