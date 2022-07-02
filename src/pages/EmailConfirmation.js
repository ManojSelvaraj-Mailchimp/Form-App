import { React } from "react";
import { Form } from "react-bootstrap";
import Header from "../components/header";

function EmailConfirmation() {
  return (
    <div>
      <Header />
      <div>
        <Form className="mt-5">
          <h4>Check Your Email</h4>
          <p>
            We've sent a message to your email with a code to activate your
            account.
          </p>

          <Form.Group className="mt-5">
            <Form.Label>Confirmation Code</Form.Label>
            <Form.Control type="text" placeholder="Code" />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default EmailConfirmation;
