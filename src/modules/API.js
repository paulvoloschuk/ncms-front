import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:3002/',
  timeout: 10000
});

export default API
