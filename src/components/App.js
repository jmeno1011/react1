import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "@css/style.css";
import "@css/memo.css";
import Login from "./Login";
import Join from "./Join";
import Memo from "./Memo";
import LoginNpm from "./Login_npm";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Join" component={Join} />
          <Route path="/Login" component={LoginNpm} />
          <Route path="/Memo" component={Memo} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
