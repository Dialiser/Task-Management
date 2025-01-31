import React, { useEffect, useState } from "react";
import api from "../services/api";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    fetchTasks();
  }, [statusFilter]);

  const fetchTasks = async () => {
    try {
      const response = await api.get("/tasks", {
        params: { status: statusFilter },
      });
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Task List</h2>
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        style={styles.select}
      >
        <option value="">All</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <ul style={styles.list}>
        {tasks.map((task) => (
          <li key={task._id} style={styles.listItem}>
            <h3 style={styles.taskTitle}>{task.title}</h3>
            <p style={styles.taskDescription}>{task.description}</p>
            <p style={styles.taskStatus}>Status: {task.status}</p>
            <button
              onClick={() => handleDelete(task._id)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  select: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    padding: "15px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  taskTitle: {
    margin: "0 0 10px 0",
    color: "#333",
  },
  taskDescription: {
    margin: "0 0 10px 0",
    color: "#555",
  },
  taskStatus: {
    margin: "0 0 10px 0",
    color: "#777",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default TaskList;
