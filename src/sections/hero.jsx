import Button from "../components/button";
import Section from "../components/container";
import { AnimatePresence, motion } from "motion/react";

export default function Hero() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-crimson-1400 via-crimson-1200 to-crimson-1000 pt-5">
      <div className="text-white flex flex-col justify-center items-center px-4 md:px-8">
        <AnimatePresence>
          {/* Hero Header */}
          <motion.div
            key="hero-header"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="px-3 py-1.5 text-xs sm:text-sm text-crimson-1200 bg-white rounded-full my-4">
              Bright Solutions • Generative AI
            </div>

            <div className="flex flex-col gap-3 items-center text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                Generative AI Toolkit
              </h1>
              <h2 className="text-sm sm:text-base md:text-xl max-w-md sm:max-w-lg md:max-w-2xl">
                Your hub for responsible, scalable, human‑centered AI adoption.
              </h2>
            </div>
          </motion.div>

          {/* Hero Video */}
          <motion.div
            key="hero-video"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="w-full flex justify-center my-6"
          >
            <div className="w-full max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[976px] aspect-video rounded-2xl overflow-hidden bg-[#282828]">
              <iframe
                src="https://www.youtube.com/embed/YYjF878CnrM?start=1"
                className="w-full h-full"
                title="Generative AI Video"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Hero Buttons */}
          <motion.div
            key="hero-buttons"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button onClick={() => console.log("clicked")} color="crimson">
              Start with AI Readiness
            </Button>
            <Button onClick={() => console.log("clicked")} color="white">
              Jump to Toolkit Overview
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
