'use client'; 

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Package, Search, Filter, RotateCcw, Printer, TrendingUp, TrendingDown, AlertTriangle, Boxes } from 'lucide-react';

const productImages = {
  'Mobile Phone': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=80&h=80&fit=crop',
  'Laptop Computer': 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=80&h=80&fit=crop',
  'Desktop Computer': 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=80&h=80&fit=crop',
  'T Shirt': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=80&h=80&fit=crop',
  'Ladies Shirt': 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=80&h=80&fit=crop',
  'Freezer': 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=80&h=80&fit=crop',
  'Air Conditioner': 'https://images.unsplash.com/photo-1631567091046-bdf27eb3e165?w=80&h=80&fit=crop',
  'Door Export': 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=80&h=80&fit=crop',
  'Blazer For Men': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
  'Drill Machine': 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=80&h=80&fit=crop',
  'Smart Watch': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&h=80&fit=crop',
  'Washing Machine': 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=80&h=80&fit=crop',
  'Smart TV': 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=80&h=80&fit=crop',
  'Refrigerator': 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=80&h=80&fit=crop',
  "Men's Shoes": 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=80&h=80&fit=crop',
};

export default function Stock() {
  const printRef = useRef();

  const initialData = [
    { id: 1, product: 'Mobile Phone', productCode: '000001', category: 'Electronics', price: 4500, cost: 4150, purchased: 100, sold: 5, damaged: 0, returned: 0 },
    { id: 2, product: 'Laptop Computer', productCode: '000002', category: 'Hardware', price: 72000, cost: 70000, purchased: 100, sold: 10, damaged: 1, returned: 0 },
    { id: 3, product: 'Desktop Computer', productCode: '000003', category: 'Electronics', price: 458, cost: 375, purchased: 100, sold: 4, damaged: 0, returned: 0 },
    { id: 4, product: 'T Shirt', productCode: '000004', category: 'Fashion', price: 1500, cost: 1200, purchased: 100, sold: 1, damaged: 0, returned: 1 },
    { id: 5, product: 'Ladies Shirt', productCode: '000005', category: 'Fashion', price: 900, cost: 700, purchased: 100, sold: 0, damaged: 1, returned: 0 },
    { id: 6, product: 'Freezer', productCode: '000006', category: 'Hardware', price: 46000, cost: 42000, purchased: 100, sold: 10, damaged: 0, returned: 1 },
    { id: 7, product: 'Air Conditioner', productCode: '000007', category: 'Hardware', price: 94000, cost: 91350, purchased: 100, sold: 10, damaged: 2, returned: 0 },
    { id: 8, product: 'Door Export', productCode: '000008', category: 'Electronics', price: 15000, cost: 13945, purchased: 100, sold: 10, damaged: 1, returned: 0 },
    { id: 9, product: 'Blazer For Men', productCode: '000009', category: 'Fashion', price: 3000, cost: 2500, purchased: 100, sold: 12, damaged: 0, returned: 0 },
    { id: 10, product: 'Drill Machine', productCode: '000010', category: 'Hardware', price: 3000, cost: 2500, purchased: 100, sold: 12, damaged: 0, returned: 0 },
    { id: 11, product: 'Smart Watch', productCode: '000011', category: 'Electronics', price: 5000, cost: 4500, purchased: 100, sold: 15, damaged: 0, returned: 0 },
    { id: 12, product: 'Washing Machine', productCode: '000012', category: 'Hardware', price: 15000, cost: 13000, purchased: 100, sold: 20, damaged: 2, returned: 1 },
    { id: 13, product: 'Smart TV', productCode: '000013', category: 'Electronics', price: 60000, cost: 55000, purchased: 100, sold: 25, damaged: 1, returned: 0 },
    { id: 14, product: 'Refrigerator', productCode: '000014', category: 'Hardware', price: 35000, cost: 32000, purchased: 100, sold: 18, damaged: 2, returned: 1 },
    { id: 15, product: "Men's Shoes", productCode: '000015', category: 'Fashion', price: 2500, cost: 2200, purchased: 100, sold: 30, damaged: 1, returned: 2 },
  ];

  const [filters, setFilters] = useState({ productName: '', productCode: '', category: '' });
  const [filteredData, setFilteredData] = useState(initialData);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => {
      const newFilters = { ...prev, [name]: value };
      applyFilters(newFilters);
      return newFilters;
    });
  };

  const applyFilters = (newFilters = filters) => {
    const filtered = initialData.filter((item) => {
      return (
        (newFilters.productName === '' || item.product.toLowerCase().includes(newFilters.productName.toLowerCase())) &&
        (newFilters.productCode === '' || item.productCode.includes(newFilters.productCode)) &&
        (newFilters.category === '' || item.category.toLowerCase().includes(newFilters.category.toLowerCase()))
      );
    });
    setFilteredData(filtered);
  };

  const resetFilters = () => {
    setFilters({ productName: '', productCode: '', category: '' });
    setFilteredData(initialData);
  };

  const handlePrint = () => {
    const printContent = document.getElementById("table-to-print").outerHTML;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`<html><head><title>Stock List</title><style>body{font-family:Arial,sans-serif}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px;text-align:left}th{background:#6366f1;color:white}</style></head><body onload="window.print()">${printContent}</body></html>`);
    newWindow.document.close();
  };

  // Summary stats
  const totalProducts = filteredData.length;
  const totalValue = filteredData.reduce((sum, item) => sum + (item.purchased - item.sold - item.damaged + item.returned) * item.price, 0);
  const lowStockItems = filteredData.filter(item => (item.purchased - item.sold - item.damaged + item.returned) < 80).length;
  const totalSold = filteredData.reduce((sum, item) => sum + item.sold, 0);

  const getAvailableStock = (item) => item.purchased - item.sold - item.damaged + item.returned;

  return (
    <div className="font-inter text-sm">
      <div className="p-4 max-w-full mx-auto mt-[5%]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg">
              <Package size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Product Stock</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Real-time inventory tracking</p>
            </div>
          </div>
          <Button onClick={handlePrint} className="gap-2">
            <Printer size={16} />
            Print
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100 text-xs">Total Products</p>
                  <p className="text-2xl font-bold">{totalProducts}</p>
                </div>
                <Boxes size={32} className="text-indigo-200" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-xs">Total Value</p>
                  <p className="text-2xl font-bold">৳{(totalValue / 1000).toFixed(0)}K</p>
                </div>
                <TrendingUp size={32} className="text-emerald-200" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-amber-100 text-xs">Low Stock</p>
                  <p className="text-2xl font-bold">{lowStockItems}</p>
                </div>
                <AlertTriangle size={32} className="text-amber-200" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-xs">Total Sold</p>
                  <p className="text-2xl font-bold">{totalSold} pc</p>
                </div>
                <TrendingDown size={32} className="text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filter Section */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-3 items-end">
              <div className="flex-1 min-w-[180px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Product Name</label>
                <div className="relative">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input name="productName" value={filters.productName} onChange={handleFilterChange} placeholder="Search product..." className="pl-9 h-9" />
                </div>
              </div>
              <div className="flex-1 min-w-[150px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Product Code</label>
                <Input name="productCode" value={filters.productCode} onChange={handleFilterChange} placeholder="Code..." className="h-9" />
              </div>
              <div className="flex-1 min-w-[150px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Category</label>
                <select name="category" value={filters.category} onChange={handleFilterChange} className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 dark:text-slate-300">
                  <option value="">All Categories</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Hardware">Hardware</option>
                  <option value="Fashion">Fashion</option>
                </select>
              </div>
              <Button variant="outline" size="sm" onClick={resetFilters} className="gap-1.5 h-9">
                <RotateCcw size={14} />
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stock Table */}
        <Card>
          <div ref={printRef} className="overflow-auto">
            <table id="table-to-print" className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <th className="px-3 py-3 text-left font-medium">#</th>
                  <th className="px-3 py-3 text-left font-medium">Product</th>
                  <th className="px-3 py-3 text-left font-medium">Category</th>
                  <th className="px-3 py-3 text-right font-medium">Price</th>
                  <th className="px-3 py-3 text-right font-medium">Cost</th>
                  <th className="px-3 py-3 text-center font-medium">Purchased</th>
                  <th className="px-3 py-3 text-center font-medium">Sold</th>
                  <th className="px-3 py-3 text-center font-medium">Damaged</th>
                  <th className="px-3 py-3 text-center font-medium">Returned</th>
                  <th className="px-3 py-3 text-center font-medium">Available</th>
                  <th className="px-3 py-3 text-right font-medium">Sell Value</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, idx) => {
                  const available = getAvailableStock(item);
                  const sellValue = available * item.price;
                  return (
                    <tr key={item.id} className={`border-b border-slate-100 dark:border-slate-800 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors ${idx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-900/50'}`}>
                      <td className="px-3 py-3 text-slate-400">{item.id}</td>
                      <td className="px-3 py-3">
                        <div className="flex items-center gap-3">
                          <Image src={productImages[item.product] || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop'} alt={item.product} width={40} height={40} className="w-10 h-10 rounded-lg object-cover" />
                          <div>
                            <p className="font-medium text-slate-800 dark:text-white">{item.product}</p>
                            <p className="text-xs text-slate-400">#{item.productCode}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3"><Badge variant="outline" className="text-xs">{item.category}</Badge></td>
                      <td className="px-3 py-3 text-right font-medium text-slate-700 dark:text-slate-300">৳{item.price.toLocaleString()}</td>
                      <td className="px-3 py-3 text-right text-slate-500">৳{item.cost.toLocaleString()}</td>
                      <td className="px-3 py-3 text-center">{item.purchased}</td>
                      <td className="px-3 py-3 text-center text-emerald-600 font-medium">{item.sold}</td>
                      <td className="px-3 py-3 text-center">{item.damaged > 0 ? <Badge variant="destructive" className="text-xs">{item.damaged}</Badge> : <span className="text-slate-400">0</span>}</td>
                      <td className="px-3 py-3 text-center">{item.returned > 0 ? <Badge variant="warning" className="text-xs">{item.returned}</Badge> : <span className="text-slate-400">0</span>}</td>
                      <td className="px-3 py-3 text-center">
                        <Badge variant={available >= 90 ? 'success' : available >= 70 ? 'info' : 'warning'} className="text-xs font-semibold">
                          {available} pc
                        </Badge>
                      </td>
                      <td className="px-3 py-3 text-right font-semibold text-slate-800 dark:text-white">৳{sellValue.toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Footer summary */}
        <div className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
          Showing {filteredData.length} of {initialData.length} products
        </div>
      </div>
    </div>
  );
}
