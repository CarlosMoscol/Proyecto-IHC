import React from "react";
import { useNavigate } from 'react-router-dom';
import {
  useState,
} from 'react';
import AuthService from "../services/auth.service";

import { CircularProgress } from '@material-ui/core';
import { withRouter } from '../common/with-router';

function FormLogin() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  })



  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setloading(true)
    try {
      const res = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify(login),
        headers: { "Content-Type": "application/json" }
      })
      const data = await res.json();
      console.log(data)
      localStorage.setItem("client", JSON.stringify(data));
      console.log(localStorage.getItem('client'))
      setloading(false)
      const API_URL = "/Miperfil/";
      const client = AuthService.getCurrentUser();
      
      console.log(`http://localhost:4000/Registro/afil/${client.idclient}`)
      const result = await fetch(`http://localhost:4000/Registro/afil/${client.idclient}`, {
        method: 'GET',
      })
      const dataAfil = await result.json();
      console.log(dataAfil.idaffiliate)
      localStorage.setItem("afiliado", dataAfil.idaffiliate);

      if (client.type === "turista") {
        navigate(API_URL + JSON.stringify(client.idclient))
      } else {
        navigate("/Dashboard/" + JSON.stringify(client.idclient))
      }
      window.location.reload()

    } catch (error) {
      window.location.reload()
    }
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

export default withRouter(FormLogin);