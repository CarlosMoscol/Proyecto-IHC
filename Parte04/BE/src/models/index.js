//importing modules
const {Sequelize, DataTypes} = require('sequelize')
const {db} = require('../config');


//Database connection with dialect of postgres specifying the database we are using
//port for my database is 5433
//database name is discover

const sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: 'postgres'
  });

//checking if connection is done
    sequelize.authenticate().then(() => {
        console.log(`Database connected to discover`)
    }).catch((err) => {
        console.log(err)
    })

    const datb = {}
    datb.Sequelize = Sequelize
    datb.sequelize = sequelize

//connecting to model
datb.clients = require('./clientModel') (sequelize, DataTypes)

//exporting the module
module.exports = datb