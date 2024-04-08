const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title: {
            // type:mongoose.Schema.Types.ObjectId 
            // ref:'Post' reference to post model
            type: String,
            required: true,
            maxLength: 50
        },
        description: {
            type: String,
            required: true,
            maxLength: 50
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now()
        }
    }
)
module.exports = mongoose.model('todo', todoSchema);