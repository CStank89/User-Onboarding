import * as yup from 'yup'

export default yup.object().shape({
  password: yup.string()
    .required('password is required')
    .min(8, 'Password must be 8 chars or longer!'),
  email: yup.string()
    .email('Must be a valid email address')
    .required('Email is required'),
 
})