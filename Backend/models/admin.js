import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email:{
        type : String,
        unique : true
    },
    password:{
        type: String,
        minLength: 6
    },
    added
})