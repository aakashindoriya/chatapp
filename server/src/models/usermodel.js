const mongoose=require("mongoose")


const UserSchema=new mongoose.Schema({
email:{type:String ,require:true,unique:true},
password:{type:String,require:true},
role:{type:String,enum:["parent","child"],default:"child"}
})

let User =mongoose.model("chatuser",UserSchema)

module.exports=User