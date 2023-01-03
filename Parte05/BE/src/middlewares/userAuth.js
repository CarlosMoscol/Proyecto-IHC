//importing modules
const express = require("express");
const db = require("../Models");

//Assigning db.users to User variable
const Client = db.clients;

//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email
const saveUser = async (req, res, next) => {
  //search the database to see if user exist
  try {
    const name = await Client.findOne({
      where: {
        name: req.body.name,
      },
    });
    //if username exist in the database respond with a status of 409
    if (name) {
      return res.json(409).send("username already taken");
    }

    //checking if email already exist
    const emailcheck = await Client.findOne({
      where: {
        email: req.body.email,
      },
    });

    //if email exist in the database respond with a status of 409
    if (emailcheck) {
      return res.json(409).send("Authentication failed");
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

//exporting module
module.exports = {
  saveUser,
};