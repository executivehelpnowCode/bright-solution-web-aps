import React from "react";
import Card from "../components/card";
import { leveledReports } from "../ constants";

export default function Reports() {
  return (
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {leveledReports.map((report, index) => (
        <article key={index}>
          <Card
            title={report.title}
            titleColor="text-red-950"
            description={report.description}
            className="hover:translate-y-[-2px] hover:shadow-[0px_13px_15px_5px_rgba(0,_0,_0,_0.1)] transition-all duration-150"
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
