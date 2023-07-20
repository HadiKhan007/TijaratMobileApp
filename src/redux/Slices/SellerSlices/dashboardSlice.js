// dashboardSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {dashboardAPI} from '../../API/SellerAPI/dashboardApi';
import axios from 'axios';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const productdata = createAsyncThunk(
  'dashboard/fetchDataFromApi',
  async userId => {
    try {
      const response = await axios.get(
        `https://api.tijarat.com/seller/dashboard/${userId}`,
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching data from the API:', error.message);
      throw new Error('Failed to fetch data new from the API.');
    }
  },
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    // Additional reducers and actions can go here
  },
  extraReducers: builder => {
    builder
      .addCase(productdata.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productdata.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(productdata.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;
