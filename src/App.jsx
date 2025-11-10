import "./App.css";
import Hero from "./sections/hero";
import Filters from "./sections/filters";
import Button from "./components/button";
function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Filters />

      <section id="readiness" class="px-6 py-10">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold mb-2 text-red-900">
            AI Readiness: Data & Systems
          </h2>
          <p class="mb-8 text-gray-500">
            Begin here. Assess your current state, understand the innovation
            journey, and unlock a tailored pathway before exploring the toolkit.
          </p>

          {/* <!-- IMS Visual --> */}
          <div class="bg-white border border-red-950/10 rounded-2xl p-5 shadow-sm mb-8">
            <h3 class="text-xl font-semibold mb-3 text-red-800">
              Innovation Maturity Scale (Visual Overview)
            </h3>
            <div class="aspect-video">
              <img
                src="https://via.placeholder.com/1600x900.png?text=Innovation+Maturity+Scale+Visual"
                alt="Innovation Maturity Scale Visual"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p class="text-sm text-gray-700 mt-3">
              A high-level view of the stages from Foundation to Scale. Use this
              to orient leadership and teams.
            </p>
          </div>

          {/* <!-- Self-Assessment --> */}
          <div class="bg-white border border-red-950/10 rounded-2xl p-5 shadow-sm mb-8">
            <h3 class="text-xl font-semibold mb-2 text-red-800">
              AI Readiness & Data Maturity Self-Assessment
            </h3>
            <p class="text-sm text-gray-700 mb-4">
              Gauge your current maturity to unlock a tailored Level 1–5 pathway
              report.
            </p>
            {/* <a href="#" class="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition">Open Assessment</a> */}
            <Button
              onClick={() => console.log("Open Assessment")}
              color="crimson"
            >
              Open Assessment
            </Button>
          </div>

          {/* <!-- Level 1–5 Reports --> */}
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <article class="bg-white border border-red-950/10 rounded-2xl p-5">
              <h4 class="text-lg font-semibold mb-1 text-red-800">
                Level 1 Report & Pathway
              </h4>
              <p class="text-sm text-gray-700 mb-3">
                Foundation overview & next steps.
              </p>
              <a href="#" class="font-semibold text-blue-700 hover:underline">
                Download PDF
              </a>
            </article>
            <article class="bg-white border border-red-950/10 rounded-2xl p-5">
              <h4 class="text-lg font-semibold mb-1 text-red-800">
                Level 2 Report & Pathway
              </h4>
              <p class="text-sm text-gray-700 mb-3">
                Process alignment & adoption.
              </p>
              <a href="#" class="font-semibold text-blue-700 hover:underline">
                Download PDF
              </a>
            </article>
            <article class="bg-white border border-red-950/10 rounded-2xl p-5">
              <h4 class="text-lg font-semibold mb-1 text-red-800">
                Level 3 Report & Pathway
              </h4>
              <p class="text-sm text-gray-700 mb-3">
                Data integration & training.
              </p>
              <a href="#" class="font-semibold text-blue-700 hover:underline">
                Download PDF
              </a>
            </article>
            <article class="bg-white border border-red-950/10 rounded-2xl p-5">
              <h4 class="text-lg font-semibold mb-1 text-red-800">
                Level 4 Report & Pathway
              </h4>
              <p class="text-sm text-gray-700 mb-3">
                Measurement & optimization.
              </p>
              <a href="#" class="font-semibold text-blue-700 hover:underline">
                Download PDF
              </a>
            </article>
            <article class="bg-white border border-red-950/10 rounded-2xl p-5">
              <h4 class="text-lg font-semibold mb-1 text-red-800">
                Level 5 Report & Pathway
              </h4>
              <p class="text-sm text-gray-700 mb-3">
                Scale & continuous improvement.
              </p>
              <a href="#" class="font-semibold text-blue-700 hover:underline">
                Download PDF
              </a>
            </article>
          </div>

          {/* <!-- Platform Excellence Committees --> */}
          <div class="bg-white border border-red-950/10 rounded-2xl p-5 shadow-sm mb-8">
            <h3 class="text-xl font-semibold mb-2 text-red-800">
              Platform Excellence Committees
            </h3>
            <p class="text-sm text-gray-700 mb-4">
              Define cross-functional roles and rituals to sustain innovation
              momentum and governance.
            </p>
            <div class="aspect-video">
              <img
                src="https://via.placeholder.com/1600x900.png?text=Platform+Excellence+Committees+Slide+Preview"
                alt="Platform Excellence Committees Slide Preview"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div class="mt-3 flex gap-3">
              {/* <a href="#" class="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg transition">Download PPTX</a> */}
              <Button
                onClick={() => console.log("Open Assessment")}
                color="crimson"
              >
                Download PPTX
              </Button>
            </div>
          </div>

          {/* <!-- Data Strategy Playbook --> */}
          <div class="bg-white border border-red-950/10 rounded-2xl p-5 shadow-sm mb-8">
            <h3 class="text-xl font-semibold mb-2 text-red-800">
              Data Strategy Playbook
            </h3>
            <p class="text-sm text-gray-700 mb-4">
              A practical roadmap for data governance, quality, and
              interoperability to enable AI at scale.
            </p>
            {/* <a href="#" class="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition">View on Separate Page</a> */}
            <Button
              onClick={() => console.log("Open Assessment")}
              color="crimson"
            >
              View on Separate Page
            </Button>
          </div>

          {/* <!-- Innovation Engine --> */}
          <div class="bg-white border border-red-950/10 rounded-2xl p-5 shadow-sm mb-8">
            <h3 class="text-xl font-semibold mb-2 text-red-800">
              Innovation Engine
            </h3>
            <p class="text-sm text-gray-700 mb-3">
              Bright Solutions’ methodology for moving from pilots to scalable,
              measurable outcomes across sites.
            </p>
            <div class="aspect-video">
              <iframe
                src="about:blank"
                title="Innovation Engine"
                class="w-full h-full rounded-lg border"
              ></iframe>
            </div>
            <a
              href="#"
              class="font-semibold text-blue-700 hover:underline mt-3 inline-block"
            >
              Visit Subpage
            </a>
          </div>

          {/* Innovation Lab */}
          <div class="bg-white border border-red-950/10 rounded-2xl p-5 shadow-sm">
            <h3 class="text-xl font-semibold mb-2 text-red-800">
              Innovation Lab
            </h3>
            <p class="text-sm text-gray-700 mb-3">
              A sandbox to pilot solutions, test assumptions, and accelerate
              adoption with real-world feedback loops.
            </p>
            <div class="aspect-video">
              <iframe
                src="about:blank"
                title="Innovation Lab"
                class="w-full h-full rounded-lg border"
              ></iframe>
            </div>
            <a
              href="#"
              class="font-semibold text-blue-700 hover:underline mt-3 inline-block"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
