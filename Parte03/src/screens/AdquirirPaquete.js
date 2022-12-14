import React from "react";
import Title from "../components/Title";
import cusco from "../source/image/destinos/cusco.jpg";
import skylodge from "../source/image/alojamientos/skylodge.jpg";
import saqsaywaman from "../source/image/destinos/saqsaywaman.jpg";
import plazaCusco from "../source/image/destinos/plazaCusco.jpg";
import Btn from "../components/Btn";

export default function AdquirirPaquete() {
  return (
    <div className="p-4">
      <Title title="Maravillas de Cusco" />
      <div>
        <span>Calificación: 4.5</span>
        <i className="material-icons" style={{ color: "rgb(255, 243, 75)" }}>
          star
        </i>
      </div>
      <div className="conatiner">
        <div className="row">
          <div className="col">
            <div className=" card-body">
              <h5>Detalles</h5>
              <div className="col">
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
                <h5>Ruta</h5>
                <ol>
                  <li style={styles.itemRurta}>
                    LIMA-CUSCO, molibus-clasico :<br />
                    Hora salida: 7pm “01/02/03” Hora de llegada: 11am “02/02/03”
                  </li>
                  <li style={styles.itemRurta}>
                    Recorrido de la ciudad de cusco, (Hotel “cusquito”:253) :
                    <br />
                    Inicio: 1pm “03/02/03” Finaliza: 6pm “03/02/03”
                  </li>
                  <li style={styles.itemRurta}>
                    Visita a la ciudadela de saqsaywaman (Bus-clasico:Imperial)
                    :
                    <br />
                    Inicio: 9pm “04/02/03” Finaliza: 5pm “04/02/03”
                  </li>
                  <li style={styles.itemRurta}>
                    Visita a la ciudadela de saqsaywaman (Bus-clasico:Imperial):
                    <br />
                    Inicio: 9pm “05/02/03” Finaliza: 5pm “05/02/03”
                  </li>
                  <li style={styles.itemRurta}>
                    Hotel Skylodge: <br />
                    Inicio: 6pm “05/02/03” Finaliza: 5pm “06/02/03”(regreso a
                    cusco/bus:imperial/hotel:La cabaña 25)
                  </li>
                  <li style={styles.itemRurta}>
                    Visita a la ciudadela de Machu Picchu
                    (Bus-clasico:Imperial):
                    <br />
                    Inicio: 9pm “07/02/03” Finaliza: 5pm “07/02/03”
                  </li>
                  <li style={styles.itemRurta}>
                    Regreso a Cusco-Lima (Bus-clasico:Imperial):
                    <br />
                    Inicio: 09pm “07/02/03” Finaliza: 13pm “08/02/03”
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="col container">
            <div className="row">
              <div className="col-8 p-0">
                <img src={cusco} alt="cusco" style={{ width: "100%" }} />
              </div>
              <div className="col-4 container p-0">
                <div className="row">
                  <img
                    src={skylodge}
                    alt="skylodge"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="row">
                  {" "}
                  <img
                    src={saqsaywaman}
                    alt="saqsaywaman"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="row">
                  {" "}
                  <img
                    src={plazaCusco}
                    alt="plazaCusco"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>

            <div
              className="row"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <b style={{ fontSize: "30px" }}>$250</b>
              <a href="#1">Terminos y condiciones</a>
              <Btn name="Adquirir" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  card: {
    borderRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  itemRurta: {
    padding: "7px",
    margin: "7px",
    borderRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  colap: {
    zIndex: "-1",
  },
};