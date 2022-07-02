import { React, useState } from "react";
import { Form } from "react-bootstrap";
import Header from "../components/header";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import SyncDataPic from "../images/SyncContacts.jpeg";

function SyncData() {
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
        <h4>Sync Data</h4>
      </div>
      <div style={divStyle}>
        <img src={SyncDataPic} width={700} height={500} />
      </div>
    </div>
  );
}

export default SyncData;
