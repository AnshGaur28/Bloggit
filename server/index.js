const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {router} = require('./routes/auth')
const {profileRouter} = require('./routes/profile')
const express = require('express');
const app = express();
const {blogRouter} = require('./routes/blog')
const cors = require('cors');
app.use(cors());

const dotenv = require('dotenv')
dotenv.config();
const cookieParser = require('cookie-parser')
const port = process.env.PORT

app.use(bodyParser.json())
app.use(express.json());
app.use(cookieParser());
app.use(express.json()); // For parsing JSON requests
app.use(express.urlencoded({ extended: true })); // For parsing form data
// ... other middleware ...

// Connect to db
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error: ' + err));


//  Routes
app.use('/api/auth' , router)
app.use('/api/profile' , profileRouter)
app.use('/api/blog' , blogRouter)

// Connecting to the server port
app.listen(port , ()=>{
    console.log(`Server up and running on port ${port}`)
});