import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { options } from "../ constants";
import { AnimatePresence, motion } from "motion/react";

export default function Input({ label, type, onOptionSelect, ...props }) {
  const [focus, setFocus] = useState(false);

  const handleOptionSelect = (option) => {
    if (onOptionSelect) {
      onOptionSelect(option);
    }
    setFocus(false);
  };

  const globalCn = `rounded-lg w-full px-2.5 py-2 shadow-md outline-none transition-all h-11
  ${
    focus
      ? "ring-2 ring-crimson-1000 border-transparent"
      : "border border-gray-300"
  }`;
  return (
    <div className="w-full flex flex-col relative">
      {/* Label rendering */}
      {type && (
        <div className="relative w-full flex">
          <label
            className={`flex items-center transition-all pointer-events-none duration-300 text-md font-semibold absolute px-2.5 py-2.5 justify-between w-full -translate-y-10
            {/*${focus || props?.value ? "-translate-y-10" : ""} */}
            `}
          >
            {label}
            {type === "combobox" && (
              <ChevronDown
                className={`${
                  focus ? "-rotate-180 " : ""
                } translate-y-10 ml-2 transition-all duration-500`}
              />
            )}
          </label>
        </div>
      )}

      {type === "text" && (
        <input
          name={props.name}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={globalCn}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          // placeholder={focus ? props.placeholder : ""}
        />
      )}

      {type === "combobox" && (
        <div>
          <input
            name={props.name}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className={globalCn}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            // placeholder={focus ? props.placeholder : ""}
          />
          {focus && (
            <AnimatePresence>
              <motion.div
                key="combobox-options"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <div className="absolute border rounded-lg w-full bg-white mt-2 shadow-lg z-50">
                  <ul className="z-50 overflow-y-auto max-h-48 mt-1 border-b-2 border-b-crimson-1000 rounded-b-lg">
                    {options.map((option, index) => (
                      <div className="flex items-center justify-between px-3 py-1 hover:bg-crimson-1000 hover:text-white hover:first:roundered-t-lg hover:last:rounded-b-lg cursor-pointer">
                        <li key={index} onClick={() => handleOptionSelect()}>
                          {option.name}
                        </li>
                        <Check size={18} />
                      </div>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      )}
    </div>
  );
}
