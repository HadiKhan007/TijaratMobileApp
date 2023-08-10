// counterOffersSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../../utilities';

const initialState = {
  counterOffers: [],
  loading: false,
  error: null,
};

const apiUrl = BASE_URL + ENDPOINTS.COUNTER_OFFERS;

export const fetchCounterOffersAsync = createAsyncThunk(
  'counterOffers/fetchCounterOffers',
  async ({userId, price}) => {
    try {
      const response = await axios.patch(`${apiUrl}/${userId}`, {price});
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch counter offers.');
    }
  },
);

const counterOffersSlice = createSlice({
  name: 'counterOffers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCounterOffersAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCounterOffersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.counterOffers = action.payload;
      })
      .addCase(fetchCounterOffersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default counterOffersSlice.reducer;
