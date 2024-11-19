import axios from 'axios';

const interceptor = axios.create();

interceptor.interceptors.request.use(
  (config) => {
    // Add a token to the headers if it exists in local storage
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default interceptor;