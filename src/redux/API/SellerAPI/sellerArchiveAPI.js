import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../../utilities';
import {useDispatch} from 'react-redux';
import {loginAPI} from '../authApi';

export const archiveProductAPI = userId => async credentials => {
  try {
    credentials(loginAPI);
    const response = await axios.get(
      BASE_URL + ENDPOINTS.ARCHIVEPRODUCT + userId,
      credentials,
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
