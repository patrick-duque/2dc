import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

export const robotSchema = yup.object().shape({
  name: yup.string().required('Robot name is required'),
  purpose: yup.string().required('Robot purpose is required'),
});

export const searchSchema = yup.object().shape({
  search: yup.string(),
});
