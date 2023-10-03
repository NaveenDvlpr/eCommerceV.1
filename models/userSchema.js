const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    firstName : {
        type: String,
        require: true
    }, 
    lastName: {
        type: String,
        require: true
    }, 
    mobileNumber: {
        type: Number,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true 
    }, 
    pasword: {
        type: String,
        require: true
    }
}) 

const Users = new mongoose.model("Users", userSchema);

module.exports = Users;