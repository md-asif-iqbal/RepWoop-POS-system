"use client"
import React, { useState } from 'react';
import { RotateCcw, Search, Plus, Pencil, Trash2, MoreVertical, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

const SalesReturnList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState('');
  const [openAction, setOpenAction] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);

  const initialReturns = [
    { id: 1, productName: 'Macbook Pro', date: '19 Nov 2022', customer: 'Thomas', status: 'Received', grandTotal: 550, paid: 120, due: 430, paymentStatus: 'Paid' },
    { id: 2, productName: 'Orange', date: '19 Nov 2022', customer: 'Benjamin', status: 'Pending', grandTotal: 550, paid: 120, due: 430, paymentStatus: 'Unpaid' },
    { id: 3, productName: 'Pineapple', date: '19 Nov 2022', customer: 'James', status: 'Pending', grandTotal: 210, paid: 120, due: 90, paymentStatus: 'Unpaid' },
    { id: 4, productName: 'Strawberry', date: '19 Nov 2022', customer: 'Bruklin', status: 'Received', grandTotal: 210, paid: 120, due: 90, paymentStatus: 'Paid' },
    { id: 5, productName: 'Macbook Pro', date: '19 Nov 2022', customer: 'Best Power Tools', status: 'Received', grandTotal: 210, paid: 120, due: 90, paymentStatus: 'Paid' },
    { id: 6, productName: 'Avocat', date: '19 Nov 2022', customer: 'Beverly', status: 'Pending', grandTotal: 210, paid: 120, due: 90, paymentStatus: 'Unpaid' },
    { id: 7, productName: 'Apple Earpods', date: '19 Nov 2022', customer: 'Apex Computers', status: 'Ordered', grandTotal: 1000, paid: 500, due: 500, paymentStatus: 'Partial' },
  ];
  const [salesReturns, setSalesReturns] = useState(initialReturns);

  const handleDelete = (id) => { setSalesReturns(salesReturns.filter(r => r.id !== id)); setDeleteModal(null); };
  const handleSaveEdit = () => { setSalesReturns(salesReturns.map(r => r.id === editModal.id ? editModal : r)); setEditModal(null); };

  const uniqueCustomers = [...new Set(salesReturns.map(i => i.customer))];
  const uniqueStatuses = [...new Set(salesReturns.map(i => i.status))];
  const totalReturns = salesReturns.reduce((s, r) => s + r.grandTotal, 0);
  const totalPaid = salesReturns.reduce((s, r) => s + r.paid, 0);
  const totalDue = salesReturns.reduce((s, r) => s + r.due, 0);

  const filteredSalesReturns = salesReturns.filter(r =>
    r.productName.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCustomer === '' || r.customer === selectedCustomer) &&
    (selectedStatus === '' || r.status === selectedStatus) &&
    (selectedPaymentStatus === '' || r.paymentStatus === selectedPaymentStatus)
  );

  return (
    <div className="font-inter text-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg"><RotateCcw size={24} /></div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Sales Returns</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{salesReturns.length} return records</p>
            </div>
          </div>
          <Button className="gap-1.5" size="sm" onClick={() => setIsOpen(true)}><Plus size={15} />Add Return</Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0"><CardContent className="p-4"><p className="text-indigo-100 text-xs">Total Returns</p><p className="text-2xl font-bold">{salesReturns.length}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0"><CardContent className="p-4"><p className="text-amber-100 text-xs">Grand Total</p><p className="text-2xl font-bold">${totalReturns.toLocaleString()}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0"><CardContent className="p-4"><p className="text-emerald-100 text-xs">Total Paid</p><p className="text-2xl font-bold">${totalPaid.toLocaleString()}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-rose-500 to-rose-600 text-white border-0"><CardContent className="p-4"><p className="text-rose-100 text-xs">Total Due</p><p className="text-2xl font-bold">${totalDue.toLocaleString()}</p></CardContent></Card>
        </div>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-3 items-end">
              <div className="flex-1 min-w-[160px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Search</label>
                <div className="relative"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search product..." className="pl-9 h-9" /></div>
              </div>
              <div className="min-w-[130px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Customer</label>
                <select value={selectedCustomer} onChange={(e) => setSelectedCustomer(e.target.value)} className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 dark:text-slate-300">
                  <option value="">All</option>
                  {uniqueCustomers.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="min-w-[120px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Status</label>
                <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 dark:text-slate-300">
                  <option value="">All</option>
                  {uniqueStatuses.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="min-w-[120px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Payment</label>
                <select value={selectedPaymentStatus} onChange={(e) => setSelectedPaymentStatus(e.target.value)} className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 dark:text-slate-300">
                  <option value="">All</option>
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                  <option value="Partial">Partial</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <th className="px-3 py-3 text-left font-medium">Product</th>
                  <th className="px-3 py-3 text-left font-medium">Date</th>
                  <th className="px-3 py-3 text-left font-medium">Customer</th>
                  <th className="px-3 py-3 text-center font-medium">Status</th>
                  <th className="px-3 py-3 text-right font-medium">Total</th>
                  <th className="px-3 py-3 text-right font-medium">Paid</th>
                  <th className="px-3 py-3 text-right font-medium">Due</th>
                  <th className="px-3 py-3 text-center font-medium">Payment</th>
                  <th className="px-3 py-3 text-center font-medium w-20">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredSalesReturns.map((r) => (
                  <tr key={r.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-3 py-3 font-medium text-slate-800 dark:text-white">{r.productName}</td>
                    <td className="px-3 py-3 text-slate-500 dark:text-slate-400 text-xs">{r.date}</td>
                    <td className="px-3 py-3 text-slate-600 dark:text-slate-300">{r.customer}</td>
                    <td className="px-3 py-3 text-center">
                      <Badge variant={r.status === 'Received' ? 'success' : r.status === 'Pending' ? 'warning' : 'info'} className="text-xs">{r.status}</Badge>
                    </td>
                    <td className="px-3 py-3 text-right font-semibold text-slate-800 dark:text-white">${r.grandTotal}</td>
                    <td className="px-3 py-3 text-right text-emerald-600">${r.paid}</td>
                    <td className="px-3 py-3 text-right text-rose-500">${r.due}</td>
                    <td className="px-3 py-3 text-center">
                      <Badge variant={r.paymentStatus === 'Paid' ? 'success' : r.paymentStatus === 'Unpaid' ? 'destructive' : 'warning'} className="text-xs">{r.paymentStatus}</Badge>
                    </td>
                    <td className="px-3 py-3 text-center">
                      <div className="relative">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpenAction(openAction === r.id ? null : r.id)}><MoreVertical size={16} /></Button>
                        {openAction === r.id && (
                          <div className="absolute right-0 top-full mt-1 w-32 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-20 py-1">
                            <button className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-blue-600" onClick={() => { setEditModal({...r}); setOpenAction(null); }}><Pencil size={14} />Edit</button>
                            <button className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-red-500" onClick={() => { setDeleteModal(r); setOpenAction(null); }}><Trash2 size={14} />Delete</button>
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

        {/* Add Return Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Add Sales Return</CardTitle>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}><X size={16} /></Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div><label className="block text-xs font-medium text-slate-500 mb-1">Customer</label><select className="w-full h-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm"><option>Choose Customer</option></select></div>
                  <div><label className="block text-xs font-medium text-slate-500 mb-1">Date</label><Input type="date" className="h-10" /></div>
                  <div><label className="block text-xs font-medium text-slate-500 mb-1">Reference No.</label><Input placeholder="REF-001" className="h-10" /></div>
                  <div><label className="block text-xs font-medium text-slate-500 mb-1">Product</label><Input placeholder="Type product code..." className="h-10" /></div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                  <Button>Submit</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Edit Modal */}
        {editModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setEditModal(null)}>
            <Card className="w-full max-w-md" onClick={e => e.stopPropagation()}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Edit Return</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setEditModal(null)}><X size={18}/></Button>
              </CardHeader>
              <CardContent className="space-y-3">
                <div><label className="text-xs font-medium text-slate-600 mb-1 block">Product Name</label><Input value={editModal.productName} onChange={e => setEditModal({...editModal, productName: e.target.value})} /></div>
                <div><label className="text-xs font-medium text-slate-600 mb-1 block">Customer</label><Input value={editModal.customer} onChange={e => setEditModal({...editModal, customer: e.target.value})} /></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="text-xs font-medium text-slate-600 mb-1 block">Status</label>
                    <select className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm" value={editModal.status} onChange={e => setEditModal({...editModal, status: e.target.value})}>
                      <option>Received</option><option>Pending</option><option>Ordered</option>
                    </select>
                  </div>
                  <div><label className="text-xs font-medium text-slate-600 mb-1 block">Payment</label>
                    <select className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm" value={editModal.paymentStatus} onChange={e => setEditModal({...editModal, paymentStatus: e.target.value})}>
                      <option>Paid</option><option>Unpaid</option><option>Partial</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="text-xs font-medium text-slate-600 mb-1 block">Paid ($)</label><Input type="number" value={editModal.paid} onChange={e => setEditModal({...editModal, paid: Number(e.target.value), due: editModal.grandTotal - Number(e.target.value)})} /></div>
                  <div><label className="text-xs font-medium text-slate-600 mb-1 block">Grand Total ($)</label><Input type="number" value={editModal.grandTotal} onChange={e => setEditModal({...editModal, grandTotal: Number(e.target.value)})} /></div>
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
                <CardTitle className="text-lg text-red-600">Delete Return</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setDeleteModal(null)}><X size={18}/></Button>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Delete return for <strong>{deleteModal.productName}</strong>? This action cannot be undone.</p>
                <div className="flex gap-2">
                  <Button variant="destructive" onClick={() => handleDelete(deleteModal.id)} className="flex-1">Delete</Button>
                  <Button variant="outline" onClick={() => setDeleteModal(null)} className="flex-1">Cancel</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesReturnList;
