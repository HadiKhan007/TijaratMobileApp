import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './Slices';

// Import other reducers if needed

const store = configureStore({
  reducer: rootReducer,
});

export default store;
