import axios from 'axios';

// base instance of axios
const api = axios.create({
    baseURL: 'https://oppo.com/api/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Request interceptor to attach tokens
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export default api;

