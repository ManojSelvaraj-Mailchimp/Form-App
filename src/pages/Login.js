import React from "react";
import { Form } from "react-bootstrap";
import Header from "../components/header";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Login() {
  const navigate = useNavigate();

  var divStyle = {
    marginLeft: "37em",
    marginTop: "30px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  };

  const onClickLoginPage = () => {
    navigate("/loginsuccess");
  };

  return (
    <div>
      <Header />

      <div>
        <Form className="mt-5">
          <h4>Login to your Mailchimp Account to Connect to Partner</h4>

          <Form.Group className="mt-5">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mt-5">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
      </div>

      <div style={divStyle}>
        <Button className="mr-5" onClick={onClickLoginPage}>
          {" "}
          Login{" "}
        </Button>
      </div>

      <div style={divStyle}>
        <h6>
          Don't Have an Account? <Link to="/signup">Signup</Link>{" "}
        </h6>
      </div>
    </div>
  );
}

export default Login;
