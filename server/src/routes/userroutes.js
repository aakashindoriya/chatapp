const express=require("express")
const { SIGNUP,VARIFY ,LOGIN, USERINFO, LOGOUT, UPDATEPROFILE} = require("../controller/usercontroller")
const { auth } = require("../middlewares/auth")
const app=express.Router()

app.post("/signup",SIGNUP)
app.get("/varify/:token",VARIFY)
app.post("/login",LOGIN)
app.get("/userinfo",USERINFO)
app.post("/logout",LOGOUT)
app.patch("/profile",auth,UPDATEPROFILE)

module.exports=app