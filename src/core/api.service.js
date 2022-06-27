/** @format */

import axios from "axios";
import authStorageService from "./authStorage.service";

// const apiService = () => {
//   const defaultOptions = {
//     baseURL: process.env.REACT_APP_BASE_API_URL,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   let instance = axios.create(defaultOptions);

//   instance.interceptors.request.use(function (config) {
//     const token = authStorageService().getToken();
//     config.headers!.Authorization = token ? `Bearer ${token}` : '';
//     return config;
//   });

//   return instance;
// };

const apiService = (moreOptions) => {
	const token = authStorageService().getToken();
	const options = {
		...moreOptions,
		headers: {
			...moreOptions?.headers,
			Authorization: token ? `Bearer ${token}` : "",
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
