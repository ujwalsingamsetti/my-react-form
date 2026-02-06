import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  firstName: yup
    .string()
    .required()
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

export default function App() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Form submitted successfully!');
    reset();
  };
  const onErr = (errors) => console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit,onErr)} className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-5">
      <input
        type="text"
        placeholder="First name"
        {...register("firstName")}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="text-sm text-red-500 mt-1">{errors.firstName?.message}</p>

      <input
        type="text"
        placeholder="Last name"
        {...register("lastName")}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="text-sm text-red-500 mt-1">{errors.lastName?.message}</p>

      <input
        type="text"
        placeholder="Email"
        {...register("email")}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="text-sm text-red-500 mt-1">{errors.email?.message}</p>

      <input
        type="tel"
        placeholder="Mobile number"
        {...register("mobile")}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="text-sm text-red-500 mt-1">{errors.mobile?.message}</p>

      <select {...register("title")}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Select Title</option>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>
      <p className="text-sm text-red-500 mt-1">{errors.title?.message}</p>

      <textarea
        placeholder="About you"
        {...register("about")}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="datetime-local"
        {...register("dateTime")}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
        <div>
    <p className="font-medium text-gray-700 mb-2">
      Are you a developer?
    </p>
    <div className="flex gap-6">
      <label className="flex items-center gap-2">
        <input
          type="radio"
          value="Yes"
          {...register("developer")}
          className="accent-blue-600"
        />
        Developer
      </label>
      <label className="flex items-center gap-2">
        <input
          type="radio"
          value="No"
          {...register("developer")}
          className="accent-blue-600"
        />
        Not Developer
      </label>
    </div>
    <p className="text-sm text-red-500 mt-1">
      {errors.developer?.message}
    </p>
  </div>

      <div>
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        {...register("acceptTerms")}
        className="accent-blue-600"
      />
      <span className="text-gray-700">
        Accept Terms & Conditions
      </span>
    </label>
    <p className="text-sm text-red-500 mt-1">
      {errors.acceptTerms?.message}
    </p>
  </div>
      <input
        type="password"
        placeholder="Password"
        {...register("password")}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="text-sm text-red-500 mt-1">{errors.password?.message}</p>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">Submit</button>
    </form>
  );
}
