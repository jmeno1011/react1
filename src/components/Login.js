import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };
  const onClickLogin = () => {
    console.log("click login");
  };
  useEffect(
    () => {
      axios
        .get("/user/login")
        .then((res) => console.log("res : ", res))
        .catch();
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    []
  );

  return (
    <>
      <div className="login_Section">
        <div id="loginFormDiv" className="login_default">
          <div className="login_change">
            <a className="link_change" href="">
              <span className="ico_change">
                <FaRegPaperPlane />
              </span>
              다른 방법으로 로그인
            </a>
          </div>
          <form id="loginForm" method="post">
            <fieldset>
              <legend className="screen_out">
                아이디,비밀번호 로그인 정보 입력 폼
              </legend>
              <div className="input_box">
                <input
                  className="login_input"
                  type="text"
                  name="input_id"
                  value={inputId}
                  onChange={handleInputId}
                  placeholder="아이디"
                />
              </div>
              <div className="input_box">
                <input
                  className="login_input"
                  type="password"
                  name="input_pw"
                  value={inputPw}
                  onChange={handleInputPw}
                  placeholder="비밀번호"
                />
              </div>
              <button className="btn_comm" type="button" onClick={onClickLogin}>
                로그인
              </button>
              <div className="set_login">
                <div className="set_login_area">
                  <label className="lab_check">로그인 상태 유지</label>
                  <input type="checkbox" className="set_login_check" />
                </div>
                <div className="go_Join">
                  <Link to="/Join" className="p_Join">
                    회원가입
                  </Link>
                </div>
              </div>
            </fieldset>
          </form>
          <div className="login_rel">
            <a id="findID" className="link_rel">
              아이디 찾기
            </a>
            <span className="txt_bar">|</span>
            <a id="findPW" className="link_rel">
              비밀번호 찾기
            </a>
          </div>
        </div>
      </div>
      <div className="box_bnr">
        <a className="link_bnr" href="/">
          <img
            src="https://t1.kakaocdn.net/login/bridge/bnr_login.jpg"
            alt="광고"
            height="100%"
          />
        </a>
      </div>
    </>
  );
}
export default Login;
