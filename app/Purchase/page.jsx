"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { ShoppingCart, Eye, Pencil, Trash2, Plus, Search, MoreVertical, CreditCard, FileText, ChevronLeft, ChevronRight, RotateCcw, Filter, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

export default function Purchase() {
  const [openAction, setOpenAction] = useState(null);
  const [viewModal, setViewModal] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const [paymentModal, setPaymentModal] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [filter, setFilter] = useState({ billNumber: '', startDate: '', endDate: '', product: '', supplier: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  const purchasesData = [
    { billNo: 1, supplier: 'Ayman Computer', purchaseDate: '22 Sep, 2024', items: 'Laptop Computer', payable: 1000000, paid: 0, due: 1000000 },
    { billNo: 2, supplier: 'Computer City', purchaseDate: '22 Sep, 2024', items: 'Tenda F3 Router', payable: 15000, paid: 15000, due: 0 },
    { billNo: 3, supplier: 'Ayman Computer', purchaseDate: '22 Sep, 2024', items: 'Tenda F3 Router', payable: 13000, paid: 12000, due: 1000 },
    { billNo: 4, supplier: 'Afko Khan', purchaseDate: '22 Sep, 2024', items: 'Tenda F3 Router', payable: 500, paid: 500, due: 0 },
    { billNo: 5, supplier: 'Riptith Hasan', purchaseDate: '22 Sep, 2024', items: 'T-shirt Polo', payable: 40000, paid: 40000, due: 0 },
    { billNo: 6, supplier: 'Default Supplier', purchaseDate: '19 Sep, 2024', items: 'Gaming Laptop', payable: 1450000, paid: 1450000, due: 0 },
    { billNo: 7, supplier: 'Default Supplier', purchaseDate: '19 Sep, 2024', items: 'Dell Machine', payable: 2750000, paid: 2750000, due: 0 },
    { billNo: 8, supplier: 'Default Supplier', purchaseDate: '19 Sep, 2024', items: 'Bijar For Men', payable: 250000, paid: 250000, due: 0 },
    { billNo: 9, supplier: 'Default Supplier', purchaseDate: '19 Sep, 2024', items: 'Door Expert', payable: 1395400, paid: 1394500, due: 900 },
    { billNo: 10, supplier: 'Default Supplier', purchaseDate: '19 Sep, 2024', items: 'Air Conditioner', payable: 9135000, paid: 9135000, due: 0 },
    { billNo: 11, supplier: 'Default Supplier', purchaseDate: '19 Sep, 2024', items: 'Frieze', payable: 420000, paid: 420000, due: 0 },
    { billNo: 12, supplier: 'Default Supplier', purchaseDate: '19 Sep, 2024', items: 'Ladies Shirt', payable: 70000, paid: 70000, due: 0 },
    { billNo: 13, supplier: 'Default Supplier', purchaseDate: '19 Sep, 2024', items: 'T-shirt', payable: 120000, paid: 120000, due: 0 },
    { billNo: 14, supplier: 'Default Supplier', purchaseDate: '19 Sep, 2024', items: 'Desktop Computer', payable: 375000, paid: 37500, due: 337500 },
    { billNo: 15, supplier: 'Default Supplier', purchaseDate: '19 Sep, 2024', items: 'Laptop Computer', payable: 7200000, paid: 7200000, due: 0 },
    { billNo: 16, supplier: 'Default Supplier', purchaseDate: '19 Sep, 2024', items: 'Mobile Phone', payable: 415000, paid: 415000, due: 0 },
  ];

  const [purchases, setPurchases] = useState(purchasesData);

  const handleFilterChange = (e) => setFilter({ ...filter, [e.target.name]: e.target.value });

  const resetFilters = () => {
    setFilter({ billNumber: '', startDate: '', endDate: '', product: '', supplier: '' });
    setPurchases(purchasesData);
  };

  const applyFilters = () => {
    let filtered = purchasesData;
    if (filter.billNumber) filtered = filtered.filter(p => p.billNo.toString().includes(filter.billNumber));
    if (filter.product) filtered = filtered.filter(p => p.items.toLowerCase().includes(filter.product.toLowerCase()));
    if (filter.supplier) filtered = filtered.filter(p => p.supplier.toLowerCase().includes(filter.supplier.toLowerCase()));
    setPurchases(filtered);
    setCurrentPage(1);
  };

  const totalPayable = purchases.reduce((s, p) => s + p.payable, 0);
  const totalPaid = purchases.reduce((s, p) => s + p.paid, 0);
  const totalDue = purchases.reduce((s, p) => s + p.due, 0);
  const totalPages = Math.ceil(purchases.length / perPage);
  const startIdx = (currentPage - 1) * perPage;
  const currentPurchases = purchases.slice(startIdx, startIdx + perPage);

  const handleDelete = (billNo) => { setPurchases(purchases.filter(p => p.billNo !== billNo)); setDeleteModal(null); };
  const handleSaveEdit = () => { setPurchases(purchases.map(p => p.billNo === editModal.billNo ? editModal : p)); setEditModal(null); };
  const handleAddPayment = () => {
    const amt = Number(paymentAmount);
    if (!amt) return;
    setPurchases(purchases.map(p => p.billNo === paymentModal.billNo ? {...p, paid: p.paid + amt, due: Math.max(0, p.due - amt)} : p));
    setPaymentModal(null); setPaymentAmount('');
  };

  return (
    <div className="font-inter text-sm">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg">
              <ShoppingCart size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Purchase</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{purchases.length} purchase records</p>
            </div>
          </div>
          <Link href="/Purchase/Create"><Button className="gap-1.5" size="sm"><Plus size={15} />Add Purchase</Button></Link>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0">
            <CardContent className="p-4"><p className="text-indigo-100 text-xs">Total Purchases</p><p className="text-2xl font-bold">{purchases.length}</p></CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0">
            <CardContent className="p-4"><p className="text-emerald-100 text-xs">Total Payable</p><p className="text-2xl font-bold">৳{(totalPayable / 1000000).toFixed(1)}M</p></CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
            <CardContent className="p-4"><p className="text-blue-100 text-xs">Total Paid</p><p className="text-2xl font-bold">৳{(totalPaid / 1000000).toFixed(1)}M</p></CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-rose-500 to-rose-600 text-white border-0">
            <CardContent className="p-4"><p className="text-rose-100 text-xs">Total Due</p><p className="text-2xl font-bold">৳{(totalDue / 1000).toFixed(0)}K</p></CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-3 items-end">
              <div className="flex-1 min-w-[120px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Bill No</label>
                <Input name="billNumber" value={filter.billNumber} onChange={handleFilterChange} placeholder="Bill #" className="h-9" />
              </div>
              <div className="flex-1 min-w-[140px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Product</label>
                <div className="relative">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input name="product" value={filter.product} onChange={handleFilterChange} placeholder="Search product..." className="pl-9 h-9" />
                </div>
              </div>
              <div className="flex-1 min-w-[140px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Supplier</label>
                <Input name="supplier" value={filter.supplier} onChange={handleFilterChange} placeholder="Supplier name..." className="h-9" />
              </div>
              <Button size="sm" className="gap-1.5" onClick={applyFilters}><Filter size={14} />Filter</Button>
              <Button variant="outline" size="sm" className="gap-1.5" onClick={resetFilters}><RotateCcw size={14} />Reset</Button>
            </div>
          </CardContent>
        </Card>

        {/* Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <th className="px-3 py-3 text-left font-medium">Bill #</th>
                  <th className="px-3 py-3 text-left font-medium">Supplier</th>
                  <th className="px-3 py-3 text-left font-medium">Date</th>
                  <th className="px-3 py-3 text-left font-medium">Items</th>
                  <th className="px-3 py-3 text-right font-medium">Payable</th>
                  <th className="px-3 py-3 text-right font-medium">Paid</th>
                  <th className="px-3 py-3 text-right font-medium">Due</th>
                  <th className="px-3 py-3 text-center font-medium w-20">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentPurchases.map((p) => (
                  <tr key={p.billNo} className="border-b border-slate-100 dark:border-slate-800 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-3 py-3 font-mono text-xs text-indigo-600 dark:text-indigo-400">#{p.billNo}</td>
                    <td className="px-3 py-3 font-medium text-slate-800 dark:text-white">{p.supplier}</td>
                    <td className="px-3 py-3 text-slate-500 dark:text-slate-400 text-xs">{p.purchaseDate}</td>
                    <td className="px-3 py-3 text-slate-600 dark:text-slate-300">{p.items}</td>
                    <td className="px-3 py-3 text-right font-semibold text-slate-800 dark:text-white">৳{p.payable.toLocaleString()}</td>
                    <td className="px-3 py-3 text-right text-emerald-600 dark:text-emerald-400">৳{p.paid.toLocaleString()}</td>
                    <td className="px-3 py-3 text-right">
                      <Badge variant={p.due === 0 ? 'success' : 'destructive'} className="text-xs">৳{p.due.toLocaleString()}</Badge>
                    </td>
                    <td className="px-3 py-3 text-center">
                      <div className="relative">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpenAction(openAction === p.billNo ? null : p.billNo)}>
                          <MoreVertical size={16} />
                        </Button>
                        {openAction === p.billNo && (
                          <div className="absolute right-0 top-full mt-1 w-36 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-20 py-1">
                            <button className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-slate-700 dark:text-slate-300" onClick={() => { window.print(); setOpenAction(null); }}><FileText size={14} />Invoice</button>
                            <button className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-slate-700 dark:text-slate-300" onClick={() => { setViewModal(p); setOpenAction(null); }}><Eye size={14} />View</button>
                            <button className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-blue-600" onClick={() => { setEditModal({...p}); setOpenAction(null); }}><Pencil size={14} />Edit</button>
                            <button className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-emerald-600" onClick={() => { setPaymentModal(p); setPaymentAmount(''); setOpenAction(null); }}><CreditCard size={14} />Payment</button>
                            <button className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-red-500" onClick={() => { setDeleteModal(p); setOpenAction(null); }}><Trash2 size={14} />Delete</button>
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
          <p className="text-sm text-slate-500 dark:text-slate-400">Showing {startIdx + 1} to {Math.min(startIdx + perPage, purchases.length)} of {purchases.length}</p>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}><ChevronLeft size={16} /></Button>
            {[...Array(totalPages).keys()].map(n => (
              <Button key={n + 1} variant={currentPage === n + 1 ? 'default' : 'outline'} size="sm" className="h-8 w-8 p-0" onClick={() => setCurrentPage(n + 1)}>{n + 1}</Button>
            ))}
            <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}><ChevronRight size={16} /></Button>
          </div>
        </div>
      </div>

      {/* View Modal */}
      {viewModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setViewModal(null)}>
          <Card className="w-full max-w-md" onClick={e => e.stopPropagation()}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Purchase #{viewModal.billNo}</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setViewModal(null)}><X size={18}/></Button>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div><span className="text-slate-500 text-xs">Supplier</span><p className="font-medium">{viewModal.supplier}</p></div>
                <div><span className="text-slate-500 text-xs">Date</span><p className="font-medium">{viewModal.purchaseDate}</p></div>
                <div><span className="text-slate-500 text-xs">Items</span><p className="font-medium">{viewModal.items}</p></div>
                <div><span className="text-slate-500 text-xs">Status</span><p>{viewModal.due === 0 ? <Badge variant="success">Paid</Badge> : <Badge variant="destructive">Due</Badge>}</p></div>
                <div><span className="text-slate-500 text-xs">Payable</span><p className="font-semibold text-slate-800">৳{viewModal.payable.toLocaleString()}</p></div>
                <div><span className="text-slate-500 text-xs">Paid</span><p className="font-semibold text-emerald-600">৳{viewModal.paid.toLocaleString()}</p></div>
                <div><span className="text-slate-500 text-xs">Due</span><p className="font-semibold text-rose-500">৳{viewModal.due.toLocaleString()}</p></div>
              </div>
              <Button variant="outline" onClick={() => setViewModal(null)} className="w-full mt-2">Close</Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Edit Modal */}
      {editModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setEditModal(null)}>
          <Card className="w-full max-w-md" onClick={e => e.stopPropagation()}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Edit Purchase #{editModal.billNo}</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setEditModal(null)}><X size={18}/></Button>
            </CardHeader>
            <CardContent className="space-y-3">
              <div><label className="text-xs font-medium text-slate-600 mb-1 block">Supplier</label><Input value={editModal.supplier} onChange={e => setEditModal({...editModal, supplier: e.target.value})} /></div>
              <div><label className="text-xs font-medium text-slate-600 mb-1 block">Items</label><Input value={editModal.items} onChange={e => setEditModal({...editModal, items: e.target.value})} /></div>
              <div><label className="text-xs font-medium text-slate-600 mb-1 block">Payable (৳)</label><Input type="number" value={editModal.payable} onChange={e => setEditModal({...editModal, payable: Number(e.target.value)})} /></div>
              <div><label className="text-xs font-medium text-slate-600 mb-1 block">Paid (৳)</label><Input type="number" value={editModal.paid} onChange={e => setEditModal({...editModal, paid: Number(e.target.value), due: editModal.payable - Number(e.target.value)})} /></div>
              <div className="flex gap-2 pt-2">
                <Button onClick={handleSaveEdit} className="flex-1">Save Changes</Button>
                <Button variant="outline" onClick={() => setEditModal(null)} className="flex-1">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Payment Modal */}
      {paymentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setPaymentModal(null)}>
          <Card className="w-full max-w-sm" onClick={e => e.stopPropagation()}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Add Payment</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setPaymentModal(null)}><X size={18}/></Button>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-600">Due: <strong className="text-rose-500">৳{paymentModal.due.toLocaleString()}</strong></p>
              <div><label className="text-xs font-medium text-slate-600 mb-1 block">Amount (৳)</label><Input type="number" placeholder="Enter amount" value={paymentAmount} onChange={e => setPaymentAmount(e.target.value)} /></div>
              <div className="flex gap-2">
                <Button onClick={handleAddPayment} className="flex-1">Add Payment</Button>
                <Button variant="outline" onClick={() => setPaymentModal(null)} className="flex-1">Cancel</Button>
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
              <CardTitle className="text-lg text-red-600">Delete Purchase</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setDeleteModal(null)}><X size={18}/></Button>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Delete purchase <strong>#{deleteModal.billNo}</strong> from <strong>{deleteModal.supplier}</strong>? This cannot be undone.</p>
              <div className="flex gap-2">
                <Button variant="destructive" onClick={() => handleDelete(deleteModal.billNo)} className="flex-1">Delete</Button>
                <Button variant="outline" onClick={() => setDeleteModal(null)} className="flex-1">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
