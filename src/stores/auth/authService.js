/** @format */

import api from '../../core/api.service';
import authStorageService from '../../core/authStorage.service';
import { ENDPOINT } from '../../core/constants';

const endpoint = ENDPOINT.AUTH;

// Register user
const register = async (userData) => {
  const response = await api().post(`${endpoint}/register`, userData);

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await api().post(`${endpoint}/login`, userData);
  const { email, password } = userData;
  if (response.data) {
    const token = 'Basic ' + window.btoa(`${email}:${password}`);
    authStorageService().setToken(token);
  }
  return response.data;
};

// Logout user
const logout = () => {
  authStorageService().removeToken();
};

// Update user
const updateUser = async (updatedUserData) => {
  const response = await api().put(
    `${endpoint}/${updatedUserData._id}`,
    updatedUserData
  );
  return response.data;
};

const authService = {
  register,
  logout,
  login,
  updateUser,
};

export default authService;
