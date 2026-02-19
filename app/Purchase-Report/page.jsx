"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  ShoppingCart,
  DollarSign,
  Calendar,
  Printer,
  RotateCcw,
  Search,
  ChevronLeft,
  ChevronRight,
  Package,
  FileText,
  TrendingUp,
} from "lucide-react";

export default function PurchaseReport() {
    // Constant dataset with 50 entries
    const data = [
        { id: 1, date: '2024-09-19', purchaseNo: 'Purchase#1', productName: 'Mobile Phone', quantity: '100 pc', unitPrice: '4,150 TK', subtotal: '415,000 TK' },
        { id: 2, date: '2024-09-19', purchaseNo: 'Purchase#2', productName: 'Laptop Computer', quantity: '100 pc', unitPrice: '72,000 TK', subtotal: '7,200,000 TK' },
        { id: 3, date: '2024-09-19', purchaseNo: 'Purchase#3', productName: 'Desktop Computer', quantity: '100 pc', unitPrice: '375 TK', subtotal: '37,500 TK' },
        { id: 4, date: '2024-09-19', purchaseNo: 'Purchase#4', productName: 'T Shirt', quantity: '100 pc', unitPrice: '1,200 TK', subtotal: '120,000 TK' },
        { id: 5, date: '2024-09-19', purchaseNo: 'Purchase#5', productName: 'Ladies Shirt', quantity: '100 pc', unitPrice: '700 TK', subtotal: '70,000 TK' },
        { id: 6, date: '2024-09-19', purchaseNo: 'Purchase#6', productName: 'Freez', quantity: '100 pc', unitPrice: '4,200 TK', subtotal: '420,000 TK' },
        { id: 7, date: '2024-09-19', purchaseNo: 'Purchase#7', productName: 'Air Condition', quantity: '100 pc', unitPrice: '91,350 TK', subtotal: '9,135,000 TK' },
        { id: 8, date: '2024-09-19', purchaseNo: 'Purchase#8', productName: 'Door Export', quantity: '100 pc', unitPrice: '13,945 TK', subtotal: '1,394,500 TK' },
        { id: 9, date: '2024-09-19', purchaseNo: 'Purchase#9', productName: 'Blazer For Men', quantity: '100 pc', unitPrice: '2,500 TK', subtotal: '250,000 TK' },
        { id: 10, date: '2024-09-19', purchaseNo: 'Purchase#10', productName: 'Drill Machine', quantity: '100 pc', unitPrice: '2,750 TK', subtotal: '275,000 TK' },
        { id: 11, date: '2024-09-19', purchaseNo: 'Purchase#11', productName: 'Gaming Laptop', quantity: '100 pc', unitPrice: '145,200 TK', subtotal: '14,520,000 TK' },
        { id: 12, date: '2024-09-20', purchaseNo: 'Purchase#12', productName: 'T Shirt Polo', quantity: '100 pc', unitPrice: '400 TK', subtotal: '40,000 TK' },
        { id: 13, date: '2024-09-20', purchaseNo: 'Purchase#13', productName: 'Tenda F3 Router', quantity: '5 pc', unitPrice: '50 TK', subtotal: '250 TK' },
        { id: 14, date: '2024-09-22', purchaseNo: 'Purchase#14', productName: 'Tenda F3 Router', quantity: '10 pc', unitPrice: '50 TK', subtotal: '500 TK' },
        { id: 15, date: '2024-09-22', purchaseNo: 'Purchase#15', productName: 'Tenda F3 Router', quantity: '1 pc', unitPrice: '1,300 TK', subtotal: '13,000 TK' },
        { id: 16, date: '2024-09-22', purchaseNo: 'Purchase#16', productName: 'Tenda F3 Router', quantity: '15 pc', unitPrice: '1,000 TK', subtotal: '15,000 TK' },
        { id: 17, date: '2024-09-22', purchaseNo: 'Purchase#17', productName: 'Laptop Computer', quantity: '10 pc', unitPrice: '10,000 TK', subtotal: '100,000 TK' },
        { id: 18, date: '2024-09-22', purchaseNo: 'Purchase#18', productName: 'Gaming Laptop', quantity: '1 pc', unitPrice: '145,200 TK', subtotal: '145,200 TK' },
        { id: 19, date: '2024-09-19', purchaseNo: 'Purchase#19', productName: 'Programmable Logic Controller (PLC)', quantity: '3 pc', unitPrice: '20,500 TK', subtotal: '61,500 TK' },
        { id: 20, date: '2024-09-20', purchaseNo: 'Purchase#20', productName: 'Programmable Logic Controller (PLC) MADE IN JAPAN', quantity: '2 pc', unitPrice: '20,500 TK', subtotal: '41,000 TK' },
        // Continue adding data until 50 entries
        { id: 21, date: '2024-09-21', purchaseNo: 'Purchase#21', productName: 'Monitor', quantity: '50 pc', unitPrice: '5,000 TK', subtotal: '250,000 TK' },
        { id: 22, date: '2024-09-21', purchaseNo: 'Purchase#22', productName: 'Router', quantity: '10 pc', unitPrice: '3,500 TK', subtotal: '35,000 TK' },
        { id: 23, date: '2024-09-21', purchaseNo: 'Purchase#23', productName: 'Server Rack', quantity: '15 pc', unitPrice: '12,000 TK', subtotal: '180,000 TK' },
        { id: 24, date: '2024-09-21', purchaseNo: 'Purchase#24', productName: 'Hard Disk', quantity: '200 pc', unitPrice: '1,500 TK', subtotal: '300,000 TK' },
        { id: 25, date: '2024-09-21', purchaseNo: 'Purchase#25', productName: 'Motherboard', quantity: '100 pc', unitPrice: '8,500 TK', subtotal: '850,000 TK' },
        { id: 26, date: '2024-09-21', purchaseNo: 'Purchase#26', productName: 'Keyboard', quantity: '200 pc', unitPrice: '800 TK', subtotal: '160,000 TK' },
        { id: 27, date: '2024-09-21', purchaseNo: 'Purchase#27', productName: 'Mouse', quantity: '500 pc', unitPrice: '300 TK', subtotal: '150,000 TK' },
        { id: 28, date: '2024-09-21', purchaseNo: 'Purchase#28', productName: 'Monitor Stand', quantity: '50 pc', unitPrice: '1,000 TK', subtotal: '50,000 TK' },
        { id: 29, date: '2024-09-21', purchaseNo: 'Purchase#29', productName: 'Power Cable', quantity: '300 pc', unitPrice: '150 TK', subtotal: '45,000 TK' },
        { id: 30, date: '2024-09-22', purchaseNo: 'Purchase#30', productName: 'UPS Battery', quantity: '50 pc', unitPrice: '2,500 TK', subtotal: '125,000 TK' },
        { id: 31, date: '2024-09-22', purchaseNo: 'Purchase#31', productName: 'Gaming Chair', quantity: '10 pc', unitPrice: '18,000 TK', subtotal: '180,000 TK' },
        { id: 32, date: '2024-09-22', purchaseNo: 'Purchase#32', productName: 'CPU Cooler', quantity: '100 pc', unitPrice: '3,500 TK', subtotal: '350,000 TK' },
        { id: 33, date: '2024-09-22', purchaseNo: 'Purchase#33', productName: 'RAM', quantity: '500 pc', unitPrice: '1,000 TK', subtotal: '500,000 TK' },
        { id: 34, date: '2024-09-22', purchaseNo: 'Purchase#34', productName: 'SSD', quantity: '200 pc', unitPrice: '2,000 TK', subtotal: '400,000 TK' },
        { id: 35, date: '2024-09-22', purchaseNo: 'Purchase#35', productName: 'Ethernet Cable', quantity: '1,000 pc', unitPrice: '50 TK', subtotal: '50,000 TK' },
        { id: 36, date: '2024-09-22', purchaseNo: 'Purchase#36', productName: 'Surge Protector', quantity: '100 pc', unitPrice: '500 TK', subtotal: '50,000 TK' },
        { id: 37, date: '2024-09-22', purchaseNo: 'Purchase#37', productName: 'Projector', quantity: '20 pc', unitPrice: '50,000 TK', subtotal: '1,000,000 TK' },
        { id: 38, date: '2024-09-22', purchaseNo: 'Purchase#38', productName: 'Speaker', quantity: '200 pc', unitPrice: '2,500 TK', subtotal: '500,000 TK' },
        { id: 39, date: '2024-09-22', purchaseNo: 'Purchase#39', productName: 'Amplifier', quantity: '50 pc', unitPrice: '10,000 TK', subtotal: '500,000 TK' },
        { id: 40, date: '2024-09-22', purchaseNo: 'Purchase#40', productName: 'Webcam', quantity: '200 pc', unitPrice: '1,200 TK', subtotal: '240,000 TK' },
        { id: 41, date: '2024-09-22', purchaseNo: 'Purchase#41', productName: 'USB Hub', quantity: '500 pc', unitPrice: '300 TK', subtotal: '150,000 TK' },
        { id: 42, date: '2024-09-22', purchaseNo: 'Purchase#42', productName: 'Power Bank', quantity: '300 pc', unitPrice: '2,000 TK', subtotal: '600,000 TK' },
        { id: 43, date: '2024-09-22', purchaseNo: 'Purchase#43', productName: 'Wireless Mouse', quantity: '400 pc', unitPrice: '500 TK', subtotal: '200,000 TK' },
        { id: 44, date: '2024-09-22', purchaseNo: 'Purchase#44', productName: 'Laser Printer', quantity: '50 pc', unitPrice: '15,000 TK', subtotal: '750,000 TK' },
        { id: 45, date: '2024-09-22', purchaseNo: 'Purchase#45', productName: 'Router', quantity: '200 pc', unitPrice: '1,500 TK', subtotal: '300,000 TK' },
        { id: 46, date: '2024-09-22', purchaseNo: 'Purchase#46', productName: 'Modem', quantity: '300 pc', unitPrice: '2,000 TK', subtotal: '600,000 TK' },
        { id: 47, date: '2024-09-22', purchaseNo: 'Purchase#47', productName: 'Firewall', quantity: '20 pc', unitPrice: '100,000 TK', subtotal: '2,000,000 TK' },
        { id: 48, date: '2024-09-22', purchaseNo: 'Purchase#48', productName: 'Switch', quantity: '500 pc', unitPrice: '5,000 TK', subtotal: '2,500,000 TK' },
        { id: 49, date: '2024-09-22', purchaseNo: 'Purchase#49', productName: 'Server', quantity: '50 pc', unitPrice: '100,000 TK', subtotal: '5,000,000 TK' },
        { id: 50, date: '2024-09-22', purchaseNo: 'Purchase#50', productName: 'UPS', quantity: '100 pc', unitPrice: '10,000 TK', subtotal: '1,000,000 TK' },
      ];
    
      const [currentPage, setCurrentPage] = useState(1);
      const [filteredData, setFilteredData] = useState(data);
      const [productFilter, setProductFilter] = useState('');
      const [startDate, setStartDate] = useState('');
      const [endDate, setEndDate] = useState('');
      const itemsPerPage = 15; // Set items per page for pagination
    
      // Filter function based on product name and date range
      const filterData = () => {
        let filtered = data;
        if (productFilter) {
          filtered = filtered.filter(item => item.productName.toLowerCase().includes(productFilter.toLowerCase()));
        }
        if (startDate && endDate) {
          filtered = filtered.filter(item => new Date(item.date) >= new Date(startDate) && new Date(item.date) <= new Date(endDate));
        }
        setFilteredData(filtered);
        setCurrentPage(1); // Reset to first page after filtering
      };
    
      // Reset filter
      const resetFilter = () => {
        setFilteredData(data);
        setProductFilter('');
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
          <title>Porchase Report</title>
          <style>
            body { font-family: Arial, sans-serif;}
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid #000; padding: 8px; text-align: left; }
          </style>
        </head>
        <body onload="window.print()" >
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
              <div className="p-2.5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white shadow-lg">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Purchase Report</h1>
                <p className="text-sm text-gray-500">Detailed purchase history & analytics</p>
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
                    <p className="text-sm font-medium text-gray-500">Total Purchases</p>
                    <p className="text-2xl font-bold text-blue-700">{filteredData.length}</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Unique Products</p>
                    <p className="text-2xl font-bold text-green-700">{[...new Set(filteredData.map(i => i.productName))].length}</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Package className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Value</p>
                    <p className="text-lg font-bold text-purple-700">
                      {filteredData.reduce((sum, i) => sum + parseInt(i.subtotal.replace(/[^0-9]/g, "")), 0).toLocaleString()} TK
                    </p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <DollarSign className="h-6 w-6 text-purple-600" />
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
                  <select
                    value={productFilter}
                    onChange={(e) => setProductFilter(e.target.value)}
                    className="w-full h-10 rounded-lg border border-gray-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">All Products</option>
                    {[...new Set(data.map(item => item.productName))].map((product, index) => (
                      <option key={index} value={product}>{product}</option>
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

          {/* Table */}
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table id="table-to-print" className="w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                      <th className="px-4 py-3 text-left font-semibold">SL</th>
                      <th className="px-4 py-3 text-left font-semibold">Date</th>
                      <th className="px-4 py-3 text-left font-semibold">Purchase No</th>
                      <th className="px-4 py-3 text-left font-semibold">Product</th>
                      <th className="px-4 py-3 text-right font-semibold">Quantity</th>
                      <th className="px-4 py-3 text-right font-semibold">Unit Price</th>
                      <th className="px-4 py-3 text-right font-semibold">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {currentData.map((item, index) => (
                      <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                        <td className="px-4 py-3 font-medium text-gray-500">{indexOfFirstItem + index + 1}</td>
                        <td className="px-4 py-3 text-gray-600">{item.date}</td>
                        <td className="px-4 py-3">
                          <Badge variant="outline" className="font-mono text-xs">{item.purchaseNo}</Badge>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                              <Package className="h-4 w-4 text-indigo-600" />
                            </div>
                            <span className="font-medium text-gray-900">{item.productName}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-right text-gray-700">{item.quantity}</td>
                        <td className="px-4 py-3 text-right text-gray-700">{item.unitPrice}</td>
                        <td className="px-4 py-3 text-right">
                          <span className="font-semibold text-indigo-700">{item.subtotal}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} records
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => (
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
                {totalPages > 5 && <span className="text-gray-400">...</span>}
                <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      );
}