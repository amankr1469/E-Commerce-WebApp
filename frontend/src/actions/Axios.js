import axios from 'axios';

// Function to create Axios instance with dynamic Authorization header
const createAxiosInstance = () => {
    const token = localStorage.getItem('token');

    const API = axios.create({
        baseURL: 'http://localhost:4000'
    });

    if (token) {
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    return API;
};

const API = createAxiosInstance();

export default API;
