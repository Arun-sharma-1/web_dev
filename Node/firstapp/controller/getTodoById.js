const Todo = require('../models/Todo');

exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Todo.findById({ _id: id });
        res.send(data);
        console.log(data);
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
}