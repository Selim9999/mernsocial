const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//CREATE A POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
})

//UPDATE A POST
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId == req.body.userId) {
            await post.updateOne({$set:req.body});
            res.status(200).json("Your post has been updated.");
        } else {
            res.status(403).json("You can only update your post.");
        }
        
    } catch (error) {
        res.status(500).json(error);
    }
})

//DELETE A POST
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId == req.body.userId) {
            await post.deleteOne();
            res.status(200).json("Your post has been deleted.");
        } else {
            res.status(403).json("You can delete update your post.");
        }
        
    } catch (error) {
        res.status(500).json(error);
    }
})

//LIKE A POST
router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId}});
            res.status(200).json("The post has been liked");
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId}});
            res.status(200).json("The post has benn disliked");
        } 
    } catch (error) {
        res.status(500).json(error);  
    }
})

//GET A POST
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id) 
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);        
    }
})

//GET TIMELINE POST
router.get("/timeline/:userId", async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPost = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );
        res.json(userPosts.concat(...friendPost));  
    } catch (error) {
        res.status(500).json(error);   
    }
})


























module.exports = router;