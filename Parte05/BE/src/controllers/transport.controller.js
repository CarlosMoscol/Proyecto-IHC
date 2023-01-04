const pool = require('../db');

const getAllTransporte = async (req, res, next) => {
    try {

        const allRegistro = await pool.query('SELECT * FROM transports')
        res.json(allRegistro.rows)
    } catch (error) {
        next(error)
    }
};

const getOneTransport = async (req, res, next) => {
    try {
        const { idtransport } = req.params
        const result = await pool.query('SELECT * FROM transports WHERE idtransport = $1', [idtransport])
        res.json(result.rows);

    } catch (error) {
        next(error)
    }
};

const getTransporte = async (req, res, next) => {
    try {
        const { idaffiliate } = req.params
        const result = await pool.query('SELECT * FROM transports WHERE idaffiliate = $1', [idaffiliate])
        res.json(result.rows);

    } catch (error) {
        next(error)
    }
};

const createTransporte = async (req, res, next) => {
    const { nametransport, price, placedeparture, placearrival, numSeats, urlimagetransport, description, idclient } = req.body
    try {
        const result = await pool.query("INSERT INTO transports (nametransport, price, placedeparture, placearrival, numSeats, urlimagetransport, description, idaffiliate) SELECT $1, $2, $3, $4, $5, $6, $7, idaffiliate FROM affiliates WHERE idclient=$8 RETURNING *", [
            nametransport,
            price,
            placedeparture,
            placearrival,
            numSeats,
            urlimagetransport,
            description,
            idclient
        ]);
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
};

const deleteTransporte = async (req, res, next) => {
    try {
        const { idtransport } = req.params

        console.log(idtransport)

        const result = await pool.query('DELETE FROM transports WHERE idtransport = $1 RETURNING *', [idtransport])

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'Tarea no encontrada'
            })

        return res.sendStatus(204);
    } catch (error) {
        next(error)
    }
};

const updateTransporte = async (req, res, next) => {

    try {
        const { idtransport } = req.params;
        const { nametransport, price, placedeparture, placearrival, numSeats, urlimagetransport, description } = req.body;

        const result = await pool.query(
            'UPDATE transports SET name = $1, email =$2, password=$3 WHERE idtransport= $4 RETURNING *', [
            nametransport,
            price,
            placedeparture,
            placearrival,
            numSeats,
            urlimagetransport,
            description,
            idtransport
        ]
        );

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Registro not found",
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
};

module.exports = {
    getAllTransporte,
    getTransporte,
    createTransporte,
    deleteTransporte,
    updateTransporte,
    getOneTransport,
}