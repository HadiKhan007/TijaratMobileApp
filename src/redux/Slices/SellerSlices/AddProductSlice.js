import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../../utilities';

const apiUrl = BASE_URL + ENDPOINTS.ADD_PRODUCTS;

export const addProductAsync = createAsyncThunk(
  'addProduct/addProduct',
  async ({productData, token}, thunkAPI) => {
    try {
      const response = await axios.post(apiUrl, productData, {
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
  addedProduct: null,
};

const addProductSlice = createSlice({
  name: 'addProduct',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addProductAsync.pending, state => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.addedProduct = action.payload;
      })
      .addCase(addProductAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.validationErrors = [];
      });
  },
});

export default addProductSlice.reducer;
