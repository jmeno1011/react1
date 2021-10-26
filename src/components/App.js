import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import "@css/style.css";
import Login from "./Login";
import Join from "./Join";
import Header from "./header/Header";

const App = () => {
  const [title, setTitle] = useState();
  const [title2, setTitle2] = useState();
  useEffect(() => {
    // fetchData();
    axios
      .get("/home")
      .then((res) => {
        setTitle(res.data.title);
        // console.log("res.data : ", res.data.title);
      })
      .catch();
    axios
      .get("/api")
      .then((res) => {
        setTitle2(res.data.title);
      })
      .catch();
  });
  return (
    <>
      {/* <Login /> */}
      {/* <Join /> */}
      <Header className="login-header" />
      <hr className="hide" />
      <div className="middle">
        <Router>
          {/* <div id="router">
            <ul className="list_switch">
              <li className="switch_item">
                <Link to="/Login">Login</Link>
              </li>
              <li className="switch_item">
                <Link to="/Join">Join</Link>
              </li>
            </ul>
          </div> */}

          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Join" component={Join} />
          </Switch>
        </Router>
      </div>
      <div className="login-footer">
        <a className="link_corp" href="/">
          © Meno Corp.
        </a>
        <span className="txt_bar">|</span>
        <a className="link_custom" href="/">
          고객센터
        </a>
      </div>
    </>
  );
};

export default App;
