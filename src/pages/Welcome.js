import React from "react";
import { Button } from "react-bootstrap";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect } from "react";

function Welcome() {
  var divStyle = {
    margin: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const navigate = useNavigate();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/welcome" });
  }, []);

  const onClickLoginPage = () => {
    ReactGA.event({
      category: "page_events",
      action: "login_button_clicked_welcomePage",
    });
    navigate("/login");
  };

  const onClickSignupPage = () => {
    ReactGA.event({
      category: "page_events",
      action: "signup_button_clicked_welcomePage",
    });
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
