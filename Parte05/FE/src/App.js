import React, { Component } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Paquetes from "./screens/Paquetes";
import Personalizar from "./screens/Personalizar";
import AuthUser from "./screens/AuthUser";
import Login from "./screens/Login";
import MiPerfil from "./screens/MiPerfil";
import Dashboard from "./screens/Dashboard";
import AdquirirPaquete from "./screens/AdquirirPaquete";

import AgregarTransporte from "./components/dashboard/AgregarTransporte";
import QuitarServicio from "./components/dashboard/QuitarServicio";

import Footer from "./components/Footer";
import RegistrarmeaAfiliado from "./screens/RegistrarmeaAfiliado";
import Registrarme from "./screens/Registrarme";
import { Link } from "react-router-dom";

import AuthService from "./services/auth.service";
import EventBus from "./common/EventBus";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAfilBoard: false,
      showTuristBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const client = AuthService.getCurrentUser();

    if (client) {
      this.setState({
        currentUser: client,
        showAfilBoard: client.type.includes("afiliado"),
        showTuristBoard: client.type.includes("turista"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showAfilBoard: false,
      showTuristBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showAfilBoard, showTuristBoard } = this.state;
    function idclient() {
      let result;
      const client = AuthService.getCurrentUser();
      if (client == null) {
        result = "client";
      }
      else {
        result = JSON.stringify(client.idclient);
      }
      return result;
    }
    return (
      <>
        <nav style={styles.navegation}>
          <div style={styles.navLeftAndRight}>
            <div style={styles.navItem}
              onMouseOver={mouseOverLink}
              onMouseLeave={mouseLeaveLink}>
              <Link style={styles.navLink} to={"/"} >
                InkaTravel
              </Link>
            </div>
            <div style={styles.navItem}
              onMouseOver={mouseOverLink}
              onMouseLeave={mouseLeaveLink}>
              {showAfilBoard && (
                <li className="nav-item">
                  <Link style={styles.navLink} to={"/Dashboard/"+ idclient()}>
                    Dashboard
                  </Link>
                </li>
              )}
            </div>
            <div style={styles.navItem}
              onMouseOver={mouseOverLink}
              onMouseLeave={mouseLeaveLink}>
              {showTuristBoard && (
                <div>
                  <li>
                    <Link style={styles.navLink} to={"/"}>
                      Home
                    </Link>
                  </li>
                </div>
              )}
            </div>
            <div style={styles.navItem}
              onMouseOver={mouseOverLink}
              onMouseLeave={mouseLeaveLink}>
              {showTuristBoard && (
                <div>
                  <li>
                    <Link style={styles.navLink} to={"/Paquetes"}>
                      Paquetes
                    </Link>
                  </li>
                </div>
              )}
            </div>
            {currentUser ? (
              <><div>
              </div></>
            ) : (
              <>
                <div style={styles.navItem} onMouseOver={mouseOverLink} onMouseLeave={mouseLeaveLink}>
                  <li>
                    <Link style={styles.navLink} to={"/"}>
                      Home
                    </Link>
                  </li>
                </div>
                <div style={styles.navItem} onMouseOver={mouseOverLink} onMouseLeave={mouseLeaveLink}>
                  <li>
                    <Link style={styles.navLink} to={"/Paquetes"}>
                      Paquetes
                    </Link>
                  </li>
                </div>
              </>
            )}

          </div>
          <div style={styles.navLeftAndRight}>
            {currentUser && (
              <div style={styles.navItem}
                onMouseOver={mouseOverLink}
                onMouseLeave={mouseLeaveLink}>
                <li>
                  <Link style={styles.navLink} to={"/Miperfil/" + idclient()}>
                    {currentUser.name}
                  </Link>
                </li>
              </div>
            )}

            {currentUser ? (
              <div style={styles.navItem}
                onMouseOver={mouseOverLink}
                onMouseLeave={mouseLeaveLink}>
                <li>
                  <Link style={styles.navLink} to={"/login"} onClick={this.logOut}>
                    Cerrar Sesión
                  </Link>
                </li>
              </div>
            ) : (
              <div style={styles.navItem}
                onMouseOver={mouseOverLink}
                onMouseLeave={mouseLeaveLink}>
                <li>
                  <Link style={styles.navLink} to={"/login"}>
                    Iniciar Sesión
                  </Link>
                </li>
              </div>
            )}
          </div>
        </nav>

        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Paquetes" element={<Paquetes />} />
            <Route path="/Personalizar" element={<Personalizar />} />
            <Route path="/AuthUser" element={<AuthUser />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registrarme />} />
            <Route path="/registro_afiliado" element={<RegistrarmeaAfiliado />} />
            <Route path={"/Miperfil/" + idclient()} element={<MiPerfil />} />
            <Route path={"/Dashboard/" + idclient()} element={<Dashboard />} />
            <Route path={"/Dashboard/" + idclient()+"/AgregarTransporte/"} element={<AgregarTransporte />} />
            <Route path={"/Dashboard/" + idclient()+"/QuitarServicio/"} element={<QuitarServicio />} />
            <Route path="/AdquirirPaquete" element={<AdquirirPaquete />} />
          </Routes>
        </main>
        <Footer />
      </>
    );
  }
}


function mouseOverLink(e) {
  e.currentTarget.style.borderBottom = "2px solid white";
}

function mouseLeaveLink(e) {
  e.currentTarget.style.borderBottom = "2px solid #091F31";
}

const styles = {
  main: {
    padding: "50px 0 0 0",
    zIndex: "-1",
  },
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
    backgroundColor: "#091F31",
  },
  navLeftAndRight: {
    display: "flex",
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "space-around",
  },
  navItem: {
    borderBottom: "2px solid #091F31",
  },
  navLink: {
    color: "white",
    padding: "15px",
    marginTop: "15px",
    textDecoration: "none",
  },
};