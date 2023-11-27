require("dotenv").config();

const express = require('express');
const bodyParser = require('body-parser');

// Import the db.js file
const mongoose = require('./db');
const Task = require('./routes/task');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 
// app.use for api 'tasks'
app.use(Task);
 


// default message for server
app.use('/', (req,res)=>{
    res.status(200).json({
        message: "Welcome to Task Management",
    })
});

// server error handling
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Somthing Error in your server found !",
    })
});

app.use((req, res, next) => {
    res.status(404).json({
      message: "Route not Found!",
    })
  });


// from .env
const PORT = process.env.PORT || 5001; 
 
// listen the server 
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
