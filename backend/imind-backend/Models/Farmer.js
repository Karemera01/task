const mongoose = require("mongoose");
require("../DB/myDB");

const farmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: Number,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  reputation: {
    type: Number,
    required: false,
    trim: true
  }
});

const Farmer = mongoose.model("Farmer", farmerSchema);

async function createFarmer() {
  const farmer = new Farmer({
    name: "James",
    email: "me@gmail.com",
    phone: "744-444-4444",
    username: "james",
    password: "123",
    reputation: 4
  });
 await farmer.save();
}
// createFarmer();

module.exports = Farmer;
