require('dotenv').config()
const express=require("express")
const cors=require("cors")
const session =require("express-session")
const app=express()
app.use(cors())
app.use(express.json())
app.use(session({  
    name: `Aakash`,
    secret: process.env.SESSION,  
    resave: false,
    saveUninitialized: false,
    cookie: { 
      secure: false,
      maxAge: null
    } 
 } ))
app.get("/",(req,res)=>{
    res.status(200).send(`<h1>welcome to Aakash's chatting application</h1>`)
})




app.listen(process.env.PORT,()=>{
    console.log("listening on port ",process.env.PORT)
})