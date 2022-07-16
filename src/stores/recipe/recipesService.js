/** @format */

import api from "../../core/api.service";
import { ENDPOINT } from "../../core/constants";

const endpoint = ENDPOINT.RECIPES;
const favEndpoint = ENDPOINT.FAV;

// Create new recipe
const createRecipe = async (recipeData) => {
	const response = await api(true).post(endpoint, recipeData);
	return response.data;
};

// Get question by id
const searchRecipesByName = async (queryString) => {
	const response = await api().get(`${endpoint}${queryString}`);
	return response.data;
};

// Get question by id
const getRecipeById = async (data) => {
	const response = await api(data.isAuth).get(`${endpoint}/${data.id}`);
	return response.data;
};

// Get recipes by user id
const getRecipesByUserId = async (userId) => {
	const response = await api(true).get(`${endpoint}/user/${userId}`);
	return response.data;
};

// Get recipes by Type id
const getRecipesByTypeId = async (typeId) => {
	const response = await api().get(`${endpoint}/type/${typeId}`);
	return response.data;
};

// Update recipes
const updateRecipe = async (data) => {
	const response = await api(true).patch(`${endpoint}/${data.id_recipe}`, data);
	return response.data;
};

// Delete recipe
const deleteRecipe = async (recipeId) => {
	await api(true).delete(`${endpoint}/${recipeId}`);
	return recipeId;
};

// Get favorite recipes
const getFavoriteRecipes = async () => {
	const response = await api(true).get(`${favEndpoint}`);
	return response.data;
};

// Add favorite recipe
const addFavoriteRecipe = async (data) => {
	const response = await api(true).post(`${favEndpoint}/add`, data);
	return response.data;
};

// Remove favorite recipe
const removeFavoriteRecipe = async (data) => {
	const response = await api(true).put(`${favEndpoint}/remove`, data);
	return response.data;
};

// Publish recipe
const publishRecipe = async (id) => {
	const response = await api(true).put(`${endpoint}/${id}/publish`);
	return response.data;
};

// Unpublish recipe
const unpublishRecipe = async (id) => {
	const response = await api(true).put(`${endpoint}/${id}/hide`);
	return response.data;
};

const recipesService = {
	createRecipe,
	updateRecipe,
	getRecipesByTypeId,
	getRecipesByUserId,
	getRecipeById,
	searchRecipesByName,
	deleteRecipe,
	getFavoriteRecipes,
	addFavoriteRecipe,
	removeFavoriteRecipe,
	publishRecipe,
	unpublishRecipe,
};

export default recipesService;
