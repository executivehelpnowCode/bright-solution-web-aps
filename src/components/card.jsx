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
      className={`bg-white border border-red-950/10 rounded-2xl p-5 shadow-sm ${className}`}
    >
      {title && (
        <div className="flex items-center gap-2 mb-2">
          {icon && <span className="flex-shrink-0">{icon}</span>}
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
