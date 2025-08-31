const { request } = require("express");
const mongoose = require("mongoose");
const validator = require("validator")
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim:true,
        validate(Value){
            if(!validator.isEmail(Value))
                throw new Error("invalid email Id"+Value);
        }
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String,
        validate(Value){
            if(!["male","female","others"].includes(Value)){
                throw new Error("gender data is not valid.")
            }
        }
    },
    photoURL:{
        type:String,
       
    },
    about:{
        type:String,
         default: "This is default about section."
    },
    Skills:{
        type:[String]
    }
    
});

const User = mongoose.model("User", userSchema); // model name should be Capital letter
module.exports = User;