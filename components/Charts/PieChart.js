import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["wikibridge", "scholia-link", "updown-wikidata"],
  datasets: [
    {
      data: [100, 70, 30],
      backgroundColor: ["#679900", "#3366cc", "#dd3333"],
      hoverBackgroundColor: ["#679900", "#3366cc", "#dd3333"],
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
