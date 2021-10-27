const express = require("express");
const route = express.Router();
const db = require("../config/db");

route.get("/", (req, res) => {
  console.log(`req : ${req}, res: ${res}`);
});

route.get("/login", (req, res) => {
  res.send({ id: "id", pw: "pw" });
});

route.post("/login", (req, res) => {
  const { user_id, user_pw } = req.body;
  const selectUser = `select user_id from person where user_id='${user_id}'`;
  const seelctPw = `select user_id, user_pw from person where user_id='${user_id}' and user_pw='${user_pw}'`;
  db.query(selectUser, (err, result) => {
    if (!err) {
      if (result.length === 0) {
        res.send({ err: "id", msg: "입력하신 아이디가 존재하지 않습니다." });
      } else {
        db.query(seelctPw, (err, result) => {
          if (!err) {
            if (result.length === 0) {
              res.send({
                err: "pw",
                msg: "입력하신 비밀번호가 일치하지 않습니다.",
              });
            } else {
              req.session.user_id = user_id;
              req.session.save((error) => {
                if (error) {
                  console.log("session save error : ", error);
                }
              });
              res.send(result[0]);
            }
          } else {
            console.log("err: ", err);
          }
        });
      }
    } else {
      console.log("err : ", err);
    }
  });
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
