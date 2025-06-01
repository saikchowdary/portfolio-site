import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RadarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Machine Learning', 'Data Analysis', 'Clean Energy', 'Materials Science', 'JavaScript', 'Python'],
        datasets: [{
          label: 'My Skills',
          data: [8, 9, 7, 7, 6, 8],
          fill: true,
          backgroundColor: 'rgba(59, 130, 246, 0.2)', // Tailwind blue-500 at 20%
          borderColor: 'rgba(59, 130, 246, 1)', // Tailwind blue-500
          pointBackgroundColor: 'rgba(59, 130, 246, 1)'
        }]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,
            max: 10,
            ticks: {
              stepSize: 2,
              color: '#6b7280' // Tailwind gray-500
            },
            pointLabels: {
              color: '#374151' // Tailwind gray-700
            },
            grid: {
              color: '#e5e7eb' // Tailwind gray-200
            }
          }
        }
      }
    });

    return () => myChart.destroy(); // Clean up on unmount
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default RadarChart;
