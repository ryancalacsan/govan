const color = {
  primary: "#1d4ed8", // Blue
  secondary: "#9333ea", // Purple
  accent: "#f59e0b", // Amber
  neutral: "#374151", // Gray
  "base-100": "#ffffff", // White
}

const data = {
  labels: ["Jan", "Feb", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Income",
      data: [1500, 1000, 1250, 1000, 2260],
      fill: false,
      backgroundColor: color.primary,
      borderColor: color.primary,
      tension: 0.1,
    },
  ],
}

export default data
