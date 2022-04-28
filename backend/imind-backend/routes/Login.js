const express = require("express");
const router = express.Router();
require("../DB/myDB");
const jwt = require("jsonwebtoken");
const Farmer = require("../Models/Farmer");
const Customer = require("../Models/Customers");

router.post("/", (req, response) => {
  //determine if farmer, customer or admin signing in
  const userType = req.body.userType.pop();
  // console.log(userType);
  if (userType === "Customer") {
    Customer.find({ username: req.body.user.username })
      .then(res => {
        const token = jwt.sign({ res }, "secret");
       
        response.status(200).send(token);
      })
      .catch(err => {
       response.status(401).send("UNAUTHORIZED");
     
      });
  } else if (userType === "Farmer") {
    Farmer.find({username: req.body.user.username})
    .then(res => {
      const token = jwt.sign({ res }, "secret");
     
      response.status(200).json(token);
    })
    .catch(err => {
      response.status(401).send("UNAUTHORIZED");
    });
  } else {
    response.status(200).send("Admin")
  }
});


module.exports = router;
