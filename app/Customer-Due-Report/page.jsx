"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  Users,
  AlertTriangle,
  DollarSign,
  FileText,
  Printer,
  RotateCcw,
  Search,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function CustomerDueReport() {

    const data = [
        { id: 1, name: 'Sakib Rabby', email: 'sakib@gmail.com', phone: '0184578745', address: 'Address', invoiceDue: 98334, directDue: 0, totalDue: 98334 },
        { id: 2, name: 'Jilani Mia', email: '', phone: '545465', address: 'Dhaka', invoiceDue: 95400, directDue: 0, totalDue: 95400 },
        { id: 3, name: 'মোঃ জিয়াউল হোসেন', email: '', phone: '01978808130', address: 'Peroly norall', invoiceDue: -20, directDue: 1000, totalDue: 980 },
        { id: 4, name: 'malek', email: 'khanengcor@hotmail.com', phone: '01741992993', address: 'madibor bazar', invoiceDue: 104458, directDue: 4000, totalDue: 108458 },
        { id: 5, name: 'Basu', email: 'bst.school.bd@gmail.com', phone: '01816437446', address: 'Demra, Bangladesh', invoiceDue: 200, directDue: 0, totalDue: 200 },
        { id: 6, name: 'MD Rakib', email: 'bst.school.bd@gmail.com', phone: '01629877465', address: 'Dhaka', invoiceDue: 1000, directDue: 21660, totalDue: 22660 },
        { id: 7, name: 'Akash', email: '', phone: '00000000', address: '', invoiceDue: 1000, directDue: 0, totalDue: 1000 },
        { id: 8, name: 'Ahmed Zubyer', email: 'ahmedzubyer@gmail.com', phone: '01842364696', address: 'House# 48, Road# 12, Sector#14, Uttara', invoiceDue: 275500, directDue: 0, totalDue: 275500 },
        { id: 9, name: 'balir bap', email: '', phone: '01658945826', address: '', invoiceDue: 111220, directDue: 0, totalDue: 111220 },
        { id: 10, name: 'Mohimenul', email: '', phone: '01921292461', address: '', invoiceDue: 670, directDue: 0, totalDue: 670 },
        { id: 11, name: 'Online Mart Akif', email: '', phone: '0172288776', address: '', invoiceDue: 4000, directDue: 0, totalDue: 4000 },
        { id: 12, name: 'Ajim Ahmed', email: '', phone: '01700000025', address: 'Sylhet', invoiceDue: 8591, directDue: 0, totalDue: 8590.56 },
        { id: 13, name: 'dev_test', email: '', phone: '01246732789', address: '', invoiceDue: 610, directDue: 0, totalDue: 610 },
        { id: 14, name: 'dev_test@', email: '', phone: '01948732128', address: '', invoiceDue: 567, directDue: 0, totalDue: 567 },
        { id: 15, name: 'jisan 0189048214', email: '', phone: '0189048214', address: '', invoiceDue: 430, directDue: 0, totalDue: 430 },
      ];
    
      const [currentPage, setCurrentPage] = useState(1);
      const [filteredData, setFilteredData] = useState(data);
      const itemsPerPage = 20; // Set items per page for pagination
    
      // Generate unique names for the dropdown
      const uniqueNames = [...new Set(data.map((product) => product.name))];
    
      // Handle filtering when customer name is selected
      const handleCustomerChange = (customerName) => {
        if (customerName) {
          const filtered = data.filter(item => item.name === customerName);
          setFilteredData(filtered);
        } else {
          setFilteredData(data);
        }
        setCurrentPage(1); // Reset to first page after filtering
      };
    
      // Reset the filter
      const resetFilter = () => {
        setFilteredData(data);
        setCurrentPage(1); // Reset to first page after resetting
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
          <title>Customer Due Report</title>
          <style>
            body { font-family: Arial, sans-serif; }
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid #000; padding: 8px; text-align: left; }
          </style>
        </head>
        <body onload="window.print()">
          ${printContent.replace(/<th>Actions<\/th>.*?<\/tr>/, '')}
        </body>
      </html>
    `);
    newWindow.document.close();
  };

  // Summary calculations
  const totalInvoiceDue = filteredData.reduce((sum, item) => sum + item.invoiceDue, 0);
  const totalDirectDue = filteredData.reduce((sum, item) => sum + item.directDue, 0);
  const totalDue = filteredData.reduce((sum, item) => sum + item.totalDue, 0);

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl text-white shadow-lg">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Customer Due Report</h1>
            <p className="text-sm text-gray-500">Outstanding dues from all customers</p>
          </div>
        </div>
        <Button onClick={handlePrint} className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
          <Printer className="h-4 w-4 mr-2" />
          Print Report
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Invoice Due</p>
                <p className="text-2xl font-bold text-blue-700">{totalInvoiceDue.toLocaleString()} TK</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-xl">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md bg-gradient-to-br from-orange-50 to-amber-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Direct Due</p>
                <p className="text-2xl font-bold text-orange-700">{totalDirectDue.toLocaleString()} TK</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-xl">
                <DollarSign className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md bg-gradient-to-br from-red-50 to-pink-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Due</p>
                <p className="text-2xl font-bold text-red-700">{totalDue.toLocaleString()} TK</p>
              </div>
              <div className="p-3 bg-red-100 rounded-xl">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter Card */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <select
                onChange={(e) => handleCustomerChange(e.target.value)}
                className="w-full h-10 rounded-lg border border-gray-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">All Customers</option>
                {uniqueNames.map((name, index) => (
                  <option key={index} value={name}>{name}</option>
                ))}
              </select>
            </div>
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
                  <th className="px-4 py-3 text-left font-semibold">SL</th>
                  <th className="px-4 py-3 text-left font-semibold">Customer</th>
                  <th className="px-4 py-3 text-left font-semibold">Contact</th>
                  <th className="px-4 py-3 text-left font-semibold">Address</th>
                  <th className="px-4 py-3 text-right font-semibold">Invoice Due</th>
                  <th className="px-4 py-3 text-right font-semibold">Direct Due</th>
                  <th className="px-4 py-3 text-right font-semibold">Total Due</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentData.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-500">{indexOfFirstItem + index + 1}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-sm">
                          {item.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{item.name}</p>
                          {item.email && <p className="text-xs text-gray-400">{item.email}</p>}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Phone className="h-3 w-3" />
                        <span className="text-xs">{item.phone}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{item.address || "—"}</td>
                    <td className="px-4 py-3 text-right font-medium">{item.invoiceDue.toLocaleString()} TK</td>
                    <td className="px-4 py-3 text-right font-medium">{item.directDue.toLocaleString()} TK</td>
                    <td className="px-4 py-3 text-right">
                      <Badge variant={item.totalDue > 50000 ? "destructive" : item.totalDue > 10000 ? "warning" : "success"}>
                        {item.totalDue.toLocaleString()} TK
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 font-bold border-t-2 border-gray-200">
                  <td colSpan={4} className="px-4 py-3 text-right text-gray-700">Grand Total:</td>
                  <td className="px-4 py-3 text-right text-blue-700">{totalInvoiceDue.toLocaleString()} TK</td>
                  <td className="px-4 py-3 text-right text-orange-700">{totalDirectDue.toLocaleString()} TK</td>
                  <td className="px-4 py-3 text-right text-red-700 font-bold">{totalDue.toLocaleString()} TK</td>
                </tr>
              </tfoot>
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
}
