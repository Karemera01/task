const express = require('express');
const cors = require('cors')
const app = express()
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan')
//dont need to import mongoose


require("../imind-backend/DB/myDB");
const loginRouter = require('./routes/Login');
const userRouter = require('./routes/customersList');
const singupRouter = require('./routes/Signup');
const farmerRouter = require('./routes/farmer');
const customerlistRouter = require('./routes/customersList');

// const path = require('path');



app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/signup', singupRouter);
app.use('/login', loginRouter);
app.use('/customer', userRouter);
app.use('/farmer', farmerRouter);


app.use(function(req, res, next) {
  next(createError(404));
});
 // error handler
 app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
 
  // render the error page 
  res.status(err.status || 500)
  res.send({ 'error': 'no route found!' });
 });

// connectMongoDb = async function() {
//   mongoose.connect('mongodb://localhost:27017/iMindFinalProject');
//   db = mongoose.connection;
//   db.on('error', () => {
//     console.log('Failed to connect to mongodb');
//   });
//   db.once('open', () => {
//     console.log('Connected to mongodb ');
//     test();
//   });
// }


app.listen(4444, ()=>{
  console.log("Server is listening to port  4444" )
});


