import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const color = {
  primary: "#1d4ed8", // Blue
  secondary: "#9333ea", // Purple
  accent: "#f59e0b", // Amber
  neutral: "#374151", // Gray
  "base-100": "#ffffff", // White
}

export const LineChart = ({ userData }) => {
  const options = {}
  const data = {
    labels: ["Jan", "Feb", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Income",
        data: userData,
        fill: false,
        backgroundColor: color.primary,
        borderColor: color.primary,
        tension: 0.1,
      },
    ],
  }
  return <Line options={options} data={data} />
}
