import React from "react";

const API_URL = "https://68499ba945f4c0f5ee723110.mockapi.io/tasks";

const TaskItem = ({ task, setTasks }) => {
  const toggleCompleted = async () => {
    const res = await fetch(`${API_URL}/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed })
    });

    const updatedTask = await res.json();

    setTasks(prev =>
      prev.map(t => (t.id === task.id ? updatedTask : t))
    );
  };

  const deleteTask = async () => {
    await fetch(`${API_URL}/${task.id}`, { method: "DELETE" });
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  return (
  <div className="task-item" style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      <h3>{task.title} ({task.category})</h3>
      <p>{task.description}</p>
      <button onClick={toggleCompleted}>
        {task.completed ? "Desmarcar" : "Completar"}
      </button>
      <button onClick={deleteTask}>Eliminar</button>
    </div>
  );
};

export default TaskItem;