import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  archivedProducts: [],
  loading: false,
  error: null,
};

// Replace 'YOUR_API_URL' with the actual endpoint for archiving products
const apiUrl = 'YOUR_API_URL';

// Async thunk action to archive a product by its ID
export const archiveProductAsync = createAsyncThunk(
  'archiveProduct/archiveProduct',
  async userID => {
    try {
      const response = await axios.get(
        `https://api.tijarat.com/products/get-archived-products-by-seller/${userID}`,
      );
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
        // Add the archived product to the archivedProducts array
        state.archivedProducts.push(action.payload);
      })
      .addCase(archiveProductAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default archiveProductSlice.reducer;
