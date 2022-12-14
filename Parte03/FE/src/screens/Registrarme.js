import React from "react";
import FormRegister from "../components/FormRegister";

export default function Registrarme() {
  return (
    <div style={styles.containRegister}>
      <FormRegister />
    </div>
  );
}
const styles = {
  containRegister: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 0",
  },
};