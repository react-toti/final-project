import axios from 'axios';

const api = axios.create({
  baseURL: "https://mockapi.io/projects/60dfabc0abbdd9001722d45a",
});

export default api;