import React from "react";

export default function Alojamineto(props) {
  return (
    <div style={style.cart}>
      <img style={style.img} src={props.image} alt="puno" />
      <div>{props.name}</div>
      <div>Precio: ${props.cost}</div>
    </div>
  );
}

const style = {
  cart: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "25px",
    width: "250px",
    textAlign: "center",
    margin: "15px",
  },
  img: {
    backgroundSize: "contain",
    borderRadius: "25px 25px 0 0",
    width: "100%",
  },
};