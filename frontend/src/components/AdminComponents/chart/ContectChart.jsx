import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ContectChart = ({ name, label, labels, dataNum, color }) => {
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
      <Line data={data} options={options} />
    </div>
  );
};

export default ContectChart;
