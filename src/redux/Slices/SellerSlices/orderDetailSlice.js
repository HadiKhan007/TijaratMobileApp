// orderDetailsSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../../utilities';

const initialState = {
  orderDetails: {},
  loading: false,
  error: null,
};

const apiUrl = BASE_URL + ENDPOINTS.ORDER_DETAILS;

export const fetchOrderDetailsAsync = createAsyncThunk(
  'orderDetails/fetchOrderDetails',
  async orderId => {
    try {
      const response = await axios.get(`${apiUrl}${orderId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch order details.');
    }
  },
);

const orderDetailsSlice = createSlice({
  name: 'orderDetails',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchOrderDetailsAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderDetailsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.orderDetails = action.payload;
      })
      .addCase(fetchOrderDetailsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default orderDetailsSlice.reducer;
