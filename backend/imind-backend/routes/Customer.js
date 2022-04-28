const express = require('express');
const router = express.Router();
require("../DB/myDB");
const jwt = require("jsonwebtoken");
const Customer = require("../Models/Customers");


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/customer/:id", async (req, res) => {
	const customer = await Customer.findOne({ _id: req.params.id });
	res.send(customer);
})


module.exports = router;
