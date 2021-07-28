import axios from "axios";

const api = axios.create({
    baseURL: 'https://60e4fd845bcbca001749ec13.mockapi.io/api'
    });

export default api;