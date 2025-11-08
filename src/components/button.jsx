import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-crimson-900 font-semibold p-3 rounded-full 
          hover:translate-y-[-1px] hover:transition-all hover:duration-100 hover:bg-crimson-1000"
    >
      {children || "Button"}
    </button>
  );
}
