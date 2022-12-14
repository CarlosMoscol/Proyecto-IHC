import React, { useState } from "react";
import MisDatos from "../components/perfilTurista/MisDatos";
import MisViajes from "../components/perfilTurista/MisViajes";

function SelecOption(props) {
  const { option } = props;

  switch (option) {
    case "MiDatos":
      return <MisDatos />;

    case "MisViajes":
      return <MisViajes />;
    default:
      return <MisDatos />;
  }
}

export default function Dashboard() {
  const [option, setoption] = useState("MisDatos");

  return (
    <>
      <div className="container m-0 p-0">
        <div className="row m-0">
          <div className="col-3 m-0" style={styles.navOptionLeft}>
            <ul style={{ listStyle: "none" }}>
              <li
                onMouseOver={over}
                onMouseLeave={leave}
                onClick={() => setoption("MisDatos")}
                style={styles.itemList}
              >
                <div>
                  <i className="material-icons">person</i>
                </div>
                <div>Yo</div>
              </li>
              <li
                onMouseOver={over}
                onMouseLeave={leave}
                onClick={() => setoption("MisViajes")}
                style={styles.itemList}
              >
                MisViajes
              </li>
            </ul>
          </div>
          <div className="col-9 m-0" style={styles.detailOption}>
            {" "}
            <SelecOption option={option} />
          </div>
        </div>
      </div>
    </>
  );
}

function over(e) {
  e.currentTarget.style.borderBottom = "2px solid rgb(146, 79, 160)";
  e.currentTarget.style.cursor = "pointer";
}

function leave(e) {
  e.currentTarget.style.borderBottom = "2px solid white";
}

const styles = {
  navOptionLeft: {
    boxShadow:
      " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    top: 0,
    bottom: 0,
  },
  detailOption: {},
  itemList: {
    padding: "7px",
    margin: "7px",
    borderBottom: "2px solid white",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
};