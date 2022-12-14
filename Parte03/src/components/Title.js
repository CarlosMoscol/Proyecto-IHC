import React from "react";

export default function Title(props) {
  return (
    <h2
      style={{
        borderBottom: "2px dotted rgb(146, 79, 160)",
        fontWeight: "lighter",
      }}
    >
      {props.title}
    </h2>
  );
}