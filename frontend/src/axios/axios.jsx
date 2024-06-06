import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://cybergamingcoding.co.in/',
});

export async function login(data) {
    try {
      const response = await apiClient.post('/login',data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

export async function register(data) {
    try {
      const response = await apiClient.post('/register',data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }