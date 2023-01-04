const pool = require('../db');


const createTravelPack = async (req, res, next) => {
    const {
        arrayAccommodations, arrayTransports, ubication, price, type, idclient
    } = req.body
    try {
        const result = await pool.query("INSERT INTO travelPackages (arrayAccommodations, arrayTransports, ubication, price, type, idaffiliate) SELECT $1, $2, $3, $4, $5, idaffiliate FROM affiliates WHERE idclient=$6 RETURNING *", [
            arrayAccommodations,
            arrayTransports,
            ubication,
            price,
            type,
            idclient
        ]);
        res.json(result.rows);
    } catch (error) {
        next(error)
    }
};

module.exports = {
    createTravelPack
}