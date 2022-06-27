/** @format */

import api from "../../core/api.service";
import authStorageService from "../../core/authStorage.service";
import { ENDPOINT } from "../../core/constants";

const endpoint = ENDPOINT.USERS;

// Register user
const register = async (userData) => {
	const response = await api().post(`${endpoint}/signup`, userData);
	if (response.data) {
		const { token } = response.data;
		authStorageService().setToken(token);
	}
	return response.data;
};

// Login user
const login = async (userData) => {
	const response = await api().post(`${endpoint}/signin`, userData);
	if (response.data) {
		const { token } = response.data;
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
