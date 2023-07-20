import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {addProductApi} from '../../API/SellerAPI/sellerAddProductApi';

export const addProductNew = createAsyncThunk(
  'auth/addProduct',
  async userData => {
    const response = await addProductApi(userData);
    return response.data;
  },
);
const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
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
