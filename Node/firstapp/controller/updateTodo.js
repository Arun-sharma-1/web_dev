const Todo = require('../models/Todo');

exports.updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description } = req.body;
        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() },
        )
        res.send(todo)
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
}