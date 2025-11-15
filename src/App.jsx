import "./App.css";
import Hero from "./sections/hero";
import Filters from "./sections/filters";
import InnovationRoadmapStrategicPlanning from "./sections/innovation-roadmap";
import { pillars } from "./ constants";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Card from "./components/card";
import Button from "./components/button";
import Modal from "./components/modal";
import Assessment from "./sections/assessment";

function App() {
  const [inputFilter, setInputFilter] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [openModal, setOpenModal] = useState(false);

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

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

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
              <div className="flex flex-col" key={pillar.id}>
                <div className="flex flex-col">
                  <h2 className="text-3xl font-bold text-red-950">
                    {pillar?.title}
                  </h2>
                  <p className="text-gray-500">{pillar?.description}</p>
                </div>

                <AnimatePresence>
                  <motion.div
                    key="ai-readiness"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <div className="flex flex-col mt-8 mb-12 w-full">
                      {pillar?.title === "AI Readiness: Data & Systems" && (
                        <div className="flex flex-col gap-6">
                          {pillar?.subcontents?.map((subcontent) => {
                            return (
                              <Card
                                key={subcontent.id}
                                title={subcontent.title}
                                description={subcontent.description}
                              >
                                {subcontent.img && (
                                  <div className="rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                                    <img
                                      src={subcontent.img}
                                      alt={subcontent.title}
                                      className="hover:scale-110 hover:transition-all hover:duration-300 p-6 w-6/12 rounded-lg"
                                    />
                                  </div>
                                )}

                                {subcontent?.component && (
                                  <div className="mt-6">
                                    <Button
                                      className="h-12"
                                      onClick={() => setOpenModal(true)}
                                      color="crimson"
                                    >
                                      Start with AI Readiness
                                    </Button>
                                  </div>
                                )}

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                  {subcontent.items !== 0 &&
                                    subcontent?.items?.map((item) => {
                                      return (
                                        <Card
                                          key={item?.id}
                                          title={item?.title}
                                          description={item?.description}
                                          className="flex flex-col justify-between w-full h-full hover:-translate-y-1 hover:shadow-[0px_13px_15px_5px_rgba(0,0,0,0.1)] transition-all duration-200 rounded-xl border border-gray-200 bg-white p-6"
                                        >
                                          <a
                                            href={item.url}
                                            className="font-semibold text-red-700 hover:underline"
                                          >
                                            {item?.label}
                                          </a>
                                        </Card>
                                      );
                                    })}
                                </div>
                              </Card>
                            );
                          })}
                        </div>
                      )}

                      {pillar?.title === "Generative AI Toolkit Overview" && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                          {pillar?.subcontents?.map((subcontent) => {
                            return (
                              <Card
                                icon={
                                  subcontent.icon
                                    ? React.createElement(subcontent.icon, {
                                        className: "w-4 h-4 text-red-900",
                                      })
                                    : null
                                }
                                title={subcontent.title}
                                titleColor="text-red-950"
                                description={subcontent.description}
                                className="flex flex-col justify-between w-full h-full hover:-translate-y-1 hover:shadow-[0px_13px_15px_5px_rgba(0,0,0,0.1)] transition-all duration-200 rounded-xl border border-gray-200 bg-white p-6"
                              >
                                <a
                                  href={subcontent.url}
                                  className="font-semibold text-red-700 hover:underline"
                                >
                                  {subcontent.label}
                                </a>
                              </Card>
                            );
                          })}
                        </div>
                      )}

                      {pillar?.title === "Innovation Roadmap & Strategy" && (
                        <InnovationRoadmapStrategicPlanning />
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {openModal && (
        <Modal>
          <Assessment setOpenModal={() => setOpenModal(false)} />
        </Modal>
      )}

      {/* FOOTER */}
      <div className="flex flex-col items-center justify-center bg-[#6B0000] text-white py-10">
        <p className="text-lg">Bright Solutions • Generative AI Toolkit</p>
      </div>
    </div>
  );
}

export default App;
