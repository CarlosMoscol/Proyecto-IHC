import maletaIcon from "../source/image/icons/flat-ui_trip-bag.svg";
import miUbicacionIcon from "../source/image/icons/logos_google-maps.svg";
import BtnBuscar from "./Btn";
import Title from "./Title";

export default function Buscar() {
  return (
    <div style={styles.contentFormBuscar}>
      <Title title="Buscar" />
      <form className="container-fluid" style={styles.formBuscar}>
        <div className="row p-3">
          <div className="col-md">
            <label>
              <img src={maletaIcon} alt="icon" style={{ width: "30px" }} /> Tipo
            </label>
            <input class="form-control" list="tipos" name="tipo" id="tipo" />
            <datalist id="tipos">
              <option value="Extremo" />
              <option value="Aventura" />
              <option value="Relajante" />
              <option value="Luna de miel" />
              <option value="Todos" />
            </datalist>
          </div>
          <div className="col-md">
            <label>
              {" "}
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
            <BtnBuscar name="Buscar" />
          </div>
        </div>
      </form>
    </div>
  );
}

const styles = {
  contentFormBuscar: {
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "15px",
  },

  formBuscar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
};