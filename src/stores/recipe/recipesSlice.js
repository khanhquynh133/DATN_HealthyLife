/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { recipesType } from "./recipesType";
import recipesService from "./recipesService";

const initialState = {
	recipes: [],
	ownRecipes: [],
	detailRecipe: [],
	searchRecipe: [],
	isError: "",
	isSuccess: "",
	isLoading: false,
	message: "",
};

// // Create new question
// export const createQuestion = createAsyncThunk(
//   `question/${questionType.CREATE_QUESTION}`,
//   async (questionData: QuestionInputInterface, thunkAPI) => {
//     try {
//       return await questionService.createQuestion(questionData);
//     } catch (error: any) {
//       const message = error?.response?.data?.message;
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// Get all questions
export const searchRecipesByName = createAsyncThunk(
	`question/${recipesType.SEARCH_RECIPES_BY_NAME}`,
	async (queryString, thunkAPI) => {
		try {
			return await recipesService.searchRecipesByName(queryString);
		} catch (error) {
			const message = error?.response?.data?.message;
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Get question by user id
export const getRecipesByUserId = createAsyncThunk(
	`question/${recipesType.GET_RECIPES_BY_USER_ID}`,
	async (userId, thunkAPI) => {
		try {
			return await recipesService.getRecipesByUserId(userId);
		} catch (error) {
			const errorCode = error?.response?.status;
			const message = error?.response?.data?.message;
			const errorResponse = { errorCode, message };
			return thunkAPI.rejectWithValue(errorResponse);
		}
	}
);

// Get recipes by type id
export const getRecipesByTypeId = createAsyncThunk(
	`recipes/${recipesType.GET_RECIPES_BY_TYPE}`,
	async (id, thunkAPI) => {
		try {
			return await recipesService.getRecipesByTypeId(id);
		} catch (error) {
			const errorCode = error?.response?.status;
			const message = error?.response?.data?.message;
			const errorResponse = { errorCode, message };
			return thunkAPI.rejectWithValue(errorResponse);
		}
	}
);

// Get recipes by id
export const getRecipeById = createAsyncThunk(
	`recipes/${recipesType.GET_RECIPE_BY_ID}`,
	async (id, thunkAPI) => {
		try {
			return await recipesService.getRecipeById(id);
		} catch (error) {
			const errorCode = error?.response?.status;
			const message = error?.response?.data?.message;
			const errorResponse = { errorCode, message };
			return thunkAPI.rejectWithValue(errorResponse);
		}
	}
);

// // Update user question
// export const updateQuestion = createAsyncThunk(
//   `question/${questionType.UPDATE_QUESTION}`,
//   async (data: any, thunkAPI) => {
//     try {
//       return await questionService.updateQuestion(data.id, data.updatedData);
//     } catch (error: any) {
//       const message = error?.response?.data?.message;
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// // Delete user question
// export const deleteQuestion = createAsyncThunk(
//   `question/${questionType.DELETE_QUESTION}`,
//   async (id: string, thunkAPI) => {
//     try {
//       return await questionService.deleteQuestion(id);
//     } catch (error: any) {
//       const message = error?.response?.data?.message;
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

export const questionSlice = createSlice({
	name: "question",
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isSuccess = "";
			state.isError = "";
			state.message = "";
		},
	},
	extraReducers: (builder) => {
		builder
			// .addCase(createQuestion.pending, (state) => {
			// 	state.isLoading = true;
			// })
			// .addCase(createQuestion.fulfilled, (state: any, action: any) => {
			// 	state.isLoading = false;
			// 	state.isSuccess = questionType.CREATE_QUESTION;
			// 	state.question = action.payload;
			// })
			// .addCase(createQuestion.rejected, (state, action: any) => {
			// 	state.isLoading = false;
			// 	state.isError = questionType.CREATE_QUESTION;
			// 	state.message = action.payload;
			// })
			.addCase(getRecipesByTypeId.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getRecipesByTypeId.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = recipesType.GET_RECIPES_BY_TYPE;
				state.recipes = action.payload;
			})
			.addCase(getRecipesByTypeId.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = recipesType.GET_RECIPES_BY_TYPE;
				state.message = action.payload;
			})
			.addCase(getRecipeById.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getRecipeById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = recipesType.GET_RECIPE_BY_ID;
				state.detailRecipe = action.payload;
				console.log(action.payload);
			})
			.addCase(getRecipeById.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = recipesType.GET_RECIPE_BY_ID;
				state.message = action.payload;
			})
			.addCase(getRecipesByUserId.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getRecipesByUserId.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = recipesType.GET_RECIPES_BY_USER_ID;
				state.ownRecipes = action.payload;
			})
			.addCase(getRecipesByUserId.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = recipesType.GET_RECIPES_BY_USER_ID;
				state.message = action.payload;
			})
			.addCase(searchRecipesByName.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(searchRecipesByName.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = recipesType.GET_RECIPES_BY_USER_ID;
				state.searchRecipe = action.payload;
			})
			.addCase(searchRecipesByName.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = recipesType.GET_RECIPES_BY_USER_ID;
				state.message = action.payload;
			});
		// .addCase(updateQuestion.pending, (state) => {
		// 	state.isLoading = true;
		// })
		// .addCase(updateQuestion.fulfilled, (state, action) => {
		// 	state.isLoading = false;
		// 	state.isSuccess = questionType.UPDATE_QUESTION;
		// 	state.question = action.payload;
		// })
		// .addCase(updateQuestion.rejected, (state, action: any) => {
		// 	state.isLoading = false;
		// 	state.isError = questionType.UPDATE_QUESTION;
		// 	state.message = action.payload;
		// })
		// .addCase(deleteQuestion.pending, (state) => {
		// 	state.isLoading = true;
		// })
		// .addCase(deleteQuestion.fulfilled, (state: any, action: any) => {
		// 	state.isLoading = false;
		// 	state.isSuccess = questionType.DELETE_QUESTION;
		// 	state.userQuestions = state.userQuestions.filter(
		// 		(question: Question) => question._id !== action.payload.id
		// 	);
		// })
		// .addCase(deleteQuestion.rejected, (state, action: any) => {
		// 	state.isLoading = false;
		// 	state.isError = questionType.DELETE_QUESTION;
		// 	state.message = action.payload;
		// });
	},
});

export const { reset } = questionSlice.actions;
export default questionSlice.reducer;
