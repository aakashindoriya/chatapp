const Comment = require("../models/comment.model")
const Post = require("../models/post.model")


const ADDNEWPOST=async(req,res)=>{
const {image,caption}=req.body
try {
    let user=req.user.id
    let post=await Post.create({image,caption,user})
    res.status(201).send(post)
} catch (error) {
    return res.status(500).send(error.message)
}
}

const GETALLPOSTS=async(req,res)=>{
    const {page}=req.query
    try {

        let post=await Post.find().populate({
            path: 'user',
            select: 'username profileImage'
          }).populate({
            path:'comments',
            populate: {
                path: 'user',
                select: 'username profileImage'
              }
          })
          .populate({
            path: 'likes',
            select: 'username profileImage'
          })
          .select('-password').sort({ createdAt: -1 }).skip((page-1)*20).limit(20)
        res.status(201).send(post)
    } catch (error) {
        return res.status(500).send(error.message)
    }
    }

const LIKEPOST=async(req,res)=>{
    const {postid}=req.params
    try {
        const post=await Post.findOne({_id:postid})
        console.log(post,post.likes)
        if(post.likes.includes(req.user.id)){
         return res.status(400).send("post already licked")
        }
        await Post.updateOne({_id:postid},{$push:{likes:req.user.id}})
        return res.status(201).send("post liked sucessfully")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const COMMENTONAPOST=async(req,res)=>{
    let {text}=req.body
    let user=req.user.id
    let post=req.params.postid
    try {
        let makeComment=await Comment.create({user,post,text})
        await Post.updateOne({_id:post},{$push:{comments:makeComment}})
        return res.status(201).send("comment added sucessfully")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports={
    ADDNEWPOST,
    GETALLPOSTS,
    LIKEPOST,
    COMMENTONAPOST
}