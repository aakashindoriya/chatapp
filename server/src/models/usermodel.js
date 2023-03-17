const mongoose=require("mongoose")


const UserSchema=new mongoose.Schema({
name: { type: "String", required: true },
email:{type:String ,require:true,unique:true},
password:{type:String,require:true},
role:{type:String,enum:["parent","child"],default:"child"},
pic: {
    type: "String",
    required: true,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
varified:{type:Boolean,default:false}
})

let User =mongoose.model("chatuser",UserSchema)

module.exports=User