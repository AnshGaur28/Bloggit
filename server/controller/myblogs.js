const { jwtDecode } = require("jwt-decode");
const { default: mongoose } = require("mongoose");
const myBlogs = async (req,res)=>{
    try{
        const token = req.query.token ;
        const payload = jwtDecode(token) ;
        const user_id = payload.user._id ;
         

        const myblogs = await mongoose.model("Blog").find({author_id : user_id});
        if(myblogs.length == 0){
            res.status(201).json({message : "No Blogs Found"});
        }
        else{
            // console.log(myblogs)
            await res.status(200).json({message:  "Blogs Found!!" , blogs :  myblogs} , user_id , myblogs.author_id);
        }
    }
    catch(error){
        res.status(500).json({ message : "Internal Server Error"});
    }
}

module.exports = {myBlogs}