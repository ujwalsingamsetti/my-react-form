import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

const schema = yup.object({
    firstName: yup
      .string()
      .required("First name is required")
      .max(100, 'Maximum 100 characters'),
  
    lastName: yup
      .string()
      .required('Last name is required')
      .max(100, 'Maximum 100 characters'),
  
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
  
    mobile: yup
      .string()
      .required('Mobile number is required')
      .min(6, 'Minimum 6 digits')
      .max(12, 'Maximum 12 digits'),
    
  
    title: yup
      .string()
      .required('Title is required'),
  
    developer: yup
      .string()
      .required('Please select an option'),
  
    password: yup
      .string()
      .required('Password is required')
      .min(10, 'Minimum 10 characters'),
  
    acceptTerms: yup
      .boolean()
      .oneOf([true], 'You must accept terms'),
});

export const resolver = yupResolver(schema);
export default schema;