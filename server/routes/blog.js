const express = require('express');
const blogRouter = express.Router();
const  { createBlog } =  require('../controller/createblog');
const { myBlogs } = require('../controller/myblogs');
const {visitBlog} = require('../controller/visitblog');
const {addBookmark} = require('../controller/addbookmark');
const {getAllBlogs} = require('../controller/getallblogs')
const {editBlog} =  require('../controller/editblog');
// const { protect } = require('../middleware/auth');
blogRouter.post('/create-blog'  , createBlog);
blogRouter.get('/my-blogs'    , myBlogs);
blogRouter.get('/:blogId' , visitBlog );
blogRouter.post('/addbookmark' , addBookmark );
blogRouter.get('/' , getAllBlogs);
blogRouter.put('/editblog' , editBlog);

module.exports =   {blogRouter} ;