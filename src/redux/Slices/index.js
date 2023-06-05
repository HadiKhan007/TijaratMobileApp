import {combineReducers} from 'redux';
import authSlice from './authSlice';
import {PostApi} from '../API/postAPI';
const rootReducer = combineReducers({
  [PostApi.reducerPath]: PostApi.reducer,
  authSlice,
});

export default rootReducer;
