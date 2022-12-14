import React from "react";
import Alojamineto from "./Alojamineto";
import iquitos from "../../source/image/alojamientos/iquitos.png";
import skylodge from "../../source/image/alojamientos/skylodge.jpg";
import Btn from "../Btn";

export default function SelectAlojamiento() {
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
        <Alojamineto image={iquitos} name="Hotel ..." cost="90" />
        <Alojamineto image={skylodge} name="Skylodge" cost="300" />
        <Alojamineto image={iquitos} name="Hotel ..." cost="90" />
        <Alojamineto image={skylodge} name="Skylodge" cost="300" />
        <Alojamineto image={iquitos} name="Hotel ..." cost="90" />
        <Alojamineto image={skylodge} name="Skylodge" cost="300" />
        <Alojamineto image={iquitos} name="Hotel ..." cost="90" />
        <Alojamineto image={skylodge} name="Skylodge" cost="300" />
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