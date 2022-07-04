/** @format */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { recipesType } from './recipesType';
import recipesService from './recipesService';

const initialState = {
  recipes: [],
  ownRecipes: [],
  detailRecipe: [],
  editRecipe: null,
  addRecipe: [],
  updateRcp: [],
  searchRecipe: [],
  isError: '',
  isSuccess: '',
  isLoading: false,
  message: '',
};

// Create new recipe
export const createRecipe = createAsyncThunk(
  `question/${recipesType.CREATE_RECIPE}`,
  async (recipeData, thunkAPI) => {
    try {
      return await recipesService.createRecipe(recipeData);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

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

// Update recipe
export const updateRecipe = createAsyncThunk(
  `question/${recipesType.UPDATE_RECIPE}`,
  async (data, thunkAPI) => {
    try {
      return await recipesService.updateRecipe(data);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete recipe
export const deleteRecipe = createAsyncThunk(
  `question/${recipesType.DELETE_RECIPE}`,
  async (id, thunkAPI) => {
    try {
      return await recipesService.deleteRecipe(id);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = '';
      state.isError = '';
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRecipe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = recipesType.CREATE_RECIPE;
        state.addRecipe = action.payload;
      })
      .addCase(createRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = recipesType.CREATE_RECIPE;
        state.message = action.payload;
      })
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
        state.editRecipe = action.payload;
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
      })
      .addCase(updateRecipe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = recipesType.UPDATE_RECIPE;
        state.updateRcp = action.payload;
      })
      .addCase(updateRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = recipesType.UPDATE_RECIPE;
        state.message = action.payload;
      })
      .addCase(deleteRecipe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = recipesType.DELETE_RECIPE;
        console.log(action.payload);
        state.ownRecipes = state.ownRecipes.filter(
          (recipe) => recipe.id_recipe !== +action.payload
        );
      })
      .addCase(deleteRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = recipesType.DELETE_RECIPE;
        state.message = action.payload;
      });
  },
});

export const { reset } = questionSlice.actions;
export default questionSlice.reducer;
