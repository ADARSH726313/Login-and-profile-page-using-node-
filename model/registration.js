 const mongoose = require("mongoose");
  const registrationSchema = new mongoose.Schema({

    name:{
        required:true,
        type:"String"
    },
    profession:{
        required:true,
        type:"String"
    },
    email:{
        required:true,
        type:"String"
    },
    password:{
        required:true,
        type:"String"
    },
    city:{
        required:true,
        type:"String"
    },
    country:{
        required:true,
        type:"String"
    },
    about:{
        required:true,
        type:"String"
    }
  })
  
  const regisVal = mongoose.model("value",registrationSchema)
  module.exports = regisVal;