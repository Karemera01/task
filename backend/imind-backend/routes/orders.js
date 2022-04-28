
const express = require('express');
const router = express.Router();
require("../DB/myDB");
const jwt = require("jsonwebtoken");
const Farmer = require("../Models/Farmer");
const Customer = require("../Models/Customers");


router.get("/orders", async (req, res) => {
	const orders = await orders.find()
	res.send(orders)
})



module.exports = router;