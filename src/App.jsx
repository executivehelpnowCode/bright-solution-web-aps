import "./App.css";
import Hero from "./sections/hero";
import Filters from "./sections/filters";
import GenerativeAiToolkit from "./sections/generative-ai-toolkit";
import InnovationRoadmapStrategicPlanning from "./sections/innovation-roadmap";
import { pillars } from "./ constants";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Card from "./components/card";
import { div } from "motion/react-client";

function App() {
  const [inputFilter, setInputFilter] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  const filteredPillars = pillars.filter((pillar) => {
    const matchesInput = pillar?.title
      ?.toLowerCase()
      .includes(inputFilter.toLowerCase());
    const matchesOption =
      !selectedOption || pillar?.title?.includes(selectedOption);

    return matchesInput && matchesOption;
  });

  return (
    <div>
      <Hero />
      <Filters
        onInputChange={setInputFilter}
        onComboboxSelect={setSelectedOption}
        onFiltersClear={() => {
          setSelectedOption("");
          setInputFilter("");
        }}
      />

      <div
        id="main"
        className="py-10 flex items-center justify-center lg:px-56 px-6 "
      >
        <div className="w-full">
          {filteredPillars?.length === 0 && (
            <div className="w-full flex items-center justify-center">
              No matches found.
            </div>
          )}
          {filteredPillars?.map((pillar) => {
            return (
              <div className="flex flex-col">
                <div key={pillar.id} className="flex flex-col">
                  <h2 class="text-3xl font-bold text-red-950">
                    {pillar?.title}
                  </h2>
                  <p class="text-gray-500">{pillar?.description}</p>
                </div>
                <AnimatePresence>
                  <motion.div
                    key="ai-readiness"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <div class="flex flex-col mt-8 mb-12 w-full">
                      {pillar?.title === "AI Readiness: Data & Systems" && (
                        <div className="flex flex-col gap-6">
                          {pillar?.subcontents?.map((subcontent) => {
                            return (
                              <Card
                                title={subcontent.title}
                                description={subcontent.description}
                              >
                                {subcontent.img && (
                                  <div className="rounded-xl flex items-center justify-center shadow-lg shadow-dark-500/50 overflow-hidden">
                                    <img
                                      src={subcontent.img}
                                      alt={subcontent.title}
                                      className="hover:scale-110 hover:transition-all hover:duration-300 p-6 w-6/12 flex items-center justify-center 
                                    rounded-lg"
                                    />
                                  </div>
                                )}

                                <div className="grid grid-cols-2 gap-4">
                                  {subcontent.items !== 0 &&
                                    subcontent?.items?.map((item) => {
                                      return (
                                        <Card
                                          key={item?.id}
                                          title={item?.title}
                                          description={item?.description}
                                          className="flex flex-col justify-between w-full h-full hover:-translate-y-1 hover:shadow-[0px_13px_15px_5px_rgba(0,0,0,0.1)] transition-all duration-200 rounded-xl border border-gray-200 bg-white p-6"
                                        ></Card>
                                      );
                                    })}
                                </div>

                                <p className="text-sm text-gray-700 mt-3">
                                  {/* {subcontent?.footer} */}
                                </p>
                              </Card>
                            );
                          })}
                        </div>
                      )}

                      {pillar?.title === "Generative AI Toolkit Overview" && (
                        <div className="flex flex-col gap-6">
                          <GenerativeAiToolkit />
                        </div>
                      )}

                      {pillar?.title === "Innovation Roadmap & Strategy" && (
                        <div className="flex flex-col gap-6">
                          <InnovationRoadmapStrategicPlanning />
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#6B0000] text-white py-10">
        <p class="text-lg">Bright Solutions • Generative AI Toolkit</p>
      </div>
    </div>
  );
}

export default App;
