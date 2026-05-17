import axios from 'axios';

const API = axios.create({
  baseURL: 'https://chatbot-layout-agent.onrender.com/api',
  headers: { 'Content-Type': 'application/json' }
});

export const sendChatMessage = async (message, layout, history) => {
  const response = await API.post('/chat', { message, layout, history });
  return response.data;
};