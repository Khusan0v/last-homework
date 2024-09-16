import React, { useState } from "react";
import { Line } from "react-chartjs-2";
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
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const navigate = useNavigate();
  
  const fullData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
    datasets: [
      {
        label: "2023",
        data: [65, 59, 80, 81, 56, 55, 40, 70],
        fill: false,
        borderColor: "#42a5f5",
        backgroundColor: "#ede9fe",
        tension: 0.1,
      },
      {
        label: "2024",
        data: [10, 59, 40, 15, 20, 30, 17, 25],
        fill: false,
        borderColor: "#8b5cf6",
        backgroundColor: "#ede9fe",
        tension: 0.1,
      },
    ],
  };

  const [filter, setFilter] = useState("all");

  const getFilteredData = () => {
    switch (filter) {
      case "2023":
        return {
          labels: fullData.labels,
          datasets: [fullData.datasets[0]],
        };
      case "2024":
        return {
          labels: fullData.labels,
          datasets: [fullData.datasets[1]],
        };
      case "all":
      default:
        return fullData;
    }
  };

  const chartData = getFilteredData();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Food expenses for 2023 and 2024",
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
      <div className="button-group gap-8 flex flex-col items-start">
        <div className="flex gap-8">
          <Button color="blue" onClick={() => setFilter("all")}>
            All
          </Button>
          <Button onClick={() => setFilter("2023")} className={filter === "2024" ? "hidden" : ""}>
            2023
          </Button>
          <Button onClick={() => setFilter("2024")} className={filter === "2023" ? "hidden" : ""}>
            2024
          </Button>
        </div>
        <Button
           onClick={() => navigate(-1)}
          className="mt-1"
        >
          &larr; Go back ?
        </Button>
      </div>
    </div>
  );
};

export default LineChart;
