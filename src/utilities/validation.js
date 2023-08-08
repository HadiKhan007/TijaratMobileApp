import * as yup from 'yup';

export const loginFormFields = {
  email: '',
  password: '',
};

export const registerFormFields = {
  fname: '',
  lname: '',
  email: '',
  password: '',
};

export const sRegisterFormFields = {
  shopName: '',
  streetAddress: '',
  country: '',
  city: '',
  zipCode: '',
  cnicName: '',
  cnicNum: '',
  about: '',
  description: '',
};

// export const updateProfileFormFileds = {
//   userName: '',
//   phoneNumber: '',
// };

export const forgotPass = {
  email: '',
};

// export const resetPassFormFields = {
//   password: '',
//   confirmPassword: '',
// };

export const updatePassFormFields = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
};
export const AddProductFormFields = {
  productName: '',
  price: '',
  shortDetails: '',
  description: '',
  weight: '',
  discount: '',
  stock: '',
  condition: '',
  addBrand: '',
  expectedDelivery: '',
};

export const CounterOfferFormField = {
  amount: '',
};
export const counterOfferVS = yup.object().shape({
  amount: yup.string().required('Amount required'),
});
export const addProductVS = yup.object().shape({
  productName: yup.string().required('Product name required'),
  price: yup.string().required('Price required'),
  shortDetails: yup.string().required('ShortDetails required'),
  description: yup.string().required('Description required'),
  weight: yup.string().required('Weight required'),
  expectedDelivery: yup.string().required('Expected Delivery'),
  addBrand: yup.string().required('Brand Name Required'),
});
export const loginVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password Required'),
});

export const forgotVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
});

// export const resetPassVS = yup.object().shape({
//   password: yup
//     .string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('New Password Required'),
//   confirmPassword: yup
//     .string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Confirm Password Required')
//     .oneOf([yup.ref('password'), null], 'New Password does not match'),
// });

export const registerVS = yup.object().shape({
  fname: yup.string().required('First Name Required').label('fname'),
  lname: yup.string().required('Last Name Required').label('lname'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password Required'),
});

// export const registerForEvent = yup.object().shape({
//   name: yup.string().required('Name Required').label('name'),
//   email: yup
//     .string()
//     .required('Email Required')
//     .email('Please provide a valid email address'),
//   phone: yup
//     .number()
//     .typeError('Invalid contact number')
//     .required('Contact Number Required'),
// });

export const updatePassVS = yup.object().shape({
  currentPassword: yup.string().required('Current Password Required'),
  newPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('New Password Required')
    .oneOf([yup.ref('confirmPassword'), null], 'New Password does not match'),

  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm Password Required')
    .oneOf([yup.ref('newPassword')], 'Confirm Password does not match'),
});

export const updateProfileVS = yup.object().shape({
  userName: yup.string().required('Name Required').label('name'),
  phoneNumber: yup
    .number()
    .typeError('Invalid contact number')
    .required('Phone Number Required'),
  twitter: yup.string().url().typeError('Invalid url'),
  instagram: yup.string().url().typeError('Invalid url'),
  facebook: yup.string().url().typeError('Invalid url'),
});

export const sRegisterVS = yup.object().shape({
  shopName: yup.string().required('Shop Name Required').label('name'),
  streetAddress: yup.string().required('Address Required').label('address'),
  country: yup.string().required('Country Name Required').label('country'),
  city: yup.string().required('City name Required').label('city'),
  zipCode: yup
    .string()
    .required('Zip Code required')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(5, 'Must be exactly 5 digits')
    .max(5, 'Must be exactly 5 digits'),
  cnicName: yup.string().required('CNIC name Required').label('name'),
  cnicNum: yup
    .string()
    .required('CNIC number reuired')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(13, 'Must be exactly 5 digits')
    .max(13, 'Must be exactly 5 digits'),
  description: yup
    .string()
    .required('Description Required')
    .label('description'),
});
