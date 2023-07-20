import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../../utilities';

export const dashboardAPI = async credentials => {
  try {
    const response = await axios.get(
      BASE_URL + ENDPOINTS.DASHBOARD,
      credentials,
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
