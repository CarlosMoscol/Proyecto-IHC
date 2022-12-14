import React from "react";

export default function Btn(props) {
  return (
    <button
      style={{
        border: "none",
        backgroundColor: "#4895EF",
        borderRadius: "7px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        color: "white",
        padding: "5px 15px",
        display: "inline",
        width: "100px",
      }}
    >
      {props.name}
    </button>
  );
}