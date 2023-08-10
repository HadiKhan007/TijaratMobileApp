// offersSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../../utilities';

const initialState = {
  offers: [],
  loading: false,
  error: null,
};

const apiUrl = BASE_URL + ENDPOINTS.OFFERS;

export const fetchOffersAsync = createAsyncThunk(
  'offers/fetchOffers',
  async userId => {
    try {
      const response = await axios.get(`${apiUrl}${userId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch offers.');
    }
  },
);

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchOffersAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOffersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default offersSlice.reducer;
