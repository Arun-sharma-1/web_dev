const Todo = require('../models/Todo');

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const response = await Todo.create({ title, description });
        res.status(200).send({
            success: true,
            data: response,
            message: 'Entry created Successfully'
        })
    }
    catch (err) {
        res.status(500).send({
            success: false,
            data: 'Internal server error',
            message: err.message
        })
    }
}