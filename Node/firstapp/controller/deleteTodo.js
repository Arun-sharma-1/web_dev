const Todo = require('../models/Todo');

exports.deleteTodo = async (req, res) => {
    try {
       const {id} = req.params;
       console.log(id)
       await Todo.findByIdAndDelete(id);
       res.send('Successfully deleted...')
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
}