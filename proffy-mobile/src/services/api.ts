import axios from 'axios';

const api = axios.create({
  // original: exp://192.168.15.13:19000
  // trocar exp por http e 19000 por 3333 (porta do meu servidor)
  baseURL: 'http://192.168.15.13:3333',
});

export default api;
