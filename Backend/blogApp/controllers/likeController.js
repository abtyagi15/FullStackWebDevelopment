const Post = require('../models/postModel');
const Like = require('../models/likeModel');

exports.likePost = async (req,res) => {
    try{
        const {post,user} = req.body;

        const like = new Like({
            post,user
        });
        const savedLike = await like.save();

        //update the post 
        const updatePost = await Post.findByIdAndUpdate(post,{$push: {likes: savedLike._id}}, {new: true})
            .populate("likes").exec();

        res.json({
            post: updatePost,
        })
    }
    catch(err){
        return res.status(500).json({
            error: err.message,
        })
    }
}

exports.unlikePost = async(req,res) => {
    try{
         const {post,like} = req.body;

         //find and delete like

         const deletedLike = await Like.findOneAndDelete({post: post, _id:like}); 

         //updatepost

         const updatePost = await Post.findByIdAndUpdate(post,{$pull: {likes: deletedLike._id}}, {new:true});
         
         res.json({
            post:updatePost
         })
    }
    catch(err){
        return res.status(500).json({
            error: err.message,
        })
    }
}

