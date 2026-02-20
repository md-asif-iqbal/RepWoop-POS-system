"use client";
import React, { useState } from 'react';
import { CreditCard, Search, RotateCcw, Printer, FileText, ChevronLeft, ChevronRight, MoreVertical, X, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

export default function Payments() {
  const data = [
    { id: 1, customer: 'Amina Rahman', supplier: '', date: '2023-10-01', amount: 1200.50, type: 'Credit', wallet: 'Mobile Wallet', note: 'Payment for services' },
    { id: 2, customer: '', supplier: 'Delta Supplies', date: '2023-10-02', amount: 850, type: 'Debit', wallet: 'Bank Account', note: 'Office supplies' },
    { id: 3, customer: 'Mehedi Hasan', supplier: '', date: '2023-10-03', amount: 1500.75, type: 'Credit', wallet: 'Mobile Wallet', note: 'Fresh vegetables' },
    { id: 4, customer: '', supplier: 'Perfect Electronics', date: '2023-10-04', amount: 3200, type: 'Debit', wallet: 'Bank Account', note: 'New computer' },
    { id: 5, customer: 'Tanvir Hossain', supplier: '', date: '2023-10-05', amount: 750.25, type: 'Credit', wallet: 'Mobile Wallet', note: 'Fabric purchase' },
    { id: 6, customer: '', supplier: 'Digital World', date: '2023-10-06', amount: 1000, type: 'Debit', wallet: 'Bank Account', note: 'Software license' },
    { id: 7, customer: 'Shuvo Das', supplier: '', date: '2023-10-07', amount: 600.40, type: 'Credit', wallet: 'Mobile Wallet', note: 'Import duty' },
    { id: 8, customer: '', supplier: 'SRS Construction', date: '2023-10-08', amount: 4500.80, type: 'Debit', wallet: 'Bank Account', note: 'Building materials' },
    { id: 9, customer: 'Zaman Chowdhury', supplier: '', date: '2023-10-09', amount: 2700, type: 'Credit', wallet: 'Mobile Wallet', note: 'Vehicle parts' },
    { id: 10, customer: '', supplier: 'Rahman & Sons', date: '2023-10-10', amount: 1900.30, type: 'Debit', wallet: 'Bank Account', note: 'Miscellaneous' },
    { id: 11, customer: 'Fatema Anwar', supplier: '', date: '2023-10-11', amount: 1750, type: 'Credit', wallet: 'Mobile Wallet', note: 'Consulting fees' },
    { id: 12, customer: '', supplier: 'Anwar & Co.', date: '2023-10-12', amount: 2000.50, type: 'Debit', wallet: 'Bank Account', note: 'Marketing services' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [nameFilter, setNameFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [openMenu, setOpenMenu] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const [payments, setPayments] = useState(data);

  const handleDelete = (id) => { setPayments(payments.filter(p => p.id !== id)); setDeleteModal(null); };

  const filteredData = payments.filter(item => {
    const matchName = !nameFilter || item.customer === nameFilter || item.supplier === nameFilter;
    const itemDate = new Date(item.date);
    const matchDate = (!startDate || itemDate >= new Date(startDate)) && (!endDate || itemDate <= new Date(endDate));
    return matchName && matchDate;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentRows = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalCredit = data.filter(d => d.type === 'Credit').reduce((s, d) => s + d.amount, 0);
  const totalDebit = data.filter(d => d.type === 'Debit').reduce((s, d) => s + d.amount, 0);
  const names = [...new Set(data.map(d => d.customer || d.supplier).filter(Boolean))].sort();

  const handleReset = () => { setNameFilter(''); setStartDate(''); setEndDate(''); setCurrentPage(1); };

  const handlePrint = () => {
    const printContent = document.getElementById('table-to-print').outerHTML;
    const w = window.open('', '_blank');
    w.document.write(`<html><head><title>Payments</title><style>body{font-family:Arial,sans-serif}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px;text-align:left}th{background:#6366f1;color:white}</style></head><body onload="window.print()">${printContent}</body></html>`);
    w.document.close();
  };

  return (
    <div className="font-inter text-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl text-white shadow-lg"><CreditCard size={24} /></div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Payments</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{data.length} payment records</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-1.5" onClick={handlePrint}><Printer size={15} />Print</Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0"><CardContent className="p-4"><p className="text-indigo-100 text-xs">Total Records</p><p className="text-2xl font-bold">{data.length}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0"><CardContent className="p-4"><p className="text-emerald-100 text-xs">Total Credit (In)</p><p className="text-2xl font-bold">৳{totalCredit.toLocaleString()}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-rose-500 to-rose-600 text-white border-0"><CardContent className="p-4"><p className="text-rose-100 text-xs">Total Debit (Out)</p><p className="text-2xl font-bold">৳{totalDebit.toLocaleString()}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0"><CardContent className="p-4"><p className="text-amber-100 text-xs">Net Balance</p><p className="text-2xl font-bold">৳{(totalCredit - totalDebit).toLocaleString()}</p></CardContent></Card>
        </div>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
              <div>
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Customer/Supplier</label>
                <select className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-3 text-sm bg-white dark:bg-slate-900" value={nameFilter} onChange={e => setNameFilter(e.target.value)}>
                  <option value="">All</option>
                  {names.map((n, i) => <option key={i} value={n}>{n}</option>)}
                </select>
              </div>
              <div><label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Start Date</label><Input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="h-9" /></div>
              <div><label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">End Date</label><Input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="h-9" /></div>
              <Button size="sm" className="gap-1.5" onClick={() => setCurrentPage(1)}><Search size={14} />Filter</Button>
              <Button variant="outline" size="sm" className="gap-1.5" onClick={handleReset}><RotateCcw size={14} />Reset</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <div className="overflow-x-auto">
            <table id="table-to-print" className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <th className="px-3 py-3 text-left font-medium w-10">#</th>
                  <th className="px-3 py-3 text-left font-medium">Name</th>
                  <th className="px-3 py-3 text-left font-medium">Date</th>
                  <th className="px-3 py-3 text-right font-medium">Amount</th>
                  <th className="px-3 py-3 text-center font-medium">Type</th>
                  <th className="px-3 py-3 text-left font-medium">Wallet</th>
                  <th className="px-3 py-3 text-left font-medium">Note</th>
                  <th className="px-3 py-3 text-center font-medium w-16">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((item, i) => (
                  <tr key={item.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-3 py-3 text-slate-500">{(currentPage - 1) * itemsPerPage + i + 1}</td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[10px] font-bold">{(item.customer || item.supplier).charAt(0)}</div>
                        <div><p className="font-medium text-slate-800 dark:text-white text-xs">{item.customer || item.supplier}</p><p className="text-[10px] text-slate-400">{item.customer ? 'Customer' : 'Supplier'}</p></div>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-slate-500 dark:text-slate-400 text-xs">{item.date}</td>
                    <td className="px-3 py-3 text-right font-medium">৳{item.amount.toLocaleString()}</td>
                    <td className="px-3 py-3 text-center"><Badge variant={item.type === 'Credit' ? 'success' : 'destructive'} className="text-xs">{item.type}</Badge></td>
                    <td className="px-3 py-3 text-slate-500 dark:text-slate-400 text-xs">{item.wallet}</td>
                    <td className="px-3 py-3 text-slate-500 dark:text-slate-400 text-xs max-w-[150px] truncate">{item.note}</td>
                    <td className="px-3 py-3 text-center relative">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpenMenu(openMenu === item.id ? null : item.id)}><MoreVertical size={16} /></Button>
                      {openMenu === item.id && (
                        <div className="absolute right-4 top-10 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 py-1 z-20 w-28">
                          <button className="w-full text-left px-3 py-1.5 hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs flex items-center gap-1.5" onClick={() => { handlePrint(); setOpenMenu(null); }}><FileText size={12} />Invoice</button>
                          <button className="w-full text-left px-3 py-1.5 hover:bg-red-50 dark:hover:bg-slate-800 text-red-500 text-xs flex items-center gap-1.5" onClick={() => { setDeleteModal(item); setOpenMenu(null); }}><Trash2 size={12} />Delete</button>
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
              <p className="text-xs text-slate-500">Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length}</p>
              <div className="flex gap-1">
                <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}><ChevronLeft size={16} /></Button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <Button key={i} variant={currentPage === i + 1 ? 'default' : 'outline'} size="icon" className="h-8 w-8 text-xs" onClick={() => setCurrentPage(i + 1)}>{i + 1}</Button>
                ))}
                <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}><ChevronRight size={16} /></Button>
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Delete Modal */}
      {deleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setDeleteModal(null)}>
          <Card className="w-full max-w-sm" onClick={e => e.stopPropagation()}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg text-red-600">Delete Payment</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setDeleteModal(null)}><X size={18}/></Button>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Delete payment of <strong>৳{deleteModal.amount.toLocaleString()}</strong> for <strong>{deleteModal.customer || deleteModal.supplier}</strong>? This cannot be undone.</p>
              <div className="flex gap-2">
                <Button variant="destructive" onClick={() => handleDelete(deleteModal.id)} className="flex-1">Delete</Button>
                <Button variant="outline" onClick={() => setDeleteModal(null)} className="flex-1">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}