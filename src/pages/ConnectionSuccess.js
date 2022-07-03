import React from "react";

function ConnectionSuccess() {
  var divStyle = {
    marginLeft: "37em",
    marginTop: "30px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  };
  return (
    <div style={divStyle}>
      <h2>Mock Connection Success. Endpoint Reached.</h2>
    </div>
  );
}

export default ConnectionSuccess;

