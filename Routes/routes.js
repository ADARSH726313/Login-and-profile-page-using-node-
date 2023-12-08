const express = require("express");

const  route = express.Router();
const controller = require("../controller/controller")

const services = require("../services/render")

route.get("/",services.login);

route.get("/registration",services.registration)

route.post("/login",controller.login )

route.post("/registration",controller.create)
module.exports = route;