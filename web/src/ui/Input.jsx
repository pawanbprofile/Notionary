import React from "react";

function Input({ id, title, name, placeholder, type }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="title" className="block w-full font-semibold text-lg">
        {title}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 text-lg "
      />
    </div>
  );
}

export default Input;
