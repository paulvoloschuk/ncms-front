import axios from 'axios'

const API = axios.create({
  baseURL: '//localhost:3002/',
  timeout: 1000,
  headers: {'X-SD': 'local'}
});

export default API
