import { React, useState } from "react";
import EmailConfirmation from "./EmailConfirmation";
import MailchimpAuthorization from "./MailchimpAuthorization";
import SyncData from "./SyncData";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function Install() {
  const navigate = useNavigate();

  const [activeState, setActiveState] = useState(0);

  const handleStateChange = () => {
    const stateInfo = activeState;
    setActiveState(stateInfo + 1);
  };
  const completionHandler = () => {
    setActiveState(0);
    navigate("/connectionsuccess");
  };

  var divStyle = {
    marginLeft: "37em",
    marginTop: "30px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  };

  if (activeState === 0) {
    return (
      <>
        <EmailConfirmation />
        <div style={divStyle}>
          <Button className="mr-5" onClick={handleStateChange}>
            Confirm
          </Button>
        </div>
        <div style={divStyle}>
          <h6>
            Didn't get an email? Check your spam folder.
            <Link to="/signup"> Re-enter your email and try again.</Link>
          </h6>
        </div>
      </>
    );
  }

  if (activeState === 1) {
    return (
      <>
        <MailchimpAuthorization />
        <div style={divStyle}>
          <Button className="mr-5" onClick={handleStateChange}>
            Authorize
          </Button>

          <Link to="/">
            <Button className="mr-5">Cancel</Button>
          </Link>
        </div>
      </>
    );
  }

  if (activeState === 2) {
    return (
      <>
        <SyncData />
        <div style={divStyle}>
          <Button className="mr-5" onClick={completionHandler}>
            Begin
          </Button>
        </div>
      </>
    );
  }
}

export default Install;
