import React from "react";

export const PasswordInput = ({ label, placeholder, value, setValue }) => {
  return (
    <div className="textInputDiv flex flex-col space-y-2 w-full">
      <label htmlFor={label} className="font-semibold ">
        {label}
      </label>
      <input
        type="password"
        placeholder={placeholder}
        className="p-2 border border-gray-500 border-solid rounded placeholder-gray-400"
        id={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
