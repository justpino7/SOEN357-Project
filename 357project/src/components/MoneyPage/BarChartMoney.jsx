import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Money saved per week',
    },
  },
};

const labels = ['March 6th', 'March 13th', 'March 20th', 'March 27th', 'April 3rd', 'April 10th', 'April 17th', 'April 24th'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Money Saved',
      data: [26, 18, 29, 16, 33, 25, 22, 36],
      backgroundColor: '#12AA00B3'
    }, 
    {
        label: 'Total leftover value',
        data: [33, 22, 29, 25, 38, 27, 30, 44],
        backgroundColor: '#000000B3'
      }
  ]
};

export default function BarChartMoney() {
  return <Bar options={options} data={data} />;
}
