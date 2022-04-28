const express = require('express');
const router = express.Router();
require("../DB/myDB");
const jwt = require("jsonwebtoken");
const Farmer = require("../Models/Farmer");
const Customer = require("../Models/Customers");

router.post("/feedbacks", async (req, res) => {
	const feedback = {
        rating: req.body.rating,
            productsReview: req.body.productsReviw,
            FarmerServiceReviw: req.body.FarmerServiceReviw

	};
	res.send(post)
});

module.exports = router;

