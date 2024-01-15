import axios from 'axios'

const api = axios.create({baseURL:'http://localhost:1880/'});

export default api;