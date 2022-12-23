import React, { useState } from "react";

import MiPerfil from "../components/dashboard/MiPerfil";
import AgregarServicio from "../components/dashboard/AgregarServicio";
import AdministrarEstado from "../components/dashboard/AdministrarEstado";
import QuitarServicio from "../components/dashboard/QuitarServicio";
import AdministrarCliente from "../components/dashboard/AdministrarClientes";
import AdminstrarPromociones from "../components/dashboard/AdminstrarPromociones";

function SelecOption(props) {
  const { option } = props;

  switch (option) {
    case "MiPerfil":
      return <MiPerfil />;

    case "AgregarServicio":
      return <AgregarServicio />;
    case "AdministrarEstado":
      return <AdministrarEstado />;
    case "QuitarServicio":
      return <QuitarServicio />;
    case "AdministrarClientes":
      return <AdministrarCliente />;
    case "AdminstrarPromociones":
      return <AdminstrarPromociones />;
    default:
      return <MiPerfil />;
  }
}

export default function Dashboard() {
  const [option, setoption] = useState("MiPerfil");

  return (
    <>
      <div className="container m-0 p-0">
        <div className="row m-0">
          <div className="col-3 m-0" style={styles.navOptionLeft}>
            <ul style={{ listStyle: "none" }}>
              <li
                onMouseOver={over}
                onMouseLeave={leave}
                onClick={() => setoption("MiPerfil")}
                style={styles.itemList}
              >
                <div>
                  <i className="material-icons">person</i>
                </div>
                <div>Mi Perfil</div>
              </li>
              <li
                onMouseOver={over}
                onMouseLeave={leave}
                onClick={() => setoption("AgregarServicio")}
                style={styles.itemList}
              >
                Agregar servicio
              </li>
              <li
                onMouseOver={over}
                onMouseLeave={leave}
                onClick={() => setoption("AdministrarEstado")}
                style={styles.itemList}
              >
                Administrar estado
              </li>
              <li
                onMouseOver={over}
                onMouseLeave={leave}
                onClick={() => setoption("QuitarServicio")}
                style={styles.itemList}
              >
                Quitar servicio
              </li>
              <li
                onMouseOver={over}
                onMouseLeave={leave}
                onClick={() => setoption("AdministrarClientes")}
                style={styles.itemList}
              >
                Administrar clientes
              </li>
              <li
                onMouseOver={over}
                onMouseLeave={leave}
                onClick={() => setoption("AdminstrarPromociones")}
                style={styles.itemList}
              >
                Adminstrar promociones
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