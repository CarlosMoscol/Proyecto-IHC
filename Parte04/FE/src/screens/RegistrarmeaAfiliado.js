import React from "react";
import Title from "../components/Title";
import { useNavigate } from 'react-router-dom';

import cuscoFondo from "../source/image/cuscoFondo.jpg";

import {
  useState,
} from 'react';

import { CircularProgress } from '@material-ui/core';

export default function RegistrarmeaAfiliado() {
  const navigate = useNavigate();

  function loginPage() {
    navigate('/login');
  }

  const [client, setClient] = useState({
    name: '',
    email: '',
    password: '',
    type: 'afiliado',
    ruc: '',
  })

  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setloading(true)

    const res = await fetch('http://localhost:4000/Registro/afil', {
      method: 'POST',
      body: JSON.stringify(client),
      headers: { "Content-Type": "application/json" }
    })
    const data = await res.json();
    console.log(data)

    setloading(false)

    navigate('/login')
  }

  const handleChange = e => {
    setClient({ ...client, [e.target.name]: e.target.value });
  }


  return (
    <div style={styles.containerAuth}>
      <div style={styles.otherOption}>
        <div>
          <form
            style={{
              backgroundColor: "white",
              padding: "25px",
              margin: "10px",
              borderRadius: "15px",
            }}
            onSubmit={handleSubmit}
          >
            <h4>InkaTravel</h4>
            <Title title="Email y password" />
            <div style={{
              width: "500px",
              justifyContent: "space-around",
              alignItems: "center",
              }} class="mb-3">
              <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </div>

            <Title title="Datos Personales" />
            <div
              style={{
                width: "500px",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div class="mb-3 p-2">
                <label for="exampleInputEmail1" className="form-label">
                  Nombre(s) Apellidos(s)
                </label>
                <input
                  type="name"
                  name="name"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
    
              <div class="mb-3 p-2">
                <label for="exampleInputEmail1" className="form-label">
                  RUC
                </label>
                <input
                  type="text"
                  name="ruc"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>

            
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Acepto las politcas de privacidad, asi como los{" "}
                <a href="#1">terminos y condiciones</a> de InkaTravel
              </label>
            </div>
            
            <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <button type="submit" className="btn btn-primary w-100" disabled={!client.name || !client.email || !client.password}>
                {loading ? (<CircularProgress color="inherit" size={24} />
                ) : (
                  'Registrarse'
                )}
              </button>
            </div>
            <div
              onClick={loginPage}
              onMouseLeave={leave}
              onMouseOver={over}
              style={styles.itemOOp}
              align= "center"
            >
              Ya tengo cuenta
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function over(e) {
  e.target.style.backgroundColor = " rgb(29, 107, 143)";
  e.target.style.cursor = "pointer";
}

function leave(e) {
  e.target.style.backgroundColor = "rgb(29, 89, 143)";
}

const styles = {

  containerAuth: {
    backgroundImage: `url(${cuscoFondo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  otherOption: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  itemOOp: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgb(29, 89, 143)",
    color: "white",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
    alignItems: "center",
  },
};