const mongoose =  require("mongoose");
const blogSchema = new mongoose.Schema({
    author_id : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User",
        required : true ,
    },
    title :  {
        type : String,
        required : true ,
    },
    discipline: {
        type: String,
        enum: ['engineering', 'medical', 'development', 'marketing', 'science', 'designer'],
        required: true,
    },
    subtitle : {
        type : String ,
        required : true ,
    },
    description : {
        type : String ,
        required : true ,
    },
    content : {
        type : String ,
        required : true ,
    },
    image : {
        type : String
    }, 
    author_name : {
        type : String ,
    }, 
});

blogSchema.pre('save', async function (next) {
    try {
      const user = await mongoose.model('Profile').findOne({user_id : this.author_id});
      this.author_name = user.username;
      next();
    } catch (err) {
      next(err);
    }
  });

const Blog = mongoose.model('Blog' , blogSchema)
module.exports = {Blog};