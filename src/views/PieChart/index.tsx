import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
    subscriptionCost: number;
    employeeCost: number;
    actualCost:number
}

const PieChart: React.FC<PieChartProps> = ({ subscriptionCost, employeeCost, actualCost }) => {
  const data = {
    labels: ['Subscription Cost', 'Employee Cost', 'Actual Cost' ],
    datasets: [
      {
        data: [subscriptionCost,employeeCost, actualCost],
        backgroundColor: ['#36A2EB', '#FF6384','#29B14B'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;