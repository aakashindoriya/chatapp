require('dotenv').config()
const express=require("express")
const cors=require("cors")
const session =require("express-session")
let connect=require("./config/connectdb")
const userroute=require("./routes/userroutes")
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
    
    res.status(200).send({message:`<h1>welcome to Aakash's chatting application</h1>`,session:req.session})
})

app.use("/user",userroute)


app.listen(process.env.PORT,async ()=>{
    let res=await connect()
    console.log("listening on port ",process.env.PORT)
})