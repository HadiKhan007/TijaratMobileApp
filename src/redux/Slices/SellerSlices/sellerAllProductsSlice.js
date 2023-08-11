// store/reducers/sellerProductsSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../../utilities';

const initialState = {
  sellerProducts: [],
  loading: false,
  error: null,
};

const apiUrl = BASE_URL + ENDPOINTS.SELLER_ALL_PRODUCTS;

export const sellerAllProductsAsync = createAsyncThunk(
  'sellerAllProducts/fetchSellerProducts',
  async userId => {
    try {
      const response = await axios.get(`${apiUrl}${userId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch seller products.');
    }
  },
);

const sellerProductsSlice = createSlice({
  name: 'sellerAllProducts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(sellerAllProductsAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sellerAllProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.sellerProducts = action.payload;
      })
      .addCase(sellerAllProductsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default sellerProductsSlice.reducer;
