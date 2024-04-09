// const os = require('os')
// console.log(os.userInfo())

// const path = require('path');
// const { abort } = require('process');
// console.log(__dirname);
// const filePath = path.join('/content','file.txt');
// const absolutePath = path.resolve(__dirname,'content','file.txt')
// console.log(absolutePath);

// const fs = require('fs');
// const filetxt = fs.readFileSync('./content/file.txt').toString()
// fs.writeFileSync('./content/file.txt', 'this is new content', { flag: 'w' })
// console.log(filetxt);
// fs.readFile('./content/file.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(result);

// })
// const calculateSum = (counter) => {
//     let sum = 0;
//     for (let i = 0; i <= counter; i++) sum += i;
//     return sum;
// }
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

// function middlewar1(req, res, next) {
//     console.log('inside middleware ', req.body.counter);
//     next();
// }
// app.use(middlewar1);
// const showSum = (req, res) => {
//     //getting data from req.query in get request.
//     let counter = +req.query.counter;
//     const sum = calculateSum(+counter);
//     const result = 'the sum is ' + sum;
//     res.send(result)
// }
// const getSum = (req, res) => {
//     //getting data from headers
//     // var counter = req.headers.counter;

//     //getting data from body
//     var counter = req.body.counter
//     const sum = calculateSum(counter);
//     const result = 'the sum is ' + sum;
//     console.log(result);
//     res.send(result)

// }
// const showData = (req, res) => {
//     const id = req.params.id;
//     res.send(id);
// }
// app.get('/sum', showSum);
// app.post('/getSum', getSum);
// app.get('/data/:id', showData);
// app.listen(4000);


const express = require('express');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config()
const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(cookieParser())
//import routes
const todoRoutes = require('./routes/todos');
app.use('/api/v1/', todoRoutes); //mount the todo route //localhost:3000/api/v1/createTodo
const user = require('./routes/user');
app.use('/api/v1', user);
//start the server
app.listen(PORT, () => {
    console.log(`server running at ${PORT}`)
})

//connect with db
const dbConnect = require('./config/database')
dbConnect();

//default route
app.get('/', (req, res) => {
    res.send(`<h1>This is HOMEPAGE </h1>`)
})