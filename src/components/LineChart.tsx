import { Line } from "react-chartjs-2"
import { memo } from "react"
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
  primary: "#605dff",
  secondary: "#f43098",
  accent: "#00d3bb",
  neutral: "#605dff",
  "base-100": "#605dff",
}

interface LineChartProps {
  userData: number[]
}

export const LineChart = ({ userData }: LineChartProps) => {
  const options = {}
  const data = {
    labels: ["Jan", "Feb", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Income",
        data: userData,
        fill: false,
        backgroundColor: color.accent,
        borderColor: color.accent,
        tension: 0.1,
      },
    ],
  }
  return <Line options={options} data={data} />
}

export const MemoizedLineChart = memo(LineChart)
