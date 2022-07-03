/** @format */

import api from '../../core/api.service';
import { ENDPOINT } from '../../core/constants';

const endpoint = ENDPOINT.RECIPES;

// Create new recipe
const createRecipe = async (recipeData) => {
  const response = await api(true).post(endpoint, recipeData);
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
  const response = await api(true).delete(`${endpoint}/${recipeId}`);
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
};

export default recipesService;
