import { useHistory } from "react-router";
import axios from "axios";
import React from "react";

const Logout = () => {
  let history = useHistory();
  const onLogoutHandler = async () => {
    await axios.get("/user/logout").then((res) => {
      const logon = res.data.id;
      console.log("logon: ", logon);
      if (!logon) {
        history.push("/");
        // document.location.href = "/";
      }
    });
  };
  return (
    <a style={{ float: "right" }} onClick={onLogoutHandler}>
      로그아웃
    </a>
  );
};
export default Logout;
