const express=require("express")
const {SIGNUP, LOGIN, USERNAME} = require("../controllers/user.controllers")
const app=express.Router()
app.post("/signup",SIGNUP)
app.post("/login",LOGIN)
app.post("/username",USERNAME)



module.exports=app 