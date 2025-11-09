import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Input({ label, type, ...props }) {
  const [focus, setFocus] = useState(false);

  const globalCn = `rounded-lg w-full px-2.5 py-2 shadow-md outline-none transition-all h-11
  ${
    focus
      ? "ring-2 ring-crimson-1000 border-transparent"
      : "border border-gray-300"
  }`;
  return (
    <div className="w-full flex flex-col">
      {type && (
        <div className="relative w-full">
          <label
            className={`flex items-center transition-all pointer-events-none duration-300 text-md font-semibold absolute px-2.5 py-2.5 justify-between w-full
      ${focus || props?.value ? "-translate-y-10" : ""}`}
          >
            <span>{label}</span>

            {type === "combobox" && (
              <span className="absolute right-2">
                {/* Position it properly without translating */}
                <ChevronDown size={18} className="pointer-events-none" />
                {/* Prevent interaction */}
              </span>
            )}
          </label>
        </div>
      )}

      {type === "text" && (
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={globalCn}
          placeholder={focus ? props.placeholder : ""}
          value={props.value}
        />
      )}

      {type === "combobox" && (
        <div>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className={globalCn}
            placeholder={focus ? props.placeholder : ""}
            value={props.value}
          />
        </div>
      )}
    </div>
  );
}
