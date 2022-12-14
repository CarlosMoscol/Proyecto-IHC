import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Paquetes from "./screens/Paquetes";
import Personalizar from "./screens/Personalizar";
import Navigation from "./components/Navigation";
import AuthUser from "./screens/AuthUser";
import MiPerfil from "./screens/MiPerfil";
import Dashboard from "./screens/Dashboard";
import AdquirirPaquete from "./screens/AdquirirPaquete";

import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navigation />
      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Paquetes" element={<Paquetes />} />
          <Route path="/Personalizar" element={<Personalizar />} />
          <Route path="/AuthUser" element={<AuthUser />} />
          <Route path="/MiPerfil" element={<MiPerfil />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/AdquirirPaquete" element={<AdquirirPaquete />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  main: {
    padding: "50px 0 0 0",
    zIndex: "-1",
  },
};