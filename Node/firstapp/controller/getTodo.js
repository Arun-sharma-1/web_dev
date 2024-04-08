const Todo = require('../models/Todo');
exports.getTodo = async (req, res) => {
    try {
        const getAllTodo = await Todo.find();
        console.log(getAllTodo);
        res.status(200).send(getAllTodo);
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
}