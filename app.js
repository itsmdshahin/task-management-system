require("dotenv").config();

const express = require('express');
const bodyParser = require('body-parser');

// Import the db.js file
const mongoose = require('./db');
const Task = require('./routes/task');
const taskControllers = require("./controllers/taskControllers");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 
// app.use for api 'tasks'
app.use(taskControllers);
app.use(Task);
 



// from .env
const PORT = process.env.PORT || 5001; 
 
// listen the server 
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
