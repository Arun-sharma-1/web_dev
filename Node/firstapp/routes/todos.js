const express = require('express');
const router = express.Router()

const { createTodo } = require('../controller/createTodo');
const { getTodo } = require('../controller/getTodo')
const { getTodoById } = require('../controller/getTodoById')
const { updateTodo } = require('../controller/updateTodo')
const { deleteTodo } = require('../controller/deleteTodo')
router.post('/createTodo', createTodo)
router.get('/getTodos', getTodo);
router.get('/getById/:id', getTodoById);
router.patch('/updatetodo/:id', updateTodo);
router.delete('/deletetodo/:id', deleteTodo);

module.exports = router;