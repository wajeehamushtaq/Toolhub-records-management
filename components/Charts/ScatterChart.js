import React from "react";
import { Scatter } from "react-chartjs-2";

const data = {
  labels: ["Scatter"],
  datasets: [
    {
      label: "Number of tools and days tools is edited",
      fill: false,
      backgroundColor: "rgba(75,192,192,0.4)",
      pointBorderColor: "#679900",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "#679900",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        { x: 65, y: 75 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
      ],
    },
  ],
};

export default function ScatterChart() {
  return (
    <div>
      <h2 className="title">Number of tools edited using this record management tool</h2>
      <Scatter data={data} width={400} height={400} />
    </div>
  );
}
