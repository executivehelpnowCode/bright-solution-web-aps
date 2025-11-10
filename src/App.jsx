import "./App.css";
import Hero from "./sections/hero";
import Filters from "./sections/filters";
import Button from "./components/button";
import Card  from "./components/card";
function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Filters />




      <section id="readiness" class="px-6 py-10">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold mb-2 text-red-950">AI Readiness: Data & Systems</h2>
          <p class="mb-8 text-gray-500">
            Begin here. Assess your current state, understand the innovation journey, and unlock a tailored pathway before exploring the toolkit.
          </p>

          {/* <!-- IMS Visual --> */}
          <div class="mb-8">
           <Card
            title="Innovation Maturity Scale (Visual Overview)"
            description="Gauge your current maturity to unlock a tailored Level 1–5 pathway report."
          >
               <div class="aspect-video rounded-xl shadow-lg shadow-dark-500/50 overflow-hidden">
              <img src="https://via.placeholder.com/1600x900.png?text=Innovation+Maturity+Scale+Visual" alt="Innovation Maturity Scale Visual" class="w-full h-full object-cover rounded-lg" />
            </div>
            <p class="text-sm text-gray-700 mt-3">
              A high-level view of the stages from Foundation to Scale. Use this to orient leadership and teams.
            </p>            
          </Card>           
          </div>

          {/* <!-- Self-Assessment --> */}
          <div class="mb-8">        
           <Card
            title="AI Readiness & Data Maturity Self-Assessment"
            description="Gauge your current maturity to unlock a tailored Level 1–5 pathway report."
          >
            <Button onClick={() => console.log("Open Assessment")} color="crimson">
              Open Assessment
            </Button>
          </Card>
        
          </div>

          {/* <!-- Level 1–5 Reports --> */}
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <article>
            <Card
            title="Level 1 Report & Pathway"
            titleColor="text-red-950"
            description="Foundation overview & next steps."
            >
           <a href="#" class="font-semibold text-red-700 hover:none">Download PDF</a>
           </Card>
            </article>

            <article>
            <Card
            title="Level 2 Report & Pathway"
            titleColor="text-red-950"
            description="Process alignment & adoption."
            >
           <a href="#" class="font-semibold text-red-700 hover:none">Download PDF</a>
           </Card>
            </article>    
            

            <article>
            <Card
            title="Level 3 Report & Pathway"
            titleColor="text-red-950"
            description="Data integration & training."
            >
           <a href="#" class="font-semibold text-red-700 hover:none">Download PDF</a>
           </Card>
            </article>    

            <article>
            <Card
            title="Level 4 Report & Pathway"
            titleColor="text-red-950"
            description="Measurement & optimization."
            >
           <a href="#" class="font-semibold text-red-700 hover:none">Download PDF</a>
           </Card>
            </article>    

            <article>
            <Card
            title="Level 5 Report & Pathway"
            titleColor="text-red-950"
            description="Scale & continuous improvement."
            >
           <a href="#" class="font-semibold text-red-700 hover:none">Download PDF</a>
           </Card>
            </article>   
          </div>

          {/* <!-- Platform Excellence Committees --> */}
          <div class=" shadow-sm mb-8">
          <Card
            title="Platform Excellence Committees"
            description="Define cross-functional roles and rituals to sustain innovation momentum and governance."
          >
             <div class="aspect-video rounded-xl shadow-lg shadow-dark-500/50 overflow-hidden">
              <img
                src="https://via.placeholder.com/1600x900.png?text=Platform+Excellence+Committees+Slide+Preview"
                alt="Platform Excellence Committees Slide Preview"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="mt-3 flex gap-3">
                <Button onClick={() => console.log("Download PPTX")} color="crimson">
                   Download PPTX
                </Button>
            </div>
           
          </Card>


           
          
            
       
          </div>

          {/* <!-- Data Strategy Playbook --> */}
          <div class="mb-8">
            <Card
            title="Data Strategy Playbook"
            description="A practical roadmap for data governance, quality, and interoperability to enable AI at scale."
            >
            <Button onClick={() => console.log("Open  View on Separate Page")} color="crimson">
               View on Separate Page
            </Button>
          </Card>
          </div>

          {/* <!-- Innovation Engine --> */}
          <div class="mb-8">
             <Card
            title="Innovation Engine"
            description="Bright Solutions’ methodology for moving from pilots to scalable, measurable outcomes across sites."
            >

            <div class="aspect-video rounded-xl shadow-lg shadow-dark-500/50 overflow-hidden">
              <img
                src="about:blank"
                alt="Innovation Engine"
                class="w-full h-full rounded-lg border"
              />
            </div>
            <div class="mt-3 flex gap-3">
                 <a href="#" class="font-semibold text-red-700 hover:none mt-3 inline-block">Visit Subpage</a>
            </div>           
            </Card>
            
          </div>

          {/* Innovation Lab */}
          <div class="mb-8">
             <Card
            title="Innovation Lab"
            description="A sandbox to pilot solutions, test assumptions, and accelerate adoption with real-world feedback loops."
            >

            <div class="aspect-video rounded-xl shadow-lg shadow-dark-500/50 overflow-hidden">
              <img
                src="about:blank"
                alt="Innovation Lab"
                class="w-full h-full rounded-lg border"
              />
            </div>
            <div class="mt-3 flex gap-3">
                 <a href="#" class="font-semibold text-red-700 hover:none mt-3 inline-block">Learn More</a>
            </div>           
            </Card>
            
          </div>



        
         
        </div>
      </section>




    </div>
  );
}

export default App;
