const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();
const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    },
    tags: {
        type: String,
    },
    email: {
        type: String,
    },
})
//post middleware
fileSchema.post('save', async function (doc) {
    try {
        console.log('DOC ', doc);
        //transporter
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIl_PASS,
            }
        })
        console.log(process.env.MAIL_HOST, process.env.MAIL_USER, process.env.MAIl_PASS);
        //send mail
        let info = await transporter.sendMail({
            from: 'Arun Sharma',
            to: doc.email,
            subject: 'New file uploded',
            html: `<h1>File uploaded Successfully </h1> <a href= ${doc.imageUrl} > ${doc.imageUrl} </a> `

        })
        console.log('info ', info);

    } catch (err) {
        console.log(err);
    }
})
const File = mongoose.model('File', fileSchema); // export with d/f way
module.exports = File