/** @format */

import api from '../../core/api.service';
import { ENDPOINT } from '../../core/constants';

const endpoint = ENDPOINT.RECIPES;

// // Create new question
// const createQuestion = async (questionData: QuestionInputInterface) => {
//   const response = await api().post(endpoint, questionData);
//   return response.data;
// };

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

// // Update user question
// const updateQuestion = async (
//   questionId: string,
//   data: QuestionInputInterface
// ) => {
//   const response = await api().put(`${endpoint}/${questionId}`, data);
//   return response.data;
// };

// // Delete user question
// const deleteQuestion = async (questionId: string) => {
//   const response = await api().delete(`${endpoint}/${questionId}`);
//   return response.data;
// };

const recipesService = {
  getRecipesByTypeId,
  getRecipesByUserId,
  getRecipeById,
  searchRecipesByName,
};

export default recipesService;
