const mongoose = require('mongoose')
require('../DB/myDB')

const transactionSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId
  },
  customerName: {
    type: String,
    required: true,
    trim: true
  },
  farmerName: {
    type: String,
    required: true,
    trim: true
  },
  orderDate: {
    type: Date,
    required: true,
  }
});
const Transaction = mongoose.model("Transaction", transactionSchema )

async function firstTransaction(){
  const trans = new Transaction({
    customerName: "Connor",
    farmerName: "Naha",
    orderDate: '2021/02/22'
  })
  const  result = await trans.save()
  console.log(result)
}
// firstTransaction()


module.exports = Transaction