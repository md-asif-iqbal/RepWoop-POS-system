"use client"

import React, { useState } from 'react'
import { MoreVertical, Filter, RotateCcw, TrendingUp, Wallet, BarChart3, DollarSign, Search, Printer, FileEdit, Eye, RotateCcwSquare, CreditCard, Trash2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

const seedData = [
        { invoiceNo: 1, customer: "শাহিনুর", items: "Ura Code 00000017 1 KG 10 gm", date: "18 Sep, 2024", discount: "0.0%", receivable: "3000 Tk", paid: "0.00 Tk", due: "3000 Tk", purchaseCost: "2800 Tk", profit: "200 Tk", status: "UNPAID" },
        { invoiceNo: 2, customer: "শাহিনুর", items: "Air Condition Code 00000017 1 pc", date: "18 Sep, 2024", discount: "0.0%", receivable: "96000 Tk", paid: "0.00 Tk", due: "96000 Tk", purchaseCost: "91500 Tk", profit: "4500 Tk", status: "UNPAID" },
        { invoiceNo: 3, customer: "শাহিনুর", items: "Gorda, Gaming Laptop, Emisor SML", date: "18 Sep, 2024", discount: "10%", receivable: "68500 Tk", paid: "0.00 Tk", due: "20355 Tk", purchaseCost: "24068 Tk", profit: "1167 Tk", status: "UNPAID" },
        { invoiceNo: 4, customer: "শাহিনুর", items: "Ura Code 00000017 1 KG 10 gm", date: "18 Sep, 2024", discount: "0.0%", receivable: "1500 Tk", paid: "1500 Tk", due: "0.00 Tk", purchaseCost: "1400 Tk", profit: "100 Tk", status: "PAID" },
        { invoiceNo: 5, customer: "Gazi Md Kawser", items: "Emisor SML Code 00000116 1 pc", date: "18 Sep, 2024", discount: "0.0%", receivable: "600 Tk", paid: "600 Tk", due: "0.00 Tk", purchaseCost: "560 Tk", profit: "40 Tk", status: "PAID" },
        { invoiceNo: 6, customer: "Gazi Md Kawser", items: "Emisor SML Code 00000116 2 pcs", date: "18 Sep, 2024", discount: "0.0%", receivable: "3600 Tk", paid: "0.00 Tk", due: "3600 Tk", purchaseCost: "2840 Tk", profit: "760 Tk", status: "UNPAID" },
        { invoiceNo: 7, customer: "Walkin Customer", items: "Desktop Computer, Bliger Fan", date: "18 Sep, 2024", discount: "0.0%", receivable: "6458 Tk", paid: "6458 Tk", due: "0.00 Tk", purchaseCost: "5625 Tk", profit: "833 Tk", status: "PAID" },
        { invoiceNo: 8, customer: "Sakib Raiby", items: "Air Condition Code 00000017 1 pc", date: "16 Sep, 2024", discount: "0.0%", receivable: "96000 Tk", paid: "0.00 Tk", due: "96000 Tk", purchaseCost: "91500 Tk", profit: "4500 Tk", status: "UNPAID" },
        { invoiceNo: 9, customer: "Walkin Customer", items: "Gorda Code 00000113 1 KG", date: "16 Sep, 2024", discount: "0.0%", receivable: "3800 Tk", paid: "0.00 Tk", due: "3800 Tk", purchaseCost: "3600 Tk", profit: "200 Tk", status: "UNPAID" },
  { invoiceNo: 10, customer: "Sakib Raiby", items: "Air Condition Code 00000017 1 pc", date: "16 Sep, 2024", discount: "0.0%", receivable: "96000 Tk", paid: "96000 Tk", due: "0.00 Tk", purchaseCost: "91500 Tk", profit: "4500 Tk", status: "PAID" },
];

export default function Sales() {
  const [salesData, setSalesData] = useState(seedData);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [billNumber, setBillNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Modals
  const [viewModal, setViewModal] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const [paymentModal, setPaymentModal] = useState(null);
  const [returnModal, setReturnModal] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState('');

  const [filteredData, setFilteredData] = useState(seedData);
  const uniqueCustomers = [...new Set(seedData.map((item) => item.customer))];  const handleFilter = () => {
    let filtered = salesData;
    if (billNumber) filtered = filtered.filter((item) => item.invoiceNo.toString().includes(billNumber));
    if (startDate) filtered = filtered.filter((item) => new Date(item.date) >= new Date(startDate));
    if (endDate) filtered = filtered.filter((item) => new Date(item.date) <= new Date(endDate));
    if (selectedCustomer) filtered = filtered.filter((item) => item.customer === selectedCustomer);
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setBillNumber(''); setStartDate(''); setEndDate(''); setSelectedCustomer('');
    setFilteredData(salesData);
    setCurrentPage(1);
  };

  const handleDelete = (invoiceNo) => {
    const updated = salesData.filter(s => s.invoiceNo !== invoiceNo);
    setSalesData(updated);
    setFilteredData(updated);
    setDeleteModal(null);
    setSelectedInvoice(null);
  };

  const handleSaveEdit = () => {
    const updated = salesData.map(s => s.invoiceNo === editModal.invoiceNo ? editModal : s);
    setSalesData(updated);
    setFilteredData(updated);
    setEditModal(null);
  };

  const handleAddPayment = () => {
    const amount = parseFloat(paymentAmount) || 0;
    const updated = salesData.map(s => {
      if (s.invoiceNo !== paymentModal.invoiceNo) return s;
      const prevPaid = parseFloat(s.paid) || 0;
      const newPaid = prevPaid + amount;
      const receivable = parseFloat(s.receivable) || 0;
      const newDue = Math.max(0, receivable - newPaid);
      return { ...s, paid: `${newPaid.toFixed(2)} Tk`, due: `${newDue.toFixed(2)} Tk`, status: newDue === 0 ? 'PAID' : 'UNPAID' };
    });
    setSalesData(updated);
    setFilteredData(updated);
    setPaymentModal(null);
    setPaymentAmount('');
  };

  const handleReturn = (invoiceNo) => {
    const updated = salesData.map(s => s.invoiceNo === invoiceNo ? { ...s, status: 'RETURNED' } : s);
    setSalesData(updated);
    setFilteredData(updated);
    setReturnModal(null);
    setSelectedInvoice(null);
  };

  const handlePrintInvoice = (sale) => {
    const w = window.open('', '_blank');
    w.document.write(`<html><head><title>Invoice #${sale.invoiceNo}</title><style>body{font-family:Arial,sans-serif;padding:20px}h2{color:#4f46e5}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px;text-align:left}th{background:#6366f1;color:white}</style></head><body onload="window.print()"><h2>Invoice #${sale.invoiceNo}</h2><p><b>Customer:</b> ${sale.customer}</p><p><b>Date:</b> ${sale.date}</p><p><b>Items:</b> ${sale.items}</p><table><tr><th>Receivable</th><th>Paid</th><th>Due</th><th>Profit</th><th>Status</th></tr><tr><td>${sale.receivable}</td><td>${sale.paid}</td><td>${sale.due}</td><td>${sale.profit}</td><td>${sale.status}</td></tr></table></body></html>`);
    w.document.close();
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentRows = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const statsCards = [
    { label: "Sold Today", value: "Tk 20,000", icon: TrendingUp, color: "from-indigo-500 to-indigo-600" },
    { label: "Today Received", value: "Tk 20,000", icon: Wallet, color: "from-purple-500 to-purple-600" },
    { label: "Today Profit", value: "Tk 20,000", icon: BarChart3, color: "from-emerald-500 to-emerald-600" },
    { label: "Total Sold", value: "Tk 3,000,000", icon: DollarSign, color: "from-blue-500 to-blue-600" },
  ];

  return (
    <div className='text-slate-600 dark:text-white font-inter text-sm'>
      <div className="p-4 lg:p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsCards.map((card, i) => (
            <div key={i} className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${card.color} p-5 text-white`}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-6 translate-x-6" />
              <div className="relative flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg"><card.icon size={20} /></div>
                <div>
                  <p className="text-2xl font-bold">{card.value}</p>
                  <p className="text-sm text-white/80">{card.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-3 items-end">
              <div className="flex-1 min-w-[150px]">
                <label className="text-xs font-medium text-slate-500 mb-1 block">Bill Number</label>
                <Input placeholder="Search bill..." value={billNumber} onChange={(e) => setBillNumber(e.target.value)} />
              </div>
              <div className="flex-1 min-w-[150px]">
                <label className="text-xs font-medium text-slate-500 mb-1 block">Start Date</label>
                <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              </div>
              <div className="flex-1 min-w-[150px]">
                <label className="text-xs font-medium text-slate-500 mb-1 block">End Date</label>
                <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
              </div>
              <div className="flex-1 min-w-[150px]">
                <label className="text-xs font-medium text-slate-500 mb-1 block">Customer</label>
                <select value={selectedCustomer} onChange={(e) => setSelectedCustomer(e.target.value)} className="select-base">
                  <option value="">All Customers</option>
                  {uniqueCustomers.map((c, i) => <option key={i} value={c}>{c}</option>)}
                </select>
              </div>
              <Button onClick={handleFilter}><Filter size={16} className="mr-1" /> Filter</Button>
              <Button variant="outline" onClick={handleReset}><RotateCcw size={16} /></Button>
            </div>
          </CardContent>
        </Card>

        {/* Table */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Sales Invoices</CardTitle>
              <Badge variant="info">{filteredData.length} records</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    {["#", "Customer", "Items", "Date", "Receivable", "Paid", "Due", "Profit", "Status", ""].map((h, i) => (
                      <th key={i} className="text-left py-3 px-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentRows.map((sale) => (
                    <tr key={sale.invoiceNo} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="py-3 px-3 font-medium">{sale.invoiceNo}</td>
                      <td className="py-3 px-3 font-medium">{sale.customer}</td>
                      <td className="py-3 px-3 max-w-[200px] truncate text-slate-500">{sale.items}</td>
                      <td className="py-3 px-3 text-slate-500 whitespace-nowrap">{sale.date}</td>
                      <td className="py-3 px-3 font-medium">{sale.receivable}</td>
                      <td className="py-3 px-3 text-emerald-600 dark:text-emerald-400 font-medium">{sale.paid}</td>
                      <td className="py-3 px-3 text-rose-600 dark:text-rose-400 font-medium">{sale.due}</td>
                      <td className="py-3 px-3 text-indigo-600 dark:text-indigo-400 font-medium">{sale.profit}</td>
                      <td className="py-3 px-3">
                        <Badge variant={sale.status === "PAID" ? "success" : sale.status === "RETURNED" ? "warning" : "destructive"}>{sale.status}</Badge>
                      </td>
                      <td className="py-3 px-3 relative">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setSelectedInvoice(selectedInvoice === sale.invoiceNo ? null : sale.invoiceNo)}>
                          <MoreVertical size={16} />
                        </Button>
                        {selectedInvoice === sale.invoiceNo && (
                          <div className="absolute right-10 top-0 z-20 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-1 min-w-[160px]">
                            <button onClick={() => { setViewModal(sale); setSelectedInvoice(null); }} className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"><Eye size={14} /> View</button>
                            <button onClick={() => { handlePrintInvoice(sale); setSelectedInvoice(null); }} className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"><Printer size={14} /> Print</button>
                            <button onClick={() => { setEditModal({ ...sale }); setSelectedInvoice(null); }} className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-blue-600"><FileEdit size={14} /> Edit</button>
                            <button onClick={() => { setPaymentModal(sale); setSelectedInvoice(null); }} className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-emerald-600"><CreditCard size={14} /> Add Payment</button>
                            <button onClick={() => { setReturnModal(sale); setSelectedInvoice(null); }} className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-amber-600"><RotateCcwSquare size={14} /> Return</button>
                            <button onClick={() => { setDeleteModal(sale); setSelectedInvoice(null); }} className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-red-500"><Trash2 size={14} /> Delete</button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs text-slate-500">Showing {Math.min((currentPage-1)*itemsPerPage+1, filteredData.length)}–{Math.min(currentPage*itemsPerPage, filteredData.length)} of {filteredData.length}</p>
              <div className="flex items-center gap-1">
                <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}><ChevronLeft size={16} /></Button>
                {[...Array(totalPages).keys()].map(n => <Button key={n} variant={currentPage === n+1 ? 'default' : 'outline'} size="sm" className="h-8 w-8 p-0" onClick={() => setCurrentPage(n+1)}>{n+1}</Button>)}
                <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}><ChevronRight size={16} /></Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* VIEW MODAL */}
      {viewModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-lg">
            <CardHeader><div className="flex items-center justify-between"><CardTitle>Invoice #{viewModal.invoiceNo}</CardTitle><Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setViewModal(null)}><X size={16} /></Button></div></CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[['Customer', viewModal.customer], ['Date', viewModal.date], ['Items', viewModal.items], ['Discount', viewModal.discount], ['Receivable', viewModal.receivable], ['Paid', viewModal.paid], ['Due', viewModal.due], ['Profit', viewModal.profit]].map(([k, v]) => (
                  <div key={k} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3"><p className="text-xs text-slate-500">{k}</p><p className="font-semibold text-slate-800 dark:text-white">{v}</p></div>
                ))}
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3"><p className="text-xs text-slate-500">Status</p><Badge variant={viewModal.status === 'PAID' ? 'success' : 'destructive'}>{viewModal.status}</Badge></div>
              </div>
              <div className="flex gap-2 pt-2">
                <Button className="flex-1" onClick={() => { handlePrintInvoice(viewModal); setViewModal(null); }}><Printer size={14} className="mr-1" />Print Invoice</Button>
                <Button variant="outline" className="flex-1" onClick={() => setViewModal(null)}>Close</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* EDIT MODAL */}
      {editModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader><div className="flex items-center justify-between"><CardTitle>Edit Invoice #{editModal.invoiceNo}</CardTitle><Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setEditModal(null)}><X size={16} /></Button></div></CardHeader>
            <CardContent className="space-y-3">
              {[['customer','Customer'],['items','Items'],['date','Date'],['receivable','Receivable'],['paid','Paid'],['due','Due']].map(([field, label]) => (
                <div key={field}><label className="text-xs font-medium text-slate-500 mb-1 block">{label}</label><Input value={editModal[field]} onChange={e => setEditModal({ ...editModal, [field]: e.target.value })} /></div>
              ))}
              <div><label className="text-xs font-medium text-slate-500 mb-1 block">Status</label>
                <select value={editModal.status} onChange={e => setEditModal({ ...editModal, status: e.target.value })} className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="PAID">PAID</option><option value="UNPAID">UNPAID</option>
                </select>
              </div>
              <div className="flex gap-2 pt-2">
                <Button className="flex-1" onClick={handleSaveEdit}>Save Changes</Button>
                <Button variant="outline" className="flex-1" onClick={() => setEditModal(null)}>Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ADD PAYMENT MODAL */}
      {paymentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-sm">
            <CardHeader><div className="flex items-center justify-between"><CardTitle>Add Payment — #{paymentModal.invoiceNo}</CardTitle><Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setPaymentModal(null)}><X size={16} /></Button></div></CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 text-sm"><p><span className="text-slate-500">Customer: </span><span className="font-medium">{paymentModal.customer}</span></p><p><span className="text-slate-500">Due: </span><span className="font-semibold text-red-500">{paymentModal.due}</span></p></div>
              <div><label className="text-xs font-medium text-slate-500 mb-1 block">Payment Amount (Tk)</label><Input type="number" placeholder="Enter amount..." value={paymentAmount} onChange={e => setPaymentAmount(e.target.value)} /></div>
              <div className="flex gap-2 pt-2">
                <Button className="flex-1" onClick={handleAddPayment}><CreditCard size={14} className="mr-1" />Add Payment</Button>
                <Button variant="outline" className="flex-1" onClick={() => { setPaymentModal(null); setPaymentAmount(''); }}>Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* RETURN MODAL */}
      {returnModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-sm">
            <CardHeader><div className="flex items-center justify-between"><CardTitle>Confirm Return</CardTitle><Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setReturnModal(null)}><X size={16} /></Button></div></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-600 dark:text-slate-300">Mark Invoice <strong>#{returnModal.invoiceNo}</strong> ({returnModal.customer}) as returned?</p>
              <div className="flex gap-2">
                <Button className="flex-1 bg-amber-500 hover:bg-amber-600" onClick={() => handleReturn(returnModal.invoiceNo)}>Yes, Return</Button>
                <Button variant="outline" className="flex-1" onClick={() => setReturnModal(null)}>Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* DELETE MODAL */}
      {deleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-sm">
            <CardHeader><div className="flex items-center justify-between"><CardTitle className="text-red-500">Delete Invoice</CardTitle><Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setDeleteModal(null)}><X size={16} /></Button></div></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-600 dark:text-slate-300">Are you sure you want to delete Invoice <strong>#{deleteModal.invoiceNo}</strong>? This cannot be undone.</p>
              <div className="flex gap-2">
                <Button variant="destructive" className="flex-1" onClick={() => handleDelete(deleteModal.invoiceNo)}>Yes, Delete</Button>
                <Button variant="outline" className="flex-1" onClick={() => setDeleteModal(null)}>Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
