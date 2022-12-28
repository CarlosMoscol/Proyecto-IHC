//importing modules
const bcrypt = require("bcrypt");
const db = require("../Models");
const jwt = require("jsonwebtoken");

// Assigning clients to the variable Client
const Client = db.clients;

//signing a client up
//hashing clients password before its saved to the database with bcrypt
const signup = async (req, res) => {
 try {
   const { name, email, password, type } = req.body;
   const data = {
     name,
     email,
     password: await bcrypt.hash(password, 10),
     type: 'turista',
   };
   //saving the client
   const client = await Client.create(data);

   //if client details is captured
   //generate token with the client's id and the secretKey in the env file
   // set cookie with the token generated
   if (client) {
     let token = jwt.sign({ id: client.id }, process.env.secretKey, {
       expiresIn: 1 * 24 * 60 * 60 * 1000,
     });

     res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
     console.log("client", JSON.stringify(client, null, 2));
     console.log(token);
     //send clients details
     return res.status(201).send(client);
   } else {
     return res.status(409).send("Details are not correct");
   }
 } catch (error) {
   console.log(error);
 }
};


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
       return res.status(401).send("Authentication failed");
     }
   } else {
     return res.status(401).send("Authentication failed crashed");
   }
 } catch (error) {
   console.log(error);
 }
};

module.exports = {
 signup,
 login,
};