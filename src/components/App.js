import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import "@css/style.css";
import Login from "./Login";
import Join from "./Join";
import Header from "./header/Header";
import Memo from "./Memo";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Join" component={Join} />
          <Route path="/Memo" component={Memo} />
        </Switch>
      </Router>
      {/* </div> */}
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
