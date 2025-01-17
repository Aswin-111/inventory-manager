import axios from "axios";

const interceptor = axios.create();

interceptor.interceptors.request.use(
  (config) => {
    config.token =
      "3a7bd3e2360a3d29eea436fcfb7e44c735d117c42d1c1835420b6b9942dd4f1b";
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
