const Item = require('../models/item.model')

module.exports = {
  getProduct ( req, res ) {
    Item.find()
      .then(response => {
        res.status(200).json({
          message: "list item",
          data: response
        })
      })
      .catch(error => {
        console.log('error get product:', error)
      })
  }
}