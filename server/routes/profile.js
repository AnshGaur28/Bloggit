const express  = require('express')
const profileRouter = express.Router();
const {protect} = require('../middleware/auth')

const {createProfile , updateProfile , fetchProfile} = require('../controller/profile');
const { getBookmarks } = require('../controller/getbookmarks');

  profileRouter.post('/create-profile'  ,  createProfile);


  profileRouter.get('/fetch-profile'  , protect ,  fetchProfile);
  
  profileRouter.post('/profileupdate'  ,  updateProfile);
  
  profileRouter.get('/bookmark'  ,  getBookmarks);

module.exports = {profileRouter}
  