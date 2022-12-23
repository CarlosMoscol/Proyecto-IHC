const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'inkaTravel',
  password: '*****',
  port: 5432,
});
/*
const getclients = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM clients ORDER BY idclient ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
}
*/
const createclient = (body) => {
    return new Promise(function(resolve, reject) {
      const { name, email, password } = body
      pool.query('INSERT INTO clients (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, password], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new client has been added added: ${results.rows[0]}`)
      })
    })
}
/*
const deleteclient = () => {
    return new Promise(function(resolve, reject) {
      const idclient = parseInt(request.params.idclient)
      pool.query('DELETE FROM clients WHERE id = $1', [idclient], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`client deleted with ID: ${idclient}`)
      })
    })
  }
*/
  module.exports = {
    //getclients,
    createclient,
    //deleteclient,
  }
  