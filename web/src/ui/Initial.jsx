import React from "react";

function Initial({ name }) {
  const initial = name ? name.charAt(0).toUpperCase() : "?";
  return (
    <div
      className="w-12 h-12 flex rounded-full justify-center items-center text-2xl  font-bold"
      style={{
        backgroundColor: "var(--color-success)",
        color: "var(--color-background)",
      }}
    >
      {initial}
    </div>
  );
}

export default Initial;
