const pool = require('../db');

const getAllRegistro = async (req, res, next) => {
    try {

        const allRegistro = await pool.query('SELECT * FROM clients')
        res.json(allRegistro.rows)
    } catch (error) {
        next(error)
    }
};

const getRegistro = async (req, res, next) => {
    try {
        const { idclient } = req.params

        const result = await pool.query('SELECT * FROM clients WHERE idclient = $1', [idclient])

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

const createRegistro = async (req, res, next) => {
    const { name, email, password, type } = req.body

    try {
        const result = await pool.query('INSERT INTO clients (name, email, password, type) VALUES ($1, $2, $3, $4) RETURNING *', [
            name,
            email,
            password,
            type,
        ]);

        const result2 = await pool.query("INSERT INTO tourists (idclient) SELECT idclient FROM clients WHERE type='turista' AND idclient NOT IN (SELECT idclient FROM tourists)");

        const result3 = await pool.query("INSERT INTO affiliates (idclient) SELECT idclient FROM clients WHERE type='afiliado' AND idclient NOT IN (SELECT idclient FROM affiliates)")

        res.json(result.rows[0]);

    } catch (error) {
        next(error)
    }
};

const deleteRegistro = async (req, res, next) => {
    try {
        const { idclient } = req.params

        console.log(idclient)

        const result = await pool.query('DELETE FROM clients WHERE idclient = $1 RETURNING *', [idclient])

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'Tarea no encontrada'
            })

        return res.sendStatus(204);
    } catch (error) {
        next(error)
    }
};

const updateRegistro = async (req, res, next) => {

    try {
        const { idclient } = req.params;
        const { name, email, password } = req.body;

        const result = await pool.query(
            'UPDATE clients SET name = $1, email =$2, password=$3 WHERE idclient= $4 RETURNING *',
            [name, email, password, idclient]
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
    getAllRegistro,
    getRegistro,
    createRegistro,
    deleteRegistro,
    updateRegistro
}