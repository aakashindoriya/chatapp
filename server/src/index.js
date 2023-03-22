require('dotenv').config()
const express=require("express")
const cors=require("cors")
const session =require("express-session")
let connect=require("./config/connectdb")
const userroute=require("./routes/userroutes")
const http=require("http")
const socket=require("socket.io")
const app=express()
const server=http.createServer(app)
const io=socket(server)
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
 io.on('connection', (socket) => {
    console.log('A user has connected');
  
    socket.on('disconnect', () => {
      console.log('A user has disconnected');
    });
  });

app.get("/",(req,res)=>{
    
    res.status(200).send({message:`<h1>welcome to Aakash's chatting application</h1>`,session:req.session})
})

app.use("/user",userroute)



server.listen(process.env.PORT,async ()=>{
    let res=await connect()
    console.log("listening on port ",process.env.PORT)
})