import "./App.css";
import Hero from "./sections/hero";
import Filters from "./sections/filters";
import Button from "./components/button";
import Card from "./components/card";
import Overview from "./sections/overview";
import Assessment from "./sections/assessment";
import Reports from "./sections/reports";
import Committees from "./sections/committees";
import Playbook from "./sections/playbook";
import Engine from "./sections/engine";
import Lab from "./sections/lab";
function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Filters />
      <section id="readiness" class="px-6 py-10">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold mb-2 text-red-950">
            AI Readiness: Data & Systems
          </h2>
          <p class="mb-8 text-gray-500">
            Begin here. Assess your current state, understand the innovation
            journey, and unlock a tailored pathway before exploring the toolkit.
          </p>
          <div class="flex flex-col gap-8">
            <Overview />
            <Assessment />
            <Reports />
            <Committees />
            <Playbook />
            <Engine />
            <Lab />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
