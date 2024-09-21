"use client"
import React, { useState } from 'react'

export default function POSManage() {
    const [searchTerm, setSearchTerm] = useState("");

    const products = [
      { id: 1, name: "Air Conditioner", price: 96000, stock: 96 },
      { id: 2, name: "Blazer For Men", price: 3000, stock: 98 },
      { id: 3, name: "Desktop Computer", price: 458, stock: 99 },
      { id: 4, name: "Door Export", price: 15000, stock: 100 },
      { id: 5, name: "Drill Machine", price: 3000, stock: 100 },
      { id: 6, name: "Freezer", price: 4500, stock: 100 },
      { id: 7, name: "Gaming Laptop", price: 150000, stock: 100 },
      { id: 8, name: "Ladie's Shirt", price: 900, stock: 100 },
      { id: 9, name: "Laptop Computer", price: 78000, stock: 100 },
      { id: 10, name: "Mobile Phone", price: 4500, stock: 100 },
    ];
  
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
        <div className='bg-white dark:bg-[#141432] dark:text-white'>
            <div className="container mx-auto p-4 mt-[5%] ">
        {/* POS Manage Header */}
        <h1 className="text-3xl font-bold mb-6 ">POS Manage</h1>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Section: Input and Payment */}
          <div className="bg-gray-100 dark:bg-[#202047] p-4 rounded-lg shadow-md w-full">
            <div className="flex flex-col gap-4 dark:text-black items-center w-full">
              {/* Scan Barcode & Product Name Input */}
              <input
                type="text"
                placeholder="Scan Barcode"
                className="border w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Start to write product name..."
                className="border w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* Date Picker */}
              <input
                type="date"
                className="border w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="2024-09-21"
              />
              {/* Customer Dropdown */}
              <div className='flex w-full gap-5'>
              <select className="border w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Walk-in Customer</option>
                <option>Registered Customer</option>
              </select>
              {/* Add Button */}
              <button className="bg-teal-500 text-white w-[50%] px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none">
                Add
              </button>
              </div>
            </div>
  
            {/* Cart Table */}
            <div className="mt-6">
              <table className="w-full border-collapse border border-gray-300 ">
                <thead>
                  <tr className="bg-teal-500 text-white">
                    <th className="border border-gray-300 p-2">Name</th>
                    <th className="border border-gray-300 p-2">Quantity</th>
                    <th className="border border-gray-300 p-2">Price</th>
                    <th className="border border-gray-300 p-2">Sub T</th>
                    <th className="border border-gray-300 p-2">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center" colSpan="3">
                      hi.....
                    </td>
                    <td className="border border-gray-300 p-2 text-center" colSpan="2">
                      Total: 0 Tk
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            {/* Payment Button */}
            <div className="mt-4">
              <button className="bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-600">
                Payment
              </button>
            </div>
          </div>
  
          {/* Right Section: Product Category and List */}
          <div className="bg-gray-100 dark:bg-[#202047] p-4 rounded-lg shadow-md">
          <h1 className='text-xl font-bold mb-2'>Product List</h1>
            {/* Search Bar and Filtering */}
            <div className="md:flex items-center mb-4">
                {/* Search Input and Button */}
                <div className="flex w-full">
                    <input
                    type="text"
                    placeholder="Search products..."
                    className="border dark:text-black border-teal-500 w-[100%] rounded-l-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                    className="bg-green-500 text-white md:px-10 py-2 rounded-r-md hover:bg-green-600 focus:outline-none"
                    onClick={() => { /* Implement search logic here if needed */ }}
                    >
                    Search
                    </button>
                </div>

                {/* Reset Button */}
                <button
                    className="lg:ml-2 bg-blue-500 text-white px-8 mt-2 md:mt-0 md:px-10  py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                    onClick={() => setSearchTerm("")}
                >
                    Reset
                </button>
            </div>


  
            {/* Categories */}
            <h1 className='text-xl font-bold mb-2'>Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-4">
              <button className="bg-teal-500 text-white px-4 py-2 rounded-md">
                Document
              </button>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-md">
                Electronics
              </button>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-md">
                Fashion
              </button>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-md">
                Hardware
              </button>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-md">
                House
              </button>
            </div>
  
            {/* Product List */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.slice(0, 10).map((product) => (
                <div key={product.id} className="border border-gray-300 p-2 rounded-md">
                  <div className="bg-gray-200 h-24 flex justify-center items-center rounded-md">
                    <span>No Image</span>
                  </div>
                  <p className="mt-2 font-bold">{product.name} - 0000{product.id}</p>
                  <p>{product.price.toFixed(2)} Tk</p>
                  <p>Stock: {product.stock} pc</p>
                </div>
              ))}
            </div>
  
            {/* Pagination */}
            <div className="flex justify-center mt-4">
              <button className="px-4 py-2 mx-2 bg-gray-200 rounded-md hover:bg-gray-300">1</button>
              <button className="px-4 py-2 mx-2 bg-gray-200 rounded-md hover:bg-gray-300">2</button>
            </div>
          </div>
        </div>
            </div>
        </div>
    );
  };