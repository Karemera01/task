const express = require("express");
const router = express.Router();
require("../DB/myDB");
const jwt = require("jsonwebtoken");
const Farmer = require("../Models/Farmer");
const Customer = require("../Models/Customers");

router.post("/", (req, response) => {

  //determine if farmer, customer or admin signing in
  const userType = req.body.newUser.userType;
  if (userType === "Customer") {
    const newCustomer = new Customer({
      name: req.body.newUser.name,
      email: req.body.newUser.email,
      phone: req.body.newUser.phoneNo,
      username: req.body.newUser.username,
      password: req.body.newUser.password
    });
    newCustomer
      .save()
      .then(res => {
        const token = jwt.sign({ res }, "secret");

        response.status(200).send(token);
      })
      .catch(err => {
        console.log("error try again later");
      });
  } else if (userType === "Farmer") {
    console.log("here backend");

    const newFarmer = new Farmer({
      name: req.body.newUser.name,
      email: req.body.newUser.email,
      phone: req.body.newUser.phoneNo,
      username: req.body.newUser.username,
      password: req.body.newUser.password,
      reputation: null
    });
    newFarmer
      .save()
      .then(res => {
        const token = jwt.sign({ res }, "secret");
        response.status(200).send(token);
      })
      .catch(err => {
        console.log(err);
      });
  }
});

module.exports = router;
