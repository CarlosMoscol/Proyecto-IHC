import React from "react";
import Buscar from "../components/Buscar";
import Title from "../components/Title";
import Paquete from "../components/Paquete";
import Filtros from "../components/Filtros";

export default function Paquetes() {
  return (
    <>
      <Buscar />
      <section style={styles.sectionResultado}>
        <Title title="Paquetes" />

        <div className="container">
          <div className="row">
            <div className="col-2" style={{border: "1px solid", borderRadius: "15px", height: "330px", backgroundColor: "rgba(87, 105, 117, 0.5)",}}>
              <Filtros />
            </div>
            <div className="col-10">
              <Paquete namePaquete="Maravillas de cusco" />
              <Paquete namePaquete="Maravillas de cusco" />
              <Paquete namePaquete="Maravillas de cusco" />
              <Paquete namePaquete="Maravillas de cusco" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  sectionResultado: { padding: "10px" },
};