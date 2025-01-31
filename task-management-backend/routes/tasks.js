const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Create a Task
router.post("/tasks", taskController.createTask);

// Retrieve All Tasks
router.get("/tasks", taskController.getTasks);

// Retrieve a Single Task
router.get("/tasks/:id", taskController.getTaskById);

// Update a Task
router.put("/tasks/:id", taskController.updateTask);

// Delete a Task
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;
