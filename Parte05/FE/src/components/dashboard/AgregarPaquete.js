import React from "react";
import Title from "../Title";
import { useEffect, useState } from 'react'
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography, Paper, Item } from '@material-ui/core'
import { CircularProgress } from '@material-ui/core';
import AuthService from "../../services/auth.service";

export default function AdministrarEstado() {
    const client = AuthService.getCurrentUser();
    const idstr = localStorage.getItem('afiliado')

    const url1 = "http://localhost:4000/Alojamiento/afil/"
    const url2 = "http://localhost:4000/transporte/afil/"

    const [transports, setTransports] = useState([])
    const [accommodations, setAccommodations] = useState([])

    const [arrTransport, setArrTransport] = useState({
        description: '',
        idaffiliate: '',
        idtransport: '',
        nametransport: '',
        numseats: 0,
        placearrival: '',
        placedeparture: '',
        price: 0,
        urlimagetransport: '',
    })

    const [arrAccommodation, setArrAccommodation] = useState({
        capacity: '',
        description: '',
        idaccommodation: '',
        idaffiliate: '',
        nameaccommodation: '',
        price: 0,
        ubication: '',
        urlimageaccommodation: '',
    })


    const [travelPackage, setTravelPackage] = useState({
        arrayAccommodations: {},
        arrayTransports: {},
        ubication: '',
        price: 0,
        type: 'Turismo',
        idclient: client.idclient,
    })


    const loadTransport = async () => {
        const res = await fetch(url2 + idstr);
        const dataT_2 = await res.json();
        setTransports(dataT_2)
        localStorage.setItem("transporte", JSON.stringify(dataT_2));
    }



    const loadAccommodations = async () => {
        try {
            const res = await fetch(url1 + idstr);
            const dataA_2 = await res.json();
            setAccommodations(dataA_2)
            localStorage.setItem("alojamiento", JSON.stringify(dataA_2));
        } catch (error2) {
            console.error(error2);
        }
    }

    const handleGET2 = async (idtransport) => {
        console.log(`http://localhost:4000/transporte/${idtransport}`)
        try {
            const arr1 = await fetch(`http://localhost:4000/transporte/${idtransport}`, {
                method: "GET",
            });
            const data2 = await arr1.json();
            setArrTransport(data2);
            console.log(arrTransport);
            travelPackage.arrayTransports=data2;
        } catch (error) {
            console.error(error);
        }
    };

    const handleGET1 = async (idaccommodation) => {
        console.log(`http://localhost:4000/Alojamiento/${idaccommodation}`)
        try {
            const arr2 = await fetch(`http://localhost:4000/Alojamiento/${idaccommodation}`, {
                method: "GET",
            });
            const data3 = await arr2.json();
            setArrAccommodation(data3);
            console.log(arrAccommodation);
            travelPackage.arrayAccommodations=data3;

        } catch (error) {
            console.error(error);
        }
    };

    const [loading, setloading] = useState(false);

    const handleSubmit = async (e) => {
        console.log(travelPackage);
        try {
            e.preventDefault();

            setloading(true)

            const res3 = await fetch('http://localhost:4000/TravelPack', {
                method: 'POST',
                body: JSON.stringify(travelPackage),
                headers: { "Content-Type": "application/json" }
            })
            const data = await res3.json();
            console.log(data)
            setloading(false)
        } catch (error) {
            setloading(true)
            console.log(error)
        }

    }

    useEffect(() => {
        loadTransport()
        loadAccommodations()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="mt-5 mb-5">
                <Title title="Paso 1: Escoja uno o más alojamientos" />
                <div>
                    {
                        accommodations.map((accommodation) => (
                            <Card
                                style={{
                                    marginBottom: ".7rem",
                                }}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                                key={accommodation.idaccommodation}
                            >
                                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Grid item xs={3}>
                                            <CardContent>
                                                <Typography>
                                                    Nombre:
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <CardContent>
                                                <Typography>
                                                    Precio:
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <CardContent>
                                                <Typography>
                                                    Capacidad:
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <CardContent>
                                                <Typography>
                                                    Ubicación:
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <CardContent sx={{ borderRadius: 5, }}>
                                            <Typography>
                                                Presionar para añadir:
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Grid item xs={3}>
                                            <CardContent>
                                                <Typography>
                                                    {accommodation.nameaccommodation}
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <CardContent>
                                                <Typography>
                                                    s/.{accommodation.price}
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <CardContent>
                                                <Typography>
                                                    {accommodation.capacity}
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <CardContent>
                                                <Typography>
                                                    {accommodation.ubication}
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <CardContent>
                                            <Button
                                                variant="contained"
                                                size="large"
                                                color="primary"
                                                onClick={() => handleGET1(accommodation.idaccommodation)}
                                            >
                                                Añadir
                                            </Button>
                                        </CardContent>
                                    </Box>
                                </Box>
                            </Card>
                        ))
                    }
                </div>
                <div></div>
                <Title title="Paso 2: Escoja uno o más medios de transporte registrados" />
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
                                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Grid item xs={3}>
                                            <CardContent>
                                                <Typography>
                                                    Nombre:
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <CardContent>
                                                <Typography>
                                                    Precio:
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <CardContent>
                                                <Typography>
                                                    N° de asientos:
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <CardContent>
                                                <Typography>
                                                    Partida:
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <CardContent>
                                                <Typography>
                                                    Llegada:
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <CardContent sx={{ borderRadius: 5, }}>
                                            <Typography>
                                                Presionar para añadir:
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Grid item xs={3}>
                                            <CardContent>
                                                <Typography>
                                                    {transport.nametransport}
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <CardContent>
                                                <Typography>
                                                    s/.{transport.price}
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <CardContent>
                                                <Typography>
                                                    {transport.numseats}
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <CardContent>
                                                <Typography>
                                                    {transport.placedeparture}
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <CardContent>
                                                <Typography>
                                                    {transport.placearrival}
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <CardContent>
                                            <Button
                                                variant="contained"
                                                size="large"
                                                color="primary"
                                                onClick={() => handleGET2(transport.idtransport)}
                                            >
                                                Añadir
                                            </Button>
                                        </CardContent>
                                    </Box>
                                </Box>
                            </Card>
                        ))
                    }
                </div>
                <div></div>
                <Title title="Paso 3: Presione formar paquete para que se suba a la base de datos" />
                <div>
                    <form onSubmit={handleSubmit}>
                        <button type="submit" className="btn btn-primary w-100" >
                            {loading ? (<CircularProgress color="inherit" size={24} />
                            ) : (
                                'Formar Paquete'
                            )}
                        </button>
                    </form>
                </div>

            </div>
        </>
    );
}