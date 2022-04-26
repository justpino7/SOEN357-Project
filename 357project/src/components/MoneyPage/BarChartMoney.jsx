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
  maintainAspectratio: false,
  plugins: {
    legend: {
      position: 'top',
      labels:{
        font:{
          size: 20,
          family: "'Roboto','Helvetica','Arial',sans-serif",
          color: '#123456'
        }
      }
    },
    title: {
      display: true,
      text: 'Money saved per week',
      font:{
        size: 20,
        family: "'Roboto','Helvetica','Arial',sans-serif",
        color: '#000000'
      }
    },
  },
};

const labels = ['April 3rd', 'April 10th', 'April 17th', 'April 24th'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Money Saved',
      data: [33, 25, 22, 36],
      backgroundColor: '#2e7d32B3'
    }, 
  ]
};

export default function BarChartMoney() {
  return (<div style={{width: '50%'}}><Bar options={options} data={data} /></div>);
}
