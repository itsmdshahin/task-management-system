const mongoose = require('../db');

const taskManagementSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    status:{
        type: String,
        default: 'pending'
    },
    dueDate:{
        type: Date,
        default: Date.now
    },
});
 

module.exports = mongoose.model('tasks', taskManagementSchema);