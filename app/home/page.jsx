"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";
import Image from "next/image";
import { TbEdit, TbShoppingCartDollar } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidShoppingBags } from "react-icons/bi";
import { BsCashCoin } from "react-icons/bs";
// Register necessary Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled globally (e.g., stored in localStorage or window)
    const isDarkMode = window.localStorage.getItem("theme") === "dark";
    setDarkMode(isDarkMode);
    console.log(isDarkMode);

    // Apply dark mode class based on global theme
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Data for the Bar Chart
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Sales",
        data: [100, 200, 150, 220, 180, 250, 270, 240, 300,400],
        backgroundColor: "#28C76F", // Green for sales
        hoverbackgroundColor: "#65FA9E", // hover Green for sales
        borderColor: "#65FA9E",
        borderWidth: 1,
        borderRadius: 20,
        barThickness: 20,
      },
      {
        label: "Purchase",
        data: [-150, -180, -120, -170, -130, -210, -190, -160, -200,-300],
        backgroundColor: "#FF4D4D", // Red for purchases
        hoverbackgroundColor: "#E4E2E2",
        borderColor: "#FF8585",
        borderWidth: 1,
        borderRadius: 20,
        barThickness: 20,
      },
    ],
  };

  // Chart options for a stacked bar chart
  const options = {
    scales: {
      x: {
      
        stacked: true, // Stack the x-axis
        grid: {
           // Light grid lines for x-axis
        },
        ticks: {
           // White tick labels for x-axis
        },
      },
      y: {
        stacked: true, // Stack the y-axis
        beginAtZero: true,
        grid: {
           // Light grid lines
        },
        ticks: {
           // White tick labels for y-axis
        },
      },
    },

    responsive: true,
  };

  // Get the current date
  const date = new Date();
  const day = date.getDate(); // Returns the day of the month
  const month = date.toLocaleString("default", { month: "long" }); // Returns full month name
  const year = date.getFullYear(); // Returns the year

  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/50x50", // Placeholder image
      name: "Red Premium Handy",
      sku: "PT006",
      manufacturedDate: "17 Jan 2023",
      expiredDate: "29 Mar 2023",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50x50",
      name: "iPhone 14 Pro",
      sku: "PT007",
      manufacturedDate: "22 Feb 2023",
      expiredDate: "04 Apr 2023",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/50x50",
      name: "Black Slim 200",
      sku: "PT008",
      manufacturedDate: "18 Mar 2023",
      expiredDate: "13 May 2023",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/50x50",
      name: "Woodcraft Sandal",
      sku: "PT009",
      manufacturedDate: "29 Mar 2023",
      expiredDate: "27 May 2023",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/50x50",
      name: "Apple Series 5 Watch",
      sku: "PT010",
      manufacturedDate: "24 Mar 2023",
      expiredDate: "26 May 2023",
    },
  ];
  return (
    <div className="overflow-auto dark:text-white scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent p-8">
      <main className="ml-1/5 flex-grow h-screen mt-[5%]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-medium">Welcome Back!</h2>
          <p className="">{`${day} ${month} ${year}`}</p>
        </div>

        <div className="lg:mt-5 min-h-screen bg-white dark:bg-[#141432] text-gray-900 dark:text-gray-100 p-4">
        <h2 className="text-md  mb-4">Total Summary</h2>
          {/* Dashboard cards and charts */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Cards */}
            <div className=" p-4 rounded shadow-md flex justify-start gap-5 items-center">
            <span className="p-3 bg-rose-200 rounded-full bg-opacity-30">
              <BiSolidShoppingBags size={28} className="text-[#FF9F43]"/>
            </span>
              <div><p>$307144</p>
              <p>Total Purchase Due</p></div>
            </div>
            <div className=" p-4 rounded shadow-md flex justify-start gap-5 items-center">
            <span className="p-3 bg-gray-300 rounded-full bg-opacity-30">
              <BsCashCoin size={28} className=""/>
            </span>
              <div>
                <p>$4385</p>
                <p>Total Sales Due</p>
              </div>
            </div>
            <div className=" p-4 rounded shadow-md flex justify-start gap-5 items-center">
            <span className="p-3 bg-gray-300 rounded-full bg-opacity-30">
              <BiSolidShoppingBags size={28} className=""/>
            </span>
              <div>
              <p>$385656.5</p>
              <p>Total Sale Amount</p>
              </div>
            </div>
            <div className=" p-4 rounded shadow-md flex justify-start gap-5 items-center">
            <span className="p-3 bg-gray-300 rounded-full bg-opacity-30">
              <BiSolidShoppingBags size={28} className=""/>
            </span>
              <div>
              <p>$40000</p>
              <p>Total Expense Amount</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 text-white">
            {/* Additional Stats */}
            <div className="bg-[#FF9F43] p-4 rounded shadow-md text-center">
              <p>100</p>
              <p>Customers</p>
            </div>
            <div className="bg-sky-400 p-4 rounded shadow-md text-center">
              <p>110</p>
              <p>Suppliers</p>
            </div>
            <div className="bg-indigo-400 p-4 rounded shadow-md text-center">
              <p>150</p>
              <p>Purchase Invoice</p>
            </div>
            <div className="bg-[#28C76F] p-4 rounded shadow-md text-center">
              <p>170</p>
              <p>Sales Invoice</p>
            </div>
          </div>
          <div className="p-0 mb-5 mt-5">
      {/* Today Summary */}
      <h2 className="text-md  mb-4">Today Summary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-600 text-white p-4 rounded shadow-md">
          <h3 className=" ">TODAY SOLD</h3>
          <p className="">Tk 20,000</p>
        </div>
        <div className="bg-pink-600 text-white p-4 rounded shadow-md">
          <h3 className=" ">TODAY SOLD - PURCHASE COST</h3>
          <p className="">Tk 20,000</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded shadow-md">
          <h3 className=" ">TODAY EXPENSE</h3>
          <p className="">Tk 20,000</p>
        </div>
        <div className="bg-green-600 text-white p-4 rounded shadow-md">
          <h3 className=" ">TODAY SELL PROFIT</h3>
          <p className="">Tk 30,000</p>
        </div>
      </div>
   
      {/* Current Month Summary */}
      <h2 className="text-md  mb-4">Current Month Summary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-teal-500 text-white p-4 rounded shadow-md">
          <h3 className=" ">SOLD IN SEP 2024</h3>
          <p className="">Tk 20,003,886,022</p>
        </div>
        <div className="bg-purple-500 text-white p-4 rounded shadow-md">
          <h3 className=" ">PURCHASED - IN SEP 2024</h3>
          <p className="">Tk 20,0033,884,105</p>
        </div>
        <div className="bg-orange-500 text-white p-4 rounded shadow-md">
          <h3 className=" ">EXPENSE IN SEP 2024</h3>
          <p className="">Tk 20,00200</p>
        </div>
        <div className="bg-cyan-400 text-white p-4 rounded shadow-md">
          <h3 className=" ">RETURNED IN SEP 2024</h3>
          <p className="">Tk 20,000</p>
        </div>
        <div className="bg-purple-600 text-white p-4 rounded shadow-md">
          <h3 className=" ">PROFIT SEP 2024</h3>
          <p className="">123,122</p>
        </div>
      </div>
    </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Chart Area */}
            <div className="mt-8 p-4 rounded-lg shadow-lg dark:bg-[#202047]">
              <h3 className=" font-bold mb-4">Purchase & Sales</h3>
              <div className="flex justify-between mb-4">
                <div className="text-green-500">Sales</div>
                <div className="text-red-500">Purchase</div>
                <select className="bg-white dark:bg-[#303063] rounded p-2 text-black dark:text-white">
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                </select>
              </div>

              {/* Stacked Bar Chart */}
              <Bar data={data} options={options} />
            </div>
            {/* Recent Products Table */}
            <div className="mt-8 p-4  rounded  shadow-lg dark:bg-[#202047]">
              <h3 className=" font-bold mb-4">Recent Products</h3>
              <table className="table-auto w-full">
                <thead>
                  <tr className="text-left">
                    <th className="p-2">Products</th>
                    <th className="p-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">Lenovo 3rd Generation</td>
                    <td className="p-2">$12500</td>
                  </tr>
                  <tr>
                    <td className="p-2">Bold V3.2</td>
                    <td className="p-2">$1600</td>
                  </tr>
                  <tr>
                    <td className="p-2">Nike Jordan</td>
                    <td className="p-2">$2000</td>
                  </tr>
                  <tr>
                    <td className="p-2">Apple Series 5 Watch</td>
                    <td className="p-2">$800</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="">
      <h2 className="text-md  mb-4 ">Expired Products</h2>
      <div className="overflow-x-auto rounded-lg shadow-xl dark:bg-[#202047]">
        <table className="min-w-full table-auto border ">
          <thead>
            <tr className=" uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Product</th>
              <th className="py-3 px-6 text-left">SKU</th>
              <th className="py-3 px-6 text-left">Manufactured Date</th>
              <th className="py-3 px-6 text-left">Expired Date</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className=" text-sm font-light">
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-200 "
              >
                <td className="py-3 px-6 text-left whitespace-nowrap flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <span className="font-medium">{product.name}</span>
                </td>
                <td className="py-3 px-6 text-left">{product.sku}</td>
                <td className="py-3 px-6 text-left">{product.manufacturedDate}</td>
                <td className="py-3 px-6 text-left">{product.expiredDate}</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center gap-5">
                    <button className="p-1 rounded-lg border-2 transform text-blue-600 hover:text-blue-500 hover:scale-110 ">
                    <TbEdit size={16}/>
                    </button>
                    <button className="p-1 rounded-lg transform text-red-600 hover:text-red-500 hover:scale-110 border-2 ">
                    <RiDeleteBin5Line size={16}/>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </main>
    </div>
  );
}
