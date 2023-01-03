import React from "react";
import Title from "../Title";
import { useNavigate } from 'react-router-dom';
import {
    useState,
} from 'react';
import AuthService from "../../services/auth.service";

import { CircularProgress } from '@material-ui/core';


export default function AgregarAlojamiento() {
    const client = AuthService.getCurrentUser();

    function limpiarFormulario() {
        document.getElementById("miForm2").reset();
    }

    const [transport, setTransport] = useState({

        nameaccommodation: "",
        price: "",
        ubication: "",
        capacity: "",
        urlimageaccommodation: "",
        description: "",
        idclient: client.idclient
    })

    const [loading, setloading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setloading(true)

        try {
            const res = await fetch('http://localhost:4000/Alojamiento', {
                method: 'POST',
                body: JSON.stringify(transport),
                headers: { "Content-Type": "application/json" }
            })
            const dataA = await res.json();
            console.log(dataA)

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
            <h3>Paso 2: Agregar Alojamiento</h3>
            <ul></ul>
            <h4>Datos del alojamiento</h4>
            <form
                id="miForm2"
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
                        Nombre del Alojamiento
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="nameaccommodation"
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
                            Capacidad:
                        </label>
                        <input
                            type="number"
                            name="capacity"
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
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <div class="mb-3 m-1">
                        <label className="form-label">
                            Ubicación del alojamiento (dirección exacta):
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="ubication"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div class="mb-3 m-1">
                    <label className="form-label">
                        Imagen del alojamiento: (URL)
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="urlimageaccommodation"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={!transport.nameaccommodation || !transport.price || !transport.ubication || !transport.capacity || !transport.urlimageaccommodation || !transport.description}>
                    {loading ? (<CircularProgress color="inherit" size={24} />
                    ) : (
                        'Registrar Alojamiento'
                    )}
                </button>
            </form>
        </div>
    );
}
