const express = require('express');
const router = express.Router();
require("../DB/myDB");
const jwt = require("jsonwebtoken");
const Farmer = require("../Models/Farmer");
const Customer = require("../Models/Customers");



router.get("/customer-list", async (req, res) => {
	const customers = await customers.find();
	res.send(customers);
});






module.exports = router;