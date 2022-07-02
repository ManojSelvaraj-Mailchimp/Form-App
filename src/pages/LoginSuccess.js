import React from "react";

function LoginSuccess() {
  var divStyle = {
    marginLeft: "37em",
    marginTop: "30px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  };

  return (
    <div style={divStyle}>
      <h2>Mock Login Success. Endpoint Reached.</h2>
    </div>
  );
}

export default LoginSuccess;
