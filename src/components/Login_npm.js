import React from "react";
import HeaderNpm from "./header/Header_npm";

const LoginNpm = () => {
  return (
    <div className="nav1">
      <div className="npm-login">
        <HeaderNpm />
        <div className="npm-login1">
          <section className="login-body">
            <form className="npm-form">
              <h1 className="npm-title">Sign In</h1>
              <div>
                <label className="npm-label">Username</label>
                <input className="npm-log-input" type="text"></input>
              </div>
              <div className="forgot">
                <a className="forgot-a" href="/">
                  Forgot password?
                </a>
              </div>
              <div>
                <label className="npm-label">Password</label>
                <input className="npm-log-input" type="text"></input>
              </div>
              <button className="npm-log-btn">Sign In</button>
            </form>
            <a className="npm-log-a" href="/">
              Create Account
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LoginNpm;
