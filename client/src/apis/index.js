import axios from "axios";

const clientAxios = axios.create({
  baseURL: 'http://localhost:8800/api/',
  headers: {
    "Content-Type": "application/json"
  } ,
  withCredentials: true
})
clientAxios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
clientAxios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data ? response.data : response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default clientAxios