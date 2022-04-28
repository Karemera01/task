
//FORMAT OF TOKEN
//Authorization: Bearer 'token'
module.exports = function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  //check if undefined
  if (typeof bearerHeader === "undefined") {
    res.sendStatus(403);
  } else {
    const bearer = bearerHeader.split(" ");
    //get token from array
    const bearerToken = bearer[1];
    //set the token
    req.token = bearerToken;
    next();
  }
};