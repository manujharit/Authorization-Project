import React from 'react';

const FormInput = ({ name, placeholder, type = 'text', icon, register, errors, validation }) => {
  return (
    <div className="flex mb-4 mt-4 shadow appearance-none border border-solid border-cyan-800 rounded justify-center items-center">
      <img className="h-10 w-11 block rounded m-1 text-gray-700 font-bold text-xl bg-cyan-300" src={icon} alt={`${name}-icon`} />
      <input
        className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {errors[name] && <span className="text-red-500 text-sm">{errors[name].message}</span>}
    </div>
  );
};

export default FormInput;