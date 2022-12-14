import React from "react";

export default function Footer() {
  return (
    <footer className="container-fluid p-4 mx-auto" style={styles.footer}>
      <div className="row p-5">
        <div className="col">
          <h5>
            <b>InkaTravel</b>
          </h5>
          Somos la mejor empresa de paquetes turiticos
        </div>
        <div className="col">
          <h5>Servicios</h5>
          <ul>
            <li>Paquetes de viaje</li>
            <li>Promoción de servicios turisticos</li>
          </ul>
        </div>
        <div className="col">
          <h5>Soporte</h5>
          <ul>
            <li>Telefono: xxx-xxx-xxx</li>
            <li>Email: xxxx@example.com</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col p-5">Copy Right InkaTravel S. A.</div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    color: "white",
    backgroundColor: "#480ca8",
    textAlign: "center",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
};