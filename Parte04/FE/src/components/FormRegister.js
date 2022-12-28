import React from "react";
import { useNavigate } from 'react-router-dom';
import {
  useState,
  useEffect
} from 'react';

import { CircularProgress } from '@material-ui/core';

export default function FormRegister() {
  const navigate = useNavigate();

  function loginPage() {
    navigate('/login');
  }

  const [client, setClient] = useState({
    name: '',
    email: '',
    password: '',
    type: 'turista',
  })

  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setloading(true)

    const res = await fetch('http://localhost:4000/Registro', {
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
    <form
      style={{
        backgroundColor: "white",
        padding: "25px",
        margin: "10px",
        borderRadius: "15px",
      }}
      onSubmit={handleSubmit}
    >
      <h4>InkaTravel te da la bienvenida</h4>
      <h6>¡Es un gusto en tenerte aqui!</h6>
      <h6>Cuentanos un poco sobre ti...</h6>
      <div class="mb-3">
        <label className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div class="mb-3">
        <label className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          aria-describedby="emailHelp"
          onChange={handleChange}
        />
      </div>

      <div class="mb-3">
        <label className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      
      <button type="submit" className="btn btn-primary w-100" disabled={!client.name || !client.email || !client.password}>
        {loading ? (<CircularProgress color="inherit" size={24} />
        ) : (
          'Registrarme'
        )}
      </button>
      <div
        onClick={loginPage}
        onMouseLeave={leave}
        onMouseOver={over}
        style={styles.itemOOp}
        align="center"
      >
        Ya tengo cuenta
      </div>
    </form>
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
  fastRes: {
    textAlign: "center",
    padding: "5px",
    margin: "5px",
    border: "1px solid rgb(122, 72, 187)",
    borderRadius: "10px",
  },

  itemOOp: {
    backgroundColor: "rgb(29, 89, 143)",
    color: "white",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
  },
};