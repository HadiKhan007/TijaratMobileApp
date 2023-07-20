import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../../utilities';

export const addProductApi = async credentials => {
  try {
    const response = await axios.post(
      BASE_URL + ENDPOINTS.ADDPRODUCT,
      credentials,
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
