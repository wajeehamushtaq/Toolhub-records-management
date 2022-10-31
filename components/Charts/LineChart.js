import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function LineChart() {
  const canvasEl = useRef(null);

  const colors = {
    purple: {
      default: "rgba(75,192,192,0.4)",
      half: "rgba(75,192,192,0.4)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(149, 76, 233, 0)"
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)"
    }
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.purple.half);
    gradient.addColorStop(0.65, colors.purple.quarter);
    gradient.addColorStop(1, colors.purple.zero);

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
          label: "My First Dataset",
          data: numberOfMissingTools,
          fill: true,
          borderWidth: 2,
          borderColor: colors.purple.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.purple.default,
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
