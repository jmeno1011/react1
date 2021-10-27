import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./header/Header";
function Join() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const onChangePw2 = (e) => {
    setPw2(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onSubmitHandler = () => {
    let userInfo = {
      user_id: id,
      user_pw: pw,
      user_name: name,
      email: email,
    };
    console.log("id: ", id);

    axios
      .post("/user/join", null, {
        params: { user_id: id, user_pw: pw, user_name: name, email: email },
      })
      .then((res) => {
        console.log("res : ", res[data]);
      })
      .catch((e) => console.log("error : ", e));
  };

  return (
    <div>
      <Header className="login-header" />
      <hr className="hide" />
      <div className="middle">
        <form onSubmit={onSubmitHandler}>
          <h1>Join</h1>
          <div>
            id :{" "}
            <input type="text" name="id" velue={id} onChange={onChangeId} />
          </div>
          <div>
            pw :
            <input type="password" name="pw" velue={pw} onChange={onChangePw} />
          </div>
          <div>
            pw확인 :
            <input
              type="password"
              name="pw2"
              velue={pw2}
              onChange={onChangePw2}
            />
          </div>
          <div>
            name :
            <input
              type="text"
              name="name"
              velue={name}
              onChange={onChangeName}
            />
          </div>
          <div>
            email :
            <input
              type="email"
              name="email"
              velue={email}
              onChange={onChangeEmail}
            />
          </div>
          <div>
            {/* <button></button> */}
            <button type="submit">signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Join;
