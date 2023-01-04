import React from "react";
import Title from "../Title";
import { useEffect, useState } from 'react'
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import AuthService from "../../services/auth.service";


export default function AdministrarEstado() {


  const client = AuthService.getCurrentUser();
  const idclient = client.idclient;

  const [affiliates, SetAfil] = useState({
    idaffiliate: '',
    idclient: '',
    ruc: '',
  })

  const loadIdAfiliate = async () => {
    const res = await fetch(`http://localhost:4000/Registro/afil/${idclient}`)
    const dataAfil = await res.json();
    console.log(dataAfil)
    SetAfil(dataAfil)
  }

  const idafiliado = affiliates.idaffiliate

  const [transports, setTransports] = useState([])

  const loadTransport = async () => {
    try {
      const res = await fetch(`http://localhost:4000/transporte`, {
        method: "GET",
      });
      const dataT_2 = await res.json();
      console.log(dataT_2)
      setTransports(dataT_2)
      localStorage.setItem("transporte", JSON.stringify(dataT_2));
    } catch (error) {
      console.error(error);
    }
  }

  const handleDelete1 = async (idtransport) => {
    try {
      await fetch(`http://localhost:4000/transporte/${idtransport}`, {
        method: "DELETE",
      });
      setTransports(transports.filter((transport) => transport.idtransport !== idtransport));
    } catch (error) {
      console.error(error);
    }
  };

  const [accommodations, setAccommodations] = useState([])

  const loadAccommodations = async () => {
    try {
      const res = await fetch(`http://localhost:4000/Alojamiento/`, {
        method: "GET",
      });
      const dataA_2 = await res.json();
      console.log(dataA_2)
      setAccommodations(dataA_2)
      localStorage.setItem("transporte", JSON.stringify(dataA_2));
    } catch (error2) {
      console.error(error2);
    }
  }

  const handleDelete2 = async (idaccommodation) => {
    try {
      await fetch(`http://localhost:4000/Alojamiento/${idaccommodation}`, {
        method: "DELETE",
      });
      setAccommodations(accommodations.filter((accommodation) => accommodation.idaccommodation !== idaccommodation));
    } catch (error) {
      console.error(error);
    }
  };

  function loadersAll() {
    loadIdAfiliate()
    loadTransport()
    loadAccommodations()
  }

  useEffect(() => {
    loadersAll()

  }, [])

  return (
    <>
      <div className="container mt-5 mb-5">
        <Title title="Mis Alojamientos" />
        <div>
          {
            accommodations.map((accommodation) => (
              <Card
                style={{
                  marginBottom: ".7rem",
                }}
                sx={{
                  display: 'flex',
                }}
                key={accommodation.idaccommodation}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 5 }}
                  image={accommodation.urlimageaccommodation}
                  alt="Imagen Alojamiento" />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CardContent>
                    <Typography variant="h5">
                      Nombre del alojamiento: {accommodation.nameaccommodation} - Precio: s/.{accommodation.price}
                    </Typography>
                    <Typography variant="h6">
                      Capacidad de personas por habitación: {accommodation.capacity}
                    </Typography>
                    <p></p>
                    <Typography variant="h6">
                      Descripción:
                    </Typography>
                    <Typography variant="body2">
                      {accommodation.description}
                    </Typography>
                    <p></p>
                    <Typography variant="h6">
                      Ubicación del alojamiento: {accommodation.ubication}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Button
                      variant="contained"
                      size="large"
                      color="secondary"
                      onClick={() => handleDelete2(accommodation.idaccommodation)}
                    >
                      Borrar
                    </Button>
                  </CardContent>

                </Box>
              </Card>
            ))
          }
        </div>
        <div></div>
        <Title title="Mis transportes" />
        <div>
          {
            transports.map((transport) => (
              <Card
                style={{
                  marginBottom: ".7rem",
                }}
                sx={{
                  display: 'flex',
                }}
                key={transport.idtransport}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 5 }}
                  image={transport.urlimagetransport}
                  alt="Imagen Transporte" />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CardContent>
                    <Typography variant="h5">
                      Nombre: {transport.nametransport} - Precio: s/.{transport.price}
                    </Typography>
                    <Typography variant="h6">
                      Número de asientos: {transport.numseats}
                    </Typography>
                    <p></p>
                    <Typography variant="h6">
                      Descripción:
                    </Typography>
                    <Typography variant="body2">
                      {transport.description}
                    </Typography>
                    <p></p>
                    <Typography variant="h6">
                      Lugar de partida: {transport.placedeparture} - Lugar de llegada: {transport.placearrival}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Button
                      variant="contained"
                      size="large"
                      color="secondary"
                      onClick={() => handleDelete1(transport.idtransport)}
                    >
                      Borrar
                    </Button>
                  </CardContent>

                </Box>
              </Card>
            ))
          }
        </div>
      </div>
      </>
  );
}