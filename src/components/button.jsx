import React from "react";

export default function Button({ children, color, ...props }) {
  return (
    <button
      {...props}
      className={`${
        color === "crimson"
          ? "bg-crimson-900 hover:bg-crimson-1000 text-black"
          : "bg-white text-crimson-1000 border-0"
      },
        font-semibold p-3 rounded-full hover:translate-y-[-1px] 
        hover:transition-all hover:duration-100 `}
    >
      {children || "Button"}
    </button>
  );
}
