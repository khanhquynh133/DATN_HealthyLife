/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authStorageService from "../../core/authStorage.service";
import { authType } from "./authType";
import authService from "./authService";

// Get user from localStorage
const token = authStorageService().getToken();
const user = authStorageService().getUserInfo();

const initialState = {
	user: user,
	isError: "",
	isSuccess: "",
	isLoading: false,
	message: "",
};

// Register user
export const register = createAsyncThunk(
	`auth/${authType.REGISTER}`,
	async (user, thunkAPI) => {
		try {
			return await authService.register(user);
		} catch (error) {
			const message = error?.response?.data?.message;
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Login user
export const login = createAsyncThunk(
	`auth/${authType.LOGIN}`,
	async (user, thunkAPI) => {
		try {
			return await authService.login(user);
		} catch (error) {
			const message = error?.response?.data?.message;
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Logout
export const logout = createAsyncThunk(`auth/${authType.LOGOUT}`, async () => {
	await authService.logout();
});

// Update user
export const updateUser = createAsyncThunk(
	`auth/${authType.UPDATE_USER}`,
	async (updatedUserData, thunkAPI) => {
		try {
			return await authService.updateUser(updatedUserData);
		} catch (error) {
			const message = error?.response?.data?.message;
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const authSlice = createSlice({
	name: "auth",
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
			.addCase(register.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = authType.REGISTER;
				state.user = action.payload;
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = authType.REGISTER;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = authType.LOGIN;
				state.user = action.payload;
				console.log(action.payload);
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = authType.LOGIN;
				state.message = action.payload;
				state.user = null;
			})

			.addCase(logout.fulfilled, (state) => {
				state.user = null;
			})
			.addCase(updateUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = authType.UPDATE_USER;
				state.user = action.payload;
			})
			.addCase(updateUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = authType.UPDATE_USER;
				state.message = action.payload;
			});
	},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
