import React from "react";
import FormLogin from "../components/FormLogin";

export default function IniciarSesion() {
  return (
    <>
      <div style={styles.containFormIniciSe}>
        <FormLogin />
      </div>
    </>
  );
}
const styles = {
  containFormIniciSe: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 0",
  },
};