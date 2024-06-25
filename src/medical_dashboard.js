const ctx = document.getElementById("lineChart").getContext("2d");

const labels = [
  "Oct 2023",
  "Nov 2023",
  "Dec 2023",
  "Jan 2024",
  "Feb 2024",
  "Nar 2024",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Systolic",
      data: [110, 65, 110, 90, 70, 75],
      backgroundColor: "#8C6FE6",
      borderColor: "#7E6CAB",
      borderWidth: 2,
      lineTension: 0.3,
    },
    {
      label: "Diastolic",
      data: [120, 115, 160, 110, 150, 155],
      backgroundColor: "#E66FD2",
      borderColor: "#C26EB4",
      borderWidth: 2,
      lineTension: 0.3,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        max: 180,
        min: 60,
        ticks: {
          stepSize: 20,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
};

const myChart = new Chart(ctx, config);
