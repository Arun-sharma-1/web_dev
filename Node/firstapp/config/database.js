const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL).then(() => {
        console.log('connection succesful')
    }).catch(() => {
        console.log('error in connection with database');
    })
}
module.exports = dbConnect  