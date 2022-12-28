import React from "react";
import { useNavigate } from 'react-router-dom';
import {
  useState,
  useEffect
} from 'react';

import { CircularProgress } from '@material-ui/core';

export default function FormLogin() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: '',
    password: '',
  })


  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setloading(true)

    const res = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify(login),
      headers: { "Content-Type": "application/json" }
    })
    const data = await res.json();
    console.log(data)
    localStorage.setItem("login", JSON.stringify(data));

    setloading(false)

    navigate('/MiPerfil')
  }

  const handleChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
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
      <h4>InkaTravel</h4>
      <div class="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          name="email"
          className="form-control"
          aria-describedby="emailHelp"
          onChange={handleChange}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={handleChange}
        />
      </div>
      <br></br>
      
      <button type="submit" className="btn btn-primary w-100" disabled={!login.email || !login.password}>
        {loading ? (<CircularProgress color="inherit" size={24} />
        ) : (
          'Ingresar'
        )}
      </button>
    </form>
  );
}