import React from "react";
import { useHistory, useLocation } from "react-router";
import ChartArea from "./chart/ChartArea";
import Logout from "./Logout";

// const Memo = ({ history }) => {
const Memo = () => {
  let history = useHistory();
  console.log("history : ", history);
  return (
    <div className="memo-header">
      <div className="nav1">
        <div className="nav1-in">
          <span className="nav1-text nt-left">🧡❤🧡🖤</span>
          <span className="nav1-text nt-right">
            meno Programmings first page
          </span>
          <nav className="nav1-nav">
            <ul className="nav-in-list">
              <li className="in-li">
                <a className="in-a">Products</a>
              </li>
              <li className="in-li">
                <a className="in-a">Pricing</a>
              </li>
              <li className="in-li">
                <a className="in-a">Documentation</a>
              </li>
              <li className="in-li">
                <a className="in-a">Community</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="nav2">
        <div className="nav2-in">
          <h1>nav 2</h1>
          <Logout history={history} />
        </div>
      </div>
      <ChartArea />
    </div>
  );
};

export default Memo;
