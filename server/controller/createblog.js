const {jwtDecode} = require('jwt-decode');
const { default: mongoose } = require('mongoose');
const Blog = require('../models/blogs'); 
const blogModel = mongoose.model('Blog') ;
const createBlog   = async (req , res )=>{

    const {token , title , discipline , subtitle , content , image , author_name , description ,} = req.body;
    const payload = jwtDecode(token);
    // console.log(payload);
    const user_id = payload.user._id ;

    const blog =  new blogModel({
        author_id : user_id ,
        title ,
        discipline ,
        description ,
        subtitle ,
        content ,
        image ,
        author_name ,
    });

    await blog.save();
    res.status(200).json({message : "Blog successfully created"});

}


module.exports =  {createBlog}