let mongoose=require("mongoose")

const connect=async()=>{
    return await mongoose.connect(process.env.MONGOURL)
    
}

module.exports=connect