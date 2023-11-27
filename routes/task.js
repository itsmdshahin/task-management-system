const express = require('express');
const router = express.Router();
const taskManagementSchema = require('../models/task.model');
 

// Create a new task
router.post('/tasks', async (req, res) => {
    try {
        const { title, description, status, dueDate } = req.body;
        const task = new taskManagementSchema({ title, description, status, dueDate });
        await task.save();
        res.status(201).json(task);
        console.log('Successfully handled POST request on server!');
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).json({ error: 'Invalid request data' });
        } else if (error.name === 'MongoError' && error.code === 11000) {
            // Handle duplicate entry error
            res.status(409).json({ error: 'Task with that title already exists' });
        } else if (error.name === 'MongooseError' && error.errors.title.kind === 'required') {
            // Handle missing title error
            res.status(400).json({ error: 'Title is required' });
        } else {
            // Handle other errors
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

// Fetch all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await taskManagementSchema.find();
        res.json(tasks);
        console.log('Successfully handled GET request on server!');
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fetch a single task by its id
router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await taskManagementSchema.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update a task by its id 
router.put('/tasks/:id', async (req, res) => {
    try {
        const { title, description, status, dueDate } = req.body;
        console.log(title);
        const task = await taskManagementSchema.findByIdAndUpdate(
            req.params.id,
            {
                title,
                description,
                status,
                dueDate
            },
            { new: true }
        );

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.json(task);
        console.log('Updated the Database');
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).json({ error: 'Invalid request data' });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

// Delete a task by its id 

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await taskManagementSchema.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
