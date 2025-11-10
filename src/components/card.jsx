import React from "react";

export default function Card({
  title,
  description,
  titleColor = "text-red-800", // default title color
  children,
  className = "",
}) {
  return (
    <div
      className={`bg-white border border-red-950/10 rounded-2xl p-5 shadow-sm ${className}`}
    >
      {title && (
        <h3 className={`text-xl font-semibold mb-2 ${titleColor}`}>{title}</h3>
      )}
      {description && (
        <p className="text-sm text-gray-700 mb-4">{description}</p>
      )}
      {children}
    </div>
  );
}
