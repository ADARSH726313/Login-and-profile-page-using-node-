 const express = require("express");

 const mongoose = require("mongoose")

 const app = express();
 const bodyparser = require("body-parser")
 app.use(bodyparser.urlencoded({ extended : true}))

 const user =  "mongodb+srv://adu:adsadt123@cluster1.i7xzqtp.mongodb.net/ ";

 mongoose.connect(user)
 .then(console.log("databae chal raha hai brata  "))
 .catch((err)=> console.log(err))

 app.use("/",require("./Routes/routes"))
app.set("view engine","ejs");


 app.listen(3000,()=>{
    console.log(" server is running ")
 })