const pool = require('../db');

const getAllAlojamiento = async (req, res, next) => {
    try {

        const allRegistro = await pool.query('SELECT * FROM accommodations')
        res.json(allRegistro.rows)
    } catch (error) {
        next(error)
    }
};

const getAlojamiento = async (req, res, next) => {
    try {
        const { idaccommodation } = req.params

        const result = await pool.query('SELECT * FROM accommodations WHERE idaffiliate = $1', [idaccommodation])

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'Tarea no encontrada'
            })

        res.json(result.rows[0]);

        return result

    } catch (error) {
        next(error)
    }
};

const createAlojamiento = async (req, res, next) => {
    const { nameaccommodation, price, ubication, capacity, urlimageaccommodation, description, idclient } = req.body
    try {
        const result = await pool.query("INSERT INTO accommodations (nameaccommodation, price, ubication, capacity, urlimageaccommodation, description, idaffiliate) SELECT $1, $2, $3, $4, $5, $6, idaffiliate FROM affiliates WHERE idclient=$7 RETURNING *", [
            nameaccommodation,
            price,
            ubication,
            capacity,
            urlimageaccommodation,
            description,
            idclient
        ]);
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
};

const deleteAlojamiento = async (req, res, next) => {
    try {
        const { idaccommodation } = req.params

        console.log(idaccommodation)

        const result = await pool.query('DELETE FROM accommodations WHERE idaccommodation = $1 RETURNING *', [idaccommodation])

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'Tarea no encontrada'
            })

        return res.sendStatus(204);
    } catch (error) {
        next(error)
    }
};

const updateAlojamiento = async (req, res, next) => {

    try {
        const { idaccommodation } = req.params;
        const { nameaccommodation, price, ubication, capacity, urlimageaccommodation, description } = req.body;

        const result = await pool.query(
            'UPDATE accommodations SET name = $1, email =$2, password=$3 WHERE idaccommodation= $4 RETURNING *',
            [nameaccommodation, price, ubication, capacity, urlimageaccommodation, description, idaccommodation]
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
    getAllAlojamiento,
    getAlojamiento,
    createAlojamiento,
    deleteAlojamiento,
    updateAlojamiento
}