const express = require('express');
const router = express.Router();


const  {login , register}  = require('../controller/auth');

// Registration endpoint
router.post('/register', register);

// Login 
router.post('/login' , login );


module.exports = { router}

