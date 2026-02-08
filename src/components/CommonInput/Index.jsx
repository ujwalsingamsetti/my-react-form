import React from 'react'
import CommonErr from '../CommonError';

function CommonInput({type, register, errors, name, placeholder, lable,}) {
  console.log(placeholder, name)
  console.log(errors, 'errors in common input');

  return (
    <>
    <div className=' flex-col'>
    <label htmlFor="">{lable}</label>
    <input
        name={name?name:''} 
        type={type}
        placeholder={placeholder}
        {...register ? register(name) : {}}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <CommonErr
      
      message={errors?.message}
      
      />
    </div>
     
      </>
  )
}

export default CommonInput