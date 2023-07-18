import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../../utilities';

export const archiveProductAPI = async credentials => {
  try {
    const response = await axios.post(
      BASE_URL + ENDPOINTS.ARCHIVEPRODUCT,
      credentials,
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
