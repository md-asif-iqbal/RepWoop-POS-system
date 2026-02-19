"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  Trophy,
  Users,
  DollarSign,
  Calendar,
  Printer,
  RotateCcw,
  Search,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Star,
  Medal,
} from "lucide-react";

export default function TopCustomersReport() {
 // Constant dataset with 30 customer entries
 const data = [
    { id: 1, name: 'balir bap', email: '', phone: '01658945826', address: '', totalSell: 309000, date: '2024-10-15' },
    { id: 2, name: 'Ahmed Zubyer', email: 'ahmedzubyer@gmail.com', phone: '01842364696', address: 'House# 48, Road# 12, Sector#14, Uttara', totalSell: 275500, date: '2024-10-10' },
    { id: 3, name: 'Tamim Akon', email: '', phone: '01752339500', address: '', totalSell: 109411, date: '2024-10-12' },
    { id: 4, name: 'Reju', email: '', phone: '0197032041', address: '', totalSell: 85750, date: '2024-10-18' },
    { id: 5, name: 'Raky', email: '', phone: '000000000', address: '', totalSell: 73913, date: '2024-10-07' },
    { id: 6, name: 'Ajim Ahmed', email: '', phone: '01700000025', address: 'Sylhet', totalSell: 11971, date: '2024-10-05' },
    { id: 7, name: 'Online Mart Akif', email: '', phone: '0172288776', address: '', totalSell: 7800, date: '2024-10-10' },
    { id: 8, name: 'Siyam', email: '', phone: '01775835607', address: 'Dhaka', totalSell: 7000, date: '2024-10-11' },
    { id: 9, name: 'Mohimenul', email: '', phone: '01921292461', address: '', totalSell: 6670, date: '2024-10-14' },
    { id: 10, name: 'Akash', email: '', phone: '000000000', address: '', totalSell: 2600, date: '2024-10-01' },
    { id: 11, name: 'মোঃ জিয়াউল হোসেন', email: '', phone: '01978808130', address: 'Peroly norall', totalSell: 1100, date: '2024-10-21' },
    { id: 12, name: 'dev_test', email: '', phone: '01246732789', address: '', totalSell: 875, date: '2024-10-22' },
    { id: 13, name: 'dev_test@', email: '', phone: '01948732128', address: '', totalSell: 600, date: '2024-10-25' },
    { id: 14, name: 'Jisan', email: '', phone: '0189048214', address: '', totalSell: 430, date: '2024-10-28' },
    { id: 15, name: 'Basu', email: 'bst.school.bd@gmail.com', phone: '01816437446', address: 'Demra, Bangladesh', totalSell: 101, date: '2024-10-02' },
    { id: 16, name: 'Sakib Rabby', email: 'sakib@gmail.com', phone: '0184578745', address: 'Address', totalSell: 0, date: '2024-10-03' },
    { id: 17, name: 'Md Juwel Khan', email: 'juwel@gmail.com', phone: '01845784545', address: 'Address', totalSell: 0, date: '2024-10-07' },
    { id: 18, name: 'Md Sumon', email: 'sumon@gmail.com', phone: '01847898745', address: 'Address', totalSell: 0, date: '2024-10-08' },
    { id: 19, name: 'Mahmudul Hasan', email: 'mahmud@gmail.com', phone: '0198784545', address: 'Address', totalSell: 0, date: '2024-10-13' },
    { id: 20, name: 'Jilani Mia', email: '', phone: '545465', address: 'Dhaka', totalSell: 0, date: '2024-10-14' },
    // Additional customers
    { id: 21, name: 'Tamim Akon', email: '', phone: '01753239500', address: '', totalSell: 109411, date: '2024-10-12' },
    { id: 22, name: 'Akash', email: '', phone: '000000000', address: '', totalSell: 2600, date: '2024-10-01' },
    { id: 23, name: 'Siyam', email: '', phone: '01775835607', address: 'Dhaka', totalSell: 7000, date: '2024-10-11' },
    { id: 24, name: 'Mohimenul', email: '', phone: '01921292461', address: '', totalSell: 6670, date: '2024-10-14' },
    { id: 25, name: 'Ajim Ahmed', email: '', phone: '01700000025', address: 'Sylhet', totalSell: 11971, date: '2024-10-05' },
    { id: 26, name: 'Online Mart Akif', email: '', phone: '0172288776', address: '', totalSell: 7800, date: '2024-10-10' },
    { id: 27, name: 'Reju', email: '', phone: '0197032041', address: '', totalSell: 85750, date: '2024-10-18' },
    { id: 28, name: 'Raky', email: '', phone: '000000000', address: '', totalSell: 73913, date: '2024-10-07' },
    { id: 29, name: 'Mahmudul Hasan', email: 'mahmud@gmail.com', phone: '0198784545', address: 'Address', totalSell: 0, date: '2024-10-13' },
    { id: 30, name: 'Md Sumon', email: 'sumon@gmail.com', phone: '01847898745', address: 'Address', totalSell: 0, date: '2024-10-08' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const itemsPerPage = 20; // Set items per page for pagination

  // Filter function based on start date and end date
  const filterData = () => {
    if (startDate && endDate) {
      const filtered = data.filter(item => new Date(item.date) >= new Date(startDate) && new Date(item.date) <= new Date(endDate));
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
    setCurrentPage(1); // Reset to first page after filtering
  };

  // Reset filter
  const resetFilter = () => {
    setFilteredData(data);
    setStartDate('');
    setEndDate('');
    setCurrentPage(1); // Reset to first page
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

   // Print functionality
   const handlePrint = () => {
    const printContent = document.getElementById("table-to-print").outerHTML;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
      <html>
        <head>
          <title>Top Customer List</title>
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
          <div className="p-2.5 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl text-white shadow-lg">
            <Trophy className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Top Customers</h1>
            <p className="text-sm text-gray-500">
              Report from {startDate || "01/10/2024"} to {endDate || "31/10/2024"}
            </p>
          </div>
        </div>
        <Button onClick={handlePrint} className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
          <Printer className="h-4 w-4 mr-2" />
          Print Report
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-0 shadow-md bg-gradient-to-br from-yellow-50 to-amber-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Customers</p>
                <p className="text-2xl font-bold text-yellow-700">{filteredData.length}</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-xl">
                <Users className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md bg-gradient-to-br from-green-50 to-emerald-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Sales</p>
                <p className="text-2xl font-bold text-green-700">
                  {filteredData.reduce((sum, item) => sum + (typeof item.totalSell === 'number' ? item.totalSell : parseInt(String(item.totalSell).replace(/,/g, ""), 10) || 0), 0).toLocaleString()} TK
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-xl">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md bg-gradient-to-br from-purple-50 to-indigo-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Top Buyer</p>
                <p className="text-2xl font-bold text-purple-700">{filteredData[0]?.name || "—"}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-xl">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter Card */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="pl-10"
                  placeholder="Start Date"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="pl-10"
                  placeholder="End Date"
                />
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

      {/* Table */}
      <Card className="border-0 shadow-lg overflow-hidden">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table id="table-to-print" className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Rank</th>
                  <th className="px-4 py-3 text-left font-semibold">Customer</th>
                  <th className="px-4 py-3 text-left font-semibold">Email</th>
                  <th className="px-4 py-3 text-left font-semibold">Phone</th>
                  <th className="px-4 py-3 text-left font-semibold">Address</th>
                  <th className="px-4 py-3 text-right font-semibold">Total Sell</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentData.map((item, index) => {
                  const rank = indexOfFirstItem + index + 1;
                  return (
                    <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="px-4 py-3">
                        {rank <= 3 ? (
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm ${
                            rank === 1 ? "bg-gradient-to-br from-yellow-400 to-amber-500" :
                            rank === 2 ? "bg-gradient-to-br from-gray-300 to-gray-400" :
                            "bg-gradient-to-br from-orange-400 to-amber-600"
                          }`}>
                            {rank}
                          </div>
                        ) : (
                          <span className="font-medium text-gray-500 ml-2">{rank}</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-sm">
                            {item.name.charAt(0).toUpperCase()}
                          </div>
                          <span className="font-semibold text-gray-900">{item.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{item.email || "—"}</td>
                      <td className="px-4 py-3 text-gray-600">{item.phone}</td>
                      <td className="px-4 py-3 text-gray-600">{item.address || "—"}</td>
                      <td className="px-4 py-3 text-right">
                        <Badge variant={rank <= 3 ? "success" : rank <= 10 ? "info" : "secondary"}>
                          {item.totalSell} TK
                        </Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} customers
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                variant={currentPage === i + 1 ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(i + 1)}
                className={currentPage === i + 1 ? "bg-indigo-600 hover:bg-indigo-700" : ""}
              >
                {i + 1}
              </Button>
            ))}
            <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
