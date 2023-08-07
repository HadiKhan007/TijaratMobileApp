import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../../utilities';

const API_ENDPOINT = BASE_URL + ENDPOINTS.RECENT_ORDERS;

export const recentOrdersAsync = createAsyncThunk(
  'recentOrders/fetchOrders',
  async userId => {
    const response = await axios.get(`${API_ENDPOINT}${userId}`);
    return response.data;
  },
);

const initialState = {
  orders: [],
  status: 'idle',
  error: null,
  loading: false,
};

const recentOrderSlice = createSlice({
  name: 'recentOrder',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(recentOrdersAsync.pending, state => {
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(recentOrdersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(recentOrdersAsync.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default recentOrderSlice.reducer;
