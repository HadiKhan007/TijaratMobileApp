import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {forgotPassApi, loginAPI, signUpApi} from '../API/authApi';

export const logIn = createAsyncThunk('auth/login', async credentials => {
  const response = await loginAPI(credentials);
  return response.data;
});

export const signUp = createAsyncThunk('auth/signup', async userData => {
  const response = await signUpApi(userData);
  return response.data;
});

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async email => {
    try {
      const response = await forgotPassApi(email);
      if (!response) {
        throw new Error('Invalid response from server');
      }
      return response.data;
    } catch (error) {
      console.log(error); // Log the error object
      throw new Error('An error occurred');
    }
  },
);
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // Login
      .addCase(logIn.pending, state => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(logIn.fulfilled, state => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
      })
      // Signup
      .addCase(signUp.pending, state => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(signUp.fulfilled, state => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
      })
      // Forgot Password
      .addCase(forgotPassword.pending, state => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(forgotPassword.fulfilled, state => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export default authSlice.reducer;
