// ordersSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  orders: null,
  loading: false,
  error: null,
};

const apiUrl = 'https://api.tijarat.com/order/get-recent-orders/';

export const recentOrderData = createAsyncThunk(
  'orders/fetchOrders',
  async userId => {
    try {
      const response = await axios.get(`${apiUrl}${userId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch orders from the API.');
    }
  },
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(recentOrderData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(recentOrderData.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload || [];
      })
      .addCase(recentOrderData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ordersSlice.reducer;
