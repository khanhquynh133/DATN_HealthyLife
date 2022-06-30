/** @format */

import axios from 'axios';
import authStorageService from './authStorage.service';

const apiService = (moreOptions) => {
  const token = authStorageService().getToken() || '';
  const options = {
    ...moreOptions,
    baseURL: process.env.REACT_APP_BASE_API_URL,

    headers: {
      ...moreOptions?.headers,
      // Authorization: `Basic ${token}`,
    },
  };

  return {
    get: (url) => axios.get(url, options),
    post: (url, data) => axios.post(url, data, options),
    put: (url, data) => axios.put(url, data, options),
    delete: (url) => axios.delete(url, options),
  };
};
export default apiService;
