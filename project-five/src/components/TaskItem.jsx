import React from "react";
import { deleteTask, toggleTask } from "../services/taskService";

const TaskItem = ({ task, setTasks }) => {
  const handleToggle = async () => {
    const updatedTask = await toggleTask(task.id, task.completed);
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? updatedTask : t))
    );
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <div className="task-item" style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      <h3>{task.title} ({task.category})</h3>
      <p>{task.description}</p>
      <button onClick={handleToggle}>
        {task.completed ? "Desmarcar" : "Completar"}
      </button>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default TaskItem;
