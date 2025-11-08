import { useState } from "react";
import "./App.css";
import Hero from "./sections/hero";
import Filters from "./sections/filters";
function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Filters />
    </div>
  );
}

export default App;
