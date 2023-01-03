import React from "react";
import FormRegister from "../components/FormRegister";
import cuscoFondo from "../source/image/cuscoFondo.jpg";

export default function Registrarme() {
  return (
    <div style={styles.containerAuth}>
      <div style={styles.otherOption}>
        <div style={styles.containRegister}>
          <FormRegister />
        </div>
      </div>
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
  containerAuth: {
    backgroundImage: `url(${cuscoFondo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  
};