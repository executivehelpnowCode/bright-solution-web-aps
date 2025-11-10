import { Check, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Input({
  name,
  value,
  label,
  placeholder,
  type,
  options,
  onClick,
  onChange,
  onOptionSelect = () => {},
}) {
  const [focus, setFocus] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (id) => {
    const selected = options?.find((option) => option.id === id);
    setSelectedOption(selected);
    onOptionSelect(selected?.id);
    console.log(selected);
  };

  // useEffect(() => {
  //   console.clear();
  //   console.log(selectedOption);
  // }, [selectedOption]);

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
            className={`flex items-center transition-all duration-300 text-md font-semibold absolute px-2.5 py-2.5 justify-between w-full -translate-y-10
            {/*${focus || value ? "-translate-y-10" : ""} */}
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
          name={name}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={globalCn}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      )}

      {type === "combobox" && (
        <>
          <input
            name={name}
            onFocus={() => setFocus(true)}
            onBlur={() => setTimeout(() => setFocus(false), 150)}
            className={globalCn}
            placeholder={placeholder}
            onChange={onChange}
            value={value || selectedOption?.name || ""}
          />
          {focus && (
            <AnimatePresence className="bg-red-200">
              <div className="relative z-50">
                <motion.div
                  key="combobox-options"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="absolute border rounded-lg w-full bg-white mt-2 shadow-lg z-50">
                    <ul className=" z-50 overflow-y-auto max-h-48 mt-1 border-b-2 border-b-crimson-1000 rounded-b-lg">
                      {options.map((option) => (
                        <li
                          key={option?.id}
                          className="flex items-center justify-between px-3 py-1 hover:bg-crimson-1000 hover:text-white hover:first:roundered-t-lg hover:last:rounded-b-lg cursor-pointer"
                          onClick={() => handleOptionSelect(option.id)}
                        >
                          {option.name}
                          {selectedOption?.name ? <Check size={18} /> : <></>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </AnimatePresence>
          )}
        </>
      )}
    </div>
  );
}
