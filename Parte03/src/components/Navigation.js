import React from "react";

import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav style={styles.navegation}>
      <div style={styles.navLeftAndRight}>
        <div
          style={styles.navItem}
          onMouseOver={mouseOverLink}
          onMouseLeave={mouseLeaveLink}
        >
          <Link style={styles.navLink} to="/">
            <b>Travel Perú</b>
          </Link>
        </div>
        <div
          style={styles.navItem}
          onMouseOver={mouseOverLink}
          onMouseLeave={mouseLeaveLink}
        >
          <Link style={styles.navLink} to="/Paquetes">
            Paquetes
          </Link>
        </div>
        <div
          style={styles.navItem}
          onMouseOver={mouseOverLink}
          onMouseLeave={mouseLeaveLink}
        >
          <Link style={styles.navLink} to="/Personalizar">
            Personalizar
          </Link>
        </div>
        <div
          style={styles.navItem}
          onMouseOver={mouseOverLink}
          onMouseLeave={mouseLeaveLink}
        >
          <Link style={styles.navLink} to="/AdquirirPaquete">
            Adquirir Paquete
          </Link>
        </div>
      </div>
      <div style={styles.navLeftAndRight}>
        <div
          style={styles.navItem}
          onMouseOver={mouseOverLink}
          onMouseLeave={mouseLeaveLink}
        >
          <Link style={styles.navLink} to="/AuthUser">
            Iniciar sesión
          </Link>
        </div>
        <div
          style={styles.navItem}
          onMouseOver={mouseOverLink}
          onMouseLeave={mouseLeaveLink}
        >
          <Link style={styles.navLink} to="/MiPerfil">
            Mi Perfil
          </Link>
        </div>
        <div
          style={styles.navItem}
          onMouseOver={mouseOverLink}
          onMouseLeave={mouseLeaveLink}
        >
          <Link style={styles.navLink} to="/Dashboard">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}

function mouseOverLink(e) {
  e.currentTarget.style.borderBottom = "2px solid white";
}

function mouseLeaveLink(e) {
  e.currentTarget.style.borderBottom = "2px solid #480ca8";
}

const styles = {
  navegation: {
    position: "fixed",
    padding: "13px",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "space-between",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    backgroundColor: "#480ca8",
  },
  navLeftAndRight: {
    display: "flex",
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "space-around",
  },
  navItem: {
    borderBottom: "2px solid #480ca8",
  },
  navLink: {
    color: "white",
    padding: "15px",
    marginTop: "15px",
    textDecoration: "none",
  },
};