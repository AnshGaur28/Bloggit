const mongoose  = require("mongoose");
const Profile = mongoose.model("Profile");

const addBookmark = async (req, res) => {
  const blog_id = req.body.blog_id;
  const author_id = req.body.author_id;
  try {
    const authorProfile = await Profile.findOne({ user_id: author_id });
    // console.log(authorProfile)
    if (authorProfile) {
      if (authorProfile.saved_blogs.includes(blog_id)) {
        return res.status(200).json({ message: "Blog already bookmarked" , saved : true });
      }
      authorProfile.saved_blogs.push(blog_id);
      await authorProfile.save();
      res.status(200).json({ message: "Blog added to bookmarks" });
    } 
    else {
      res.status(404).json({ message: "Author profile not found" });
    }
  } 
  catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addBookmark };