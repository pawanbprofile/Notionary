import React from "react";

function TextArea({ id, title, name, placeholder, type, value, onChange }) {
  console.log("value : ", value);
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="title" className="block w-full font-semibold text-lg">
        {title}
      </label>
      <textarea
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 text-lg "
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextArea;
