import React from "react";

export default function Card({
  icon,
  title,
  description,
  titleColor = "text-red-800",
  titleSize = "text-xl", // 🆕 Add default font size for title
  children,
  className = "",
}) {
  return (
    <div
      className={`w-full bg-white border border-red-950/10 rounded-2xl p-5 shadow-sm ${className}`}
    >
      {title && (
        <div className="flex gap-2 mb-2 flex-col lg:flex-row lg:items-center">
          {icon && <span className="flex-shrink-1">{icon}</span>}
          <h3 className={`${titleSize} font-semibold ${titleColor}`}>
            {title}
          </h3>
        </div>
      )}
      {description && (
        <p className="text-sm text-gray-700 mb-4">{description}</p>
      )}
      {children}
    </div>
  );
}
