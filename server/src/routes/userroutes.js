const express=require("express")
const User = require("../models/usermodel")
const argon=require("argon2")
const app=express.Router()

app.post("/signup",async(req,res)=>{
    let {email,password,role}=req.body
    try{
        let existinguser=await User.findOne({email:email})
        if(!existinguser){
            console.log(email,password,role)
          password=await argon.hash(password)
          await User.create({email,password,role})
          res.status(201).send("user created")
        }else{
            res.status(401).send("user alredy registerd")
        }
    }catch(e){
        res.status(400).send(e.message)
    }
})



module.exports=app