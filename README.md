# Task Management Application

This is a **Task Management Application** built with **React.js** for the frontend and **Node.js** with **Express.js** and **MongoDB** for the backend.

## Features

- **Create a Task**: Add a new task with a title, description, and status.
- **Retrieve Tasks**: View all tasks with the ability to filter by status.
- **Update a Task**: Edit the title, description, or status of an existing task.
- **Delete a Task**: Remove a task from the list.

## Setup Instructions

### Backend Setup

1. Clone the backend repository:
   ```bash
   git clone <backend-repo-url>
   cd <backend-folder>

   Install dependencies:

 2.Install dependencies:
   npm install

 3. Create a .env file and add the following:
    PORT=3000
MONGO_URI=<your-mongodb-connection-string>

4.Start the backend server:
      npm start

      Frontend Setup
1.Clone the frontend repository:
   git clone <frontend-repo-url>
    cd <frontend-folder>

2. Install dependencies:
   npm install

3. Start the React development server:
   npm start
4.Open your browser and navigate to http://localhost:3000.

Folder Structure
Backend

project/
|-- models/
|   |-- Task.js
|-- routes/
|   |-- tasks.js
|-- controllers/
|   |-- taskController.js
|-- config/
|   |-- db.js
|-- app.js
|-- server.js

Frontend

task-management-app/
|-- public/
|-- src/
|   |-- components/
|   |   |-- TaskList.js
|   |   |-- TaskForm.js
|   |-- services/
|   |   |-- api.js
|   |-- App.js
|   |-- index.js
|-- package.json
|-- README.md


API Documentation
You can test the API endpoints using the provided Postman collection or curl commands.

Example Curl Commands
Create a Task:
curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title": "Design the homepage", "description": "Work on the homepage layout", "status": "Pending"}'
Retrieve All Tasks:

curl -X GET http://localhost:3000/tasks
Update a Task:

curl -X PUT http://localhost:3000/tasks/<task-id> -H "Content-Type: application/json" -d '{"title": "Updated title", "status": "Completed"}'
Delete a Task:

curl -X DELETE http://localhost:3000/tasks/<task-id>
          
