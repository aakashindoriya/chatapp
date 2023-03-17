const jwt=require("jsonwebtoken")

const auth=async (req,res,next)=>{
    try {
        if(req.session.token){
            verifyed=await jwt.verify(req.session.token,process.env.TOKENSEC)
            req.useremail=verifyed.email
            req.userrole=verifyed.role
            next()
        }else{
            res.status(404).send("please login")
        }
    } catch (error) {
        return res.status(400).send(error.message)
    }
}


module.exports={auth}