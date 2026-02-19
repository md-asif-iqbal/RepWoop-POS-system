"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  AlertTriangle,
  Package,
  DollarSign,
  Printer,
  RotateCcw,
  Search,
  ChevronLeft,
  ChevronRight,
  TrendingDown,
  ShoppingCart,
  LayoutGrid,
  AlertCircle,
} from "lucide-react";

export default function LowStockReport() {
    const data = [
        { id: 1, image: '', product: 'Mobile Phone', code: '0000001', name: 'Mobile Phone', category: 'Electronics', price: 4500.00, sale: '103 pc', purchase: '102 pc', stock: '0 pc', value: '0 TK' },
        { id: 2, image: '', product: 'Blazer For Men', code: '0000009', name: 'Blazer', category: 'Document', price: 3000.00, sale: '101 pc', purchase: '100 pc', stock: '0 pc', value: '0 TK' },
        { id: 3, image: '', product: 'Test Product', code: '0000015', name: 'Test Product', category: 'House', price: 100.00, sale: '0 pc', purchase: '0 pc', stock: '0 pc', value: '0 TK' },
        { id: 4, image: '', product: 'PLC - FX3U-64MR/ES-A', code: '0000021', name: 'PLC', category: 'Electronics', price: 30000.00, sale: '4 pc', purchase: '3 pc', stock: '0 pc', value: '0 TK' },
        { id: 5, image: '', product: 'PLC (Japan)', code: '0000025', name: 'PLC', category: 'PLC', price: 30000.00, sale: '2 pc', purchase: '2 pc', stock: '0 pc', value: '0 TK' },
        { id: 6, image: '', product: 'Head Lamp', code: 'QLZ01023', name: 'Head Lamp', category: 'BAJAJ', price: 130.00, sale: '2 pc', purchase: '2 pc', stock: '0 pc', value: '0 TK' },
        { id: 7, image: '', product: 'Addif', code: '0000029', name: 'Addif', category: 'House', price: 50.00, sale: '0 pc', purchase: '0 pc', stock: '0 pc', value: '0 TK' },
        { id: 8, image: '', product: '334343', code: '0000021', name: '334343', category: 'House', price: 32.00, sale: '0 pc', purchase: '0 pc', stock: '0 pc', value: '0 TK' },
        { id: 9, image: '', product: 'Br', code: '0000018', name: 'Br', category: 'House', price: 37.00, sale: '0 pc', purchase: '0 pc', stock: '0 pc', value: '0 TK' },
        { id: 10, image: '', product: 'Archer C64', code: '331E4EAECJS', name: 'Archer Router', category: 'Router', price: 1880.00, sale: '1 pc', purchase: '1 pc', stock: '0 pc', value: '0 TK' },
        { id: 11, image: '', product: 'Bla Bla Test', code: '0000092', name: 'Bla Bla', category: 'House', price: 900.00, sale: '1 pc', purchase: '1 pc', stock: '0 pc', value: '0 TK' },
        { id: 12, image: '', product: 'Napa', code: '0000045', name: 'Napa', category: 'Tablets', price: 1.20, sale: '0 pc', purchase: '0 pc', stock: '0 pc', value: '0 TK' },
        { id: 13, image: '', product: 'Samsung Glass Paper', code: '0000010', name: 'Samsung', category: 'Glass Paper', price: 160.00, sale: '0 pc', purchase: '0 pc', stock: '0 pc', value: '0 TK' },
        { id: 14, image: '', product: 'Lady\'s Shoes Black', code: '0000005', name: 'Lady\'s Shoes', category: 'Shoes', price: 2400.00, sale: '1 Dozen 5 pc', purchase: '1 Dozen 10 pc', stock: '0 pc', value: '1200 TK' },
        { id: 15, image: '', product: 'Lady\'s Shoes Red', code: '0000005', name: 'Lady\'s Shoes', category: 'Shoes', price: 2400.00, sale: '1 Dozen 5 pc', purchase: '1 Dozen 10 pc', stock: '0 pc', value: '1200 TK' },
        { id: 16, image: '', product: 'Photo Printed', code: '0000072', name: 'Photo Printed', category: 'Online', price: 10.00, sale: '100 pc', purchase: '100 pc', stock: '0 pc', value: '0 TK' },
        { id: 17, image: '', product: 'Minicate Rice', code: '0000075', name: 'Minicate Rice', category: 'Rice', price: 80.00, sale: '0 Kg', purchase: '0 Kg', stock: '0 Kg', value: '0 TK' },
        { id: 18, image: '', product: 'Baby Dress', code: '005-130', name: 'Baby Dress', category: 'Fashion', price: 1500.00, sale: '0 pc', purchase: '0 pc', stock: '0 pc', value: '0 TK' },
        { id: 19, image: '', product: 'Ladies Shoe', code: '401-36', name: 'Ladies Shoe', category: 'Fashion', price: 2100.00, sale: '0 pc', purchase: '0 pc', stock: '0 pc', value: '0 TK' },
        { id: 20, image: '', product: 'Lok', code: 'g004', name: 'Lok', category: 'Fashion', price: 500.00, sale: '0 Litre', purchase: '0 Litre', stock: '0 Litre', value: '0 TK' },
        // 10 more entries
        { id: 21, image: '', product: 'Blazer Test', code: '0000031', name: 'Blazer Test', category: 'Document', price: 2900.00, sale: '5 pc', purchase: '5 pc', stock: '0 pc', value: '0 TK' },
        { id: 22, image: '', product: 'New PLC', code: '0000041', name: 'New PLC', category: 'Electronics', price: 32000.00, sale: '3 pc', purchase: '2 pc', stock: '0 pc', value: '0 TK' },
        { id: 23, image: '', product: 'Test Product 2', code: '0000012', name: 'Test Product 2', category: 'House', price: 250.00, sale: '2 pc', purchase: '1 pc', stock: '0 pc', value: '0 TK' },
        { id: 24, image: '', product: 'Headlamp Test', code: 'QLZ01024', name: 'Headlamp Test', category: 'BAJAJ', price: 150.00, sale: '4 pc', purchase: '4 pc', stock: '0 pc', value: '0 TK' },
        { id: 25, image: '', product: 'Electric Iron', code: '0000087', name: 'Iron', category: 'Electronics', price: 3000.00, sale: '1 pc', purchase: '1 pc', stock: '0 pc', value: '0 TK' },
        { id: 26, image: '', product: 'Refrigerator', code: '0000092', name: 'Fridge', category: 'Electronics', price: 45000.00, sale: '5 pc', purchase: '4 pc', stock: '1 pc', value: '4500 TK' },
        { id: 27, image: '', product: 'AC Unit', code: '0000055', name: 'AC Unit', category: 'Electronics', price: 52000.00, sale: '2 pc', purchase: '2 pc', stock: '0 pc', value: '0 TK' },
        { id: 28, image: '', product: 'Camera', code: '0000033', name: 'Camera', category: 'Electronics', price: 65000.00, sale: '4 pc', purchase: '4 pc', stock: '0 pc', value: '0 TK' },
        { id: 29, image: '', product: 'Smartwatch', code: '0000022', name: 'Smartwatch', category: 'Electronics', price: 8000.00, sale: '3 pc', purchase: '2 pc', stock: '0 pc', value: '0 TK' },
        { id: 30, image: '', product: 'Earbuds', code: '0000018', name: 'Earbuds', category: 'Electronics', price: 1500.00, sale: '1 pc', purchase: '1 pc', stock: '0 pc', value: '0 TK' }
      ];
    
      const [currentPage, setCurrentPage] = useState(1);
      const [filteredData, setFilteredData] = useState(data);
      const [productFilter, setProductFilter] = useState('');
      const [codeFilter, setCodeFilter] = useState('');
      const [nameFilter, setNameFilter] = useState('');
      const [categoryFilter, setCategoryFilter] = useState('');
      const itemsPerPage = 20; // Set items per page for pagination
    
      // Filter function
      const filterData = () => {
        let filtered = data;
        if (productFilter) {
          filtered = filtered.filter(item => item.product.toLowerCase().includes(productFilter.toLowerCase()));
        }
        if (codeFilter) {
          filtered = filtered.filter(item => item.code.toLowerCase().includes(codeFilter.toLowerCase()));
        }
        if (nameFilter) {
          filtered = filtered.filter(item => item.name.toLowerCase().includes(nameFilter.toLowerCase()));
        }
        if (categoryFilter) {
          filtered = filtered.filter(item => item.category.toLowerCase().includes(categoryFilter.toLowerCase()));
        }
        setFilteredData(filtered);
        setCurrentPage(1); // Reset to first page after filtering
      };
    
      // Reset filter
      const resetFilter = () => {
        setFilteredData(data);
        setProductFilter('');
        setCodeFilter('');
        setNameFilter('');
        setCategoryFilter('');
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
              <title>Low Stock Report</title>
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
              <div className="p-2.5 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl text-white shadow-lg">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Low Stock Report</h1>
                <p className="text-sm text-gray-500">Products running low on inventory</p>
              </div>
            </div>
            <Button onClick={handlePrint} className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
              <Printer className="h-4 w-4 mr-2" />
              Print Report
            </Button>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-0 shadow-md bg-gradient-to-br from-red-50 to-rose-50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Low Stock Items</p>
                    <p className="text-2xl font-bold text-red-700">{filteredData.length}</p>
                  </div>
                  <div className="p-3 bg-red-100 rounded-xl">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md bg-gradient-to-br from-orange-50 to-amber-50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Out of Stock</p>
                    <p className="text-2xl font-bold text-orange-700">
                      {filteredData.filter(i => i.stock === "0 pc" || i.stock.startsWith("0")).length}
                    </p>
                  </div>
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <TrendingDown className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Categories</p>
                    <p className="text-2xl font-bold text-blue-700">
                      {[...new Set(filteredData.map(i => i.category))].length}
                    </p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <LayoutGrid className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Stock Value</p>
                    <p className="text-lg font-bold text-green-700">
                      {filteredData.reduce((sum, i) => sum + parseInt(i.value.replace(/[^0-9]/g, "") || 0), 0).toLocaleString()} TK
                    </p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-xl">
                    <DollarSign className="h-6 w-6 text-green-600" />
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
                    {data.map((item, index) => (
                      <option key={index} value={item.product}>{item.product}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <Input
                    placeholder="Product Code"
                    value={codeFilter}
                    onChange={(e) => setCodeFilter(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <Input
                    placeholder="Product Name"
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full h-10 rounded-lg border border-gray-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">All Categories</option>
                    {[...new Set(data.map(item => item.category))].map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
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
                      <th className="px-4 py-3 text-left font-semibold">Product</th>
                      <th className="px-4 py-3 text-left font-semibold">Category</th>
                      <th className="px-4 py-3 text-right font-semibold">Price</th>
                      <th className="px-4 py-3 text-right font-semibold">Sale</th>
                      <th className="px-4 py-3 text-right font-semibold">Purchase</th>
                      <th className="px-4 py-3 text-center font-semibold">Stock</th>
                      <th className="px-4 py-3 text-right font-semibold">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {currentData.map((item, index) => (
                      <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                        <td className="px-4 py-3 font-medium text-gray-500">{indexOfFirstItem + index + 1}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-100 to-rose-100 flex items-center justify-center">
                              <Package className="h-4 w-4 text-red-600" />
                            </div>
                            <span className="font-semibold text-gray-900">{item.product}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <Badge variant="outline" className="text-xs">{item.category}</Badge>
                        </td>
                        <td className="px-4 py-3 text-right font-medium">{item.price.toLocaleString()} TK</td>
                        <td className="px-4 py-3 text-right text-gray-600">{item.sale}</td>
                        <td className="px-4 py-3 text-right text-gray-600">{item.purchase}</td>
                        <td className="px-4 py-3 text-center">
                          <Badge variant={item.stock === "0 pc" || item.stock.startsWith("0") ? "destructive" : "warning"}>
                            {item.stock}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-right font-medium text-gray-700">{item.value}</td>
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
                Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} products
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
