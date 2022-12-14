import React from "react";

export default function FormLogin() {
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
      <div class="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
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
          Password
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
          Guardar Contraseña
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Ingresar
      </button>
    </form>
  );
}