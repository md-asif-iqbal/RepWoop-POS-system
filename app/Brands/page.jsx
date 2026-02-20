'use client';
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';
import { Search, RotateCcw, MoreVertical, Tag, Upload, FileDown, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

export default function Brands() {
  const [brands, setBrands] = useState([
    { id: 1, brand: 'Dell', createdOn: '2023-08-15', status: 'Active' },
    { id: 2, brand: 'Sony', createdOn: '2023-08-12', status: 'Inactive' },
    { id: 3, brand: 'Nike', createdOn: '2023-09-01', status: 'Active' },
    { id: 4, brand: 'Samsung', createdOn: '2023-08-21', status: 'Active' },
    { id: 5, brand: 'Apple', createdOn: '2023-09-12', status: 'Active' },
    { id: 6, brand: 'HP', createdOn: '2023-09-15', status: 'Active' },
    { id: 7, brand: 'Lenovo', createdOn: '2023-09-06', status: 'Inactive' },
    { id: 8, brand: 'Asus', createdOn: '2023-08-22', status: 'Active' },
    { id: 9, brand: 'Google', createdOn: '2023-09-10', status: 'Active' },
    { id: 10, brand: 'Microsoft', createdOn: '2023-09-14', status: 'Active' },
    { id: 11, brand: 'OnePlus', createdOn: '2023-09-20', status: 'Active' },
    { id: 12, brand: 'Xiaomi', createdOn: '2023-09-18', status: 'Inactive' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenu, setOpenMenu] = useState(null);
  const [showImport, setShowImport] = useState(false);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const perPage = 10;

  const handleDelete = (id) => {
    setBrands(brands.filter(b => b.id !== id));
    setDeleteModal(null);
  };

  const handleSaveEdit = () => {
    setBrands(brands.map(b => b.id === editModal.id ? editModal : b));
    setEditModal(null);
  };

  const filtered = brands.filter(b =>
    b.brand.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!statusFilter || b.status === statusFilter)
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const current = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);
  const activeBrands = brands.filter(b => b.status === 'Active').length;

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('Brands List', 20, 10);
    brands.forEach((b, i) => doc.text(`${i + 1}. ${b.brand} - ${b.status}`, 20, 20 + i * 10));
    doc.save('Brands.pdf');
  };

  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(brands);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Brands');
    XLSX.writeFile(wb, 'brands.xlsx');
  };

  return (
    <div className="font-inter text-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl text-white shadow-lg"><Tag size={24} /></div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Brands</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{brands.length} brands registered</p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Link href="/Brands/Create"><Button size="sm" className="gap-1.5">+ Add Brand</Button></Link>
            <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setShowImport(true)}><Upload size={14} />Import</Button>
            <Button variant="outline" size="sm" className="gap-1.5" onClick={exportPDF}><FileDown size={14} />PDF</Button>
            <Button variant="outline" size="sm" className="gap-1.5" onClick={exportExcel}><FileDown size={14} />Excel</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0"><CardContent className="p-4"><p className="text-indigo-100 text-xs">Total Brands</p><p className="text-2xl font-bold">{brands.length}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0"><CardContent className="p-4"><p className="text-emerald-100 text-xs">Active</p><p className="text-2xl font-bold">{activeBrands}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-rose-500 to-rose-600 text-white border-0"><CardContent className="p-4"><p className="text-rose-100 text-xs">Inactive</p><p className="text-2xl font-bold">{brands.length - activeBrands}</p></CardContent></Card>
        </div>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-3 items-end">
              <div className="flex-1">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Search Brand</label>
                <div className="relative"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><Input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search..." className="pl-9 h-9" /></div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Status</label>
                <select className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-3 text-sm bg-white dark:bg-slate-900" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                  <option value="">All</option><option value="Active">Active</option><option value="Inactive">Inactive</option>
                </select>
              </div>
              <Button variant="outline" size="sm" className="gap-1.5" onClick={() => { setSearchTerm(''); setStatusFilter(''); setCurrentPage(1); }}><RotateCcw size={14} />Reset</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <th className="px-3 py-3 text-left font-medium w-12">#</th>
                  <th className="px-3 py-3 text-left font-medium">Brand Name</th>
                  <th className="px-3 py-3 text-left font-medium">Created On</th>
                  <th className="px-3 py-3 text-center font-medium">Status</th>
                  <th className="px-3 py-3 text-center font-medium w-16">Action</th>
                </tr>
              </thead>
              <tbody>
                {current.map((b, i) => (
                  <tr key={b.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-3 py-3 text-slate-500">{(currentPage - 1) * perPage + i + 1}</td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 text-xs font-bold">{b.brand.charAt(0)}</div>
                        <span className="font-medium text-slate-800 dark:text-white">{b.brand}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-slate-500 dark:text-slate-400 text-xs">{b.createdOn}</td>
                    <td className="px-3 py-3 text-center"><Badge variant={b.status === 'Active' ? 'success' : 'destructive'} className="text-xs">{b.status}</Badge></td>
                    <td className="px-3 py-3 text-center relative">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpenMenu(openMenu === b.id ? null : b.id)}><MoreVertical size={16} /></Button>
                      {openMenu === b.id && (
                        <div className="absolute right-4 top-10 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 py-1 z-20 w-28">
                          <button onClick={() => { setEditModal({ ...b }); setOpenMenu(null); }} className="w-full text-left px-3 py-1.5 hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">Edit</button>
                          <button onClick={() => { setDeleteModal(b); setOpenMenu(null); }} className="w-full text-left px-3 py-1.5 hover:bg-red-50 dark:hover:bg-slate-800 text-red-500 text-xs">Delete</button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {totalPages > 1 && (
            <div className="flex items-center justify-between p-4 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs text-slate-500">Showing {(currentPage - 1) * perPage + 1}-{Math.min(currentPage * perPage, filtered.length)} of {filtered.length}</p>
              <div className="flex gap-1">
                <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}><ChevronLeft size={16} /></Button>
                {Array.from({ length: totalPages }, (_, i) => <Button key={i} variant={currentPage === i + 1 ? 'default' : 'outline'} size="icon" className="h-8 w-8 text-xs" onClick={() => setCurrentPage(i + 1)}>{i + 1}</Button>)}
                <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}><ChevronRight size={16} /></Button>
              </div>
            </div>
          )}
        </Card>

        {showImport && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <Card className="w-full max-w-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Import Brands</h3>
                <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg p-6 text-center mb-4">
                  <Upload size={32} className="mx-auto text-slate-400 mb-2" />
                  <p className="text-sm text-slate-500">Drag & drop CSV/XLSX file here</p>
                  <input type="file" accept=".csv,.xlsx" className="mt-3 text-sm" />
                </div>
                <div className="flex justify-end gap-2">
                  <Button>Submit</Button>
                  <Button variant="outline" onClick={() => setShowImport(false)}>Close</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* EDIT MODAL */}
        {editModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-sm">
              <CardHeader><div className="flex items-center justify-between"><CardTitle>Edit Brand</CardTitle><Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setEditModal(null)}><X size={16} /></Button></div></CardHeader>
              <CardContent className="space-y-3">
                <div><label className="text-xs font-medium text-slate-500 mb-1 block">Brand Name</label><Input value={editModal.brand} onChange={e => setEditModal({ ...editModal, brand: e.target.value })} /></div>
                <div><label className="text-xs font-medium text-slate-500 mb-1 block">Status</label>
                  <select value={editModal.status} onChange={e => setEditModal({ ...editModal, status: e.target.value })} className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="Active">Active</option><option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1" onClick={handleSaveEdit}>Save</Button>
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
              <CardHeader><div className="flex items-center justify-between"><CardTitle className="text-red-500">Delete Brand</CardTitle><Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setDeleteModal(null)}><X size={16} /></Button></div></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-300">Delete brand <strong>{deleteModal.brand}</strong>? This cannot be undone.</p>
                <div className="flex gap-2">
                  <Button variant="destructive" className="flex-1" onClick={() => handleDelete(deleteModal.id)}>Yes, Delete</Button>
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
