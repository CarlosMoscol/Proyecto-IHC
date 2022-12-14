import React from "react";
import Buscar from "../components/Buscar";
import Title from "../components/Title";
import cuscoFondo from "../source/image/cuscoFondo.jpg";

export default function Home() {
  return (
    <>
      <section>
        <div style={styles.backG}>
          <div style={styles.contentBuscar}>
            <Buscar />
          </div>
        </div>
      </section>
      <section className="p-5">
        <Title title="Destinos Recomendados" />
      </section>
      <section className="p-5">
        <Title title="Promociones" />
      </section>
    </>
  );
}

const styles = {
  backG: {
    backgroundImage: `url(${cuscoFondo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
  contentBuscar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15% 0",
  },
};