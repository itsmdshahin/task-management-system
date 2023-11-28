# Task Management System

Welcome to the Task Management System! This project is a simple task management system built using Node.js, Express.js, and MongoDB.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints) 
- [Author](#author)

## Introduction

The Task Management System is a web-based application that allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks. It provides a RESTful API for managing tasks, including functionalities to create new tasks, retrieve all tasks, fetch a single task by its ID, update tasks, and delete tasks.

## Features

- Create new tasks with details such as title, description, status, and due date.
- Retrieve a list of all tasks.
- Fetch details of a specific task using its unique identifier (ID).
- Update task details, including title, description, status, and due date.
- Delete tasks by their ID.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yitsmdshahin/task-management-system.git
   cd task-management-system
   npm install

2. Create a .env file in the project root and add your MongoDB connection URL:
   ```bash
   MONGO_URL=mongodb://localhost:27017/task_management
   PORT=5001
   ```
   
3. Start the server:
   ```bash
   npm start
   ```
Visit `http://localhost:5001` in your browser to access the Task Management System.

**API Endpoints:**

##api-endpoints

  - POST  `/tasks:` This endpoint retrieves a list of all tasks currently stored in the system. It returns an array of tasks.
  ```
  {
    "title":"Software Engineer",
    "description":"BSc in CSE",
    "status":"Pending",
    "dueDate":"23/06/2023"
   }
  ```
  - GET `/tasks:` This endpoint retrieves a list of all tasks currently stored in the system. It returns an array of tasks.
  ```
  [
   {
      "_id": "6562e53b500a2ca97801df31",
      "title": "Software Engineer",
      "description": "BSc in CSE",
      "status": "Pending",
      "dueDate": "23/06/2023"
   },
   // Additional tasks...
]

  ```
  - GET `/tasks/:🆔`: This endpoint allows clients to fetch details of a specific task by providing its unique identifier (ID) in the URL.
  ```
  {
      "_id": "6562e53b500a2ca97801df31",
      "title": "Software Engineer",
      "description": "BSc in CSE",
      "status": "Pending",
      "dueDate": "23/06/2023"
}
  ```
  
  - PUT `/tasks/:🆔`: This endpoint enables clients to update the details of a specific task by providing its ID in the URL and sending a JSON body with the fields to be updated.
   
   ```
   {
      "title": "Updated Software Engineer",
      "description": "MSc in CSE",
      "status": "Completed",
      "dueDate": "30/06/2023"
   }
   ```
   - Example Response:
   ```
{
      "_id": "6562e53b500a2ca97801df31",
      "title": "Updated Software Engineer",
      "description": "MSc in CSE",
      "status": "Completed",
      "dueDate": "30/06/2023"
}  
   ```
  - DELETE `/tasks/:🆔`: This endpoint allows clients to delete a task by providing its unique identifier (ID) in the URL.
   ```
{
      "message": "Task deleted successfully"
}

   ```


**Floder-Structure**

```
task-management-system/
   |-- models/
   |   |-- task.js
   |-- routes/
   |   |-- task.js
   |-- db.js
   |-- app.js
   |-- package.json
   |-- README.md
```

**Author Section**

- [Md Shahinur Rahman](https://github.com/itsmdshahin)
