import React from 'react';
import "./BarChartFood.css";
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
      text: 'Percentage of items used per week',
      font:{
        size: 20,
        family: "'Roboto','Helvetica','Arial',sans-serif",
        color: '#000000'
      }
    },
  },
};

const labels = ['March 6th', 'March 13th', 'March 20th', 'March 27th', 'April 3rd', 'April 10th', 'April 17th', 'April 24th'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Percentage',
      data: [40, 80, 100, 60, 81, 83, 75, 84],
      backgroundColor: '#2e7d32B3'
    }, 
  ]
};

export default function BarChartFood() {
  return (<div style={{width: '40%'}}><Bar options={options} data={data} /></div>);
}

