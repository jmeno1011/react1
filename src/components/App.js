import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Redirect, useHistory } from "react-router";
import "@css/style.css";
import "@css/memo.css";
import Login from "./Login";
import Join from "./Join";
import Memo from "./Memo";
import LoginNpm from "./Login_npm";
import axios from "axios";

const App = () => {
  const [logOn, setLogon] = useState(false);
  const logChek = async () => {
    try {
      const res = await axios.get("/user/on");
      let log = Boolean(res.data);
      setLogon(log);
    } catch (e) {
      console.log("error : ", e);
    }
  };
  useEffect(() => {
    logChek();
  }, [logOn]);
  return (
    <>
      <Router>
        {!logOn ? <Redirect to="/" /> : <Redirect to="/Memo" />}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Join" component={Join} />
          <Route path="/Login" component={LoginNpm} />
          <Route path="/Memo" component={Memo} />
          {/* <Route
            path="/Memo"
            render={() => {
              return <Memo history={history} />;
            }}
          /> */}
        </Switch>
      </Router>
    </>
  );
};

export default App;
