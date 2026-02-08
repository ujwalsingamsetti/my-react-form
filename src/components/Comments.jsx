import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CommonInput from './CommonInput/Index';
import schema from './scheme/index';

export default function App() {
const [view,setView]=useState(true)
const handele=()=>{
  setView(!view)
}
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema)
  });
useEffect(()=>{ alert("clicked")},[])
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Form submitted successfully!');
    reset();
  };

const onErr = (errors) => console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit,onErr)} className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-5">
      {/* <input
        type="text"
        placeholder="First name"
        {...register("firstName")}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      /> */}
    {/* <p className="text-sm text-red-500 mt-1">{errors.firstName?.message}</p> */}
      <CommonInput type="text"
      lable={"First Name"}
        placeholder="First name" name="firstName" errors= {errors.firstName} register={register}/>

      <CommonInput
        type="text"
        lable={"Last Name"}
        placeholder="Last name"
        name={"lastName"}
        errors= {errors.lastName} register={register}
      />
      <CommonInput
        type="text"
        lable={"Email"}
        placeholder="Email"
        name={"email"}
        errors= {errors.email} register={register}
      />
     <CommonInput
        type="tel"
        lable={"Mobile"}
        placeholder="Mobile number"
        name={"mobile"}
        errors= {errors.mobile} register={register}
     />

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
      <CommonInput
        type={view?"text":"password"}
        lable={"Password"}
        placeholder="Password"
        name={"password"}
        errors= {errors.password} register={register}
      />
       <button onClick={handele}>{!view?"show":"hide"}</button>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">Submit</button>
    </form>
  );
}
