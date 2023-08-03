import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../../utilities';

const initialState = {
  archivedProducts: [],
  loading: false,
  error: null,
};

const apiUrl = BASE_URL + ENDPOINTS.ARCHIVEPRODUCT;

export const archiveProductAsync = createAsyncThunk(
  'archiveProduct/fetchArchiveProduct',
  async userID => {
    try {
      const response = await axios.get(`${apiUrl}${userID}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to archive the product.');
    }
  },
);

const archiveProductSlice = createSlice({
  name: 'archiveProduct',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(archiveProductAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(archiveProductAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.archivedProducts.push(action.payload);
      })
      .addCase(archiveProductAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default archiveProductSlice.reducer;
