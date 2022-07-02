import React from "react";
import { Button } from "react-bootstrap";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";

function Welcome() {
  var divStyle = {
    margin: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const navigate = useNavigate();

  const onClickLoginPage = () => {
    navigate("/login");
  };

  const onClickSignupPage = () => {
    navigate("/signup");
  };

  return (
    <div>
      <Header />
      <div style={divStyle}>
        <Button className="mr-5" onClick={onClickLoginPage}>
          {" "}
          Login{" "}
        </Button>
        <Button className="mr-5" onClick={onClickSignupPage}>
          {" "}
          Signup{" "}
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
