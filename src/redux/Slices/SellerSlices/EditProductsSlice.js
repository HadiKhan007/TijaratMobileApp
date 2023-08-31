import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../../utilities';

const apiUrl = BASE_URL + ENDPOINTS.EDIT_PRODUCT; // Adjust the endpoint for editing

export const editProductAsync = createAsyncThunk(
  'editProduct/editProduct',
  async ({productId, productData, token}, thunkAPI) => {
    try {
      const response = await axios.put(`${apiUrl}/${productId}`, productData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        // Log the server error message
        console.error('Server Error:', error.response.data);
      } else {
        console.error('Request Failed:', error.message);
      }
      return thunkAPI.rejectWithValue('An error occurred.');
    }
  },
);

const initialState = {
  loading: false,
  success: false,
  error: null,
  validationErrors: [],
  editedProduct: null,
};

const editProductSlice = createSlice({
  name: 'editProduct',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(editProductAsync.pending, state => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(editProductAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.editedProduct = action.payload;
      })
      .addCase(editProductAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.validationErrors = [];
      });
  },
});

export default editProductSlice.reducer;
