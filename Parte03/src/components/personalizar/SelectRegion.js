import React from "react";

import costa from "../../source/image/costa.jpeg";
import sierra from "../../source/image/sierra.jpeg";
import selva from "../../source/image/selva.jpg";
import Btn from "../Btn";

export default function SelectRegion() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col" style={styles.contentRegion}>
          <div className="cart" style={styles.region}>
            <img src={costa} alt="costa" style={styles.imgRegion} />
            <div style={styles.imgTitle}>Costa</div>
          </div>
        </div>
        <div className="col" style={styles.contentRegion}>
          <div className="cart" style={styles.region}>
            <img src={sierra} alt="sierra" style={styles.imgRegion} />
            <div style={styles.imgTitle}>Sierra</div>
          </div>
        </div>
        <div className="col" style={styles.contentRegion}>
          <div className="cart" style={styles.region}>
            <img src={selva} alt="selva" style={styles.imgRegion} />
            <div style={styles.imgTitle}>Selva</div>
          </div>
        </div>
      </div>
      <div
        className="row p-2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Btn name="Agregar" />
      </div>
    </div>
  );
}

const styles = {
  contentRegion: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  region: {
    with: "100px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    backgroundColor: "white",
    borderRadius: "15px",
    width: "200px",
  },
  imgRegion: {
    width: "100%",
    backgroundZise: "contain",
    borderRadius: "15px 15px 0 0",
  },
  imgTitle: {
    textAlign: "center",
  },
};