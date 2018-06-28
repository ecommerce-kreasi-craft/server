const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = Schema({
    username: { type: String, lowercase: true, required: true, unique: true },
    email: {
        type: String, lowercase: true, required: true, unique: true,
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email is invalid!']
    },
    password: { type: String, required: true },
    isActive: Boolean
},
{ 
        timestamps: true
    });

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);