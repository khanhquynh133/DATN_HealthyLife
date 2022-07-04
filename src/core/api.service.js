import axios from 'axios';
import authStorageService from './authStorage.service';

const apiService = (sendToken = false) => {
  const token = authStorageService().getToken() || '';
  const options = sendToken
    ? {
        baseURL: process.env.REACT_APP_BASE_API_URL,
        headers: {
          Authorization: `Basic ${token}`,
        },
      }
    : {
        baseURL: process.env.REACT_APP_BASE_API_URL,
      };

  return {
    get: (url) => axios.get(url, options),
    post: (url, data) => axios.post(url, data, options),
    put: (url, data) => axios.put(url, data, options),
    patch: (url, data) => axios.patch(url, data, options),
    delete: (url) => axios.delete(url, options),
  };
};
export default apiService;
