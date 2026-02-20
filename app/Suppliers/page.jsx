"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Truck, Search, Plus, Printer, MoreVertical, Eye, Pencil, Trash2, CreditCard, ChevronLeft, ChevronRight, RotateCcw, X, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

export default function SupplierList() {
  const suppliersData = [
    { id: 1, name: 'Sifat', email: 'sifat@example.com', phone: '0170000000', address: 'Dhaka', payable: 0, paid: 0, purchaseDue: 0, totalDue: 0 },
    { id: 2, name: 'Parly', email: 'parly@example.com', phone: '0180000000', address: 'Chittagong', payable: 0, paid: 0, purchaseDue: 0, totalDue: 0 },
    { id: 3, name: 'Sim', email: 'sim@example.com', phone: '017778899', address: 'Sylhet', payable: 0, paid: 0, purchaseDue: 0, totalDue: 0 },
    { id: 4, name: 'Oraimo', email: 'oraimo@example.com', phone: '0196543886', address: 'Gazipur', payable: 42000, paid: 42000, purchaseDue: 0, totalDue: 0 },
    { id: 5, name: 'Riton', email: 'riton@example.com', phone: '017587644', address: 'Narayanganj', payable: 0, paid: 0, purchaseDue: 0, totalDue: 0 },
    { id: 6, name: 'Munir Ahamed', email: 'munir@example.com', phone: '0190000000', address: 'Dhaka', payable: 4777500, paid: 3053400, purchaseDue: 1742100, totalDue: 1742100 },
    { id: 7, name: 'Data Tech', email: 'info@datatech.com.bd', phone: '01444432222', address: 'Dhaka 1205', payable: 1525500, paid: 1525000, purchaseDue: 0, totalDue: 0 },
    { id: 8, name: 'Mohammed Ali', email: 'mohammed@example.com', phone: '0172345689', address: 'Demra', payable: 12000, paid: 12000, purchaseDue: 0, totalDue: 0 },
    { id: 9, name: 'Computer City', email: 'comp@example.com', phone: '0184654321', address: 'Chattogram', payable: 15000, paid: 15000, purchaseDue: 0, totalDue: 0 },
    { id: 10, name: 'Ajman Computer', email: 'ajman@example.com', phone: '0155864321', address: 'Multiplan, Dhaka', payable: 113500, paid: 113500, purchaseDue: 100000, totalDue: 100000 },
  ];

  const [filterName, setFilterName] = useState('');
  const [filterPhone, setFilterPhone] = useState('');
  const [filteredSuppliers, setFilteredSuppliers] = useState(suppliersData);
  const [currentPage, setCurrentPage] = useState(1);
  const [openAction, setOpenAction] = useState(null);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [viewModal, setViewModal] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const [paymentModal, setPaymentModal] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [suppliers, setSuppliers] = useState(suppliersData);
  const perPage = 10;

  const handleFilter = () => {
    const filtered = suppliersData.filter(s => s.name.toLowerCase().includes(filterName.toLowerCase()) && s.phone.includes(filterPhone));
    setFilteredSuppliers(filtered);
    setCurrentPage(1);
  };

  const resetFilter = () => { setFilterName(''); setFilterPhone(''); setFilteredSuppliers(suppliersData); };

  const handleDelete = (id) => {
    const updated = suppliersData.filter(s => s.id !== id);
    setFilteredSuppliers(updated);
    setDeleteModal(null);
    setOpenAction(null);
  };

  const handleSaveEdit = () => {
    setEditModal(null);
    setOpenAction(null);
  };

  const totalPayable = filteredSuppliers.reduce((s, p) => s + p.payable, 0);
  const totalPaid = filteredSuppliers.reduce((s, p) => s + p.paid, 0);
  const totalDue = filteredSuppliers.reduce((s, p) => s + p.totalDue, 0);
  const totalPages = Math.ceil(filteredSuppliers.length / perPage);
  const startIdx = (currentPage - 1) * perPage;
  const currentSuppliers = filteredSuppliers.slice(startIdx, startIdx + perPage);

  return (
    <div className="font-inter text-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg"><Truck size={24} /></div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Suppliers</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{filteredSuppliers.length} suppliers</p>
            </div>
          </div>
          <Link href="/Suppliers/Create"><Button className="gap-1.5" size="sm"><Plus size={15} />New Supplier</Button></Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0"><CardContent className="p-4"><p className="text-indigo-100 text-xs">Total Suppliers</p><p className="text-2xl font-bold">{filteredSuppliers.length}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0"><CardContent className="p-4"><p className="text-emerald-100 text-xs">Total Payable</p><p className="text-2xl font-bold">৳{(totalPayable / 1000000).toFixed(1)}M</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0"><CardContent className="p-4"><p className="text-blue-100 text-xs">Total Paid</p><p className="text-2xl font-bold">৳{(totalPaid / 1000000).toFixed(1)}M</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-rose-500 to-rose-600 text-white border-0"><CardContent className="p-4"><p className="text-rose-100 text-xs">Total Due</p><p className="text-2xl font-bold">৳{(totalDue / 1000000).toFixed(1)}M</p></CardContent></Card>
        </div>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-3 items-end">
              <div className="flex-1 min-w-[180px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Name</label>
                <div className="relative"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><Input value={filterName} onChange={(e) => setFilterName(e.target.value)} placeholder="Search name..." className="pl-9 h-9" /></div>
              </div>
              <div className="flex-1 min-w-[180px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Phone</label>
                <Input value={filterPhone} onChange={(e) => setFilterPhone(e.target.value)} placeholder="Phone..." className="h-9" />
              </div>
              <Button size="sm" onClick={handleFilter}>Filter</Button>
              <Button variant="outline" size="sm" className="gap-1.5" onClick={resetFilter}><RotateCcw size={14} />Reset</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <th className="px-3 py-3 text-left font-medium">SL</th>
                  <th className="px-3 py-3 text-left font-medium">Name</th>
                  <th className="px-3 py-3 text-left font-medium">Contact</th>
                  <th className="px-3 py-3 text-left font-medium">Address</th>
                  <th className="px-3 py-3 text-right font-medium">Payable</th>
                  <th className="px-3 py-3 text-right font-medium">Paid</th>
                  <th className="px-3 py-3 text-right font-medium">Due</th>
                  <th className="px-3 py-3 text-center font-medium w-20">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentSuppliers.map((s, i) => (
                  <tr key={s.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-3 py-3 text-slate-500">{startIdx + i + 1}</td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">{s.name.charAt(0)}</div>
                        <div><p className="font-medium text-slate-800 dark:text-white">{s.name}</p><p className="text-xs text-slate-400">{s.email}</p></div>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-slate-600 dark:text-slate-300 text-xs">{s.phone}</td>
                    <td className="px-3 py-3 text-slate-500 dark:text-slate-400 text-xs">{s.address}</td>
                    <td className="px-3 py-3 text-right font-semibold text-slate-800 dark:text-white">৳{s.payable.toLocaleString()}</td>
                    <td className="px-3 py-3 text-right text-emerald-600">৳{s.paid.toLocaleString()}</td>
                    <td className="px-3 py-3 text-right"><Badge variant={s.totalDue === 0 ? 'success' : 'destructive'} className="text-xs">৳{s.totalDue.toLocaleString()}</Badge></td>
                    <td className="px-3 py-3 text-center">
                      <div className="relative">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpenAction(openAction === s.id ? null : s.id)}><MoreVertical size={16} /></Button>
                        {openAction === s.id && (
                          <div className="absolute right-0 top-full mt-1 w-36 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-20 py-1">
                            <button onClick={() => { setViewModal(s); setOpenAction(null); }} className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-slate-700 dark:text-slate-300"><Eye size={14} />View</button>
                            <button onClick={() => { setEditModal({ ...s }); setOpenAction(null); }} className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-blue-600"><Pencil size={14} />Edit</button>
                            <button onClick={() => { setPaymentModal(s); setOpenAction(null); }} className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-emerald-600"><CreditCard size={14} />Payment</button>
                            <button onClick={() => { setDeleteModal(s); setOpenAction(null); }} className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-red-500"><Trash2 size={14} />Delete</button>
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

        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">Showing {startIdx + 1} to {Math.min(startIdx + perPage, filteredSuppliers.length)} of {filteredSuppliers.length}</p>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}><ChevronLeft size={16} /></Button>
            {[...Array(totalPages).keys()].map(n => <Button key={n + 1} variant={currentPage === n + 1 ? 'default' : 'outline'} size="sm" className="h-8 w-8 p-0" onClick={() => setCurrentPage(n + 1)}>{n + 1}</Button>)}
            <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}><ChevronRight size={16} /></Button>
          </div>
        </div>
      </div>

      {/* VIEW MODAL */}
      {viewModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader><div className="flex items-center justify-between"><CardTitle>Supplier Details</CardTitle><Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setViewModal(null)}><X size={16} /></Button></div></CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">{viewModal.name.charAt(0)}</div>
                <div><p className="font-semibold text-lg text-slate-800 dark:text-white">{viewModal.name}</p><p className="text-xs text-slate-500">{viewModal.email}</p></div>
              </div>
              <div className="flex items-center gap-2 text-sm"><Phone size={14} className="text-slate-400" />{viewModal.phone}</div>
              <div className="flex items-center gap-2 text-sm"><MapPin size={14} className="text-slate-400" />{viewModal.address}</div>
              <div className="grid grid-cols-2 gap-3 mt-3">
                {[['Payable', `৳${viewModal.payable.toLocaleString()}`], ['Paid', `৳${viewModal.paid.toLocaleString()}`], ['Purchase Due', `৳${viewModal.purchaseDue.toLocaleString()}`], ['Total Due', `৳${viewModal.totalDue.toLocaleString()}`]].map(([k,v]) => (
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
            <CardHeader><div className="flex items-center justify-between"><CardTitle>Edit Supplier</CardTitle><Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setEditModal(null)}><X size={16} /></Button></div></CardHeader>
            <CardContent className="space-y-3">
              {[['name','Name'],['email','Email'],['phone','Phone'],['address','Address']].map(([field, label]) => (
                <div key={field}><label className="text-xs font-medium text-slate-500 mb-1 block">{label}</label><Input value={editModal[field]} onChange={e => setEditModal({ ...editModal, [field]: e.target.value })} /></div>
              ))}
              <div className="flex gap-2 pt-2">
                <Button className="flex-1" onClick={handleSaveEdit}>Save Changes</Button>
                <Button variant="outline" className="flex-1" onClick={() => setEditModal(null)}>Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* PAYMENT MODAL */}
      {paymentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-sm">
            <CardHeader><div className="flex items-center justify-between"><CardTitle>Add Payment — {paymentModal.name}</CardTitle><Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setPaymentModal(null)}><X size={16} /></Button></div></CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 text-sm"><p><span className="text-slate-500">Total Due: </span><span className="font-semibold text-red-500">৳{paymentModal.totalDue.toLocaleString()}</span></p></div>
              <div><label className="text-xs font-medium text-slate-500 mb-1 block">Payment Amount (Tk)</label><Input type="number" placeholder="Enter amount..." value={paymentAmount} onChange={e => setPaymentAmount(e.target.value)} /></div>
              <div className="flex gap-2">
                <Button className="flex-1" onClick={() => { setPaymentModal(null); setPaymentAmount(''); }}><CreditCard size={14} className="mr-1" />Add Payment</Button>
                <Button variant="outline" className="flex-1" onClick={() => { setPaymentModal(null); setPaymentAmount(''); }}>Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* DELETE MODAL */}
      {deleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-sm">
            <CardHeader><div className="flex items-center justify-between"><CardTitle className="text-red-500">Delete Supplier</CardTitle><Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setDeleteModal(null)}><X size={16} /></Button></div></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-600 dark:text-slate-300">Delete supplier <strong>{deleteModal.name}</strong>? This cannot be undone.</p>
              <div className="flex gap-2">
                <Button variant="destructive" className="flex-1" onClick={() => handleDelete(deleteModal.id)}>Yes, Delete</Button>
                <Button variant="outline" className="flex-1" onClick={() => setDeleteModal(null)}>Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
