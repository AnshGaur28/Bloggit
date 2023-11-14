const { jwtDecode } = require("jwt-decode");
const { default: mongoose } = require("mongoose");
const Profile = mongoose.model("Profile");
// const Blog = require('../models/blogs')
const getBookmarks =  async (req, res)=>{
    const token = req.query.token ;
    const payload = jwtDecode(token);
    const user_id = payload.user._id ;
    const profile = await Profile.findOne({user_id : user_id});
    const blogIds = profile.saved_blogs;
    const blogs = await Promise.all(blogIds.map(id => mongoose.model("Blog").findOne({ _id: id })));
    // console.log(blogs);
    res.status(200).json({message : "Blogs found" , blogs});


}
module.exports = {getBookmarks};