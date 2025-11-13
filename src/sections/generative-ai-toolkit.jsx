import React from "react";
import Card from "../components/card";
import { generativeAiToolkit } from "../ constants";

export default function GenerativeAiToolkit() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-8">
      {generativeAiToolkit.map((report, index) => (
        <article key={index}>
          <Card
            title={report.title}
            titleColor="text-red-950"
            description={report.description}
            className="flex flex-col justify-between w-full h-full hover:-translate-y-1 hover:shadow-[0px_13px_15px_5px_rgba(0,0,0,0.1)] transition-all duration-200 rounded-xl border border-gray-200 bg-white p-6"
          >
            <a href={report.url} class="font-semibold text-red-700 hover:none">
              {report.label}
            </a>
          </Card>
        </article>
      ))}
    </div>
  );
}
