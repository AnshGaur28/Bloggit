const { default: mongoose } = require("mongoose");

const visitBlog = async (req , res)=>{
    try{
        const blogId = req.query.blogId;
        const blogData = await mongoose.model("Blog").findOne({ _id: blogId });
        if (!blogData) {
            // Handle the case where the blog is not found
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json({blogData});
    }
    catch(error){
        res.status(500).json({message : "Internal Server Error"});
    }
}

module.exports = {visitBlog};