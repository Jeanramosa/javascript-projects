import React, { useState } from "react";
import { createTask } from "../services/taskService";

const TaskForm = ({ setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("actividades");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      category,
      completed: false,
    };

    const data = await createTask(newTask);
    setTasks((prev) => [...prev, data]);

    setTitle("");
    setDescription("");
    setCategory("actividades");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título de la tarea"
        required
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción (opcional)"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="actividades">Actividades</option>
        <option value="compras">Compras</option>
        <option value="tareas del hogar">Tareas del hogar</option>
        <option value="trámites">Trámites</option>
        <option value="programar">Programar</option>
      </select>
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;
