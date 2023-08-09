// offerDetailsSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../../utilities';

const initialState = {
  offerDetails: null,
  loading: false,
  error: null,
};

const apiUrl = BASE_URL + ENDPOINTS.OFFERS_DETAILS; // Replace with your API endpoint

export const fetchOfferDetailsAsync = createAsyncThunk(
  'offerDetails/fetchOfferDetails',
  async (offerId, {rejectWithValue}) => {
    try {
      const response = await axios.get(`${apiUrl}/${offerId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const offerDetailsSlice = createSlice({
  name: 'offerDetails',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchOfferDetailsAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOfferDetailsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.offerDetails = action.payload;
      })
      .addCase(fetchOfferDetailsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default offerDetailsSlice.reducer;
