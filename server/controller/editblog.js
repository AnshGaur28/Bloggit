const { default: mongoose } = require('mongoose');
const blog = require('../models/blogs');
const Blog = mongoose.model('Blog');
const editBlog = async (req , res)=>{
    try{
    const {blogId , title , subtitle , description , content  , image , discipline} = req.body ;
    const blog = await Blog.findOne({_id : blogId});
    if(title){
      blog.title = title ;
    }
    if(subtitle){
    blog.subtitle = subtitle ;
    }
    if(description){ 
      blog.description = description ;
    }
    if(content){
      blog.content = content ;
    }
    if(image){
      blog.image = image ;
    }
    if(description){
      blog.discipline = discipline ;
    }
      await blog.save();
      console.log(blog);
    res.status(200).json({message : "Updated article" })
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'Error updating blog', error });
    }
}

module.exports = {editBlog};