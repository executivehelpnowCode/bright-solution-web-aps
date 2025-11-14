import "./App.css";
import Hero from "./sections/hero";
import Filters from "./sections/filters";
import GenerativeAiToolkit from "./sections/generative-ai-toolkit";
import InnovationRoadmapStrategicPlanning from "./sections/innovation-roadmap";
import { pillars } from "./ constants";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Card from "./components/card";

function App() {
  const [inputFilter, setInputFilter] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  // -------------------------
  // MODAL LOGIC + ASSESSMENT
  // -------------------------
  const [openModal, setOpenModal] = useState(false);

  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  });

  const [result, setResult] = useState(null);

  const handleSelect = (question, value) => {
    setAnswers((prev) => ({ ...prev, [question]: value }));
  };

  const handleSubmitAssessment = () => {
    const values = Object.values(answers);

    if (values.includes("")) {
      alert("Please answer all questions.");
      return;
    }

    const avg =
      values.reduce((acc, val) => acc + Number(val), 0) / values.length;

    let innovation = "";
    let ai = "";

    if (avg >= 1 && avg < 2) {
      innovation = "Level 1: Basic Digital";
      ai = "Exploring";
    } else if (avg >= 2 && avg < 3) {
      innovation = "Level 2: Connected";
      ai = "Planning";
    } else if (avg >= 3 && avg < 4) {
      innovation = "Level 3: Integrated";
      ai = "Implementing";
    } else if (avg >= 4 && avg < 5) {
      innovation = "Level 4: Intelligence Driven";
      ai = "Scaling";
    } else if (avg === 5) {
      innovation = "Level 5: Transformed";
      ai = "Embedded";
    }

    setResult({
      average: avg.toFixed(1),
      innovation,
      ai,
    });
  };

  // -------------------------
  // END ASSESSMENT LOGIC
  // -------------------------

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
                                    
                                         {/* --- ASSESSMENT BUTTON --- */}
                                    <button
                                      onClick={() => setOpenModal(true)}
                                      className="mt-6 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800"
                                    >
                                      Start Self-Assessment
                                    </button>
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
                        <GenerativeAiToolkit />
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

      {/* FOOTER */}
      <div className="flex flex-col items-center justify-center bg-[#6B0000] text-white py-10">
        <p className="text-lg">Bright Solutions • Generative AI Toolkit</p>
      </div>

      {/* ------------------------------- */}
      {/* ----------- MODAL ------------- */}
      {/* ------------------------------- */}

      {openModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-red-900">
                Innovation & AI Readiness Assessment
              </h2>
              <button
                onClick={() => setOpenModal(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Q1 */}
              <div>
                <p className="font-semibold text-gray-800">
                  Question 1: Data & Technology Foundation
                </p>
                <select
                  className="mt-1 w-full border rounded-lg p-2"
                  value={answers.q1}
                  onChange={(e) => handleSelect("q1", e.target.value)}
                >
                  <option value="">Select answer…</option>
                  <option value="1">
                    A. Manual processes / paper records
                  </option>
                  <option value="2">
                    B. Some digital systems, limited connection
                  </option>
                  <option value="3">
                    C. Most data in digital systems
                  </option>
                  <option value="4">
                    D. Integrated platforms, data-driven decisions
                  </option>
                  <option value="5">
                    E. Fully integrated tech + real-time data
                  </option>
                </select>
              </div>

              {/* Q2 */}
              <div>
                <p className="font-semibold text-gray-800">
                  Question 2: AI Awareness & Vision
                </p>
                <select
                  className="mt-1 w-full border rounded-lg p-2"
                  value={answers.q2}
                  onChange={(e) => handleSelect("q2", e.target.value)}
                >
                  <option value="">Select answer…</option>
                  <option value="1">A. Little AI knowledge</option>
                  <option value="2">B. Interest but no formal plan</option>
                  <option value="3">
                    C. AI vision + leadership buy-in
                  </option>
                  <option value="4">
                    D. Actively piloting AI use cases
                  </option>
                  <option value="5">
                    E. Rolling out multiple AI org-wide
                  </option>
                </select>
              </div>

              {/* Q3 */}
              <div>
                <p className="font-semibold text-gray-800">
                  Question 3: Data Quality, Security & Strategy
                </p>
                <select
                  className="mt-1 w-full border rounded-lg p-2"
                  value={answers.q3}
                  onChange={(e) => handleSelect("q3", e.target.value)}
                >
                  <option value="">Select answer…</option>
                  <option value="1">
                    A. No rules / data standards
                  </option>
                  <option value="2">
                    B. Informal procedures (early stage)
                  </option>
                  <option value="3">
                    C. Guardrails + formal framework
                  </option>
                  <option value="4">
                    D. Robust evolving framework
                  </option>
                  <option value="5">
                    E. Large secure data hub + AI-ready
                  </option>
                </select>
              </div>
            </div>

            {/* SUBMIT */}
            <button
              onClick={handleSubmitAssessment}
              className="w-full mt-6 bg-red-700 text-white py-2 rounded-lg hover:bg-red-800"
            >
              Submit Assessment
            </button>

            {/* RESULTS */}
            {result && (
              <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-800 font-semibold">
                  Average Score: {result.average}
                </p>
                <p className="mt-2">
                  <span className="font-bold">Innovation Maturity:</span>{" "}
                  {result.innovation}
                </p>
                <p>
                  <span className="font-bold">AI Readiness:</span> {result.ai}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
