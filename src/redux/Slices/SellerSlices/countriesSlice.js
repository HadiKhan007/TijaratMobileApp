import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../../utilities';

const initialState = {
  loading: false,
  countries: [],
  error: null,
};

const apiUrl = BASE_URL + ENDPOINTS.COUNTRIES;

export const fetchCountriesAsync = createAsyncThunk(
  'countries/fetchCountries',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCountriesAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountriesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(fetchCountriesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default countriesSlice.reducer;
