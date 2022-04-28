const mongoose = require('mongoose')
require('../DB/myDB')

const orderSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId
  },
  customerName: {
    type: String,
    required: true,
    trim: true
  },

  products: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  orderDate: {
    type: Date,
    required: true
  }
});
const Orders = mongoose.model("Order", orderSchema )

async function createOrder(){
  const order=new Orders({
      customerName:"Connor",
      products:['banana', 'apple'],
      price:5,
      orderDate:"2021/02/22"
  })
const result=  await order.save();
  console.log(result)

}
// createOrder();


module.exports = Orders