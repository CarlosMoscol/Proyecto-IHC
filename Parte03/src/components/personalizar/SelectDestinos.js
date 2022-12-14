import React from "react";
import puno from "../../source/image/destinos/puno.jpg";
import cusco from "../../source/image/destinos/cusco.jpg";
import saqsaywaman from "../../source/image/destinos/saqsaywaman.jpg";
import Destinos from "./Destinos";
import Btn from "../Btn";

export default function SelectDestinos() {
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
        <Destinos image={puno} name="Puno" cost="50" />
        <Destinos image={cusco} name="Cusco" cost="150" />
        <Destinos image={saqsaywaman} name="Saqsaywaman" cost="130" />

        <Destinos image={puno} name="Puno" cost="50" />
        <Destinos image={cusco} name="Cusco" cost="150" />
        <Destinos image={saqsaywaman} name="Saqsaywaman" cost="130" />

        <Destinos image={puno} name="Puno" cost="50" />
        <Destinos image={cusco} name="Cusco" cost="150" />
        <Destinos image={saqsaywaman} name="Saqsaywaman" cost="130" />
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