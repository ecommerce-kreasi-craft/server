const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
        name: String,
        price: Number,
        description: String,
        category: String,
        stock: Number,
        url: String
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('item', itemSchema)