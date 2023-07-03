import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {forgotPassApi, loginAPI, signUpApi} from '../API/authApi';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({username, password}, {rejectWithValue}) => {
    try {
      const response = await loginAPI(username, password);
      return response.data; // Assuming the response contains user data or an access token
    } catch (error) {
      // Handle the error and return it using rejectWithValue
      return rejectWithValue(error.message);
    }
  },
);

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
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
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
