const { default: mongoose } = require("mongoose");

const getAllBlogs = async (req,res)=>{
    try{
        const blogs = await mongoose.model("Blog").find();
        if(blogs.length == 0){
            res.status(201).json({message : "No Blogs Found"});
        }
        else{
            await res.status(200).json({message:  "Blogs Found!!" , blogs :  blogs});
        }
    }
    catch(error){
        res.status(500).json({ message : "Internal Server Error"});
    }
}

module.exports = { getAllBlogs };
