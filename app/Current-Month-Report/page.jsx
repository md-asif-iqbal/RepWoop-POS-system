"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

export default function CurrentMonthReport() {
    const pathname = usePathname();
    const spanClass = " block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"
    const entriesPerPage = 10;

    // Sample data for each table
    const topSaleProducts = [
      { id: 1, productName: 'Product A', quantity: 10, totalSale: 1000, saleAmount: 'TK 1000' },
      { id: 2, productName: 'Product B', quantity: 20, totalSale: 2000, saleAmount: 'TK 2000' },
      { id: 3, productName: 'Product C', quantity: 30, totalSale: 3000, saleAmount: 'TK 3000' },
      { id: 4, productName: 'Product D', quantity: 40, totalSale: 4000, saleAmount: 'TK 4000' },
      { id: 5, productName: 'Product E', quantity: 50, totalSale: 5000, saleAmount: 'TK 5000' },
      { id: 6, productName: 'Product F', quantity: 60, totalSale: 6000, saleAmount: 'TK 6000' },
      { id: 7, productName: 'Product G', quantity: 70, totalSale: 7000, saleAmount: 'TK 7000' },
      { id: 8, productName: 'Product H', quantity: 80, totalSale: 8000, saleAmount: 'TK 8000' },
      { id: 9, productName: 'Product I', quantity: 90, totalSale: 9000, saleAmount: 'TK 9000' },
      { id: 10, productName: 'Product J', quantity: 100, totalSale: 10000, saleAmount: 'TK 10000' },
      { id: 11, productName: 'Product K', quantity: 110, totalSale: 11000, saleAmount: 'TK 11000' },
    ];
  
    const expenses = [
      { id: 1, expense: 'Office Rent', category: 'Administrative', amount: 'TK 30000' },
      { id: 2, expense: 'Electricity Bill', category: 'Utility', amount: 'TK 5000' },
      { id: 3, expense: 'Internet Bill', category: 'Utility', amount: 'TK 2000' },
      { id: 4, expense: 'Stationery', category: 'Office Supplies', amount: 'TK 1500' },
      { id: 5, expense: 'Travel Expenses', category: 'Logistics', amount: 'TK 8000' },
    ];
  
    const paymentsToSuppliers = [
      { id: 1, supplier: 'Supplier A', paymentDate: '2024-10-01', amount: 'TK 50000' },
      { id: 2, supplier: 'Supplier B', paymentDate: '2024-10-02', amount: 'TK 60000' },
      { id: 3, supplier: 'Supplier C', paymentDate: '2024-10-03', amount: 'TK 30000' },
      { id: 4, supplier: 'Supplier D', paymentDate: '2024-10-04', amount: 'TK 40000' },
      { id: 5, supplier: 'Supplier E', paymentDate: '2024-10-05', amount: 'TK 70000' },
    ];
  
    const paymentsFromCustomers = [
      { id: 1, customer: 'Customer A', paymentDate: '2024-10-01', amount: 'TK 50000' },
      { id: 2, customer: 'Customer B', paymentDate: '2024-10-02', amount: 'TK 30000' },
      { id: 3, customer: 'Customer C', paymentDate: '2024-10-03', amount: 'TK 20000' },
      { id: 4, customer: 'Customer D', paymentDate: '2024-10-04', amount: 'TK 40000' },
      { id: 5, customer: 'Customer E', paymentDate: '2024-10-05', amount: 'TK 35000' },
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
    <div className='bg-white dark:bg-[#141432] font-nunito text-sm'>

    <div className="p-0  mt-[25%] sm:mt-[5%]  w-full">
              {/* Title Section */}

  <div className=" mb-4  shadow-sm rounded-sm font-bold">
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
      {/* Top Summary Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-green-500 text-white p-4 rounded shadow-md">
          <h3 className="text-lg font-bold">SALE AMOUNT</h3>
          <p className="text-3xl mt-2">TK 4,167,593</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded shadow-md">
          <h3 className="text-lg font-bold">PURCHASE COST</h3>
          <p className="text-3xl mt-2">TK 3,651,596</p>
        </div>
        <div className="bg-gray-700 text-white p-4 rounded shadow-md">
          <h3 className="text-lg font-bold">EXPENSE</h3>
          <p className="text-3xl mt-2">TK 25,130</p>
        </div>
        <div className="bg-teal-500 text-white p-4 rounded shadow-md">
          <h3 className="text-lg font-bold">SELL PROFIT</h3>
          <p className="text-3xl mt-2">TK 515,997</p>
        </div>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Top Sale Product Table */}
        <div>
          <h2 className="text-xl font-bold">Top Sale Product</h2>
          <div className="flex justify-between mt-4">
            <CSVLink data={topSaleProducts} filename="top-sale-products.csv" className="bg-blue-500 text-white px-2 py-1">
              Export CSV
            </CSVLink>
            <button className="bg-green-500 text-white px-2 py-1" onClick={() => exportToExcel(topSaleProducts, 'Top Sale Product')}>
              Export Excel
            </button>
            <button className="bg-red-500 text-white px-2 py-1" onClick={() => exportPDF(topSaleProducts, 'Top Sale Product')}>
              Export PDF
            </button>
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
              {paginate(topSaleProducts.filter(product => product.productName.toLowerCase().includes(search1.toLowerCase())), currentPage1).map((product, index) => (
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
        </div>

        {/* Expense Table */}
        <div>
          <h2 className="text-xl font-bold">Expense</h2>
          <div className="flex justify-between mt-4">
            <CSVLink data={expenses} filename="expenses.csv" className="bg-blue-500 text-white px-2 py-1">
              Export CSV
            </CSVLink>
            <button className="bg-green-500 text-white px-2 py-1" onClick={() => exportToExcel(expenses, 'Expenses')}>
              Export Excel
            </button>
            <button className="bg-red-500 text-white px-2 py-1" onClick={() => exportPDF(expenses, 'Expenses')}>
              Export PDF
            </button>
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
              {paginate(expenses.filter(exp => exp.expense.toLowerCase().includes(search2.toLowerCase())), currentPage2).map((expense, index) => (
                <tr key={index}>
                  <td className="border p-2">{index + 1 + currentPage2 * entriesPerPage}</td>
                  <td className="border p-2">{expense.expense}</td>
                  <td className="border p-2">{expense.category}</td>
                  <td className="border p-2">{expense.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pay to Supplier Table */}
        <div>
          <h2 className="text-xl font-bold">Pay to Supplier</h2>
          <div className="flex justify-between mt-4">
            <CSVLink data={paymentsToSuppliers} filename="payments-to-suppliers.csv" className="bg-blue-500 text-white px-2 py-1">
              Export CSV
            </CSVLink>
            <button className="bg-green-500 text-white px-2 py-1" onClick={() => exportToExcel(paymentsToSuppliers, 'Payments to Suppliers')}>
              Export Excel
            </button>
            <button className="bg-red-500 text-white px-2 py-1" onClick={() => exportPDF(paymentsToSuppliers, 'Payments to Suppliers')}>
              Export PDF
            </button>
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
              {paginate(paymentsToSuppliers.filter(payment => payment.supplier.toLowerCase().includes(search3.toLowerCase())), currentPage3).map((payment, index) => (
                <tr key={index}>
                  <td className="border p-2">{index + 1 + currentPage3 * entriesPerPage}</td>
                  <td className="border p-2">{payment.supplier}</td>
                  <td className="border p-2">{payment.paymentDate}</td>
                  <td className="border p-2">{payment.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Receive from Customer Table */}
        <div>
          <h2 className="text-xl font-bold">Receive from Customer</h2>
          <div className="flex justify-between mt-4">
            <CSVLink data={paymentsFromCustomers} filename="payments-from-customers.csv" className="bg-blue-500 text-white px-2 py-1">
              Export CSV
            </CSVLink>
            <button className="bg-green-500 text-white px-2 py-1" onClick={() => exportToExcel(paymentsFromCustomers, 'Payments from Customers')}>
              Export Excel
            </button>
            <button className="bg-red-500 text-white px-2 py-1" onClick={() => exportPDF(paymentsFromCustomers, 'Payments from Customers')}>
              Export PDF
            </button>
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
              {paginate(paymentsFromCustomers.filter(payment => payment.customer.toLowerCase().includes(search4.toLowerCase())), currentPage4).map((payment, index) => (
                <tr key={index}>
                  <td className="border p-2">{index + 1 + currentPage4 * entriesPerPage}</td>
                  <td className="border p-2">{payment.customer}</td>
                  <td className="border p-2">{payment.paymentDate}</td>
                  <td className="border p-2">{payment.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

 


 
</div>
</div>
  )
}
