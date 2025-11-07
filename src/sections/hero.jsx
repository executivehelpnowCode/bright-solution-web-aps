import Section from "../components/container";

export default function Hero() {
  return (
    <div className="min-h-[100vh] bg-gradient-to-br from-crimson-1400 via-crimson-1200 to-crimson-1000 py-14">
      <div className="text-white flex lg:flex-col justify-center items-center">
        <span className="px-[10px] py-[5px] text-[12px] text-crimson-1200 bg-white rounded-full my-4">
          Bright Solutions • Generative AI
        </span>

        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-5xl font-extrabold">Generative AI Toolkit</h1>
          <h2 className="text-xl">
            Your hub for responsible, scalable, human‑centered AI adoption.
          </h2>
        </div>
        {/* dummy yt video placeholderf */}
        <div className="rounded-2xl w-[1050px] h-[560pX] bg-[#282828] my-6"></div>
        <div className="flex gap-3">
          <button className="bg-crimson-1000 font-semibold p-3 rounded-full hover:translate-y-[-3px] hover:transition-all hover:duration-100">
            Start with AI Readiness
          </button>
          <button className="bg-white text-crimson-1000 font-semibold p-3 rounded-full  hover:translate-y-[-3px] hover:transition-all hover:duration-100">
            Jump to Toolkit Overview
          </button>
        </div>
      </div>
    </div>
  );
}
