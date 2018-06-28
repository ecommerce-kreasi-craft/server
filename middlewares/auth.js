const jwt = require('jsonwebtoken')

function isAuth (req, res, next) {
  let token = req.headers.token
  if (token) {
    try{
      let user = jwt.verify(token, process.env.secret)
      req.user = user
      next()
    }catch(err) {
      res.status(400).send({error:err})
    }
  } else {
    res.status(500).send({ error: 'empty token!'})
  }
}

module.exports = isAuth