var nodemailer = require('nodemailer');
const User = require("../models/usermodel")
const argon=require("argon2")
let jwt=require("jsonwebtoken");
const mail = require('../config/email');
 let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aakash7014440217@gmail.com',
      pass: "fkzvemfrgjnefcha"
    }
  });
  

  const SIGNUP=async(req,res)=>{
    let {name,email,password,role,pic}=req.body
    try{
        let existinguser=await User.findOne({email:email})
        if(!existinguser){
          password=await argon.hash(password)
          
          await User.create({email,password,role,pic,name})
          let token=await jwt.sign({email,role},"its a secrate")
          let mailOptions=mail(email,name,`http://localhost:8080/user/varify/${token}`)
          transporter.sendMail(mailOptions, function(error){
            if (error) return res.status(400).send(e.message)
          });
          return res.status(201).send("a mail is sent to your registerd email please varify it to continue")
        }else{
          return res.status(401).send("user alredy registerd")
        }
    }catch(e){
      return res.status(400).send(e.message)
    }
}

const VARIFY=async(req,res)=>{
  const token=req.params.token
  try{
    let varified=await jwt.verify(token,process.env.TOKENSEC)
    req.session.token=req.params.token
    await User.updateOne({email:varified.email},{$set:{varified:true}})
     return res.redirect("http://localhost:3000/")
  }catch(e){
    return res.status(400).send(e.message)
  }
}


const LOGIN=async(req,res)=>{
  let {email,password}=req.body
  try{
    
      let user=await User.findOne({email:email})
      
      if(user.varified){
        
        let varify=await argon.verify(user.password,password)
        if(varify){
          
          let token=jwt.sign({email:user.email,role:user.role,pic:user.pic},process.env.TOKENSEC)
          req.session.token=token
         return res.status(201).send("success")
        }else{
          return res.status(402).send("wrong user credentials")
        }
      }else{
        return res.status(404).send("user not varified")
      }
  }catch(e){
    return res.status(400).send(e.message)
  }
}


const USERINFO=async(req,res)=>{
  try {
    let session=req.session
    if(session.token){
      let userinfo=await jwt.verify(session.token,process.env.TOKENSEC)
      return res.status(200).send(userinfo)
    }
    return res.status(200).send({pic:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",name:"gust",email:"Example@mail.com"})
  } catch (error) {
    return res.status(400).send(error.message)
  }
}


const LOGOUT=async(req,res)=>{
  try{
    console.log(req.session)
    if(req.session.token){
      delete req.session.token
    }
    console.log(req.session)
    return res.status(201).send("logout successfully")
  }catch(e){
    return res.status(400).send(e.message)
  }
}
const UPDATEPROFILE=async (req,res)=>{
  try {
    let user =await User.updateOne({email:req.useremail},{$set:{...req.body}})
    return res.status(201).send("profile updated succcessfully")
  } catch (error) { 
    return res.status(400).send(error.message)
  }
}
module.exports={SIGNUP,VARIFY,LOGIN,USERINFO,LOGOUT,UPDATEPROFILE}