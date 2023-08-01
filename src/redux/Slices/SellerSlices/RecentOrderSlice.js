// orderSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../../utilities';

// Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for orders
const API_ENDPOINT = BASE_URL + ENDPOINTS.ORDERS;

// Create an async thunk to fetch the orders
export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async sellerId => {
    const response = await axios.get(`${API_ENDPOINT}${sellerId}`);
    return response.data;
  },
);

const initialState = {
  orders: [],
  status: 'idle',
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchOrders.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;
