const Item = require('../models/item.model')
const User = require('../models/user.model')
const { hasher } = require('../helpers/hashPassword.helper')

module.exports = {
  signup(req, res) {
      User.find({
          email: req.body.email
      })
      .then( userSelected => {
          if( userSelected.length === 0) {
            let userObj = {
                username: req.body.username,
                email: req.body.email,
                password: hasher(req.body.password)
            }

            const newUser = new User(userObj)
            newUser.save()
             .then( userInserted => {
                 res.status(200).json({
                     message: 'signup success'
                 })
             })
             .catch( error => {
                 console.log(error)
             })
          } else {
              res.status(400).json({
                  message: 'email already exist'
              })
          }
      })
      .catch()
  },

  addItem(req, res){
    console.log(req.body)
    let itemObj = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        stock: req.body.stock,
        url: req.file.cloudStoragePublicUrl
    }
    const newItem = new Item(itemObj)
    newItem.save()
     .then( inputItem => {
         res.status(201).json({
             message: "input item success",
             data: inputItem    
         })
     })
     .catch( error => console.log(error))
  },
}  