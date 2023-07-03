import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  changePassApi,
  forgotPassApi,
  loginAPI,
  signUpApi,
} from '../API/authApi';

export const loginUser = createAsyncThunk('auth/login', async credentials => {
  const response = await loginAPI(credentials);
  return response;
});
export const signUp = createAsyncThunk('auth/signup', async userData => {
  const response = await signUpApi(userData);
  return response.data;
});

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async email => {
    const response = await forgotPassApi(email);
    return response.data;
  },
);
export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (passwordData, {getState}) => {
    const {user} = getState().auth; // Retrieve the token from the auth state in Redux
    console.log('Token0000:', user.token);
    const token = user.token; // Check if the token is logged correctly
    const {currentPassword, newPassword} = passwordData;

    const response = await changePassApi(
      {currentPassword, newPassword},
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      },
    );

    return response.data;
  },
);
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
    success: false,
    token: null,
  },

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
        state.token = action.payload;
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
      })
      // ChangePassword
      .addCase(changePassword.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : 'Failed to change password.';
      });
  },
});

export default authSlice.reducer;
