'use client'
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import Papa from "papaparse";
import * as XLSX from 'xlsx';
import { Eye, Filter, Trash2, Pencil, Plus, Download, FileSpreadsheet, Printer, Upload, X, Search, Package, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

const productImages = {
  'Lenovo 3rd Generation': 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=60&h=60&fit=crop',
  'Bold V3.2': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=60&h=60&fit=crop',
  'Nike Jordan': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=60&h=60&fit=crop',
  'Apple Series 5 Watch': 'https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=60&h=60&fit=crop',
  'Amazon Echo Dot': 'https://images.unsplash.com/photo-1543512214-318228f5a78c?w=60&h=60&fit=crop',
  'Lobar Handy': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=60&h=60&fit=crop',
  'Red Premium Handy': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=60&h=60&fit=crop',
  'Iphone 14 Pro': 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=60&h=60&fit=crop',
  'Black Slim 200': 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=60&h=60&fit=crop',
  'Woodcraft Sandal': 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=60&h=60&fit=crop',
  'MacBook Air M1': 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=60&h=60&fit=crop',
  'Samsung Galaxy S22': 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=60&h=60&fit=crop',
  'Google Pixel 6': 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=60&h=60&fit=crop',
  'OnePlus 9 Pro': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=60&h=60&fit=crop',
  'Dell XPS 13': 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=60&h=60&fit=crop',
  'Sony WH-1000XM4': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=60&h=60&fit=crop',
  'Bose QuietComfort 35': 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=60&h=60&fit=crop',
  'Asus ROG Zephyrus': 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=60&h=60&fit=crop',
  'HP Spectre x360': 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=60&h=60&fit=crop',
  'Acer Predator Helios': 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=60&h=60&fit=crop',
};

export default function ProductList() {
  const [showModal, setShowModal] = useState(false);
  const [product, setProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ category: '', brand: '' });
  const [sortOrder, setSortOrder] = useState('');
  const [dateSortOrder, setDateSortOrder] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [openAction, setOpenAction] = useState(null);
  const [viewModal, setViewModal] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);

  const products = [
    { id: 1, product: 'Lenovo 3rd Generation', sku: 'PT001', category: 'Laptop', brand: 'Lenovo', price: 12500.00, createdDate: '2023-08-15', unit: 'Pc', qty: 100, createdBy: 'Arron' },
    { id: 2, product: 'Bold V3.2', sku: 'PT002', category: 'Electronics', brand: 'Bolt', price: 1600.00, createdDate: '2023-08-12', unit: 'Pc', qty: 140, createdBy: 'Kenneth' },
    { id: 3, product: 'Nike Jordan', sku: 'PT003', category: 'Shoe', brand: 'Nike', price: 6000.00, createdDate: '2023-09-01', unit: 'Pc', qty: 780, createdBy: 'Gooch' },
    { id: 4, product: 'Apple Series 5 Watch', sku: 'PT004', category: 'Electronics', brand: 'Apple', price: 25000.00, createdDate: '2023-08-21', unit: 'Pc', qty: 450, createdBy: 'Nathan' },
    { id: 5, product: 'Amazon Echo Dot', sku: 'PT005', category: 'Speaker', brand: 'Amazon', price: 1600.00, createdDate: '2023-08-10', unit: 'Pc', qty: 477, createdBy: 'Alice' },
    { id: 6, product: 'Lobar Handy', sku: 'PT006', category: 'Furniture', brand: 'Woodmart', price: 4521.00, createdDate: '2023-08-08', unit: 'Kg', qty: 145, createdBy: 'Robb' },
    { id: 7, product: 'Red Premium Handy', sku: 'PT007', category: 'Bags', brand: 'Versace', price: 2024.00, createdDate: '2023-08-14', unit: 'Kg', qty: 747, createdBy: 'Steven' },
    { id: 8, product: 'Iphone 14 Pro', sku: 'PT008', category: 'Phone', brand: 'Iphone', price: 1698.00, createdDate: '2023-09-12', unit: 'Pc', qty: 897, createdBy: 'Gravely' },
    { id: 9, product: 'Black Slim 200', sku: 'PT009', category: 'Chairs', brand: 'Bently', price: 6794.00, createdDate: '2023-07-29', unit: 'Pc', qty: 741, createdBy: 'Kevin' },
    { id: 10, product: 'Woodcraft Sandal', sku: 'PT010', category: 'Bags', brand: 'Woodcraft', price: 4547.00, createdDate: '2023-08-01', unit: 'Kg', qty: 148, createdBy: 'Grillo' },
    { id: 11, product: 'MacBook Air M1', sku: 'PT011', category: 'Laptop', brand: 'Apple', price: 999.99, createdDate: '2023-09-15', unit: 'Pc', qty: 320, createdBy: 'Riley' },
    { id: 12, product: 'Samsung Galaxy S22', sku: 'PT012', category: 'Phone', brand: 'Samsung', price: 850.00, createdDate: '2023-09-10', unit: 'Pc', qty: 230, createdBy: 'Jordan' },
    { id: 13, product: 'Google Pixel 6', sku: 'PT013', category: 'Phone', brand: 'Google', price: 699.00, createdDate: '2023-09-20', unit: 'Pc', qty: 180, createdBy: 'Alexa' },
    { id: 14, product: 'OnePlus 9 Pro', sku: 'PT014', category: 'Phone', brand: 'OnePlus', price: 750.00, createdDate: '2023-09-18', unit: 'Pc', qty: 400, createdBy: 'Chris' },
    { id: 15, product: 'Dell XPS 13', sku: 'PT015', category: 'Laptop', brand: 'Dell', price: 1200.00, createdDate: '2023-08-22', unit: 'Pc', qty: 90, createdBy: 'Sam' },
    { id: 16, product: 'Sony WH-1000XM4', sku: 'PT016', category: 'Headphones', brand: 'Sony', price: 349.99, createdDate: '2023-09-03', unit: 'Pc', qty: 210, createdBy: 'Tina' },
    { id: 17, product: 'Bose QuietComfort 35', sku: 'PT017', category: 'Headphones', brand: 'Bose', price: 299.99, createdDate: '2023-08-31', unit: 'Pc', qty: 120, createdBy: 'Lucas' },
    { id: 18, product: 'Asus ROG Zephyrus', sku: 'PT018', category: 'Laptop', brand: 'Asus', price: 1400.00, createdDate: '2023-09-06', unit: 'Pc', qty: 110, createdBy: 'Nina' },
    { id: 19, product: 'HP Spectre x360', sku: 'PT019', category: 'Laptop', brand: 'HP', price: 1350.00, createdDate: '2023-09-09', unit: 'Pc', qty: 85, createdBy: 'Ethan' },
    { id: 20, product: 'Acer Predator Helios', sku: 'PT020', category: 'Laptop', brand: 'Acer', price: 1499.99, createdDate: '2023-09-14', unit: 'Pc', qty: 95, createdBy: 'Zoe' },
  ];

  const handleSelectAll = (e) => {
    setSelectedProducts(e.target.checked ? products.map(p => p.id) : []);
  };

  const handleSelectProduct = (e, productId) => {
    setSelectedProducts(e.target.checked ? [...selectedProducts, productId] : selectedProducts.filter(id => id !== productId));
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('Product List', 20, 10);
    products.forEach((p, i) => doc.text(`${i + 1}. ${p.product}, SKU: ${p.sku}, Price: $${p.price}`, 20, 20 + i * 10));
    doc.save('products.pdf');
  };

  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(products);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Products');
    XLSX.writeFile(wb, 'products.xlsx');
  };

  const handlePrint = () => {
    const printContent = document.getElementById("table-to-print").outerHTML;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`<html><head><title>Products</title><style>body{font-family:Arial,sans-serif}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px;text-align:left}th{background:#6366f1;color:white}</style></head><body onload="window.print()">${printContent}</body></html>`);
    newWindow.document.close();
  };

  const handleFilterChange = (e) => setFilters({ ...filters, [e.target.name]: e.target.value });
  const handlePriceSort = (e) => setSortOrder(e.target.value);
  const handleDateSort = (e) => setDateSortOrder(e.target.value);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const filteredProducts = products
    .filter(p => p.product.toLowerCase().includes(searchTerm.toLowerCase()) && (filters.category === '' || p.category === filters.category) && (filters.brand === '' || p.brand === filters.brand))
    .sort((a, b) => {
      if (sortOrder === 'Low to High') return a.price - b.price;
      if (sortOrder === 'High to Low') return b.price - a.price;
      if (dateSortOrder === 'Oldest First') return new Date(a.createdDate) - new Date(b.createdDate);
      if (dateSortOrder === 'Newest First') return new Date(b.createdDate) - new Date(a.createdDate);
      return 0;
    });

  const uniqueCategories = [...new Set(products.map(p => p.category))];
  const uniqueBrands = [...new Set(products.map(p => p.brand))];
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const totalValue = products.reduce((sum, p) => sum + p.price * p.qty, 0);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const fileType = file.name.split('.').pop();
    if (fileType === 'csv') {
      Papa.parse(file, { header: true, complete: (results) => setProducts(results.data) });
    } else if (fileType === 'xlsx') {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        setProducts(XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]));
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleDeleteProduct = (id) => {
    setDeleteModal(null);
    setOpenAction(null);
  };

  const handleSaveEdit = () => {
    setEditModal(null);
    setOpenAction(null);
  };

  return (
    <div className="font-inter text-sm">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg">
              <Package size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Products</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{products.length} products in inventory</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/Products/Create">
              <Button className="gap-1.5" size="sm"><Plus size={15} />Add Product</Button>
            </Link>
            <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setShowModal(true)}><Upload size={15} />Import</Button>
            <Button variant="destructive" size="sm" className="gap-1.5" onClick={exportPDF}><Download size={15} />PDF</Button>
            <Button variant="warning" size="sm" className="gap-1.5" onClick={exportExcel}><FileSpreadsheet size={15} />Excel</Button>
            <Button variant="secondary" size="sm" className="gap-1.5" onClick={handlePrint}><Printer size={15} />Print</Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0">
            <CardContent className="p-4">
              <p className="text-indigo-100 text-xs">Total Products</p>
              <p className="text-2xl font-bold">{products.length}</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0">
            <CardContent className="p-4">
              <p className="text-emerald-100 text-xs">Total Value</p>
              <p className="text-2xl font-bold">৳{(totalValue / 1000000).toFixed(1)}M</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0">
            <CardContent className="p-4">
              <p className="text-amber-100 text-xs">Categories</p>
              <p className="text-2xl font-bold">{uniqueCategories.length}</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="p-4">
              <p className="text-purple-100 text-xs">Brands</p>
              <p className="text-2xl font-bold">{uniqueBrands.length}</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-3 items-end">
              <div className="flex-1 min-w-[180px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Search</label>
                <div className="relative">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search products..." className="pl-9 h-9" />
                </div>
              </div>
              <div className="min-w-[140px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Category</label>
                <select name="category" value={filters.category} onChange={handleFilterChange} className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 dark:text-slate-300">
                  <option value="">All</option>
                  {uniqueCategories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="min-w-[120px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Brand</label>
                <select name="brand" value={filters.brand} onChange={handleFilterChange} className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 dark:text-slate-300">
                  <option value="">All</option>
                  {uniqueBrands.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div className="min-w-[130px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Price</label>
                <select onChange={handlePriceSort} className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 dark:text-slate-300">
                  <option value="">Default</option>
                  <option value="Low to High">Low → High</option>
                  <option value="High to Low">High → Low</option>
                </select>
              </div>
              <div className="min-w-[130px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Date</label>
                <select onChange={handleDateSort} className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 dark:text-slate-300">
                  <option value="">Default</option>
                  <option value="Newest First">Newest</option>
                  <option value="Oldest First">Oldest</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Table */}
        <Card>
          <div className="overflow-x-auto">
            <table id="table-to-print" className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <th className="px-3 py-3 text-left font-medium w-10">
                    <input type="checkbox" onChange={handleSelectAll} className="h-5 w-5 rounded-full accent-indigo-600 cursor-pointer" />
                  </th>
                  <th className="px-3 py-3 text-left font-medium">Product</th>
                  <th className="px-3 py-3 text-left font-medium">SKU</th>
                  <th className="px-3 py-3 text-left font-medium">Category</th>
                  <th className="px-3 py-3 text-left font-medium">Brand</th>
                  <th className="px-3 py-3 text-right font-medium">Price</th>
                  <th className="px-3 py-3 text-center font-medium">Qty</th>
                  <th className="px-3 py-3 text-left font-medium">Date</th>
                  <th className="px-3 py-3 text-center font-medium w-20">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct).map((p) => (
                  <tr key={p.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-3 py-3">
                      <input type="checkbox" checked={selectedProducts.includes(p.id)} onChange={(e) => handleSelectProduct(e, p.id)} className="h-5 w-5 rounded-full accent-indigo-600 cursor-pointer" />
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-3">
                        <Image src={productImages[p.product] || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=60&h=60&fit=crop'} alt={p.product} width={40} height={40} className="w-10 h-10 rounded-lg object-cover" />
                        <div>
                          <p className="font-medium text-slate-800 dark:text-white">{p.product}</p>
                          <p className="text-xs text-slate-400">by {p.createdBy}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3 font-mono text-xs text-indigo-600 dark:text-indigo-400">{p.sku}</td>
                    <td className="px-3 py-3"><Badge variant="outline" className="text-xs">{p.category}</Badge></td>
                    <td className="px-3 py-3 text-slate-600 dark:text-slate-300">{p.brand}</td>
                    <td className="px-3 py-3 text-right font-semibold text-slate-800 dark:text-white">${p.price.toFixed(2)}</td>
                    <td className="px-3 py-3 text-center">
                      <Badge variant={p.qty > 200 ? 'success' : p.qty > 100 ? 'info' : 'warning'} className="text-xs">{p.qty} {p.unit}</Badge>
                    </td>
                    <td className="px-3 py-3 text-slate-500 dark:text-slate-400 text-xs">{p.createdDate}</td>
                    <td className="px-3 py-3 text-center">
                      <div className="relative">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpenAction(openAction === p.id ? null : p.id)}>
                          <MoreVertical size={16} />
                        </Button>
                        {openAction === p.id && (
                          <div className="absolute right-0 top-full mt-1 w-36 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-20 py-1">
                            <button onClick={() => { setViewModal(p); setOpenAction(null); }} className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-slate-700 dark:text-slate-300"><Eye size={14} />View</button>
                            <button onClick={() => { setEditModal({ ...p }); setOpenAction(null); }} className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-blue-600"><Pencil size={14} />Edit</button>
                            <button onClick={() => { setDeleteModal(p); setOpenAction(null); }} className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-red-500"><Trash2 size={14} />Delete</button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Showing {indexOfFirstProduct + 1} to {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length}
          </p>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
              <ChevronLeft size={16} />
            </Button>
            {[...Array(totalPages).keys()].map(n => (
              <Button key={n + 1} variant={currentPage === n + 1 ? 'default' : 'outline'} size="sm" className="h-8 w-8 p-0" onClick={() => setCurrentPage(n + 1)}>
                {n + 1}
              </Button>
            ))}
            <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>

        {/* Import Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2"><Upload size={18} />Import Products</CardTitle>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setShowModal(false)}><X size={16} /></Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 text-center">
                  <Upload size={32} className="mx-auto text-slate-400 mb-3" />
                  <p className="text-sm text-slate-500 mb-2">Upload CSV or Excel file</p>
                  <input type="file" accept=".csv,.xlsx" onChange={handleFileUpload} className="text-sm" />
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline" onClick={() => setShowModal(false)}>Cancel</Button>
                  <Button>Submit</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* VIEW MODAL */}
        {viewModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md">
              <CardHeader><div className="flex items-center justify-between"><CardTitle>Product Details</CardTitle><Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setViewModal(null)}><X size={16} /></Button></div></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <img src={productImages[viewModal.product] || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop'} alt={viewModal.product} className="w-16 h-16 rounded-lg object-cover" />
                  <div><p className="font-semibold text-lg text-slate-800 dark:text-white">{viewModal.product}</p><p className="text-xs text-slate-500">SKU: {viewModal.sku}</p></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[['Category', viewModal.category], ['Brand', viewModal.brand], ['Price', `$${viewModal.price}`], ['Qty', `${viewModal.qty} ${viewModal.unit}`], ['Created', viewModal.createdDate], ['By', viewModal.createdBy]].map(([k,v]) => (
                    <div key={k} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3"><p className="text-xs text-slate-500">{k}</p><p className="font-semibold text-slate-800 dark:text-white">{v}</p></div>
                  ))}
                </div>
                <Button className="w-full" onClick={() => setViewModal(null)}>Close</Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* EDIT MODAL */}
        {editModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md">
              <CardHeader><div className="flex items-center justify-between"><CardTitle>Edit Product</CardTitle><Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setEditModal(null)}><X size={16} /></Button></div></CardHeader>
              <CardContent className="space-y-3">
                {[['product','Product Name'],['sku','SKU'],['category','Category'],['brand','Brand'],['price','Price'],['qty','Quantity']].map(([field, label]) => (
                  <div key={field}><label className="text-xs font-medium text-slate-500 mb-1 block">{label}</label><Input value={String(editModal[field])} onChange={e => setEditModal({ ...editModal, [field]: e.target.value })} /></div>
                ))}
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1" onClick={handleSaveEdit}>Save Changes</Button>
                  <Button variant="outline" className="flex-1" onClick={() => setEditModal(null)}>Cancel</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* DELETE MODAL */}
        {deleteModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-sm">
              <CardHeader><div className="flex items-center justify-between"><CardTitle className="text-red-500">Delete Product</CardTitle><Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setDeleteModal(null)}><X size={16} /></Button></div></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-300">Delete <strong>{deleteModal.product}</strong>? This cannot be undone.</p>
                <div className="flex gap-2">
                  <Button variant="destructive" className="flex-1" onClick={() => handleDeleteProduct(deleteModal.id)}>Yes, Delete</Button>
                  <Button variant="outline" className="flex-1" onClick={() => setDeleteModal(null)}>Cancel</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
