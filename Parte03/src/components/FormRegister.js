import React from "react";

export default function FormRegister() {
  return (
    <form
      style={{
        backgroundColor: "white",
        padding: "25px",
        margin: "10px",
        borderRadius: "15px",
      }}
    >
      <h4>Travel Perú</h4>
      <div style={styles.fastRes}>
        Registrarme con google <i class="fab fa-google"></i>
      </div>
      <div style={styles.fastRes}>
        Registrame con Facebook <i class="fab fa-facebook"></i>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Confirma la contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check"></div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
          Quiero recibir promociones de ofertas
        </label>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
          Acepto las politcas de privacidad, asi como los{" "}
          <a href="#1">terminos y condiciones</a> de Travel perú
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Registrame
      </button>
    </form>
  );
}

const styles = {
  fastRes: {
    textAlign: "center",
    padding: "5px",
    margin: "5px",
    border: "1px solid rgb(122, 72, 187)",
    borderRadius: "10px",
  },
};