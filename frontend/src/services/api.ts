import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const sendMessage = async (message: string) => {
  try {
    const response = await api.post('/chat', { message });
    return response.data.reply;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

export default api;
