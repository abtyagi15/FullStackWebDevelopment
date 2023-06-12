//import model
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');


exports.createComment = async(req,res) => {
    try{
        //fetch data from request body
        const {post,user,body} = req.body;

        //create a comment object
        const comment = new Comment({
            post,user,body
        });

        //save the object into database
        const savedComment = await comment.save();

        //find post
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {comments: savedComment._id}}, {new: true})
            .populate("comments")
            .exec();

            res.json({
                post: updatedPost,
            });


    }
    catch(err){
        return res.status(500).json({
            error: "error while creating comment" 
        }) }
}