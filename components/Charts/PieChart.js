import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["wikibridge", "scholia-link", "updown-wikidata"],
  datasets: [
    {
      data: [100, 70, 30],
      backgroundColor: ["rgba(75,192,192,0.4", "#36A2EB", "#FF6384"],
      hoverBackgroundColor: ["rgba(75,192,192,0.4", "#36A2EB", "#FF6384"],
    },
  ],
};

export default function PieChart() {
  return (
    <div>
      <h2 className="title">Percentage of tools with missing information</h2>
      <Pie data={data} width={400} height={400} />
    </div>
  );
}
