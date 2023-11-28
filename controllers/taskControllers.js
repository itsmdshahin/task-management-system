
const express = require('express');
const taskControllers = express.Router();



// default message for server
taskControllers.use('/', (req,res)=>{
    res.status(200).json({
        message: "Welcome to Task Management",
    })
});

// server error handling
taskControllers.use((err, req, res, next) => {
    res.status(500).json({
        message: "Somthing Error in your server found !",
    })
});

taskControllers.use((req, res, next) => {
    res.status(404).json({
      message: "Route not Found!",
    })
  });


  module.exports =taskControllers;
  