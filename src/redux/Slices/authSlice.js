import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  posts: null,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
    },
    logout: () => initialState,
    getAllPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const {logIn, logout, getAllPosts} = authSlice.actions;
export default authSlice.reducer;
