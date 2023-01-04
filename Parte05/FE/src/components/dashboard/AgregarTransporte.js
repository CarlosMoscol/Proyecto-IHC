import React from "react";
import Title from "../Title";
import {
  useState,
} from 'react';
import AuthService from "../../services/auth.service";

import { CircularProgress } from '@material-ui/core';


export default function AgregarTransporte() {
  const client = AuthService.getCurrentUser();

  function limpiarFormulario() {
    document.getElementById("miForm").reset();
  }

  const [transport, setTransport] = useState({

    nametransport: "",
    price: "",
    placedeparture: "",
    placearrival: "",
    numSeats: "",
    urlimagetransport: "",
    description: "",
    idclient: client.idclient
  })

  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setloading(true)

    try {
      const res = await fetch('http://localhost:4000/Transporte', {
        method: 'POST',
        body: JSON.stringify(transport),
        headers: { "Content-Type": "application/json" }
      })
      const dataT = await res.json();
      console.log(dataT.nametransport)

      setloading(false)
      limpiarFormulario()

    } catch (error) {
      setloading(false)
    }

    //navigate('/login')
  }

  const handleChange = e => {
    setTransport({ ...transport, [e.target.name]: e.target.value });
  }

  return (
    <div className="container p-5">
      <Title title="Agregar Servicio" />
      <h3>Paso 1: Agregar transporte</h3>
      <ul></ul>
      <h4>Datos del transporte</h4>
      <form
        id="miForm"
        style={{
          backgroundColor: "white",
          padding: "25px",
          marginLeft: "100px",
          marginRight: "200px"
        }}
        onSubmit={handleSubmit}
      >
        <div class="mb-3">
          <label className="form-label ml-5 mr-5">
            Nombre del Transporte
          </label>
          <input
            type="text"
            className="form-control"
            name="nametransport"
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div class="mb-3 m-1">
            <label for="exampleInputEmail1" className="form-label">
              Precio:
            </label>
            <input
              type="number"
              name="price"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div class="mb-3 m-1">
            <label for="exampleInputEmail1" className="form-label">
              Número de asientos:
            </label>
            <input
              type="number"
              name="numSeats"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Descripción
          </label>
          <textarea
            type="text"
            className="form-control"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div class="mb-3 m-1">
            <label className="form-label">
              Lugar de Partida:
            </label>
            <input
              type="text"
              className="form-control"
              name="placedeparture"
              onChange={handleChange}
            />
          </div>
          <div class="mb-3 m-1">
            <label className="form-label">
              Lugar de destino:
            </label>
            <input
              type="text"
              className="form-control"
              name="placearrival"
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="mb-3 m-1">
          <label className="form-label">
            Imagen del transporte: (URL)
          </label>
          <input
            type="text"
            className="form-control"
            name="urlimagetransport"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={!transport.nametransport || !transport.price || !transport.placedeparture}>
          {loading ? (<CircularProgress color="inherit" size={24} />
          ) : (
            'Registrar Trasnporte'
          )}
        </button>
      </form>
    </div>
  );
}