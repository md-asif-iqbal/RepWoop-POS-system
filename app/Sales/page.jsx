"use client"


import React, { useState } from 'react'
import { GrUserSettings } from 'react-icons/gr';

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedInvoice, setSelectedInvoice] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedCustomer, setSelectedCustomer] = useState("");
    const handleActionClick = (invoiceId) => {
      setSelectedInvoice(invoiceId);
      // You can implement specific logic for each action
      console.log(`Action clicked for invoice: ${invoiceId}`);
    };
    const salesData = [
        {
          invoiceNo: 1,
          customer: "শাহিনুর",
          items: "Ura Code 00000017 1 KG 10 gm",
          date: "18 Sep, 2024",
          discount: "0.0%",
          receivable: "3000 Tk",
          paid: "0.00 Tk",
          due: "3000 Tk",
          purchaseCost: "2800 Tk",
          profit: "200 Tk",
          status: "UNPAID",
        },
        {
          invoiceNo: 2,
          customer: "শাহিনুর",
          items: "Air Condition Code 00000017 1 pc",
          date: "18 Sep, 2024",
          discount: "0.0%",
          receivable: "96000 Tk",
          paid: "0.00 Tk",
          due: "96000 Tk",
          purchaseCost: "91500 Tk",
          profit: "4500 Tk",
          status: "UNPAID",
        },
        {
          invoiceNo: 3,
          customer: "শাহিনুর",
          items:
            "Gorda Code 00000017 1 KG, Gaming Laptop Code 00000111 1 pc, Emisor SML Code 00000116 1 pc",
          date: "18 Sep, 2024",
          discount: "10%",
          receivable: "68500 Tk",
          paid: "0.00 Tk",
          due: "20355 Tk",
          purchaseCost: "24068 Tk",
          profit: "1167 Tk",
          status: "UNPAID",
        },
        {
          invoiceNo: 4,
          customer: "শাহিনুর",
          items: "Ura Code 00000017 1 KG 10 gm",
          date: "18 Sep, 2024",
          discount: "0.0%",
          receivable: "1500 Tk",
          paid: "1500 Tk",
          due: "0.00 Tk",
          purchaseCost: "1400 Tk",
          profit: "100 Tk",
          status: "PAID",
        },
        {
          invoiceNo: 5,
          customer: "Gazi Md Kawser",
          items: "Emisor SML Code 00000116 1 pc",
          date: "18 Sep, 2024",
          discount: "0.0%",
          receivable: "600 Tk",
          paid: "600 Tk",
          due: "0.00 Tk",
          purchaseCost: "560 Tk",
          profit: "40 Tk",
          status: "PAID",
        },
        {
          invoiceNo: 6,
          customer: "Gazi Md Kawser",
          items: "Emisor SML Code 00000116 2 pcs",
          date: "18 Sep, 2024",
          discount: "0.0%",
          receivable: "3600 Tk",
          paid: "0.00 Tk",
          due: "3600 Tk",
          purchaseCost: "2840 Tk",
          profit: "760 Tk",
          status: "UNPAID",
        },
        {
          invoiceNo: 7,
          customer: "Walkin Customer",
          items: "Desktop Computer Code 000003 1 pc, Bliger Fan Code 000001 1 pc",
          date: "18 Sep, 2024",
          discount: "0.0%",
          receivable: "6458 Tk",
          paid: "6458 Tk",
          due: "0.00 Tk",
          purchaseCost: "5625 Tk",
          profit: "833 Tk",
          status: "PAID",
        },
        {
          invoiceNo: 8,
          customer: "Sakib Raiby",
          items: "Air Condition Code 00000017 1 pc",
          date: "16 Sep, 2024",
          discount: "0.0%",
          receivable: "96000 Tk",
          paid: "0.00 Tk",
          due: "96000 Tk",
          purchaseCost: "91500 Tk",
          profit: "4500 Tk",
          status: "UNPAID",
        },
        {
          invoiceNo: 9,
          customer: "Walkin Customer",
          items: "Gorda Code 00000113 1 KG",
          date: "16 Sep, 2024",
          discount: "0.0%",
          receivable: "3800 Tk",
          paid: "0.00 Tk",
          due: "3800 Tk",
          purchaseCost: "3600 Tk",
          profit: "200 Tk",
          status: "UNPAID",
        },
        {
          invoiceNo: 10,
          customer: "Sakib Raiby",
          items: "Air Condition Code 00000017 1 pc",
          date: "16 Sep, 2024",
          discount: "0.0%",
          receivable: "96000 Tk",
          paid: "96000 Tk",
          due: "0.00 Tk",
          purchaseCost: "91500 Tk",
          profit: "4500 Tk",
          status: "PAID",
        },
      ];

        // Extract unique customer names from salesData
  const uniqueCustomers = [...new Set(salesData.map(sale => sale.customer))];
  return (
    <div className='bg-white dark:bg-[#141432] text-gray-500 dark:text-white font-nunito text-sm'>
        <div className="p-4 mt-[5%]">
      {/* Header with statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-600 text-white p-4 rounded shadow-md">
          <h3 className=" ">Sold Today</h3>
          <p className="">Tk 20,000</p>
        </div>
        <div className="bg-pink-600 text-white p-4 rounded shadow-md">
          <h3 className=" ">Today Received</h3>
          <p className="">Tk 20,000</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded shadow-md">
          <h3 className=" ">Today Profit</h3>
          <p className="">Tk 20,000</p>
        </div>
        <div className="bg-green-600 text-white p-4 rounded shadow-md">
          <h3 className=" ">Total Sold</h3>
          <p className="">Tk 30000000.5</p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Bill Number"
          className="border rounded p-2 w-full md:w-1/6"
        />
        <input
          type="date"
          className="border rounded dark:text-black  p-2 w-full md:w-1/6"
        />
        <input
          type="date"
          className="border rounded dark:text-black p-2 w-full md:w-1/6"
        />
        {/* Customer Selector */}
        <select
          value={selectedCustomer}
          onChange={(e) => setSelectedCustomer(e.target.value)}
          className="border rounded p-2 w-full md:w-1/6 dark:text-black "
        >
          <option value="">Select Customer</option>
          {uniqueCustomers.map((customer, index) => (
            <option key={index} value={customer}>
              {customer}
            </option>
          ))}
        </select>
        <button className="bg-blue-500 text-white p-2 rounded w-full md:w-1/6">Filter</button>
        <button className="bg-gray-500 text-white p-2 rounded w-full md:w-[11%]">Reset</button>
      </div>

      {/* Sales Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead className="border">
            <tr>
              <th className="p-2">Invoice No.</th>
              <th className="p-2">Customer</th>
              <th className="p-2">Items</th>
              <th className="p-2">Date</th>
              <th className="p-2">Discount</th>
              <th className="p-2">Receivable</th>
              <th className="p-2">Paid</th>
              <th className="p-2">Due</th>
              <th className="p-2">Purchase Cost</th>
              <th className="p-2">Profit</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody className='border'>
            {salesData.map((sale) => (
              <tr key={sale.invoiceNo} className="border">
                <td className="p-2">{sale.invoiceNo}</td>
                <td className="p-2">{sale.customer}</td>
                <td className="p-2">{sale.items}</td>
                <td className="p-2">{sale.date}</td>
                <td className="p-2">{sale.discount}</td>
                <td className="p-2">{sale.receivable}</td>
                <td className="p-2">{sale.paid}</td>
                <td className="p-2">{sale.due}</td>
                <td className="p-2">{sale.purchaseCost}</td>
                <td className="p-2">{sale.profit}</td>
                <td className={`p-2 ${sale.status === "PAID" ? "text-green-500" : "text-red-500"}`}>
                  {sale.status}
                </td>
                <td className="p-2">
                  {/* Action buttons */}
                  <div className="relative">
                    <button
                      onClick={() => handleActionClick(sale.invoiceNo)}
                      className="p-1 rounded-lg transform cursor-pointer text-sky-400 hover:text-red-500 hover:scale-110 border-2"
                    >
                      <GrUserSettings />
                    </button>
                    {selectedInvoice === sale.invoiceNo && (
                      <div className="absolute bg-white shadow-lg rounded p-2 mt-2 z-20 right-10">
                        <ul className="text-gray-700">
                          <li className="p-2 hover:bg-gray-100 cursor-pointer">Print</li>
                          <li className="p-2 hover:bg-gray-100 cursor-pointer">Challan Print</li>
                          <li className="p-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                          <li className="p-2 hover:bg-gray-100 cursor-pointer">Show</li>
                          <li className="p-2 hover:bg-gray-100 cursor-pointer">Return</li>
                          <li className="p-2 hover:bg-gray-100 cursor-pointer">Return List</li>
                          <li className="p-2 hover:bg-gray-100 cursor-pointer">Add Payment</li>
                          <li className="p-2 hover:bg-red-100 cursor-pointer">Delete</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    </div>
  )
}
