import mongoose from "mongoose";
const parametresSchema = mongoose.Schema({
    codeParametre : {
        type : String,
    },
    indemniteKilo : { 
        type : Number,
    },
    indemniteFor : {
        type : Number,
    },
    
    