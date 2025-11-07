import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion } from "motion/react";
import Hero from "./sections/hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <motion.div
        className=""
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>
    </div>
  );
}

export default App;
