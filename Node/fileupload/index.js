const express = require('express');
const app = express();

require('dotenv').config()
const PORT = process.env.PORT || 5000


//add middleware
app.use(express.json())
const fileupload = require('express-fileupload');
app.use(fileupload(
    {
        useTempFiles:true,
        tempFileDir:'/tmp/'
    }
))// middleware for file

//db connection
const dbConnect = require('./config/database')
dbConnect();

//cloudinary connection
const cloudinary = require('./config/cloudinary')
cloudinary.cloudinaryConnect();

//routes
const upload = require('./routes/FileUpload');
app.use('/api/v1', upload);

//start server
app.listen(PORT, () => { console.log(`App is listening on Port ${PORT}`) })