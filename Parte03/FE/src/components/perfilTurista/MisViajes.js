import React from "react";
import Title from "../Title";

export default function MisViajes() {
  return (
    <div>
      <Title title="Mis Viajes" />

      <h4>Por realizar</h4>

      <div className="p-4" style={styles.card}>
        <h5>Paquete: Las maravillas de cusco</h5>
        <ul>
          <li>Cimienza: Lima-Peru</li>
          <li>Destino: Cusco</li>
          <li>Fecha de viaje: 15/12/2021</li>
        </ul>

        <p>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Ver Ruta
          </button>
        </p>
        <div className="collapse" id="collapseExample" style={styles.colap}>
          <div className="card card-body">
            <ol>
              <li style={styles.itemRurta}>
                LIMA-CUSCO, molibus-clasico :<br />
                Hora salida: 7pm “01/02/03” Hora de llegada: 11am “02/02/03”
              </li>
              <li style={styles.itemRurta}>
                Recorrido de la ciudad de cusco, (Hotel “cusquito”:253) :<br />
                Inicio: 1pm “03/02/03” Finaliza: 6pm “03/02/03”
              </li>
              <li style={styles.itemRurta}>
                Visita a la ciudadela de saqsaywaman (Bus-clasico:Imperial) :
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
                Visita a la ciudadela de Machu Picchu (Bus-clasico:Imperial):
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
      <h4>Realizados</h4>
      <div className="p-4" style={styles.card}>
        <h5>Paquete: Recorrinedo los Andes</h5>
        <ul>
          <li>Cimienza: Lima-Puno-Ayacucho-Junin</li>
          <li>Destino: Cusco</li>
          <li>Fecha de viaje: 10/11/2020</li>
          <li>Fecha de finalización: 17/11/2020</li>
        </ul>
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