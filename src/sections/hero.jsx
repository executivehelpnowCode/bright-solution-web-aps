import Section from "../components/container";
import { AnimatePresence, motion } from "motion/react";

export default function Hero() {
  return (
    <div className="min-h-[100vh] w-full bg-gradient-to-br from-crimson-1400 via-crimson-1200 to-crimson-1000 pt-5 ">
      <div className="text-white flex flex-col justify-center items-center">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="px-[10px] py-[5px] text-[12px] text-crimson-1200 bg-white rounded-full my-4">
              Bright Solutions • Generative AI
            </div>

            <div>
              <div className="flex flex-col gap-3 items-center">
                <h1 className="text-5xl font-extrabold">
                  Generative AI Toolkit
                </h1>
                <h2 className="text-xl">
                  Your hub for responsible, scalable, human‑centered AI
                  adoption.
                </h2>
              </div>
            </div>
          </motion.div>
          {/* dummy yt video placeholderf */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, ease: "easeOut" }}
          >
            <video
              src=""
              className="rounded-2xl w-[800px] lg:w-[1050px] h-[460pX] lg:h-[550px] bg-[#282828] sm my-6"
            ></video>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, ease: "easeOut" }}
            className="flex gap-3"
          >
            <button
              className="bg-crimson-900 font-semibold p-3 rounded-full 
          hover:translate-y-[-1px] hover:transition-all hover:duration-100 hover:bg-crimson-1000"
            >
              Start with AI Readiness
            </button>
            <button
              className="bg-white text-crimson-1000 font-semibold p-3 rounded-full 
          hover:translate-y-[-3px] hover:transition-all hover:duration-100"
            >
              Jump to Toolkit Overview
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
