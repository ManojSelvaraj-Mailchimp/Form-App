import React from "react";
import MailchimpLogo from "../images/MailchimpLogo.png";
import { Link } from "react-router-dom";

const header = () => {
  var divStyle = {
    margin: "50px",
  };

  return (
    <div>
      <div style={divStyle}>
        <Link to="/">
          <img src={MailchimpLogo} width={250} height={70} />
        </Link>
      </div>
    </div>
  );
};
export default header;
