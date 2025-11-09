import React from "react";

export default function Input(type, placeholder, ...props) {
  return (
    <div>
      {type === "text" && <input {...props} placeholder={placeholder} />}
    </div>
  );
}
