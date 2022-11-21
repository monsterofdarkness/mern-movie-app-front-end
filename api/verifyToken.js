const jwt = require("jsonwebtoken");

async function verify(req, res, next) {
    console.log("aaa")
    const authHeader = req.headers.token;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
  
      await jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) res.status(403).json("Token is not valid!");
        req.user = user;
        return next();
      });
    } else {
      return res.status(401).json("You are not authenticated!");
    }
  }
  
  module.exports = verify;