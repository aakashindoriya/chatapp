const express=require("express")
const { ADDNEWPOST, GETALLPOSTS, LIKEPOST, COMMENTONAPOST } = require("../controllers/post.controllers")
const authMiddleware = require("../middlewares/auth.middleware")
const app=express.Router()

app.post("/newpost",authMiddleware,ADDNEWPOST)
app.get("/allposts",authMiddleware,GETALLPOSTS)
app.post("/like/:postid",authMiddleware,LIKEPOST)
app.post("/comment/:postid",authMiddleware,COMMENTONAPOST)


module.exports=app 