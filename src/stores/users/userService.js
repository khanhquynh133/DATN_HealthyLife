import api from '../../core/api.service';
import { ENDPOINT } from '../../core/constants';

const endpoint = ENDPOINT.USERS;

// Get user by id
const adminGetUserById = async (userId) => {
  const response = await api(true).get(`${endpoint}/${userId}`);
  return response.data;
};

// Get all users
const adminGetAllUsers = async () => {
  const response = await api(true).get(`${endpoint}`);
  return response.data;
};

// Update user
const adminUpdateUser = async (userData) => {
  const { name, gender, phone, yob, urlImage } = userData;
  console.log({ name, gender, phone, yob: +yob, urlImage });
  const response = await api(true).patch(
    `${endpoint}/${userData.id_user.toString()}`,
    {
      name,
      gender,
      phone,
      yob: +yob,
      urlImage,
    }
  );
  console.log('run');
  return response.data;
};

// Delete user
const adminDeleteUser = async (userId) => {
  await api(true).delete(`${endpoint}/${userId}`);
  return userId;
};

const userService = {
  adminGetUserById,
  adminGetAllUsers,
  adminUpdateUser,
  adminDeleteUser,
};

export default userService;
