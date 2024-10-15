"use client";

import React, { useState, useEffect } from 'react';

export default function Payments() {
    const data = [
        { id: 1, customer: "Amina Rahman", supplier: "", date: "2023-10-01", amount: 1200.50, type: "Credit", wallet: "Mobile Wallet", note: "Payment for services" },
        { id: 2, customer: "", supplier: "Delta Supplies", date: "2023-10-02", amount: 850.00, type: "Debit", wallet: "Bank Account", note: "Office supplies" },
        { id: 3, customer: "Mehedi Hasan", supplier: "", date: "2023-10-03", amount: 1500.75, type: "Credit", wallet: "Mobile Wallet", note: "Fresh vegetables" },
        { id: 4, customer: "", supplier: "Perfect Electronics", date: "2023-10-04", amount: 3200.00, type: "Debit", wallet: "Bank Account", note: "New computer" },
        { id: 5, customer: "Tanvir Hossain", supplier: "", date: "2023-10-05", amount: 750.25, type: "Credit", wallet: "Mobile Wallet", note: "Fabric purchase" },
        { id: 6, customer: "", supplier: "Digital World", date: "2023-10-06", amount: 1000.00, type: "Debit", wallet: "Bank Account", note: "Software license" },
        { id: 7, customer: "Shuvo Das", supplier: "", date: "2023-10-07", amount: 600.40, type: "Credit", wallet: "Mobile Wallet", note: "Import duty" },
        { id: 8, customer: "", supplier: "SRS Construction", date: "2023-10-08", amount: 4500.80, type: "Debit", wallet: "Bank Account", note: "Building materials" },
        { id: 9, customer: "Zaman Chowdhury", supplier: "", date: "2023-10-09", amount: 2700.00, type: "Credit", wallet: "Mobile Wallet", note: "Vehicle parts" },
        { id: 10, customer: "", supplier: "Rahman & Sons", date: "2023-10-10", amount: 1900.30, type: "Debit", wallet: "Bank Account", note: "Miscellaneous" },
        { id: 11, customer: "Fatema Anwar", supplier: "", date: "2023-10-11", amount: 1750.00, type: "Credit", wallet: "Mobile Wallet", note: "Consulting fees" },
        { id: 12, customer: "", supplier: "Anwar & Co.", date: "2023-10-12", amount: 2000.50, type: "Debit", wallet: "Bank Account", note: "Marketing services" },
        { id: 13, customer: "Rashidul Islam", supplier: "", date: "2023-10-13", amount: 1350.75, type: "Credit", wallet: "Mobile Wallet", note: "Training session" },
        { id: 14, customer: "", supplier: "Shamsul Trading", date: "2023-10-14", amount: 780.25, type: "Debit", wallet: "Bank Account", note: "Office furniture" },
        { id: 15, customer: "Maya Sarker", supplier: "", date: "2023-10-15", amount: 950.00, type: "Credit", wallet: "Mobile Wallet", note: "Graphic design services" },
        { id: 16, customer: "", supplier: "TechSolutions", date: "2023-10-16", amount: 4300.00, type: "Debit", wallet: "Bank Account", note: "IT support" },
        { id: 17, customer: "Shabana Hossain", supplier: "", date: "2023-10-17", amount: 2200.25, type: "Credit", wallet: "Mobile Wallet", note: "Event management" },
        { id: 18, customer: "", supplier: "Bengal Construction", date: "2023-10-18", amount: 15000.00, type: "Debit", wallet: "Bank Account", note: "Construction services" },
        { id: 19, customer: "Nadia Akter", supplier: "", date: "2023-10-19", amount: 980.50, type: "Credit", wallet: "Mobile Wallet", note: "Consultation fees" },
        { id: 20, customer: "", supplier: "Sunny Enterprises", date: "2023-10-20", amount: 6700.00, type: "Debit", wallet: "Bank Account", note: "Product supply" },
        { id: 21, customer: "Adnan Shikder", supplier: "", date: "2023-10-21", amount: 3000.00, type: "Credit", wallet: "Mobile Wallet", note: "Digital marketing" },
        { id: 22, customer: "", supplier: "New Wave Media", date: "2023-10-22", amount: 1200.00, type: "Debit", wallet: "Bank Account", note: "Advertising services" },
        { id: 23, customer: "Rina Binte Rashid", supplier: "", date: "2023-10-23", amount: 800.00, type: "Credit", wallet: "Mobile Wallet", note: "Social media management" },
        { id: 24, customer: "", supplier: "City Decor", date: "2023-10-24", amount: 3000.50, type: "Debit", wallet: "Bank Account", note: "Interior design" },
        { id: 25, customer: "Imran Noor", supplier: "", date: "2023-10-25", amount: 1100.25, type: "Credit", wallet: "Mobile Wallet", note: "Web hosting fees" },
        { id: 26, customer: "", supplier: "Elite Fashion", date: "2023-10-26", amount: 2500.75, type: "Debit", wallet: "Bank Account", note: "Clothing supplies" },
        { id: 27, customer: "Fahim Iqbal", supplier: "", date: "2023-10-27", amount: 1350.40, type: "Credit", wallet: "Mobile Wallet", note: "Graphic design" },
        { id: 28, customer: "", supplier: "Grocery Store", date: "2023-10-28", amount: 3200.00, type: "Debit", wallet: "Bank Account", note: "Groceries purchase" },
        { id: 29, customer: "Nazmul Hossain", supplier: "", date: "2023-10-29", amount: 450.00, type: "Credit", wallet: "Mobile Wallet", note: "Food delivery" },
        { id: 30, customer: "", supplier: "Transport Services", date: "2023-10-30", amount: 1500.00, type: "Debit", wallet: "Bank Account", note: "Transport fee" },
        { id: 31, customer: "Anika Rahman", supplier: "", date: "2023-10-31", amount: 500.25, type: "Credit", wallet: "Mobile Wallet", note: "Consultation fees" },
        { id: 32, customer: "", supplier: "Luxury Cars", date: "2023-11-01", amount: 27000.00, type: "Debit", wallet: "Bank Account", note: "Vehicle purchase" },
        { id: 33, customer: "Riyad Chowdhury", supplier: "", date: "2023-11-02", amount: 900.00, type: "Credit", wallet: "Mobile Wallet", note: "Delivery charge" },
        { id: 34, customer: "", supplier: "Home Decor", date: "2023-11-03", amount: 5600.50, type: "Debit", wallet: "Bank Account", note: "Home decoration" },
        { id: 35, customer: "Sadia Yasmin", supplier: "", date: "2023-11-04", amount: 300.00, type: "Credit", wallet: "Mobile Wallet", note: "Service charge" },
        { id: 36, customer: "", supplier: "Tech Guru", date: "2023-11-05", amount: 890.00, type: "Debit", wallet: "Bank Account", note: "IT consulting" },
        { id: 37, customer: "Ali Hossain", supplier: "", date: "2023-11-06", amount: 2400.00, type: "Credit", wallet: "Mobile Wallet", note: "Delivery service" },
        { id: 38, customer: "", supplier: "Designs & Prints", date: "2023-11-07", amount: 1500.00, type: "Debit", wallet: "Bank Account", note: "Print services" },
        { id: 39, customer: "Sumaiya Islam", supplier: "", date: "2023-11-08", amount: 780.25, type: "Credit", wallet: "Mobile Wallet", note: "Event services" },
        { id: 40, customer: "", supplier: "Import Exports", date: "2023-11-09", amount: 3400.00, type: "Debit", wallet: "Bank Account", note: "Import duty" }
      ];
      
    
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(10);
      const [nameFilter, setNameFilter] = useState('');
      const [startDateFilter, setStartDateFilter] = useState('');
      const [endDateFilter, setEndDateFilter] = useState('');
    
      // Unique customer and supplier options combined
      const names = Array.from(new Set(data.map(item => item.customer).concat(data.map(item => item.supplier)))).sort();
    
      // Filtered data based on filters
      const filteredData = data.filter(item => {
        const withinDateRange =
          (!startDateFilter || new Date(item.date) >= new Date(startDateFilter)) &&
          (!endDateFilter || new Date(item.date) <= new Date(endDateFilter));
    
        return (
          (nameFilter === '' || item.customer === nameFilter || item.supplier === nameFilter) &&
          withinDateRange
        );
      });
    
      // Total pages
      const totalPages = Math.ceil(filteredData.length / itemsPerPage);
      
      // Current items for the page
      const currentRows = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    
      const handleFilter = () => {
        setCurrentPage(1); // Reset to first page on filter change
      };
    
      const handleReset = () => {
        setNameFilter('');
        setStartDateFilter('');
        setEndDateFilter('');
        setCurrentPage(1);
      };
    
      const handlePrint = () => {
        const printContent = document.getElementById("table-to-print").outerHTML;
        const newWindow = window.open('', '_blank');
        newWindow.document.write(`
          <html>
            <head>
              <title>Print Invoice</title>
              <style>
                body { font-family: Arial, sans-serif; }
                table { border-collapse: collapse; width: 100%; }
                th, td { border: 1px solid #000; padding: 8px; text-align: left; }
              </style>
            </head>
            <body onload="window.print()">
              ${printContent.replace(/<th>Actions<\/th>.*?<\/tr>/, '')} <!-- Remove the Actions column -->
            </body>
          </html>
        `);
        newWindow.document.close();
      };
    
      const handleDelete = (id) => {

        // Add delete logic here
      };
    
      const handleInvoice = (id) => {
        // Add invoice generation logic here
      };
    
      return (
        <div className="container mx-auto mt-[5%] px-4 sm:px-6 lg:px-8 text-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold mb-5 mt-5">Paytem Management</h2>
            <button 
              onClick={handlePrint} 
              className="bg-green-500 text-white rounded px-4 py-2"
            >
              Print
            </button>
          </div>
    
          <div className="flex flex-wrap justify-between items-center mb-4 text-sm">
            <select 
              value={nameFilter} 
              onChange={(e) => setNameFilter(e.target.value)} 
              className="border rounded px-4 py-2 mb-2 sm:mb-0 sm:mr-2 flex-1"
            >
              <option value="">Select Customer/Supplier</option>
              {names.map((name, index) => (
                <option key={index} value={name}>{name}</option>
              ))}
            </select>
            <input 
              type="date" 
              value={startDateFilter} 
              onChange={(e) => setStartDateFilter(e.target.value)} 
              className="border rounded px-4 py-2 mb-2 sm:mb-0 sm:mr-2 flex-1"
            />
            <input 
              type="date" 
              value={endDateFilter} 
              onChange={(e) => setEndDateFilter(e.target.value)} 
              className="border rounded px-4 py-2 mb-2 sm:mb-0 sm:mr-2 flex-1"
            />
            <button 
              onClick={handleFilter} 
              className="bg-blue-500 text-white rounded px-4 py-2 mb-2 sm:mb-0 sm:mr-2"
            >
              Filter
            </button>
            <button 
              onClick={handleReset} 
              className="bg-gray-300 text-black rounded px-4 py-2 mb-2 sm:mb-0"
            >
              Reset
            </button>
          </div>
    
          <table id="table-to-print" className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">SL</th>
                <th className="border border-gray-300 px-4 py-2">Customer/Supplier</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Amount</th>
                <th className="border border-gray-300 px-4 py-2">Type</th>
                <th className="border border-gray-300 px-4 py-2">Wallet</th>
                <th className="border border-gray-300 px-4 py-2">Note</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.length > 0 ? (
                currentRows.map((item) => (
                  <tr key={item.id} className='dark:text-white'>
                    <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                    <td className="border border-gray-300 px-4 py-2">
                        {item.customer ? `Customer Name: ${item.customer}` : item.supplier ? `Supplier Name: ${item.supplier}` : 'N/A'}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{item.date}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.amount}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.type}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.wallet}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.note || 'N/A'}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button 
                        onClick={() => handleInvoice(item.id)} 
                        className="bg-blue-500 text-white rounded px-2 py-1 mr-2"
                      >
                        Invoice
                      </button>
                      <button 
                        onClick={() => handleDelete(item.id)} 
                        className="bg-red-500 text-white rounded px-2 py-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="border border-gray-300 px-4 py-2 text-center">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
    
          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <div>
              <span>Page {currentPage} of {totalPages}</span>
            </div>
            <div className="flex">
              {Array.from({ length: totalPages }, (_, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentPage(index + 1)} 
                  className={`border rounded px-2 py-1 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    };