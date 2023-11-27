# task-management-system
Task Management System (Server online)
# Task Management System

Welcome to the Task Management System! This project is a simple task management system built using Node.js, Express.js, and MongoDB.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

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

Create a .env file in the project root and add your MongoDB connection URL:
   ```bash
   MONGO_URL=mongodb://localhost:27017/task_management
   PORT=5001
   ```
   
Start the server:
   ```bash
   npm start
   ```
Visit ```http://localhost:5001``` in your browser to access the Task Management System.

**API Endpoints:**
  - POST /tasks: Create a new task.
  - GET /tasks: Fetch all tasks.
  - GET /tasks/:🆔: Fetch a single task by its ID.
  - PUT /tasks/:🆔: Update a task by its ID.
  - DELETE /tasks/:🆔: Delete a task by its ID.
 

**Author Section**
- [Md Shahinur Rahman](https://github.com/itsmdshahin)
