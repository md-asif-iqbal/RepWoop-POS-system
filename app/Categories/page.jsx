'use client';
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import { Pencil, Trash2, Plus, Download, FileSpreadsheet, Upload, X, Search, LayoutGrid, MoreVertical, ChevronLeft, ChevronRight, FolderOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

const categoryImages = {
  'Laptop': 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=50&h=50&fit=crop',
  'Electronics': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=50&h=50&fit=crop',
  'Shoe': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=50&h=50&fit=crop',
  'Speaker': 'https://images.unsplash.com/photo-1543512214-318228f5a78c?w=50&h=50&fit=crop',
  'Furniture': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=50&h=50&fit=crop',
  'Bags': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=50&h=50&fit=crop',
  'Phone': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=50&h=50&fit=crop',
  'Chairs': 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=50&h=50&fit=crop',
  'Headphones': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=50&h=50&fit=crop',
};

export default function CategoryList() {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, category: 'Laptop', categorySlug: 'laptop', createdOn: '2023-08-15', status: 'Active' },
    { id: 2, category: 'Electronics', categorySlug: 'electronics', createdOn: '2023-08-12', status: 'Inactive' },
    { id: 3, category: 'Shoe', categorySlug: 'shoe', createdOn: '2023-09-01', status: 'Active' },
    { id: 4, category: 'Electronics', categorySlug: 'electronics', createdOn: '2023-08-21', status: 'Inactive' },
    { id: 5, category: 'Speaker', categorySlug: 'speaker', createdOn: '2023-08-10', status: 'Active' },
    { id: 6, category: 'Furniture', categorySlug: 'furniture', createdOn: '2023-08-08', status: 'Inactive' },
    { id: 7, category: 'Bags', categorySlug: 'bags', createdOn: '2023-08-14', status: 'Active' },
    { id: 8, category: 'Phone', categorySlug: 'phone', createdOn: '2023-09-12', status: 'Inactive' },
    { id: 9, category: 'Chairs', categorySlug: 'chairs', createdOn: '2023-07-29', status: 'Active' },
    { id: 10, category: 'Bags', categorySlug: 'bags', createdOn: '2023-08-01', status: 'Inactive' },
    { id: 11, category: 'Laptop', categorySlug: 'laptop', createdOn: '2023-09-15', status: 'Active' },
    { id: 12, category: 'Phone', categorySlug: 'phone', createdOn: '2023-09-10', status: 'Inactive' },
    { id: 13, category: 'Phone', categorySlug: 'phone', createdOn: '2023-09-20', status: 'Active' },
    { id: 14, category: 'Phone', categorySlug: 'phone', createdOn: '2023-09-18', status: 'Inactive' },
    { id: 15, category: 'Laptop', categorySlug: 'laptop', createdOn: '2023-08-22', status: 'Active' },
    { id: 16, category: 'Headphones', categorySlug: 'headphones', createdOn: '2023-09-03', status: 'Inactive' },
    { id: 17, category: 'Headphones', categorySlug: 'headphones', createdOn: '2023-08-31', status: 'Active' },
    { id: 18, category: 'Laptop', categorySlug: 'laptop', createdOn: '2023-09-06', status: 'Inactive' },
    { id: 19, category: 'Laptop', categorySlug: 'laptop', createdOn: '2023-09-09', status: 'Active' },
    { id: 20, category: 'Laptop', categorySlug: 'laptop', createdOn: '2023-09-14', status: 'Inactive' }
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ category: '', status: '' });
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [openAction, setOpenAction] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const productsPerPage = 10;

  const handleDeleteCat = (id) => { setProducts(products.filter(p => p.id !== id)); setDeleteModal(null); };
  const handleSaveEdit = () => { setProducts(products.map(p => p.id === editModal.id ? editModal : p)); setEditModal(null); };

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

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('Category List', 20, 10);
    products.forEach((p, i) => doc.text(`${i + 1}. ${p.category}, Created: ${p.createdOn}, Status: ${p.status}`, 20, 20 + i * 10));
    doc.save('categories.pdf');
  };

  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(products);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Categories');
    XLSX.writeFile(wb, 'categories.xlsx');
  };

  const filteredProducts = products
    .filter(p => (filters.category === '' || p.category === filters.category) && (filters.status === '' || p.status === filters.status) && p.category.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => sortOrder === 'asc' ? new Date(a.createdOn) - new Date(b.createdOn) : new Date(b.createdOn) - new Date(a.createdOn));

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const uniqueCategories = [...new Set(products.map(p => p.category))];
  const activeCount = products.filter(p => p.status === 'Active').length;
  const inactiveCount = products.filter(p => p.status === 'Inactive').length;

  const handleSelectAll = (e) => setSelectedProducts(e.target.checked ? products.map(p => p.id) : []);
  const handleSelectProduct = (e, id) => setSelectedProducts(e.target.checked ? [...selectedProducts, id] : selectedProducts.filter(i => i !== id));

  return (
    <div className="font-inter text-sm">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg">
              <LayoutGrid size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Categories</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{uniqueCategories.length} unique categories</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/Categories/Create">
              <Button className="gap-1.5" size="sm"><Plus size={15} />Add Category</Button>
            </Link>
            <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setShowModal(true)}><Upload size={15} />Import</Button>
            <Button variant="destructive" size="sm" className="gap-1.5" onClick={exportPDF}><Download size={15} />PDF</Button>
            <Button variant="warning" size="sm" className="gap-1.5" onClick={exportExcel}><FileSpreadsheet size={15} />Excel</Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0">
            <CardContent className="p-4">
              <p className="text-indigo-100 text-xs">Total Entries</p>
              <p className="text-2xl font-bold">{products.length}</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0">
            <CardContent className="p-4">
              <p className="text-emerald-100 text-xs">Active</p>
              <p className="text-2xl font-bold">{activeCount}</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-rose-500 to-rose-600 text-white border-0">
            <CardContent className="p-4">
              <p className="text-rose-100 text-xs">Inactive</p>
              <p className="text-2xl font-bold">{inactiveCount}</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="p-4">
              <p className="text-purple-100 text-xs">Unique Categories</p>
              <p className="text-2xl font-bold">{uniqueCategories.length}</p>
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
                  <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search categories..." className="pl-9 h-9" />
                </div>
              </div>
              <div className="min-w-[140px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Category</label>
                <select onChange={(e) => setFilters({ ...filters, category: e.target.value })} className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 dark:text-slate-300">
                  <option value="">All</option>
                  {uniqueCategories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="min-w-[120px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Status</label>
                <select onChange={(e) => setFilters({ ...filters, status: e.target.value })} className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 dark:text-slate-300">
                  <option value="">All</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="min-w-[130px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Sort Date</label>
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 dark:text-slate-300">
                  <option value="asc">Oldest</option>
                  <option value="desc">Newest</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <th className="px-3 py-3 text-left font-medium w-10">
                    <input type="checkbox" onChange={handleSelectAll} className="h-5 w-5 rounded-full accent-indigo-600 cursor-pointer" />
                  </th>
                  <th className="px-3 py-3 text-left font-medium">Category</th>
                  <th className="px-3 py-3 text-left font-medium">Slug</th>
                  <th className="px-3 py-3 text-left font-medium">Created On</th>
                  <th className="px-3 py-3 text-center font-medium">Status</th>
                  <th className="px-3 py-3 text-center font-medium w-20">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentProducts.length > 0 ? currentProducts.map((item) => (
                  <tr key={item.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-3 py-3">
                      <input type="checkbox" checked={selectedProducts.includes(item.id)} onChange={(e) => handleSelectProduct(e, item.id)} className="h-5 w-5 rounded-full accent-indigo-600 cursor-pointer" />
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-3">
                        <Image src={categoryImages[item.category] || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=50&h=50&fit=crop'} alt={item.category} width={36} height={36} className="w-9 h-9 rounded-lg object-cover" />
                        <span className="font-medium text-slate-800 dark:text-white">{item.category}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 font-mono text-xs text-indigo-600 dark:text-indigo-400">{item.categorySlug}</td>
                    <td className="px-3 py-3 text-slate-500 dark:text-slate-400 text-xs">{item.createdOn}</td>
                    <td className="px-3 py-3 text-center">
                      <Badge variant={item.status === 'Active' ? 'success' : 'destructive'} className="text-xs">{item.status}</Badge>
                    </td>
                    <td className="px-3 py-3 text-center">
                      <div className="relative">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpenAction(openAction === item.id ? null : item.id)}>
                          <MoreVertical size={16} />
                        </Button>
                        {openAction === item.id && (
                          <div className="absolute right-0 top-full mt-1 w-32 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-20 py-1">
                            <button className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-blue-600" onClick={() => { setEditModal({...item}); setOpenAction(null); }}><Pencil size={14} />Edit</button>
                            <button className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-red-500" onClick={() => { setDeleteModal(item); setOpenAction(null); }}><Trash2 size={14} />Delete</button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-slate-400">
                      <FolderOpen size={40} className="mx-auto mb-2 opacity-50" />
                      <p>No categories found</p>
                    </td>
                  </tr>
                )}
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

        {/* Edit Modal */}
        {editModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setEditModal(null)}>
            <Card className="w-full max-w-md" onClick={e => e.stopPropagation()}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Edit Category</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setEditModal(null)}><X size={18}/></Button>
              </CardHeader>
              <CardContent className="space-y-3">
                <div><label className="text-xs font-medium text-slate-600 mb-1 block">Category Name</label><Input value={editModal.category} onChange={e => setEditModal({...editModal, category: e.target.value, categorySlug: e.target.value.toLowerCase().replace(/\s+/g, '-')})} /></div>
                <div><label className="text-xs font-medium text-slate-600 mb-1 block">Slug</label><Input value={editModal.categorySlug} onChange={e => setEditModal({...editModal, categorySlug: e.target.value})} /></div>
                <div><label className="text-xs font-medium text-slate-600 mb-1 block">Status</label>
                  <select className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm" value={editModal.status} onChange={e => setEditModal({...editModal, status: e.target.value})}>
                    <option>Active</option><option>Inactive</option>
                  </select>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button onClick={handleSaveEdit} className="flex-1">Save Changes</Button>
                  <Button variant="outline" onClick={() => setEditModal(null)} className="flex-1">Cancel</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Delete Modal */}
        {deleteModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setDeleteModal(null)}>
            <Card className="w-full max-w-sm" onClick={e => e.stopPropagation()}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg text-red-600">Delete Category</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setDeleteModal(null)}><X size={18}/></Button>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Delete category <strong>{deleteModal.category}</strong>? This cannot be undone.</p>
                <div className="flex gap-2">
                  <Button variant="destructive" onClick={() => handleDeleteCat(deleteModal.id)} className="flex-1">Delete</Button>
                  <Button variant="outline" onClick={() => setDeleteModal(null)} className="flex-1">Cancel</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Import Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2"><Upload size={18} />Import Categories</CardTitle>
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
      </div>
    </div>
  );
}
