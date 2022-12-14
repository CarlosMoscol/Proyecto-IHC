import React from "react";

import miUbicacionIcon from "../../source/image/icons/logos_google-maps.svg";
import Btn from "../Btn";

export default function FormAddDate() {
  return (
    <form className="container-fluid" style={styles.form}>
      <div className="row p-3">
        <div className="col-md">
          <label>
            <img src={miUbicacionIcon} alt="icon" style={{ width: "20px" }} />
            Estoy aquí
          </label>
          <input
            class="form-control"
            list="departamentos"
            name="departamento"
            id="departamento"
          />
          <datalist id="departamentos">
            <option value="Lima" />
            <option value="Chiclayo" />
            <option value="Piura" />
            <option value="Junín" />
            <option value="Cusco" />
          </datalist>
        </div>
        <div className="col-md">
          <label>Fecha de início</label>
          <input class="form-control" type="date" />
        </div>
        <div className="col-md">
          <label>Fecha final</label>
          <input class="form-control" type="date" />
        </div>
        <div
          className="col-md"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Btn name="Agregar" />
        </div>
      </div>
    </form>
  );
}

const styles = {
  form: {
    backgroundColor: "white",
  },
};