import { React, useState } from "react";
import { Form } from "react-bootstrap";
import Header from "../components/header";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function Signup() {
  var startTime = null;

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/signup" });
    startTime = Date.now();
  }, []);

  const navigate = useNavigate();

  const onClickSignupPage = () => {
    var signupTime = Math.floor(Math.abs(Date.now() - startTime) / 1000);
    ReactGA.event({
      category: "page_events",
      action: "signup_time",
      signup_time: signupTime,
    });
    ReactGA.event({
      category: "page_events",
      action: "signup_button_clicked_signupPage",
    });
    navigate("/install");
  };

  var divStyle = {
    marginLeft: "37em",
    marginTop: "30px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  };

  return (
    <div>
      <Header />
      <div>
        <Form className="mt-5">
          <h4>Create your Mailchimp Account to Connect to Partner</h4>

          <Form.Group className="mt-5">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mt-5">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>

          <Form.Group className="mt-5">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
      </div>

      <div style={divStyle}>
        <Button className="mr-5" onClick={onClickSignupPage}>
          {" "}
          Signup{" "}
        </Button>
      </div>

      <div style={divStyle}>
        <h6>
          Already Have an Account? <Link to="/login">Login</Link>{" "}
        </h6>
      </div>
    </div>
  );
}

export default Signup;
