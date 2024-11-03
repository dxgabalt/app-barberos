import axios from 'axios';

// Configuración de la URL base de la API (actualízala con la URL de tu backend)
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Cambia esto a la URL de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función para el registro de usuario
export const registerUser = async (userData: { name: string; email: string; password: string; phone: string }) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para el inicio de sesión de usuario
export const loginUser = async (loginData: { email: string; password: string }) => {
  try {
    const response = await api.post('/auth/login', loginData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
