import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
const ContectChartMultiaxis = ({ name, label, labels, dataNum, color }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: name,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: label,
        data: dataNum,
        borderColor: color,
        backgroundColor: color,
      },
    ],
    borderWidth: 5,
  };

  return <Doughnut data={data} options={options} />;
};

export default ContectChartMultiaxis;
