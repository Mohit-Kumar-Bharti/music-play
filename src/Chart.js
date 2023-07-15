import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: ["#b32e3e", "rgba(54, 162, 235, 0.2)", "#2e40b3"],
      borderColor: ["#000", "#000", "#000"],
      borderWidth: 10,
    },
  ],
};

const Chart = () => {
  return <Doughnut data={data} />;
};

export default Chart;
