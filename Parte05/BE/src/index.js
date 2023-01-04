const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const db = require('./models')
const bodyParser = require("body-parser");



const PORT = process.env.PORT || 4000

const taskRoutes = require('./routes/registro.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(bodyParser.json());

//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: false }).then(() => {
    console.log("db has been re sync")
})

app.use(taskRoutes)

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})


app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))