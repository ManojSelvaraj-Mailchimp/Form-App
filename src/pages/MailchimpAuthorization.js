import { React, useState } from "react";
import { Form } from "react-bootstrap";
import Header from "../components/header";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import IntegrationPic from "../images/IntegrationPic.png";

function MailchimpAuthorization() {
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
      <div style={divStyle}>
        <h4>Authorize Mailchimp for Partner</h4>
      </div>
      <div style={divStyle}>
        <img src={IntegrationPic} />
      </div>
    </div>
  );
}

export default MailchimpAuthorization;
