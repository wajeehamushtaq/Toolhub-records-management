import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function LineChart() {
  const canvasEl = useRef(null);

  const colors = {
    blue: {
      default: "#3366cc",
      half: "#3e6cc7",
      quarter: "#5770a3",
      zero: "#344567"
    }
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.blue.half);
    gradient.addColorStop(0.65, colors.blue.quarter);
    gradient.addColorStop(1, colors.blue.zero);

    const numberOfMissingTools = [3, 4, 5, 3, 6, 5, 5, 3, 2, 3];

    const labels = [
      "wikibridge",
      "userwarn-wikidata",
      "updown-wikidata",
      "units-converter-wikidata",
      "taxobox-wikidata",
      "sort-values",
      "senseforthisitem",
      "script-installer",
      "scholia-link",
      "requestdeletion"
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: gradient,
          label: "Toolname",
          data: numberOfMissingTools,
          fill: true,
          borderWidth: 2,
          borderColor: colors.blue.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.blue.default,
          pointRadius: 3
        }
      ]
    };
    const config = {
      type: "line",
      data: data
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <div>
      <span className="title">Number of tools with missing information</span>
      <canvas id="myChart" ref={canvasEl} height="100" />
    </div>
  );
}
