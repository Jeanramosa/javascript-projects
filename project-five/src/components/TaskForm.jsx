import React, { useState } from "react";

const API_URL = "https://68499ba945f4c0f5ee723110.mockapi.io/tasks";

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
      completed: false
    };

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask)
    });

    const data = await res.json();
    setTasks(prev => [...prev, data]);

    // Limpiar el formulario
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