import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineChartProps {
  growthData: { month: string; growth: number }[];
}

const LineChart: React.FC<LineChartProps> = ({ growthData }) => {
  const data = {
    labels: growthData.map(d => d.month),
    datasets: [
      {
        label: 'Growth',
        data: growthData.map(d => d.growth),
        borderColor: '#36A2EB',
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
