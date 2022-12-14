import React from "react";

export default function Title(props) {
  return (
    <h2
      style={{
        borderBottom: "2px dotted #2C3949",
        fontWeight: "lighter",
      }}
    >
      {props.title}
    </h2>
  );
}