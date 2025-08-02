const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String
    },
    Password: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
});

const User =  mongoose.model("User",userSchema); // model name should be Capital letter
module.exports= User;