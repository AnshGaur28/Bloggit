const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema({
  user_id : {
    type : mongoose.Schema.Types.ObjectId ,
    ref : 'User',
    required : true ,
  },
  email : {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  profession : {
    type : String,
    required : true,
  },
  phone : {
    type : Number ,
    required : true ,
  },
  gender : {
    type: String,
    enum: ['male', 'female', 'other'],
    required : true ,
  },
  saved_blogs : [{
    type: String ,
  }],

});

module.exports = mongoose.model('Profile', profileSchema);


