import axios from 'axios';

const api = axios.create({
  baseURL: "https://60dfabc0abbdd9001722d459.mockapi.io/api/v1",
});

export default api;