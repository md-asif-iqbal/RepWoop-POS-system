"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  BookOpen,
  Users,
  DollarSign,
  Calendar,
  Printer,
  RotateCcw,
  Search,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowDownLeft,
  User,
} from "lucide-react";

export default function CustomerLedger () {

    // Constant dataset with 10 entries
  const data = [
    {
        id: 1,
        customerName: 'Sakib Rabby',
        contactNo: '0184578745',
        address: 'Dhaka',
        transactions: [
          { date: '2024-09-22', particulars: 'Sale #20', debit: '99000.00', credit: '', balance: '99000.00' },
          { date: '2024-09-22', particulars: 'Received from Customer', debit: '', credit: '666.00', balance: '98334.00' },
        ],
      },
      {
        id: 2,
        customerName: 'Ahmed Zubyer',
        contactNo: '01715430641',
        address: 'Chittagong',
        transactions: [
          { date: '2024-09-20', particulars: 'Sale #15', debit: '50000.00', credit: '', balance: '50000.00' },
          { date: '2024-09-21', particulars: 'Received from Customer', debit: '', credit: '10000.00', balance: '40000.00' },
        ],
      },
      {
        id: 3,
        customerName: 'Mahmud Hasan',
        contactNo: '01634567890',
        address: 'Khulna',
        transactions: [
          { date: '2024-09-15', particulars: 'Sale #25', debit: '12000.00', credit: '', balance: '12000.00' },
          { date: '2024-09-16', particulars: 'Received from Customer', debit: '', credit: '5000.00', balance: '7000.00' },
        ],
      },
      {
        id: 4,
        customerName: 'Rony Akter',
        contactNo: '01912345678',
        address: 'Sylhet',
        transactions: [
          { date: '2024-09-13', particulars: 'Sale #30', debit: '20000.00', credit: '', balance: '20000.00' },
          { date: '2024-09-14', particulars: 'Received from Customer', debit: '', credit: '8000.00', balance: '12000.00' },
        ],
      },
      {
        id: 5,
        customerName: 'Shakil Khan',
        contactNo: '01987654321',
        address: 'Rajshahi',
        transactions: [
          { date: '2024-09-18', particulars: 'Sale #45', debit: '60000.00', credit: '', balance: '60000.00' },
          { date: '2024-09-19', particulars: 'Received from Customer', debit: '', credit: '25000.00', balance: '35000.00' },
        ],
      },
      {
        id: 6,
        customerName: 'Taslima Akter',
        contactNo: '01711223344',
        address: 'Mymensingh',
        transactions: [
          { date: '2024-09-22', particulars: 'Sale #50', debit: '70000.00', credit: '', balance: '70000.00' },
          { date: '2024-09-22', particulars: 'Received from Customer', debit: '', credit: '10000.00', balance: '60000.00' },
        ],
      },
      {
        id: 7,
        customerName: 'Rahman Hossain',
        contactNo: '01876543210',
        address: 'Barisal',
        transactions: [
          { date: '2024-09-10', particulars: 'Sale #35', debit: '45000.00', credit: '', balance: '45000.00' },
          { date: '2024-09-11', particulars: 'Received from Customer', debit: '', credit: '15000.00', balance: '30000.00' },
        ],
      },
      {
        id: 8,
        customerName: 'Nusrat Jahan',
        contactNo: '01612345678',
        address: 'Cox’s Bazar',
        transactions: [
          { date: '2024-09-17', particulars: 'Sale #40', debit: '35000.00', credit: '', balance: '35000.00' },
          { date: '2024-09-18', particulars: 'Received from Customer', debit: '', credit: '10000.00', balance: '25000.00' },
        ],
      },
      {
        id: 9,
        customerName: 'Zakir Hossain',
        contactNo: '01998765432',
        address: 'Gazipur',
        transactions: [
          { date: '2024-09-12', particulars: 'Sale #55', debit: '80000.00', credit: '', balance: '80000.00' },
          { date: '2024-09-13', particulars: 'Received from Customer', debit: '', credit: '20000.00', balance: '60000.00' },
        ],
      },
      {
        id: 10,
        customerName: 'Rashed Ahmed',
        contactNo: '01799887766',
        address: 'Narail',
        transactions: [
          { date: '2024-09-15', particulars: 'Sale #60', debit: '30000.00', credit: '', balance: '30000.00' },
          { date: '2024-09-16', particulars: 'Received from Customer', debit: '', credit: '5000.00', balance: '25000.00' },
        ],
      },
      {
        id: 11,
        customerName: 'Hasan Mahmud',
        contactNo: '01766665555',
        address: 'Jamalpur',
        transactions: [
          { date: '2024-09-14', particulars: 'Sale #65', debit: '50000.00', credit: '', balance: '50000.00' },
          { date: '2024-09-15', particulars: 'Received from Customer', debit: '', credit: '15000.00', balance: '35000.00' },
        ],
      }
    // Add more customers and transactions as needed
  ];

  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [initialCustomer, setInitialCustomer] = useState(null); // Store the initially selected customer

  // Set random customer data on initial load
  useEffect(() => {
    const randomCustomer = data[Math.floor(Math.random() * data.length)];
    setInitialCustomer(randomCustomer);
    setFilteredTransactions(randomCustomer.transactions);
  }, []);

  // Filter function to display customer ledger based on selected customer and date range
  const filterData = () => {
    const customer = data.find(item => item.customerName === selectedCustomer);
    if (customer) {
      let transactions = customer.transactions;

      // Filter by date range
      if (startDate && endDate) {
        transactions = transactions.filter(transaction =>
          new Date(transaction.date) >= new Date(startDate) && new Date(transaction.date) <= new Date(endDate)
        );
      }
      setFilteredTransactions(transactions);
      setInitialCustomer(customer); // Set the filtered customer as the current
    }
  };

  // Reset the filter
  const resetFilter = () => {
    setSelectedCustomer('');
    setStartDate('');
    setEndDate('');
    setFilteredTransactions(initialCustomer.transactions);
  };
  // Print functionality
  const handlePrint = () => {
    const printContent = document.getElementById("table-to-print").outerHTML;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
      <html>
        <head>
          <title>Customer Ledger List</title>
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

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl text-white shadow-lg">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Customer Ledger</h1>
            <p className="text-sm text-gray-500">Detailed transaction history by customer</p>
          </div>
        </div>
        <Button onClick={handlePrint} className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
          <Printer className="h-4 w-4 mr-2" />
          Print Report
        </Button>
      </div>

      {/* Filter Card */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <select
                value={selectedCustomer}
                onChange={(e) => setSelectedCustomer(e.target.value)}
                className="w-full h-10 rounded-lg border border-gray-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select a Customer</option>
                {data.map((customer, index) => (
                  <option key={index} value={customer.customerName}>
                    {customer.customerName} — {customer.contactNo}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="pl-10" />
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="pl-10" />
              </div>
            </div>
            <Button onClick={filterData} className="bg-indigo-600 hover:bg-indigo-700">
              <Search className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button onClick={resetFilter} variant="outline">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Customer Details & Ledger */}
      {initialCustomer && (
        <>
          {/* Customer Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-0 shadow-md bg-gradient-to-br from-indigo-50 to-blue-50">
              <CardContent className="p-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    {initialCustomer.customerName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{initialCustomer.customerName}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                      <Phone className="h-3.5 w-3.5" />
                      <span>{initialCustomer.contactNo}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{initialCustomer.address}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg">
                    <DollarSign className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Current Balance</p>
                    <p className="text-2xl font-bold text-green-700">
                      {filteredTransactions.length > 0
                        ? filteredTransactions[filteredTransactions.length - 1].balance
                        : "0.00"}{" "}
                      TK
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{filteredTransactions.length} transactions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ledger Table */}
          {filteredTransactions.length > 0 ? (
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardHeader className="pb-2 bg-gradient-to-r from-gray-50 to-gray-100 border-b">
                <CardTitle className="text-base font-semibold text-gray-700">Transaction History</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table id="table-to-print" className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                        <th className="px-4 py-3 text-left font-semibold">Date</th>
                        <th className="px-4 py-3 text-left font-semibold">Particulars</th>
                        <th className="px-4 py-3 text-right font-semibold">Debit</th>
                        <th className="px-4 py-3 text-right font-semibold">Credit</th>
                        <th className="px-4 py-3 text-right font-semibold">Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredTransactions.map((transaction, index) => (
                        <tr key={index} className="hover:bg-gray-50/80 transition-colors">
                          <td className="px-4 py-3 text-gray-600">{transaction.date}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              {transaction.debit ? (
                                <ArrowUpRight className="h-4 w-4 text-red-500" />
                              ) : (
                                <ArrowDownLeft className="h-4 w-4 text-green-500" />
                              )}
                              <span className="font-medium text-gray-900">{transaction.particulars}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-right">
                            {transaction.debit ? (
                              <span className="font-semibold text-red-600">{transaction.debit}</span>
                            ) : (
                              <span className="text-gray-300">—</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-right">
                            {transaction.credit ? (
                              <span className="font-semibold text-green-600">{transaction.credit}</span>
                            ) : (
                              <span className="text-gray-300">—</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-right">
                            <Badge variant="info">{transaction.balance} TK</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-0 shadow-md">
              <CardContent className="p-12 text-center">
                <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">No transactions found for this customer.</p>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
}
