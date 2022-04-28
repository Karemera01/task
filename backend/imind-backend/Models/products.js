const mongoose=require("mongoose");
require('../DB/myDB')

// mongoose.connect("mongodb://localhost/iMindFinalProject")

// .then((res)=>{
//     console.log("connected to database"+ res)
// })
// .catch((err)=>{
//     console.log(err)
// })

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    quantity:Number  
})
const Product=mongoose.model('Product',productSchema)

async function createProduct(){
    const product=new Product({
        name:"Rice",
        price:30,
        quantity:"10",
        description:"best quality Rice"
    })
  const result=  await product.save();

}
// createProduct();

module.exports = Product

