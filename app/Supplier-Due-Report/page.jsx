"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  Truck,
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

export default function SupplierDueReport() {
    const data = [
        { id: 1, name: 'Sakib Al Hasan', email: 'sakib@gmail.com', phone: '014578785', address: 'Address', invoiceDue: 14600, directDue: 0 },
        { id: 2, name: 'Default Supplier', email: 'default@supplier.com', phone: '111111', address: 'Default Address', invoiceDue: 3255, directDue: 0 },
        { id: 3, name: 'China Supplier', email: 'khanengcor@hotmail.com', phone: '09876543211', address: 'China BD', invoiceDue: 0, directDue: 5000 },
        { id: 4, name: 'Ayman Computer', email: '', phone: '018555558567', address: 'Multiplan Dhaka', invoiceDue: 100000, directDue: 0 },
        { id: 5, name: 'Munir Ahamed', email: '', phone: '0000000000', address: '', invoiceDue: 1742100, directDue: 43000 },
        { id: 6, name: 'Riton', email: '', phone: '0175478644', address: '', invoiceDue: 0, directDue: 10000 },
        { id: 7, name: 'JSS International', email: 'mahmudabeer@live.com', phone: '01670510095', address: 'South Halishahar', invoiceDue: 6000, directDue: 0 },
        { id: 8, name: 'Tech Hub', email: 'tech@hub.com', phone: '01711122234', address: 'Banani, Dhaka', invoiceDue: 8900, directDue: 3000 },
        { id: 9, name: 'DHL Suppliers', email: 'dhl@supplier.com', phone: '01812345678', address: 'Motijheel, Dhaka', invoiceDue: 120000, directDue: 5000 },
        { id: 10, name: 'Green Solutions', email: 'green@solutions.com', phone: '01778569874', address: 'Mirpur, Dhaka', invoiceDue: 15500, directDue: 7500 },
        { id: 11, name: 'Smart Tech BD', email: 'smarttech@gmail.com', phone: '01912365478', address: 'Dhanmondi, Dhaka', invoiceDue: 23000, directDue: 0 },
        { id: 12, name: 'Alamin Suppliers', email: 'alamin@suppliers.com', phone: '01878963254', address: 'Chittagong', invoiceDue: 45500, directDue: 2000 },
        { id: 13, name: 'Global Suppliers', email: 'global@supplier.com', phone: '01778965234', address: 'Uttara, Dhaka', invoiceDue: 63000, directDue: 5000 },
        { id: 14, name: 'IT Traders', email: 'it@traders.com', phone: '01978965432', address: 'Karwan Bazar, Dhaka', invoiceDue: 12000, directDue: 1000 },
        { id: 15, name: 'Phoenix BD', email: 'phoenix@supplier.com', phone: '01674563289', address: 'Gulshan, Dhaka', invoiceDue: 32000, directDue: 500 },
        { id: 16, name: 'Top Traders', email: 'toptraders@gmail.com', phone: '01789653241', address: 'Banani, Dhaka', invoiceDue: 16500, directDue: 0 },
        { id: 17, name: 'Infinity Tech', email: 'infinitytech@supplier.com', phone: '01896543210', address: 'Dhaka', invoiceDue: 43000, directDue: 10000 },
        { id: 18, name: 'Pro Suppliers', email: 'prosuppliers@gmail.com', phone: '01956478213', address: 'Dhanmondi, Dhaka', invoiceDue: 52000, directDue: 3000 },
        { id: 19, name: 'Elite Traders', email: 'elite@traders.com', phone: '01893214567', address: 'Uttara, Dhaka', invoiceDue: 7000, directDue: 0 },
        { id: 20, name: 'Royal Supplies', email: 'royal@supplies.com', phone: '01678963214', address: 'Barisal', invoiceDue: 15000, directDue: 5000 },
        { id: 21, name: 'Fast Track Traders', email: 'fasttrack@supplier.com', phone: '01715965432', address: 'Sylhet', invoiceDue: 45000, directDue: 1000 },
        { id: 22, name: 'Metro Suppliers', email: 'metro@supplier.com', phone: '01715965432', address: 'Motijheel, Dhaka', invoiceDue: 65000, directDue: 2000 },
        { id: 23, name: 'Sunshine Traders', email: 'sunshine@traders.com', phone: '01715995432', address: 'Gulshan, Dhaka', invoiceDue: 32000, directDue: 2000 },
        { id: 24, name: 'Innovative Supplies', email: 'innovative@supplies.com', phone: '01876543211', address: 'Banani, Dhaka', invoiceDue: 8000, directDue: 1500 },
        { id: 25, name: 'Advanced Tech', email: 'advanced@tech.com', phone: '01678549823', address: 'Barisal', invoiceDue: 75000, directDue: 10000 },
        { id: 26, name: 'Smart Innovations', email: 'smart@innovations.com', phone: '01989562347', address: 'Sylhet', invoiceDue: 54000, directDue: 3000 },
        { id: 27, name: 'Solution Suppliers', email: 'solution@supplier.com', phone: '01989563214', address: 'Gazipur', invoiceDue: 8000, directDue: 1000 },
        { id: 28, name: 'Tech Masters', email: 'techmasters@supplier.com', phone: '01998765432', address: 'Chittagong', invoiceDue: 12000, directDue: 1000 },
        { id: 29, name: 'FutureTech BD', email: 'futuretech@gmail.com', phone: '01712345678', address: 'Dhaka', invoiceDue: 24000, directDue: 1500 },
        { id: 30, name: 'Smart Innovations', email: 'smart@innovations.com', phone: '01989562347', address: 'Sylhet', invoiceDue: 42000, directDue: 2000 },
        { id: 31, name: 'Elite Traders', email: 'elite@traders.com', phone: '01893214567', address: 'Uttara, Dhaka', invoiceDue: 35000, directDue: 5000 },
        { id: 32, name: 'Tech Masters', email: 'masters@tech.com', phone: '01876543219', address: 'Comilla', invoiceDue: 28000, directDue: 3000 },
        { id: 33, name: 'Global Suppliers', email: 'global@supplier.com', phone: '01778965234', address: 'Uttara, Dhaka', invoiceDue: 51000, directDue: 7000 },
        { id: 34, name: 'China Supplier', email: 'china@suppliers.com', phone: '01987654321', address: 'China BD', invoiceDue: 0, directDue: 8000 },
        { id: 35, name: 'Global Suppliers', email: 'globalsupplier@bd.com', phone: '01798765432', address: 'Banani, Dhaka', invoiceDue: 85000, directDue: 4000 },
        { id: 36, name: 'Smart Tech BD', email: 'smarttechbd@bd.com', phone: '01698765432', address: 'Dhanmondi, Dhaka', invoiceDue: 67000, directDue: 6000 },
        { id: 37, name: 'Elite Traders', email: 'elite@traders.com', phone: '01987654321', address: 'Gulshan, Dhaka', invoiceDue: 23000, directDue: 2000 },
        { id: 38, name: 'Tech Masters', email: 'info@techmasters.com', phone: '01876543210', address: 'Barisal', invoiceDue: 12500, directDue: 3000 },
        { id: 39, name: 'Smart Innovations', email: 'smart@innovations.com', phone: '01987765432', address: 'Sylhet', invoiceDue: 30000, directDue: 4000 },
        { id: 40, name: 'Global Suppliers', email: 'global@supplier.com', phone: '01798762345', address: 'Gazipur', invoiceDue: 47000, directDue: 10000 },
        { id: 41, name: 'Smart Tech BD', email: 'contact@smarttechbd.com', phone: '01698761234', address: 'Mohakhali, Dhaka', invoiceDue: 52000, directDue: 7000 },
        { id: 42, name: 'FutureTech BD', email: 'info@futuretechbd.com', phone: '01712234567', address: 'Chittagong', invoiceDue: 39000, directDue: 8000 },
        { id: 43, name: 'Phoenix BD', email: 'phoenixbd@gmail.com', phone: '01698711234', address: 'Uttara, Dhaka', invoiceDue: 74000, directDue: 1000 },
        { id: 44, name: 'Pro Traders', email: 'protraders@bd.com', phone: '01798712345', address: 'Sylhet', invoiceDue: 53000, directDue: 2500 },
        { id: 45, name: 'Infinity Tech', email: 'infinity@techbd.com', phone: '01987651234', address: 'Gazipur', invoiceDue: 68000, directDue: 5000 },
        { id: 46, name: 'Elite Traders', email: 'elite_traders@gmail.com', phone: '01712398765', address: 'Banani, Dhaka', invoiceDue: 9000, directDue: 0 },
        { id: 47, name: 'Tech Masters', email: 'tech.masters@gmail.com', phone: '01698754321', address: 'Mirpur, Dhaka', invoiceDue: 22000, directDue: 4000 },
        { id: 48, name: 'Smart Innovations', email: 'innovations@bd.com', phone: '01987761234', address: 'Gulshan, Dhaka', invoiceDue: 66000, directDue: 1000 },
        { id: 49, name: 'Pro Traders', email: 'pro@traders.com', phone: '01791234567', address: 'Dhanmondi, Dhaka', invoiceDue: 21000, directDue: 2000 },
        { id: 50, name: 'Global Suppliers', email: 'globalsupplier@dhaka.com', phone: '01698712345', address: 'Uttara, Dhaka', invoiceDue: 38000, directDue: 3000 },
        { id: 51, name: 'Elite Traders', email: 'elite@tradersbd.com', phone: '01876523456', address: 'Comilla', invoiceDue: 18000, directDue: 500 },
        { id: 52, name: 'China Supplier', email: 'china_sup@bd.com', phone: '01876541234', address: 'Dhaka', invoiceDue: 6000, directDue: 4000 },
        { id: 53, name: 'Infinity Tech', email: 'info@infinitytech.com', phone: '01986754321', address: 'Banani, Dhaka', invoiceDue: 76000, directDue: 9000 },
        { id: 54, name: 'Phoenix BD', email: 'contact@phoenixbd.com', phone: '01798762345', address: 'Chittagong', invoiceDue: 50000, directDue: 1000 },
        { id: 55, name: 'FutureTech BD', email: 'support@futuretechbd.com', phone: '01698765423', address: 'Mohakhali, Dhaka', invoiceDue: 34000, directDue: 4000 },
        { id: 56, name: 'Pro Traders', email: 'info@protraders.com', phone: '01876598765', address: 'Sylhet', invoiceDue: 29000, directDue: 3000 },
        { id: 57, name: 'Smart Tech BD', email: 'smartbd@tech.com', phone: '01787654321', address: 'Mirpur, Dhaka', invoiceDue: 17000, directDue: 2000 },
        { id: 58, name: 'Global Suppliers', email: 'globalsuppliers@bd.com', phone: '01676543219', address: 'Gazipur', invoiceDue: 44000, directDue: 5000 },
    ];
    
      const [currentPage, setCurrentPage] = useState(1);
      const [filteredData, setFilteredData] = useState(data);
      const itemsPerPage = 20; // Set items per page for pagination
    
      // Generate unique names for the dropdown
      const uniqueNames = [...new Set(data.map((supplier) => supplier.name))];
    
      // Handle filtering when supplier name is selected
      const handleSupplierChange = (supplierName) => {
        if (supplierName) {
          const filtered = data.filter(item => item.name === supplierName);
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
          <title>Supplier Due Report</title>
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
  // Summary calculations
  const totalInvoiceDue = filteredData.reduce((sum, item) => sum + item.invoiceDue, 0);
  const totalDirectDue = filteredData.reduce((sum, item) => sum + item.directDue, 0);
  const grandTotal = totalInvoiceDue + totalDirectDue;

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl text-white shadow-lg">
            <Truck className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Supplier Due Report</h1>
            <p className="text-sm text-gray-500">Outstanding dues to all suppliers</p>
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
                <p className="text-2xl font-bold text-red-700">{grandTotal.toLocaleString()} TK</p>
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
                onChange={(e) => handleSupplierChange(e.target.value)}
                className="w-full h-10 rounded-lg border border-gray-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">All Suppliers</option>
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
                  <th className="px-4 py-3 text-left font-semibold">Supplier</th>
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
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-sm font-bold shadow-sm">
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
                      <Badge variant={
                        item.invoiceDue + item.directDue > 50000 ? "destructive" :
                        item.invoiceDue + item.directDue > 10000 ? "warning" : "success"
                      }>
                        {(item.invoiceDue + item.directDue).toLocaleString()} TK
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
                  <td className="px-4 py-3 text-right text-red-700 font-bold">{grandTotal.toLocaleString()} TK</td>
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
            Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} suppliers
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
