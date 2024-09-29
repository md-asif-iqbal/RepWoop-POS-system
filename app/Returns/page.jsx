"use client"


import Image from "next/image";
import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
const SalesReturnList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState("");
  const [sortBy, setSortBy] = useState("date");

  const salesReturns = [
    {
      productName: "Macbook Pro",
      date: "19 Nov 2022",
      customer: "Thomas",
      status: "Received",
      grandTotal: 550,
      paid: 120,
      due: 550,
      paymentStatus: "Paid",
    },
    {
      productName: "Orange",
      date: "19 Nov 2022",
      customer: "Benjamin",
      status: "Pending",
      grandTotal: 550,
      paid: 120,
      due: 550,
      paymentStatus: "Unpaid",
    },
    {
      productName: "Pineapple",
      date: "19 Nov 2022",
      customer: "James",
      status: "Pending",
      grandTotal: 210,
      paid: 120,
      due: 210,
      paymentStatus: "Unpaid",
    },
    {
      productName: "Strawberry",
      date: "19 Nov 2022",
      customer: "Bruklin",
      status: "Received",
      grandTotal: 210,
      paid: 120,
      due: 210,
      paymentStatus: "Paid",
    },
    {
      productName: "Strawberry",
      date: "19 Nov 2022",
      customer: "Bruklin",
      status: "Received",
      grandTotal: 210,
      paid: 120,
      due: 210,
      paymentStatus: "Paid",
    },
    {
      productName: "Macbook Pro",
      date: "19 Nov 2022",
      customer: "Best Power Tools",
      status: "Received",
      grandTotal: 210,
      paid: 120,
      due: 210,
      paymentStatus: "Paid",
    },
    {
      productName: "Avocat",
      date: "19 Nov 2022",
      customer: "Beverly",
      status: "Pending",
      grandTotal: 210,
      paid: 120,
      due: 210,
      paymentStatus: "Unpaid",
    },
    {
      productName: "Apple Earpods",
      date: "19 Nov 2022",
      customer: "Apex Computers",
      status: "Ordered",
      grandTotal: 1000,
      paid: 500,
      due: 1000,
      paymentStatus: "Partial",
    },
  ];
    const uniqueCustomers = [...new Set(salesReturns.map((item) => item.customer))];
    const uniqueStatuses = [...new Set(salesReturns.map((item) => item.status))];
    const uniquePaymentStatuses = [...new Set(salesReturns.map((item) => item.paymentStatus))];

  // Filter logic
  const filteredSalesReturns = salesReturns.filter((returnItem) => {
    return (
      returnItem.productName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCustomer === "" || returnItem.customer === selectedCustomer) &&
      (selectedStatus === "" || returnItem.status === selectedStatus) &&
      (selectedPaymentStatus === "" || returnItem.paymentStatus === selectedPaymentStatus)
    );
  });

  return (
    <div className="bg-white dark:bg-[#141432] text-gray-900 dark:text-gray-100">
        <div className=" container mx-auto mt-[5%] scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-xl font-bold">Sales Return List</h1>
    <button className="bg-orange-500 text-white px-4 py-2 rounded">Add New Sales Return</button>
  </div>

  {/* Search, Filters, and Sort Section */}
  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
    {/* Search Bar */}
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="border rounded px-4 py-2 w-full dark:text-black"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500">
      <CiSearch size={20}/>
      </button>
    </div>
    {/* Customer Filter */}
    <select
      className="border rounded px-4 py-2 w-full dark:text-black"
      value={selectedCustomer}
      onChange={(e) => setSelectedCustomer(e.target.value)}
    >
      <option value="">Choose Customer</option>
      {/* <!-- Add customer options here --> */}
      {uniqueCustomers.map((customer, index) => (
        <option key={index} value={customer}>
          {customer}
        </option>
      ))}
    </select>
    {/* Status Filter */}
    <select
      className="border rounded px-4 py-2 w-full dark:text-black"
      value={selectedStatus}
      onChange={(e) => setSelectedStatus(e.target.value)}
    >
      <option value="">Choose Status</option>
      {uniqueStatuses.map((status, index) => (
          <option key={index} value={status}>
            {status}
          </option>
        ))}
    </select>
    {/* Payment Status Filter */}
    <select
      className="border rounded px-4 py-2 w-full dark:text-black"
      value={selectedPaymentStatus}
      onChange={(e) => setSelectedPaymentStatus(e.target.value)}
    >
      <option value="">Choose Payment Status</option>
      {uniquePaymentStatuses.map((paymentStatus, index) => (
          <option key={index} value={paymentStatus}>
            {paymentStatus}
          </option>
        ))}
    </select>
  </div>

  {/* Sort by Date */}
  <div className="flex justify-end mb-4">
    <select
      className="border rounded px-4 py-2 dark:text-black"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="date">Sort by Date</option>
      {/* <!-- Additional sorting options --> */}
    </select>
  </div>

  {/* Sales Return Table */}
  <div className="overflow-x-auto dark:bg-[#141432]">
    <table className="min-w-full bg-white dark:bg-[#29294e] border rounded-md shadow-md">
      <thead className="">
        <tr>
        <th className="p-4 text-left">Product</th>
    
          <th className="p-4 text-left">Product Image</th>
          <th className="p-4 text-left">Product Name</th>
          <th className="p-4 text-left">Date</th>
          <th className="p-4 text-left">Customer</th>
          <th className="p-4 text-left">Status</th>
          <th className="p-4 text-left">Grand Total ($)</th>
          <th className="p-4 text-left">Paid ($)</th>
          <th className="p-4 text-left">Due ($)</th>
          <th className="p-4 text-left">Payment Status</th>
          <th className="p-4 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredSalesReturns.map((returnItem, index) => (
          <tr key={index} className="border-t border-r border-b border-l">
            {/* Select Checkbox */}
            <td className="p-4">
              <input type="checkbox" value={returnItem.productId} className="p-5" />
            </td>
         
            {/* Product Image */}
            <td className="p-4">
              <Image src={returnItem.productImage} alt={returnItem.productName} className="w-12 h-12 rounded-full"/>
            </td>
            <td className="p-4">{returnItem.productName}</td>
            <td className="p-4">{returnItem.date}</td>
            <td className="p-4">{returnItem.customer}</td>
            <td className="p-4">
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  returnItem.status === "Received"
                    ? "bg-green-100 text-green-700"
                    : returnItem.status === "Pending"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {returnItem.status}
              </span>
            </td>
            <td className="p-4">{returnItem.grandTotal}</td>
            <td className="p-4">{returnItem.paid}</td>
            <td className="p-4">{returnItem.due}</td>
            <td className="p-4">
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  returnItem.paymentStatus === "Paid"
                    ? "bg-green-100 text-green-700"
                    : returnItem.paymentStatus === "Unpaid"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {returnItem.paymentStatus}
              </span>
            </td>
            <td className="p-4 flex space-x-2">
              <div className="flex item-center justify-center gap-5">
                <button className="p-1 rounded-lg border-2 transform text-blue-600 hover:text-blue-500 hover:scale-110">
                  <TbEdit size={16}/>
                </button>
                <button className="p-1 rounded-lg transform text-red-600 hover:text-red-500 hover:scale-110 border-2">
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
    </div>


  );
};

export default SalesReturnList;
