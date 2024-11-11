// api.js
import axios from 'axios';

const API_URL = 'http://localhost:4500/api'; // Cambia esto a la URL de tu API

// Autenticación
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/Registrarse`, userData);
  return response.data; // Retorna el token directamente
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/Validar`, credentials);
  return response.data; // Retorna el token directamente
};

// Proyectos
export const createProject = async (projectData, token) => {
  const response = await axios.post(`${API_URL}/proyectos`, projectData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const listProjects = async (token) => {
  const response = await axios.get(`${API_URL}/proyectos`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Tareas
export const createTask = async (taskData, projectId, token) => {
  const response = await axios.post(`${API_URL}/tareas/proyectos/${projectId}`, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};