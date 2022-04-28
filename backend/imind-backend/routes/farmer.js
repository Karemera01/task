const Farmer = require("../Models/Farmer");
const express = require('express');
const router = express.Router();
require("../DB/myDB");
const jwt = require("jsonwebtoken");
const verifyToken = require('./VerifyToken')



router.get('/', async (req, res, next) =>{
 const allFarmers = await Farmer.find({})
 res.send(allFarmers)
});

router.get("/farmer/:id", async (req, res) => {
	const farmer = await Farmer.findOne({ _id: req.params.id });
	res.send(farmer);
})


module.exports = router;
