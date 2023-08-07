import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../../utilities';

const API_ENDPOINT = BASE_URL + ENDPOINTS.SELLER_ORDER;

export const sellerOrdersAsync = createAsyncThunk(
  'sellerOrders/fetchOrders',
  async (userId, {getState}) => {
    const {token} = getState().auth.token;

    try {
      const response = await axios.get(`${API_ENDPOINT}${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

const initialState = {
  orders: [],
};

const sellerOrderSlice = createSlice({
  name: 'sellerOrder',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(sellerOrdersAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(sellerOrdersAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(sellerOrdersAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default sellerOrderSlice.reducer;
