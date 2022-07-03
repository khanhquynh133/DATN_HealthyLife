import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userType } from './userType';
import userService from './userService';

const initialState = {
  user: null,
  users: [],
  isError: '',
  isSuccess: '',
  isLoading: false,
  message: '',
};

// Get user by id
export const adminGetUserById = createAsyncThunk(
  `user/${userType.ADMIN_GET_USER_BY_ID}`,
  async (userId, thunkAPI) => {
    try {
      return await userService.getUserById(userId);
    } catch (error) {
      const errorCode = error?.response?.status;
      const message = error?.response?.data?.message;
      const errorResponse = { errorCode, message };
      return thunkAPI.rejectWithValue(errorResponse);
    }
  }
);

// Get all users
export const adminGetAllUsers = createAsyncThunk(
  `user/${userType.ADMIN_GET_ALL_USERS}`,
  async (_, thunkAPI) => {
    try {
      return await userService.adminGetAllUsers();
    } catch (error) {
      const errorCode = error?.response?.status;
      const message = error?.response?.data?.message;
      const errorResponse = { errorCode, message };
      return thunkAPI.rejectWithValue(errorResponse);
    }
  }
);

// update user by id
export const adminUpdateUser = createAsyncThunk(
  `user/${userType.ADMIN_GET_USER_BY_ID}`,
  async (updatedData, thunkAPI) => {
    try {
      return await userService.adminUpdateUser(updatedData);
    } catch (error) {
      const errorCode = error?.response?.status;
      const message = error?.response?.data?.message;
      const errorResponse = { errorCode, message };
      return thunkAPI.rejectWithValue(errorResponse);
    }
  }
);

// Delete user by id
export const adminDeleteUserById = createAsyncThunk(
  `user/${userType.ADMIN_GET_USER_BY_ID}`,
  async (userId, thunkAPI) => {
    try {
      return await userService.adminDeleteUserById(userId);
    } catch (error) {
      const errorCode = error?.response?.status;
      const message = error?.response?.data?.message;
      const errorResponse = { errorCode, message };
      return thunkAPI.rejectWithValue(errorResponse);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
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
      .addCase(adminGetUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(adminGetUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = userType.ADMIN_GET_USER_BY_ID;
        state.user = action.payload;
      })
      .addCase(adminGetUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = userType.ADMIN_GET_USER_BY_ID;
        state.message = action.payload;
      })
      .addCase(adminGetAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(adminGetAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = userType.ADMIN_GET_ALL_USERS;
        state.users = action.payload;
      })
      .addCase(adminGetAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = userType.ADMIN_GET_ALL_USERS;
        state.message = action.payload;
      })
      .addCase(adminUpdateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(adminUpdateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = userType.ADMIN_UDPATE_USER;
        // state.users = action.payload;
      })
      .addCase(adminUpdateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = userType.ADMIN_UDPATE_USER;
        state.message = action.payload;
      })
      .addCase(adminDeleteUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(adminDeleteUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = userType.ADMIN_DELETE_USER;
        // state.user = action.payload;
      })
      .addCase(adminDeleteUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = userType.ADMIN_DELETE_USER;
        state.message = action.payload;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
