import axios from 'axios';

export const loginAPI = async credentials => {
  try {
    const response = await axios.post(
      'https://api.tijarat.com/login',
      credentials,
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const signUpApi = async credentials => {
  try {
    const response = await axios.post(
      'https://api.tijarat.com/register',
      credentials,
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const forgotPassApi = async credentials => {
  try {
    const response = await axios.post(
      'https://api.tijarat.com/forgot-password',
      credentials,
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
