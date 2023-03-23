let mongoose=require("mongoose")
mongoose.set('strictQuery', false);
let connect= async ()=>{
    return mongoose.connect(process.env.MONGOURL)
}

module.exports=connect