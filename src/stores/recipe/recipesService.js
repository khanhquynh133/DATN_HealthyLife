/** @format */

import api from "../../core/api.service";
import { ENDPOINT } from "../../core/constants";

const endpoint = ENDPOINT.RECIPES;

// Create new recipe
const createRecipe = async (recipeData) => {
	const response = await api().post(endpoint, recipeData);
	return response.data;
};

// Get question by id
const searchRecipesByName = async (queryString) => {
	const response = await api().get(`${endpoint}?name=${queryString}`);
	return response.data;
};

// Get question by id
const getRecipeById = async (id) => {
	const response = await api().get(`${endpoint}/${id}`);
	return response.data;
};

// Get recipes by user id
const getRecipesByUserId = async (userId) => {
	const response = await api().get(`${endpoint}/user/${userId}`);
	return response.data;
};

// Get recipes by Type id
const getRecipesByTypeId = async (typeId) => {
	const response = await api().get(`${endpoint}/type/${typeId}`);
	return response.data;
};

// Update recipes
const updateRecipe = async (recipeId, data) => {
	const response = await api().put(`${endpoint}/${recipeId}`, data);
	return response.data;
};

// // Delete user question
// const deleteQuestion = async (questionId: string) => {
//   const response = await api().delete(`${endpoint}/${questionId}`);
//   return response.data;
// };

const recipesService = {
	createRecipe,
	updateRecipe,
	getRecipesByTypeId,
	getRecipesByUserId,
	getRecipeById,
	searchRecipesByName,
};

export default recipesService;
