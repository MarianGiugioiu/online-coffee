const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// get config vars
dotenv.config();

function generateAccessToken(username, role) {
    const user = { 
        username: username,
        role: role
    }
    return jwt.sign(user, process.env.TOKEN_SECRET);
}

//Middleware for checking if the request contains a valid token inside its header
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
  }

module.exports = {
    generateAccessToken,
    authenticateToken
}