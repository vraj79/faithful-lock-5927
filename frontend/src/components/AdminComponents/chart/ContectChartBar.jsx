import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const ContectChartBar = ({ name, label, labels, dataNum, color }) => {
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
  };
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ContectChartBar;
