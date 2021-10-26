const express = require("express");
const route = express.Router();
const util = require("util");
const db = require("../config/db");

route.get("/", (req, res) => {
  console.log(`req : ${req}, res: ${res}`);
});

route.get("/login", (req, res) => {
  res.send({ id: "id", pw: "pw" });
});

route.get("/join", (req, res) => {
  //   res.send('<h1>회원가입 화면입니다</h1>')
  res.redirect("/");
});

route.post("/join", (req, res) => {
  const { user_id, user_pw, user_name, email } = req.query;
  //   console.log(`user_id : ${user_id}, user_pw : ${user_pw}, user_name : ${user_name}, email : ${email}`);
  const insert = `insert into person (user_id, user_pw, user_name, email) values('${user_id}','${user_pw}','${user_name}','${email}' )`;
  db.query(insert, (err, result) => {
    if (err) {
      res.send(err);
    }
    console.log("저장되었습니다.");
    // res.redirect('/');
  });
});

module.exports = route;
