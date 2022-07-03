import api from '../../core/api.service';
import { ENDPOINT } from '../../core/constants';

const endpoint = ENDPOINT.USERS;

// Get user by id
const adminGetUserById = async (userId) => {
  const response = await api().get(`${endpoint}/${userId}`);
  return response.data;
};

// Get all users
const adminGetAllUsers = async () => {
  const response = await api().get(`${endpoint}`);
  return response.data;
};

// Update user
const adminUpdateUser = async (userData) => {
  const response = await api().get(`${endpoint}/${userData.id_user}`);
  return response.data;
};

// Delete user
const adminDeleteUser = async (userData) => {
  const response = await api().get(`${endpoint}/${userData.id_user}`);
  return response.data;
};

const userService = {
  adminGetUserById,
  adminGetAllUsers,
  adminUpdateUser,
  adminDeleteUser,
};

export default userService;
