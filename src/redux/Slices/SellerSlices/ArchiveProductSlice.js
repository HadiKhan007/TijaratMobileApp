import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {archiveProductAPI} from '../../API/SellerAPI/sellerArchiveAPI';

export const archiveProductNew = createAsyncThunk(
  'auth/archiveProduct',
  async userData => {
    const response = await archiveProductAPI(userData);
    return response.data;
  },
);
const initialState = {
  archive: [],
};

const productSlice = createSlice({
  name: 'archive',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        product => product.id !== action.payload,
      );
    },
  },
});

export const {addProduct, removeProduct} = productSlice.actions;
export default productSlice.reducer;
