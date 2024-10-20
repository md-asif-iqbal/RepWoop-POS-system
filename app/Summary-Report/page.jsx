"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

export default function SummaryReport() {

     const pathname = usePathname();
    const spanClass = " block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"
    const entriesPerPage = 10; // Entries per page for pagination

    // State for start and end date for filtering
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [filtered, setFiltered] = useState(false);
  
    // Sample data for each table with valid 10 entries per table
    const topSaleProducts = [
      { id: 1, productName: 'Mobile Phone', quantity: 150, totalSale: 75000, saleAmount: 'TK 75,000', date: '2024-10-01' },
      { id: 2, productName: 'Laptop', quantity: 80, totalSale: 400000, saleAmount: 'TK 400,000', date: '2024-10-02' },
      { id: 3, productName: 'Headphones', quantity: 100, totalSale: 30000, saleAmount: 'TK 30,000', date: '2024-10-03' },
      { id: 4, productName: 'Smartwatch', quantity: 50, totalSale: 75000, saleAmount: 'TK 75,000', date: '2024-10-04' },
      { id: 5, productName: 'Tablet', quantity: 40, totalSale: 200000, saleAmount: 'TK 200,000', date: '2024-10-05' },
      { id: 6, productName: 'Keyboard', quantity: 90, totalSale: 27000, saleAmount: 'TK 27,000', date: '2024-10-06' },
      { id: 7, productName: 'Mouse', quantity: 110, totalSale: 22000, saleAmount: 'TK 22,000', date: '2024-10-07' },
      { id: 8, productName: 'Monitor', quantity: 30, totalSale: 60000, saleAmount: 'TK 60,000', date: '2024-10-08' },
      { id: 9, productName: 'Printer', quantity: 20, totalSale: 50000, saleAmount: 'TK 50,000', date: '2024-10-09' },
      { id: 10, productName: 'Camera', quantity: 60, totalSale: 180000, saleAmount: 'TK 180,000', date: '2024-10-10' },
    ];
  
    const expenses = [
      { id: 1, expense: 'Office Rent', category: 'Administrative', amount: 'TK 120,000', date: '2024-10-01' },
      { id: 2, expense: 'Electricity Bill', category: 'Utility', amount: 'TK 35,000', date: '2024-10-03' },
      { id: 3, expense: 'Internet Bill', category: 'Utility', amount: 'TK 10,000', date: '2024-10-05' },
      { id: 4, expense: 'Office Supplies', category: 'Stationery', amount: 'TK 15,000', date: '2024-10-07' },
      { id: 5, expense: 'Travel Expenses', category: 'Logistics', amount: 'TK 25,000', date: '2024-10-09' },
    ];
  
    const paymentsToSuppliers = [
      { id: 1, supplier: 'TechMart Ltd.', paymentDate: '2024-10-01', amount: 'TK 500,000' },
      { id: 2, supplier: 'Office World Supplies', paymentDate: '2024-10-05', amount: 'TK 150,000' },
      { id: 3, supplier: 'City Electric Co.', paymentDate: '2024-10-10', amount: 'TK 80,000' },
      { id: 4, supplier: 'NetCom Solutions', paymentDate: '2024-10-12', amount: 'TK 120,000' },
      { id: 5, supplier: 'WorkTech Office Furniture', paymentDate: '2024-10-15', amount: 'TK 200,000' },
    ];
  
    const paymentsFromCustomers = [
      { id: 1, customer: 'John Doe', paymentDate: '2024-10-02', amount: 'TK 125,000' },
      { id: 2, customer: 'Jane Smith', paymentDate: '2024-10-06', amount: 'TK 75,000' },
      { id: 3, customer: 'Acme Corporation', paymentDate: '2024-10-08', amount: 'TK 180,000' },
      { id: 4, customer: 'Global Industries', paymentDate: '2024-10-11', amount: 'TK 250,000' },
      { id: 5, customer: 'Tech Innovators', paymentDate: '2024-10-13', amount: 'TK 320,000' },
    ];
  
    // State for pagination and search
    const [search1, setSearch1] = useState('');
    const [search2, setSearch2] = useState('');
    const [search3, setSearch3] = useState('');
    const [search4, setSearch4] = useState('');
  
    const [currentPage1, setCurrentPage1] = useState(0);
    const [currentPage2, setCurrentPage2] = useState(0);
    const [currentPage3, setCurrentPage3] = useState(0);
    const [currentPage4, setCurrentPage4] = useState(0);
  
    const paginate = (data, page) => {
      const startIndex = page * entriesPerPage;
      return data.slice(startIndex, startIndex + entriesPerPage);
    };
  
    const filterByDate = (data) => {
      if (!startDate || !endDate || !filtered) return data;
      return data.filter((item) => new Date(item.date || item.paymentDate) >= new Date(startDate) && new Date(item.date || item.paymentDate) <= new Date(endDate));
    };
  
    const handleFilter = () => {
      setFiltered(true);
    };
  
    const resetFilter = () => {
      setStartDate('');
      setEndDate('');
      setFiltered(false);
    };
  
    const exportToExcel = (data, filename) => {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      XLSX.writeFile(workbook, `${filename}.xlsx`);
    };
  
    const exportPDF = (data, title) => {
      const doc = new jsPDF();
      doc.text(title, 20, 10);
      doc.autoTable({
        head: [['#', 'Name', 'Details', 'Amount']],
        body: data.map((item, index) => [
          index + 1,
          item.productName || item.expense || item.supplier || item.customer,
          item.quantity || item.category || item.paymentDate || '',
          item.totalSale || item.amount,
        ]),
      });
      doc.save(`${title}.pdf`);
    };


  return (
    <div className='bg-white dark:bg-[#141432] font-nunito text-sm dark:text-white'>

    <div className="p-0  mt-[25%] sm:mt-[5%]  w-full">
              {/* Title Section */}

  <div className=" mb-4  shadow-sm rounded-sm ">
  <h1 className="text-xl text-gray-500 dark:text-white mx-5 ">Today Report </h1>
    <div className=' sm:md:flex items-start justify-start mx-5 py-5 gap-10 '>
        <Link href="/Today-Report" className= {`${
                          pathname === '/Today-Report' 
                          ? ' group text-orange-500  hover:text-orange-500' 
                          : 'group text-gray-500 dark:text-white hover:text-orange-500 '
                      }`}>
        Today Report
        <span className={spanClass}></span>
        </Link>
        <Link href="/Current-Month-Report" className={`${
                          pathname === '/Current-Month-Report' 
                          ? ' group text-orange-500  hover:text-orange-500' 
                          : 'group text-gray-500 dark:text-white hover:text-orange-500 '
                      }`}>
        Current Month Report
        <span className={spanClass}></span>
        </Link>
        <Link href="/Summary-Report" className= {`${
                          pathname === '/Summary-Report' 
                          ? ' group text-orange-500  hover:text-orange-500' 
                          : 'group text-gray-500 dark:text-white hover:text-orange-500 '
                      }`}>
        Summary Report
        <span className={spanClass}></span>
        </Link>
    </div>
  </div>

  <div className="container mx-auto px-4 py-8">
      {/* Date Filter */}
      <div className="md:flex justify-between mb-8 w-full gap-5">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 w-full mb-2 md:mb-0"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 w-full mb-2 md:mb-0"
        />
        <button onClick={handleFilter} className="bg-blue-500 text-white p-2 w-full md:w-1/4 mb-2 md:mb-0">Filter</button>
        <button onClick={resetFilter} className="bg-red-500 text-white p-2 w-full md:w-1/4 mb-2 md:mb-0">Reset</button>
      </div>

      {/* Top Summary Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-green-500 text-white p-4 rounded shadow-md">
          <h3 className="text-sm">SALE AMOUNT</h3>
          <p className="text-md">TK 4,167,593</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded shadow-md">
          <h3 className="text-sm">PURCHASE COST</h3>
          <p className="text-md">TK 3,651,596</p>
        </div>
        <div className="bg-gray-700 text-white p-4 rounded shadow-md">
          <h3 className="text-sm">EXPENSE</h3>
          <p className="text-md">TK 25,130</p>
        </div>
        <div className="bg-teal-500 text-white p-4 rounded shadow-md">
          <h3 className="text-sm">SELL PROFIT</h3>
          <p className="text-md">TK 515,997</p>
        </div>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Top Sale Product Table */}
        <div className='border rounded'>
          <h2 className="text-lg  bg-teal-500 p-2 text-white">Top Sale Product</h2>
          <div className="md:flex justify-between mt-4">
            <div className="md:flex gap-2">
          <button className="bg-blue-500 text-white px-2 py-1 ">
          <CSVLink data={topSaleProducts} filename="top-sale-products.csv" >
              Export CSV
            </CSVLink>
          </button>
            <button className="bg-green-500 text-white px-2 py-1 " onClick={() => exportToExcel(topSaleProducts, 'Top Sale Product')}>
              Export Excel
            </button>
            <button className="bg-red-500 text-white px-2 py-1" onClick={() => exportPDF(topSaleProducts, 'Top Sale Product')}>
              Export PDF
            </button>
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={search1}
              onChange={(e) => setSearch1(e.target.value)}
              className="border p-2 ml-2"
            />
          </div>
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="border p-2">#</th>
                <th className="border p-2">Product Name</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Total Sale</th>
                <th className="border p-2">Sale Amount</th>
              </tr>
            </thead>
            <tbody>
              {paginate(filterByDate(topSaleProducts.filter(product => product.productName.toLowerCase().includes(search1.toLowerCase()))), currentPage1).map((product, index) => (
                <tr key={index}>
                  <td className="border p-2">{index + 1 + currentPage1 * entriesPerPage}</td>
                  <td className="border p-2">{product.productName}</td>
                  <td className="border p-2">{product.quantity}</td>
                  <td className="border p-2">{product.totalSale}</td>
                  <td className="border p-2">{product.saleAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setCurrentPage1(Math.max(0, currentPage1 - 1))}
              className="bg-gray-300 p-2"
            >
              Previous
            </button>
            <span className="p-2">Page {currentPage1 + 1}</span>
            <button
              onClick={() => setCurrentPage1(currentPage1 + 1)}
              className="bg-gray-300 p-2"
            >
              Next
            </button>
          </div>
        </div>

        {/* Expense Table */}
        <div className='border rounded'>
          <h2 className="text-lg bg-red-500 p-2 text-white">Expense</h2>
          <div className="md:flex justify-between mt-4">
            <div className="md:flex gap-2">
           <button className="bg-blue-500 text-white px-2 py-1 ">
            <CSVLink data={expenses} filename="expenses.csv" >
              Export CSV
            </CSVLink>
           </button>
            <button className="bg-green-500 text-white px-2 py-1 " onClick={() => exportToExcel(expenses, 'Expenses')}>
              Export Excel
            </button>
            <button className="bg-red-500 text-white px-2 py-1" onClick={() => exportPDF(expenses, 'Expenses')}>
              Export PDF
            </button>
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={search2}
              onChange={(e) => setSearch2(e.target.value)}
              className="border p-2 ml-2"
            />
          </div>
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="border p-2">#</th>
                <th className="border p-2">Expense</th>
                <th className="border p-2">Category</th>
                <th className="border p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {paginate(filterByDate(expenses.filter(exp => exp.expense.toLowerCase().includes(search2.toLowerCase()))), currentPage2).map((expense, index) => (
                <tr key={index}>
                  <td className="border p-2">{index + 1 + currentPage2 * entriesPerPage}</td>
                  <td className="border p-2">{expense.expense}</td>
                  <td className="border p-2">{expense.category}</td>
                  <td className="border p-2">{expense.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setCurrentPage2(Math.max(0, currentPage2 - 1))}
              className="bg-gray-300 p-2"
            >
              Previous
            </button>
            <span className="p-2">Page {currentPage2 + 1}</span>
            <button
              onClick={() => setCurrentPage2(currentPage2 + 1)}
              className="bg-gray-300 p-2"
            >
              Next
            </button>
          </div>
        </div>

        {/* Pay to Supplier Table */}
        <div className='border rounded'>
          <h2 className="text-lg p-2 bg-gray-200">Pay to Supplier</h2>
          <div className="md:flex justify-between mt-4">
            <div className="md:flex gap-2">
            <button className="bg-blue-500 text-white px-2 py-1 ">
            <CSVLink data={paymentsToSuppliers} filename="payments-to-suppliers.csv" >
              Export CSV
            </CSVLink>
            </button>
            <button className="bg-green-500 text-white px-2 py-1 " onClick={() => exportToExcel(paymentsToSuppliers, 'Payments to Suppliers')}>
              Export Excel
            </button>
            <button className="bg-red-500 text-white px-2 py-1" onClick={() => exportPDF(paymentsToSuppliers, 'Payments to Suppliers')}>
              Export PDF
            </button>
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={search3}
              onChange={(e) => setSearch3(e.target.value)}
              className="border p-2 ml-2"
            />
          </div>
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="border p-2">#</th>
                <th className="border p-2">Supplier</th>
                <th className="border p-2">Payment Date</th>
                <th className="border p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {paginate(filterByDate(paymentsToSuppliers.filter(payment => payment.supplier.toLowerCase().includes(search3.toLowerCase()))), currentPage3).map((payment, index) => (
                <tr key={index}>
                  <td className="border p-2">{index + 1 + currentPage3 * entriesPerPage}</td>
                  <td className="border p-2">{payment.supplier}</td>
                  <td className="border p-2">{payment.paymentDate}</td>
                  <td className="border p-2">{payment.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setCurrentPage3(Math.max(0, currentPage3 - 1))}
              className="bg-gray-300 p-2"
            >
              Previous
            </button>
            <span className="p-2">Page {currentPage3 + 1}</span>
            <button
              onClick={() => setCurrentPage3(currentPage3 + 1)}
              className="bg-gray-300 p-2"
            >
              Next
            </button>
          </div>
        </div>

        {/* Receive from Customer Table */}
        <div className='border rounded'>
          <h2 className="text-lg p-2 bg-gray-200">Receive from Customer</h2>
          <div className="flex justify-between mt-4">
          <div className='md:flex gap-2'>
          <button className="bg-blue-500 text-white px-2 py-1 ">
           <CSVLink data={paymentsFromCustomers} filename="payments-from-customers.csv" >
              Export CSV
            </CSVLink>
           </button>
            <button className="bg-green-500 text-white px-2 py-1" onClick={() => exportToExcel(paymentsFromCustomers, 'Payments from Customers')}>
              Export Excel
            </button>
            <button className="bg-red-500 text-white px-2 py-1" onClick={() => exportPDF(paymentsFromCustomers, 'Payments from Customers')}>
              Export PDF
            </button>
          </div>
            <input
              type="text"
              placeholder="Search..."
              value={search4}
              onChange={(e) => setSearch4(e.target.value)}
              className="border p-2 ml-2"
            />
          </div>
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="border p-2">#</th>
                <th className="border p-2">Customer</th>
                <th className="border p-2">Payment Date</th>
                <th className="border p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {paginate(filterByDate(paymentsFromCustomers.filter(payment => payment.customer.toLowerCase().includes(search4.toLowerCase()))), currentPage4).map((payment, index) => (
                <tr key={index}>
                  <td className="border p-2">{index + 1 + currentPage4 * entriesPerPage}</td>
                  <td className="border p-2">{payment.customer}</td>
                  <td className="border p-2">{payment.paymentDate}</td>
                  <td className="border p-2">{payment.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setCurrentPage4(Math.max(0, currentPage4 - 1))}
              className="bg-gray-300 p-2"
            >
              Previous
            </button>
            <span className="p-2">Page {currentPage4 + 1}</span>
            <button
              onClick={() => setCurrentPage4(currentPage4 + 1)}
              className="bg-gray-300 p-2"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>

 
</div>
</div>
  )
}
