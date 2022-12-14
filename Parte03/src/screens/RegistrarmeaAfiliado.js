import React from "react";
import Title from "../components/Title";

export default function RegistrarmeaAfiliado() {
  return (
    <div>
      <form
        style={{
          backgroundColor: "white",
          padding: "25px",
          margin: "10px",
          borderRadius: "15px",
        }}
      >
        <h4>Travel Perú</h4>
        <Title title="Email y password" />
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

        <Title title="Empresa o Independiente" />

        <Title title="Datos Personales" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div class="mb-3 p-2">
            <label for="exampleInputEmail1" className="form-label">
              Nombre(s)
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 p-2">
            <label for="exampleInputEmail1" className="form-label">
              Apellidos(s)
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 p-2">
            <label>Fecha de Nacimiento</label>
            <input class="form-control" type="date" />
          </div>

          <div class="mb-3 p-2">
            <label for="exampleInputEmail1" className="form-label">
              Telefono
            </label>
            <input
              type="Number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <Title title="Dirección" />
        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Departamento
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div>
          <label for="exampleInputEmail1" className="form-label">
            Provincia
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div>
          {" "}
          <label for="exampleInputEmail1" className="form-label">
            Distrito
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <label for="exampleInputEmail1" className="form-label">
          Código postal
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
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
        <Title title="Medio de pago" />
        <div>
          <b>
            NOTA: Ingrese de forma correcta los datos de su medio de pago, el
            cual se utilizara para realizar los depositos de las ganancias que
            reciba de su servicio.
          </b>
        </div>
        <h4>
          Tarjeta visa{" "}
          <i className="fab fa-cc-visa" style={{ fontSize: "35px" }}></i>
        </h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className="m-2">
            <label for="exampleInputEmail1" className="form-label">
              Numero de tarjeta
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="m-2">
            <label for="exampleInputEmail1" className="form-label">
              Fecha de vencimiento
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="m-2">
            <label for="exampleInputEmail1" className="form-label">
              CBC
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <h4>
          Paypal <i class="fab fa-cc-paypal" style={{ fontSize: "35px" }}></i>
        </h4>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Enviar al E-mail las transacciones.
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Registrarse
        </button>
      </form>
    </div>
  );
}