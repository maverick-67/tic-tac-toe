import React from "react";

function Square(props) {
  return (
    <div
      style={{
        border: "1px solid",
        height: "100px",
        width: "100%",
        textAlign: "center",
      }}
      className="square"
      onClick={props.onClick}
    >
      <h5>{props.value}</h5>
    </div>
  );
}

export default Square;
