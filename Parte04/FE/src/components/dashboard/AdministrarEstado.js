import React from "react";
import Title from "../Title";
import Btn from "../Btn";

export default function AdministrarEstado() {
  return (
    <div>
      <Title title="Mi Lugares turisticos" />
      <div>
        <b>No tienes lugares turisticos.</b> <Btn name="Agregar" />{" "}
      </div>
      <Title title="Mi Alojaminetos" />
      <div>
        <b>No tienes lugares turisticos.</b> <Btn name="Agregar" />{" "}
      </div>
      <Title title="Mis veiculos" />
      <ol>
        <li>
          <h5>Imperial 001</h5>
          <form
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: "15px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <div className="m-2">
              <label for="exampleInputEmail1" className="form-label">
                Lugar de salida:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Lima"
              />
            </div>
            <div className="m-2">
              <label for="exampleInputEmail1" className="form-label">
                Destino:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Cusco"
              />
            </div>
            <div className="m-2">
              <label for="exampleInputEmail1" className="form-label">
                Hora de salida:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="09:00AM"
              />
            </div>
            <div className="m-2">
              <label for="exampleInputEmail1" className="form-label">
                Costo del pasaje:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="150$"
              />
            </div>
            <div className="m-2">
              <label for="exampleInputEmail1" className="form-label">
                Asientos disponibles:
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="13"
              />
            </div>
          </form>
        </li>
        <li>
          <h5>Imperial 002</h5>
          <form
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              borderRadius: "15px",
            }}
          >
            <div className="m-2">
              <label for="exampleInputEmail1" className="form-label">
                Lugar de salida:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Lima"
              />
            </div>
            <div className="m-2">
              <label for="exampleInputEmail1" className="form-label">
                Destino:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Cusco"
              />
            </div>
            <div className="m-2">
              <label for="exampleInputEmail1" className="form-label">
                Hora de salida:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="09:00AM"
              />
            </div>
            <div className="m-2">
              <label for="exampleInputEmail1" className="form-label">
                Costo del pasaje:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="150$"
              />
            </div>
            <div className="m-2">
              <label for="exampleInputEmail1" className="form-label">
                Asientos disponibles (se actualiza por cada compra):
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="13"
              />
            </div>
          </form>
        </li>
      </ol>
    </div>
  );
}