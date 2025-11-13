import "./App.css";
import Hero from "./sections/hero";
import Filters from "./sections/filters";
import Button from "./components/button";
// import Card from "./components/card";
import Overview from "./sections/overview";
import Assessment from "./sections/assessment";
import Reports from "./sections/reports";
import Committees from "./sections/committees";
import Playbook from "./sections/playbook";
import Engine from "./sections/engine";
import Lab from "./sections/lab";
import GenerativeAiToolkit from "./sections/generative-ai-toolkit";
import InnovationRoadmapStrategicPlanning from "./sections/innovation-roadmap"

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#FCFAFA]">
        <Hero />
        <Filters />

        <section id="readiness" className="px-6 py-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-red-950">
              AI Readiness: Data & Systems
            </h2>
            <p className="mb-8 text-gray-500">
              Begin here. Assess your current state, understand the innovation
              journey, and unlock a tailored pathway before exploring the toolkit.
            </p>

            <div className="flex flex-col gap-8 mb-[70px]">
              <Overview />
              <Assessment />
              <Reports />
              <Committees />
              <Playbook />
              <Engine />
              <Lab />
            </div>

            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 text-red-950">
                Generative AI Toolkit Overview
              </h2>
              <p className="mb-8 text-gray-500">
                Practical resources for day-to-day AI use. Each item links out to its full content.
              </p>
              <GenerativeAiToolkit />
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#fff] py-10">
  <div className="max-w-6xl mx-auto w-full">
    <details className="bg-white rounded-2xl shadow-sm border border-[rgba(69,0,0,0.12)]">
      <summary className="cursor-pointer select-none p-5 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-red-950">
            Innovation Roadmap & Strategic Planning
          </h2>
          <p className="text-sm text-gray-500">
            Turn pilots into practice with governance, measurement, and culture.
          </p>
        </div>
        <svg
          className="w-5 h-5 text-red-950 transition-transform group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>
      <div className="text-gray-700 py-5">
        {/* Accordion content goes here */}
        <InnovationRoadmapStrategicPlanning />
      </div>
    </details>
  </div>
</div>





      <div className="flex flex-col items-center justify-center bg-[#6B0000] text-white py-10">
        <p class="text-lg">Bright Solutions • Generative AI Toolkit</p>
      </div>


    </>
  );
}

export default App;
