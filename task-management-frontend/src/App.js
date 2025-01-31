import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [refreshTasks, setRefreshTasks] = useState(false);

  const handleTaskCreated = () => {
    setRefreshTasks(!refreshTasks);
  };

  return (
    <div>
      <h1>Task Management Application</h1>
      <TaskForm onSuccess={handleTaskCreated} />
      <TaskList refresh={refreshTasks} />
    </div>
  );
};

export default App;
