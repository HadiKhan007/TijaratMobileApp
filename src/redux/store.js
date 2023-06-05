import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from './Slices';
import {PostApi} from './API/postAPI';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authSlice'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat([PostApi.middleware]),
});

const persistor = persistStore(store);

export {store, persistor};
