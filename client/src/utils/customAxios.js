import axios from 'axios';

const customFetch = axios.create({
  baseURL: '/api/v1',
  responseType: 'json',
});

export default customFetch;
