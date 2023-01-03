//importing modules
const jwt = require("jsonwebtoken");
const pool = require('../db');
const bcrypt = require("bcrypt");
const db = require("../Models");


const { TokenExpiredError } = jwt;

const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
  }

  return res.sendStatus(401).send({ message: "Unauthorized!" });
}



// Assigning clients to the variable Client
const Client = db.clients;

//login authentication

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //find a client by their email
    const client = await Client.findOne({
      where: {
        email: req.body.email,
      }
    });

    //if client email is found, compare password with bcrypt
    if (client) {
      const isSame = await bcrypt.compare(password, client.password);

      //if password is the same
      //generate token with the client's id and the secretKey in the env file

      if (isSame) {
        let token = jwt.sign({ id: client.id }, process.env.secretKey, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        //if password matches wit the one in the database
        //go ahead and generate a cookie for the client
        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log("client", JSON.stringify(client, null, 2));
        console.log(token);
        //send client data
        return res.status(201).send(client);
      } else {
        return res.status(401).send("Authentication failed expired");
      }
    } else {
      return res.status(401).send("Authentication failed crashed");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  //signup,
  login,
};