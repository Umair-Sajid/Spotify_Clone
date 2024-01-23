import React from "react";

export const InputText = ({
  label,
  placeholder,
  value,
  setValue,
  labelClassName,
}) => {
  return (
    <div className="textInputDiv flex flex-col space-y-2 w-full">
      <label htmlFor={label} className={` font-semibold ${labelClassName} `}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="p-2 border border-gray-500 border-solid rounded placeholder-gray-400"
        id={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
