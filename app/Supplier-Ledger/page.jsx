"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  BookOpen,
  Truck,
  DollarSign,
  Calendar,
  Printer,
  RotateCcw,
  Search,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react";

export default function SupplierLedger() {
    const supplierData = [
        {
          id: 1,
          supplierName: 'Hasan Trading',
          contactNo: '01712345678',
          address: 'Dhaka',
          transactions: [
            { date: '2024-09-10', particulars: 'Purchase #15', debit: '', credit: '50000.00', balance: '50000.00' },
            { date: '2024-09-11', particulars: 'Paid to Supplier', debit: '20000.00', credit: '', balance: '30000.00' },
          ],
        },
        {
          id: 2,
          supplierName: 'Alif Corporation',
          contactNo: '01987654321',
          address: 'Chittagong',
          transactions: [
            { date: '2024-09-12', particulars: 'Purchase #20', debit: '', credit: '60000.00', balance: '60000.00' },
            { date: '2024-09-13', particulars: 'Paid to Supplier', debit: '30000.00', credit: '', balance: '30000.00' },
          ],
        },
        {
          id: 3,
          supplierName: 'Khan Enterprise',
          contactNo: '01812345678',
          address: 'Khulna',
          transactions: [
            { date: '2024-09-14', particulars: 'Purchase #25', debit: '', credit: '40000.00', balance: '40000.00' },
            { date: '2024-09-15', particulars: 'Paid to Supplier', debit: '15000.00', credit: '', balance: '25000.00' },
          ],
        },
        {
          id: 4,
          supplierName: 'Mithila Supplies',
          contactNo: '01999887766',
          address: 'Sylhet',
          transactions: [
            { date: '2024-09-16', particulars: 'Purchase #30', debit: '', credit: '35000.00', balance: '35000.00' },
            { date: '2024-09-17', particulars: 'Paid to Supplier', debit: '10000.00', credit: '', balance: '25000.00' },
          ],
        },
        {
          id: 5,
          supplierName: 'Bengal Suppliers',
          contactNo: '01711223344',
          address: 'Barisal',
          transactions: [
            { date: '2024-09-18', particulars: 'Purchase #35', debit: '', credit: '60000.00', balance: '60000.00' },
            { date: '2024-09-19', particulars: 'Paid to Supplier', debit: '20000.00', credit: '', balance: '40000.00' },
          ],
        },
        {
          id: 6,
          supplierName: 'Ahmed Trade Co.',
          contactNo: '01655554444',
          address: 'Rajshahi',
          transactions: [
            { date: '2024-09-20', particulars: 'Purchase #40', debit: '', credit: '50000.00', balance: '50000.00' },
            { date: '2024-09-21', particulars: 'Paid to Supplier', debit: '25000.00', credit: '', balance: '25000.00' },
          ],
        },
        {
          id: 7,
          supplierName: 'Nabil Suppliers',
          contactNo: '01766665555',
          address: 'Mymensingh',
          transactions: [
            { date: '2024-09-22', particulars: 'Purchase #45', debit: '', credit: '45000.00', balance: '45000.00' },
            { date: '2024-09-23', particulars: 'Paid to Supplier', debit: '15000.00', credit: '', balance: '30000.00' },
          ],
        },
        {
          id: 8,
          supplierName: 'Latif Enterprises',
          contactNo: '01977778888',
          address: 'Jessore',
          transactions: [
            { date: '2024-09-24', particulars: 'Purchase #50', debit: '', credit: '70000.00', balance: '70000.00' },
            { date: '2024-09-25', particulars: 'Paid to Supplier', debit: '25000.00', credit: '', balance: '45000.00' },
          ],
        },
        {
          id: 9,
          supplierName: 'Shah & Co.',
          contactNo: '01888887777',
          address: 'Comilla',
          transactions: [
            { date: '2024-09-26', particulars: 'Purchase #55', debit: '', credit: '65000.00', balance: '65000.00' },
            { date: '2024-09-27', particulars: 'Paid to Supplier', debit: '20000.00', credit: '', balance: '45000.00' },
          ],
        },
        {
          id: 10,
          supplierName: 'Royal Trading Ltd.',
          contactNo: '01711112222',
          address: 'Tangail',
          transactions: [
            { date: '2024-09-28', particulars: 'Purchase #60', debit: '', credit: '30000.00', balance: '30000.00' },
            { date: '2024-09-29', particulars: 'Paid to Supplier', debit: '10000.00', credit: '', balance: '20000.00' },
          ],
        },
        {
          id: 11,
          supplierName: 'Haque Enterprise',
          contactNo: '01622223333',
          address: 'Faridpur',
          transactions: [
            { date: '2024-09-30', particulars: 'Purchase #65', debit: '', credit: '40000.00', balance: '40000.00' },
            { date: '2024-10-01', particulars: 'Paid to Supplier', debit: '15000.00', credit: '', balance: '25000.00' },
          ],
        },
        {
          id: 12,
          supplierName: 'Jamuna Suppliers',
          contactNo: '01733334444',
          address: 'Pabna',
          transactions: [
            { date: '2024-10-02', particulars: 'Purchase #70', debit: '', credit: '55000.00', balance: '55000.00' },
            { date: '2024-10-03', particulars: 'Paid to Supplier', debit: '20000.00', credit: '', balance: '35000.00' },
          ],
        },
        {
          id: 13,
          supplierName: 'Titas Trading Co.',
          contactNo: '01844445555',
          address: 'Kushtia',
          transactions: [
            { date: '2024-10-04', particulars: 'Purchase #75', debit: '', credit: '60000.00', balance: '60000.00' },
            { date: '2024-10-05', particulars: 'Paid to Supplier', debit: '25000.00', credit: '', balance: '35000.00' },
          ],
        },
        {
          id: 14,
          supplierName: 'Omar Trading Ltd.',
          contactNo: '01666667777',
          address: 'Bogura',
          transactions: [
            { date: '2024-10-06', particulars: 'Purchase #80', debit: '', credit: '65000.00', balance: '65000.00' },
            { date: '2024-10-07', particulars: 'Paid to Supplier', debit: '30000.00', credit: '', balance: '35000.00' },
          ],
        },
        {
          id: 15,
          supplierName: 'Rahim Traders',
          contactNo: '01777778888',
          address: 'Jamalpur',
          transactions: [
            { date: '2024-10-08', particulars: 'Purchase #85', debit: '', credit: '70000.00', balance: '70000.00' },
            { date: '2024-10-09', particulars: 'Paid to Supplier', debit: '35000.00', credit: '', balance: '35000.00' },
          ],
        },
        {
          id: 16,
          supplierName: 'Kamal Enterprise',
          contactNo: '01999990000',
          address: 'Noakhali',
          transactions: [
            { date: '2024-10-10', particulars: 'Purchase #90', debit: '', credit: '40000.00', balance: '40000.00' },
            { date: '2024-10-11', particulars: 'Paid to Supplier', debit: '15000.00', credit: '', balance: '25000.00' },
          ],
        },
        {
          id: 17,
          supplierName: 'Rupali Suppliers',
          contactNo: '01655556666',
          address: 'Khagrachari',
          transactions: [
            { date: '2024-10-12', particulars: 'Purchase #95', debit: '', credit: '55000.00', balance: '55000.00' },
            { date: '2024-10-13', particulars: 'Paid to Supplier', debit: '20000.00', credit: '', balance: '35000.00' },
          ],
        },
        {
          id: 18,
          supplierName: 'Golden Trade Co.',
          contactNo: '01722224444',
          address: 'Narayanganj',
          transactions: [
            { date: '2024-10-14', particulars: 'Purchase #100', debit: '', credit: '45000.00', balance: '45000.00' },
            { date: '2024-10-15', particulars: 'Paid to Supplier', debit: '15000.00', credit: '', balance: '30000.00' },
          ],
        },
        {
          id: 19,
          supplierName: 'Silver Enterprises',
          contactNo: '01988887777',
          address: 'Satkhira',
          transactions: [
            { date: '2024-10-16', particulars: 'Purchase #105', debit: '', credit: '30000.00', balance: '30000.00' },
            { date: '2024-10-17', particulars: 'Paid to Supplier', debit: '10000.00', credit: '', balance: '20000.00' },
          ],
        },
        {
          id: 20,
          supplierName: 'Platinum Trading Co.',
          contactNo: '01755556666',
          address: 'Munshiganj',
          transactions: [
            { date: '2024-10-18', particulars: 'Purchase #110', debit: '', credit: '60000.00', balance: '60000.00' },
            { date: '2024-10-19', particulars: 'Paid to Supplier', debit: '25000.00', credit: '', balance: '35000.00' },
          ],
        },
      ];
      
    
      const [selectedSupplier, setSelectedSupplier] = useState('');
      const [startDate, setStartDate] = useState('');
      const [endDate, setEndDate] = useState('');
      const [filteredTransactions, setFilteredTransactions] = useState([]);
      const [initialSupplier, setInitialSupplier] = useState(null); // Store the initially selected supplier
    
      // Set random supplier data on initial load
      useEffect(() => {
        const randomSupplier = supplierData[Math.floor(Math.random() * supplierData.length)];
        setInitialSupplier(randomSupplier);
        setFilteredTransactions(randomSupplier.transactions);
      }, []);
    
      // Filter function to display supplier ledger based on selected supplier and date range
      const filterData = () => {
        const supplier = supplierData.find(item => item.supplierName === selectedSupplier);
        if (supplier) {
          let transactions = supplier.transactions;
    
          // Filter by date range
          if (startDate && endDate) {
            transactions = transactions.filter(transaction =>
              new Date(transaction.date) >= new Date(startDate) && new Date(transaction.date) <= new Date(endDate)
            );
          }
          setFilteredTransactions(transactions);
          setInitialSupplier(supplier); // Set the filtered supplier as the current
        }
      };
    
      // Reset the filter
      const resetFilter = () => {
        setSelectedSupplier('');
        setStartDate('');
        setEndDate('');
        setFilteredTransactions(initialSupplier.transactions);
      };

       // Print functionality
  const handlePrint = () => {
    const printContent = document.getElementById("table-to-print").outerHTML;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
      <html>
        <head>
          <title>Supplier Ledger Report</title>
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
          <div className="p-2.5 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl text-white shadow-lg">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Supplier Ledger</h1>
            <p className="text-sm text-gray-500">Detailed transaction history by supplier</p>
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
                value={selectedSupplier}
                onChange={(e) => setSelectedSupplier(e.target.value)}
                className="w-full h-10 rounded-lg border border-gray-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select a Supplier</option>
                {supplierData.map((supplier, index) => (
                  <option key={index} value={supplier.supplierName}>
                    {supplier.supplierName} — {supplier.contactNo}
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

      {/* Supplier Details & Ledger */}
      {initialSupplier && (
        <>
          {/* Supplier Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-0 shadow-md bg-gradient-to-br from-orange-50 to-amber-50">
              <CardContent className="p-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    {initialSupplier.supplierName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{initialSupplier.supplierName}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                      <Phone className="h-3.5 w-3.5" />
                      <span>{initialSupplier.contactNo}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{initialSupplier.address}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md bg-gradient-to-br from-red-50 to-rose-50">
              <CardContent className="p-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white shadow-lg">
                    <DollarSign className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Current Balance (Payable)</p>
                    <p className="text-2xl font-bold text-red-700">
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
                                <ArrowUpRight className="h-4 w-4 text-green-500" />
                              ) : (
                                <ArrowDownLeft className="h-4 w-4 text-red-500" />
                              )}
                              <span className="font-medium text-gray-900">{transaction.particulars}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-right">
                            {transaction.debit ? (
                              <span className="font-semibold text-green-600">{transaction.debit}</span>
                            ) : (
                              <span className="text-gray-300">—</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-right">
                            {transaction.credit ? (
                              <span className="font-semibold text-red-600">{transaction.credit}</span>
                            ) : (
                              <span className="text-gray-300">—</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-right">
                            <Badge variant="warning">{transaction.balance} TK</Badge>
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
                <p className="text-gray-500 font-medium">No transactions found for this supplier.</p>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
}
