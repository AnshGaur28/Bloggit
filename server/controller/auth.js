const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const register =  async (req, res) => {
    const { email, password } = req.body;

    // Check if the username is already in use
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(202).json({ message: 'Username already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      email : email,
      password: hashedPassword,
    });

    const token =  jwt.sign({user} ,  process.env.JWT_SECRET, { expiresIn: '1h' })
    await user.save();
    res.status(201).json({token : token});
};

const login = async (req,res)=>{
    const {email , password} = req.body ;
  
    const user = await User.findOne({email});
    if (!user) {
      return res.status(401).send('Invalid username or password');
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
  
    if (!isPasswordValid) {
      return res.status(401).send('Invalid username or password');
    }
    const token = jwt.sign({ user }, 'secret-key', { expiresIn: '1h' }); 

    res.cookie('jwt', token, {
        httpOnly: true, 
        secure: true, 
        sameSite: 'strict', 
      });
    // console.log(res.cookie.jwt);

    res.status(200).json({token , message : "Logged In Successfully !!"});
};

module.exports = {register , login};