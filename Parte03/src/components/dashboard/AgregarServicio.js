import React from "react";
import Title from "../Title";
import Btn from "../Btn";

export default function AgregarServicio() {
  return (
    <div>
      <Title title="Agregar Servicio" />
      <h3>¿Que tipo de servicio desea agregar?</h3>
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
          Alojamiento
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
      <h3>Alojamiento</h3>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            <h4>Nombre del Lugar</h4>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <h4>Ubicación</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div class="mb-3 m-1">
            <label for="exampleInputEmail1" className="form-label">
              Departamento
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 m-1">
            <label for="exampleInputEmail1" className="form-label">
              Provincia
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 m-1">
            <label for="exampleInputEmail1" className="form-label">
              Distrito
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 m-1">
            <label for="exampleInputEmail1" className="form-label">
              Dirección
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Horario de atención
          </label>
          <input
            type="hour"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Sitio web
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Descripción
          </label>
          <textarea
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <h4>Visual</h4>
        <div>
          <label for="exampleInputEmail1" className="form-label">
            Fotos
          </label>
          <input
            type="file"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div>
          <label for="exampleInputEmail1" className="form-label">
            Video del recorrido
          </label>
          <input
            type="file"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div>
          <label for="exampleInputEmail1" className="form-label">
            Fotos 360 (*Opcional)
          </label>
          <input
            type="file"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <h4>Información de contacto</h4>
        <div>
          <label for="exampleInputEmail1" className="form-label">
            E-mail
          </label>
          <input
            type="file"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div>
          <label for="exampleInputEmail1" className="form-label">
            Telefono
          </label>
          <input
            type="Number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </form>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Btn name="Agregar" />
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