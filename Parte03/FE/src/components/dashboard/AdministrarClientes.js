import React from "react";
import Btn from "../Btn";
import Title from "../Title";

export default function AdministrarClientes() {
  return (
    <div>
      <Title title="Nuestros Clientes" />

      <ol>
        <li>
          <div className="m-2 p-2" style={styles.card}>
            <ul>
              <li>Nombre: Pedro</li>
              <li>Tipo: Independiente</li>
              <li>Dedicaión: Alojamineto</li>
              <li>Número de servicios: 1</li>
              <li>
                Calificación: 4.5 <i className="material-icons">star</i>
              </li>
            </ul>
            <Btn name="Enviar Aviso" />
            <Btn name="Suspender" />
            <Btn name="Quitar" />
          </div>
        </li>
        <li>
          <div className="m-2 p-2 " style={styles.card}>
            <ul>
              <li>Nombre: Turismo Imperial</li>
              <li>Tipo: Empresa</li>
              <li>Dedicaión: Transporte</li>
              <li>Número de servicios: 7</li>
              <li>
                Calificación: 4.5 <i className="material-icons">star</i>
              </li>
            </ul>
            <Btn name="Enviar Aviso" />
            <Btn name="Suspender" />
            <Btn name="Quitar" />
          </div>
        </li>
      </ol>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
};