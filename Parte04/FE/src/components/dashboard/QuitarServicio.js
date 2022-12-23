import React from "react";
import Transporte from "../personalizar/Transporte";
import Title from "../Title";

import imperial from "../../source/image/veiculos/imperial.jpeg";
import Btn from "../Btn";

export default function QuitarServicio() {
  return (
    <div>
      <Title title="Quitar Servicio" />
      <h4>Selecciona servicios</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          onMouseOver={over}
          onMouseLeave={leave}
          style={styles.iet}
          className="p-1 m-1"
        >
          Lugar Turustico
        </div>
        <div
          onMouseOver={over}
          onMouseLeave={leave}
          style={styles.iet}
          className="p-1 m-1"
        >
          Alojamineto
        </div>
        <div
          onMouseOver={over}
          onMouseLeave={leave}
          style={styles.iet}
          className="p-1 m-1"
        >
          Transporte
        </div>
      </div>

      <h4>Mis servicios de Transporte</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Transporte image={imperial} name="Imperial" cost="90" />
      </div>
      <h4>Transporte Imperial</h4>
      <div>
        <label for="exampleInputEmail1" className="form-label">
          Describanos el motivo
        </label>
        <textarea
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div>
        <label for="exampleInputEmail1" className="form-label">
          Por favo ingrese su contraseña: (Para verificar si usted está
          realizando esta operción.)
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="m-3"
      >
        <Btn name="Quitar" />
      </div>
    </div>
  );
}
function over(e) {
  e.target.style.backgroundColor = " rgb(29, 107, 143)";
  e.target.style.cursor = "pointer";
  e.target.style.color = "white";
}

function leave(e) {
  e.target.style.backgroundColor = "white";
  e.target.style.color = "black";
}

const styles = {
  iet: {
    backgroundColor: "white",
    borderRadius: "7px",
  },
};