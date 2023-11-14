const Profile = require('../models/profile');
const {jwtDecode} = require('jwt-decode');
const createProfile = async (req, res)=>{
    const {username ,  email , age , profession , gender , phone , token} = req.body;
    const payload  = jwtDecode(token);
    const user_id = payload.user._id ;
    console.log(user_id)
    const existingProfile = await Profile.findOne({ email });
    if(existingProfile){
      return res.status(202).json({message : 'Profile already exists'})
    }
    const profile = new Profile({
      user_id ,
      email : email ,
      username : username ,
      phone : phone ,
      gender : gender ,
      age : age ,
      profession : profession ,
    });
    await profile.save();
    res.status(200).json('Profile Created')
};

const fetchProfile = async(req , res)=>{
    const targetmail = req.query.email ;
    const profile = await Profile.findOne({email : targetmail});
    if(profile){
      res.status(200).json({profile : profile})
    }
    else{
      res.status(202).json({message : 'No Profile Found'})
    }
  
};

const updateProfile = async (req, res) => {
    const targetmail = req.body.email
    const updatedData = req.body.formData;
    // console.log(updatedData)
    try {
      const profile = await Profile.findOne({ email: targetmail });
      // console.log(profile)
      if(profile.username){
        profile.username =updatedData.username ;
      }
      if(profile.age){
        profile.age =updatedData.age ;
      }
      if(profile.profession){
        profile.profession =updatedData.profession ;
      }
      if(profile.phone){
        profile.phone = updatedData.phone ;
      }
      if(profile.gender){
        profile.gender = updatedData.gender
      }
      await profile.save();
      // console.log(profile)
      res.status(200).json('Update Successful')
  
    } catch (error) {
      res.status(500).json(error);
    }
};

module.exports = {createProfile , fetchProfile , updateProfile};
