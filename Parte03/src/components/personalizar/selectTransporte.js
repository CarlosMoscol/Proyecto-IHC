import React from "react";
import Transporte from "./Transporte";
import imperial from "../../source/image/veiculos/imperial.jpeg";
import cruzDelSur from "../../source/image/veiculos/cruzDelSur.jpeg";
import Btn from "../Btn";

export default function selectTransporte() {
  return (
    <div>
      <div
        className="container-fluid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Transporte image={imperial} name="Imperial" cost="90" />
        <Transporte image={cruzDelSur} name="Cruz del sur" cost="300" />
      </div>
      <div
        className="row p-2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Btn name="Agregar" />
      </div>
    </div>
  );
}