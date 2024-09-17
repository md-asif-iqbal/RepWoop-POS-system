"use client"
import React, { useEffect, useState } from 'react'


import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Colors } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register components with ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode from the document class
  useEffect(() => {
    const theme = document.documentElement.classList.contains('dark');
    setIsDarkMode(theme);
  }, []);
    // Chart data
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Daily Sales in USD',
        data: [120, 190, 300, 500, 200, 300, 400],
        borderColor: isDarkMode ? '#FF8800' : '#4CAF50', // Line color based on mode
        backgroundColor: isDarkMode ? 'rgba(255, 136, 0, 0.2)' : 'rgba(76, 175, 80, 0.2)', // Fill color based on mode
        pointBackgroundColor: isDarkMode ? '#FF8800' : '#4CAF50',
        pointBorderColor: isDarkMode ? '#FF8800' : '#4CAF50',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };
 // Get the current date
 const date = new Date();

 // Extract day, month, and year
 const day = date.getDate(); // Returns the day of the month
 const month = date.toLocaleString('default', { month: 'long' }); // Returns full month name
 const year = date.getFullYear(); // Returns the year



  const percentage = 78; // Sample data for the percentage of sales
  const circleRadius = 45; // Radius of the circle
  const circleCircumference = 2 * Math.PI * circleRadius; // Circumference of the circle
  const strokeDashoffset = circleCircumference - (percentage / 100) * circleCircumference;// Sales achieved based on percentage


  return (
    <div className='overflow-auto dark:text-white scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent p-8 '>
         <main className="ml-1/5 flex-grow  h-screen mt-[5%]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-medium">Welcome Back!</h2>
          <p className="text-lg">{`${day} ${month} ${year}`}</p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-4 mt-8">
          {/* Total Sales */}
          <div className="bg-white dark:text-white dark:bg-[#141432] p-6 shadow-xl rounded-lg">
            <h3 className="text-lg font-medium">Total Sales</h3>
            <p className="text-2xl mt-4">$750.11</p>
            <p className="text-gray-600 dark:text-white">This Month</p>
          </div>

          {/* Daily Sales Chart */}
          <div className="bg-white dark:text-white dark:bg-[#141432] p-6 shadow-xl rounded-lg">
            <h3 className="text-lg font-medium">Daily Sales</h3>
            <div className="mt-4" style={{ height: '300px' }}>
              <Line data={data} options={options} className='dark:text-white' />
            </div>
          </div>

          {/* Top 5 Sales */}
          <div className="bg-white dark:text-white dark:bg-[#141432] p-6 shadow-xl rounded-lg">
            <h3 className="text-lg font-medium">Top 5 Sales</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex justify-between"><span>Product 1</span><span>$155</span></li>
              <li className="flex justify-between"><span>Product 2</span><span>$145</span></li>
              <li className="flex justify-between"><span>Product 3</span><span>$135</span></li>
              <li className="flex justify-between"><span>Product 4</span><span>$125</span></li>
              <li className="flex justify-between"><span>Product 5</span><span>$115</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-6 mt-8">
          {/* Sales Market */}
          <div className="bg-white dark:text-white dark:bg-[#141432] p-6 shadow-xl rounded-lg">
            <h3 className="text-lg font-medium">Top 3 Sales Market</h3>
            <div className="mt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span>Market 1</span>
                <span className="w-2/3 bg-gray-300 h-2 rounded-lg">
                  <span className="bg-teal-600 h-2 rounded-lg block w-1/2"></span>
                </span>
                <span>50%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Market 2</span>
                <span className="w-2/3 bg-gray-300 h-2 rounded-lg">
                  <span className="bg-teal-600 h-2 rounded-lg block w-3/4"></span>
                </span>
                <span>86%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Market 3</span>
                <span className="w-2/3 bg-gray-300 h-2 rounded-lg">
                  <span className="bg-teal-600 h-2 rounded-lg block w-2/3"></span>
                </span>
                <span>65%</span>
              </div>
            </div>
          </div>

          {/* Sales Percentage */}
          <div className="bg-white dark:text-white dark:bg-[#141432] p-6 shadow-xl rounded-lg flex flex-col justify-center items-center">
              <h3 className="text-lg font-medium mb-4">Sales Percentage</h3>
                <div className="relative flex justify-center items-center">
                  {/* Circular Progress Bar */}
                  <svg
                    className="w-32 h-32"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FFD700" /> {/* Yellow */}
                        <stop offset="100%" stopColor="#FF4500" /> {/* Red */}
                      </linearGradient>
                    </defs>
                    {/* Background Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r={circleRadius}
                      stroke="#f0f0f0"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Progress Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r={circleRadius}
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={circleCircumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)" // Rotate to start from top
                    />
                  </svg>
                  {/* Percentage Text in the Center of Circle */}
                  <div className="absolute text-2xl text-gray-600 dark:text-white">
                    {percentage}%
                  </div>
                </div>

            {/* Additional sales info */}
            <p className="text-gray-600 dark:text-white mt-4">Target: $999 | Sales: ${(999 * percentage) / 100}</p>
          </div>
        </div>

        {/* Recent News */}
        <div className="mt-8 bg-white dark:text-white dark:bg-[#141432] p-6 shadow-xl rounded-lg">
          <h3 className="text-lg font-medium">Recent News</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex justify-between"><span>News 1</span><span>Sun, 7 PM</span></li>
            <li className="flex justify-between"><span>News 2</span><span>Fri, 5 PM</span></li>
            <li className="flex justify-between"><span>News 3</span><span>Wed, 3 PM</span></li>
          </ul>
        </div>
      </main>
    </div>
  )
}
