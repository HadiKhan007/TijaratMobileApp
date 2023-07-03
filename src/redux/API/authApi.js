import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../utilities';

export const loginAPI = async credentials => {
  try {
    const response = await axios.post(BASE_URL + ENDPOINTS.LOGIN, credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const signUpApi = async credentials => {
  try {
    const response = await axios.post(BASE_URL + ENDPOINTS.SIGNUP, credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const forgotPassApi = async credentials => {
  try {
    const response = await axios.post(
      BASE_URL + ENDPOINTS.FORGOT_PASS,
      credentials,
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const changePassApi = async credentials => {
  try {
    const response = await axios.post(
      BASE_URL + ENDPOINTS.CHANGE_PASS,
      credentials,
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
