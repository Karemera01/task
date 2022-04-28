const mongoose = require("mongoose");
require("../DB/myDB");
// mongoose.connect("mongodb://localhost/iMindFinalProject")
// .then((res)=>{
//   //dont need to print out res so i got rid of it
//   console.log("connected to the database");
// })
// .catch(err=>console.log(err))

//added some fetures to schema, jsut felt better and had an issue with "="
const productSchema = new mongoose.Schema({
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
    type: String,
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
  }
});

const User = mongoose.model("Customer", productSchema);

async function createProduct() {
  const user = new User({
    name: "James",
    email: "me@gmail.com",
    phone: "744-444-4444",
    username: "james",
    password: "123"
  });
 await user.save();
}
// createProduct();

module.exports = User;
