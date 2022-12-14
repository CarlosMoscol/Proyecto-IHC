import React from "react";
import Btn from "./Btn";
import cusco from "../source/image/destinos/cusco.jpg";

export default function Paquete(props) {
  return (
    <div className="container" style={styles.cardPaquete}>
      <div className="row">
        <div className="col">
          <img src={cusco} alt="cusco" style={styles.imagePaquete} />
        </div>
        <div className="col">
          <h5 style={styles.titlePaquete}>{props.namePaquete}</h5>
          <div style={styles.calificacion}>
            <i className="material-icons">star</i>
            <span>4.5 (122 compras)</span>
          </div>
          <ul>
            <li>Conoce Machu Picchu, Plaza de armas y Saqsaywaman</li>
            <li>Tendra un dia en el Hotel exótico-Skylodge</li>
            <li>Incluye transporte</li>
            <li>Incluye desayuno y cena en los alojamientos</li>
            <li>
              Incluye wifi <i className="material-icons">wifi</i>
            </li>

            <b style={{ fontSize: "30px" }}>$250</b>
          </ul>
          <Btn name="Ver Detalle" />
        </div>
      </div>
    </div>
  );
}

const styles = {
  cardPaquete: {
    padding: "0",
    margin: "10px",
  },
  titlePaquete: {
    padding: "10px",
    fontSize: "35px",
    margin: "0",
    fontWeight: "lighter",
  },
  imagePaquete: {
    width: "100%",
    borderRadius: "15px 0 0 15px",
  },
  calificacion: {
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
};