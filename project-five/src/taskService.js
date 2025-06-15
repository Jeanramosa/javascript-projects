const API_URL = "https://68499ba945f4c0f5ee723110.mockapi.io/tasks";

// Obtener todas las tareas
export const getTasks = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

// Crear nueva tarea
export const createTask = async (task) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return await res.json();
};

// Eliminar tarea
export const deleteTask = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

// Actualizar tarea completa (editar título, descripción, etc.)
export const updateTask = async (id, updatedData) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return await res.json();
};

// Cambiar estado de completado
export const toggleTask = async (id, currentStatus) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: !currentStatus }),
  });
  return await res.json();
};