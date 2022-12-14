import React from "react";
import Title from "../components/Title";
import Btn from "../components/Btn";
import FormAddDate from "../components/personalizar/FormAddDate";
import SelectRegion from "../components/personalizar/SelectRegion";
import SelectDestino from "../components/personalizar/SelectDestinos";
import SelectAlojamiento from "../components/personalizar/SelectAlojamiento";
import SelectTransporte from "../components/personalizar/selectTransporte";

export default function Personalizar() {
  return (
    <div style={{ padding: "10px" }}>
      <section>
        <Title title="Fecha del viaje" />
        <FormAddDate />
      </section>
      <section>
        <Title title="Selecciona Region" />
        <SelectRegion />
      </section>
      <section>
        <Title title="Selecciona lugar turistico" />
        <SelectDestino />
      </section>
      <section>
        <Title title="Selecciona Alojamineto" />
        <SelectAlojamiento />
      </section>
      <section>
        <Title title="Selecciona Transporte" />
        <SelectTransporte />
      </section>

      <div className="m-3 p-5" style={styles.detailCreation}>
        "El monto total es: $450"
        <div
          className="row p-2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Btn name="Crear" />
        </div>
      </div>
    </div>
  );
}

const styles = {
  detailCreation: {
    color: "white",
    backgroundColor: "rgb(144, 66, 163)",
  },
};