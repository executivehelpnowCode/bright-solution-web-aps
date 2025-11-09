import { div } from "motion/react-client";
import React from "react";

export default function Button({ children, color, ...props }) {
  return (
    <button
      {...props}
      className={`${
        color === "crimson"
          ? "bg-crimson-900 hover:bg-crimson-1000 text-white"
          : "bg-white text-crimson-1000 border-0"
      }, ${props.className}
        font-semibold rounded-full hover:translate-y-[-1px] 
        hover:transition-all hover:duration-100 px-6 shadow-md hover:shadow-md`}
    >
      <span className="flex items-center justify-center">
        {children || "Button"}
      </span>
    </button>
  );
}
