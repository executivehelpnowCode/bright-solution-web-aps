import { ChevronDown, LucideCheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Input({
  name,
  value,
  label,
  placeholder,
  type,
  options = [],
  onInputChange = () => {},
  onOptionSelect = () => {},
}) {
  const optionsRef = useRef(null);
  const [focus, setFocus] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");

  // Derived values
  const selectedValue = options.find((o) => o.name === value) || null;
  const filteredOptions = options?.filter((option) =>
    option.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  // Styles
  const globalCn = `rounded-lg w-full px-2.5 py-2 shadow-md outline-none transition-all h-11
  ${
    focus
      ? "ring-2 ring-crimson-1000 border-transparent"
      : "border border-gray-300"
  }`;

  // Handlers
  const handleOptionSelect = (name) => {
    const selected = options?.find((option) => option.name === name);
    onOptionSelect(selected);
    setFocus(false);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // If user is editing manually, clear the selected option
    if (selectedOption && e.target.value !== selectedOption.name) {
      setSelectedOption(null);
    }
  };

  // Side effects
  useEffect(() => {
    setSelectedOption(selectedValue);
  }, [selectedValue]);
  useEffect(() => {
    onInputChange(inputValue);
  }, [inputValue]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setFocus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [optionsRef]);

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
                onClick={() => setFocus(true)}
                className={`${
                  focus ? "-rotate-180 " : ""
                } translate-y-10 ml-2 transition-all duration-500 cursor-pointer text-gray-500/50`}
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
          onChange={handleInputChange}
          value={value}
        />
      )}

      {type === "combobox" && (
        <>
          <input
            name={name}
            onFocus={() => setFocus(true)}
            className={globalCn}
            placeholder={placeholder}
            onChange={handleInputChange}
            value={inputValue || selectedOption?.name || ""}
          />
          {focus && (
            <div ref={optionsRef}>
              <AnimatePresence className="bg-red-200">
                <div className="relative z-50">
                  <motion.div
                    key="combobox-options"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="absolute border rounded-lg w-full bg-white mt-2 shadow-lg">
                      <ul className="overflow-y-auto max-h-48 mt-1 border-b-4 border-b-crimson-1000 rounded-b-lg">
                        {filteredOptions.length === 0 && (
                          <li className="text-gray-500 px-3 py-1 flex items-center justify-center">
                            No options found.
                          </li>
                        )}
                        {filteredOptions.map((option) => (
                          <li
                            key={option?.id}
                            className={`${
                              selectedOption?.id === option.id
                                ? "bg-crimson-1000 text-white"
                                : "text-gray-800"
                            }
                            flex z-50 items-center justify-between px-3 py-1 hover:bg-red-100 hover:text-black 
                            hover:first:roundered-t-lg hover:last:rounded-b-lg cursor-pointer`}
                            onClick={() => handleOptionSelect(option.name)}
                          >
                            {option.name}
                            {selectedOption?.id === option.id ? (
                              <LucideCheckCircle2
                                fill="white"
                                className=" pointer-events-none text-crimson-1000"
                                size={24}
                              />
                            ) : (
                              <></>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </AnimatePresence>
            </div>
          )}
        </>
      )}
    </div>
  );
}
