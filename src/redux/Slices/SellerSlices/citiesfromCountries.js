import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../../utilities';

const initialState = {
  loading: false,
  cities: [],
  error: null,
};

const apiUrl = BASE_URL + ENDPOINTS.CITIES;

export const fetchCitiesFromCountriesAsync = createAsyncThunk(
  'cities/fetchCitiesFromCountries',
  async (countryId, thunkAPI) => {
    try {
      const response = await axios.get(`${apiUrl}?countryId=${countryId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCitiesFromCountriesAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCitiesFromCountriesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload;
      })
      .addCase(fetchCitiesFromCountriesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default citiesSlice.reducer;
