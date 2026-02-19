"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { History, Search, RotateCcw, Printer, ArrowUpRight, ArrowDownLeft, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BankHistory() {
  const transactions = [
    { id: 1, date: '2024-10-15', account: 'IBBL', type: 'deposit', description: 'Sales deposit', amount: 45000, balance: 245000 },
    { id: 2, date: '2024-10-14', account: 'Bkash', type: 'withdrawal', description: 'Supplier payment', amount: 12000, balance: 200000 },
    { id: 3, date: '2024-10-13', account: 'City Bank', type: 'deposit', description: 'Customer payment received', amount: 28000, balance: 212000 },
    { id: 4, date: '2024-10-12', account: 'IBBL', type: 'withdrawal', description: 'Salary payment', amount: 35000, balance: 184000 },
    { id: 5, date: '2024-10-11', account: 'Nagad', type: 'deposit', description: 'POS collection', amount: 18500, balance: 219000 },
    { id: 6, date: '2024-10-10', account: 'CASH', type: 'withdrawal', description: 'Office rent', amount: 25000, balance: 200500 },
    { id: 7, date: '2024-10-09', account: 'Bkash', type: 'deposit', description: 'Refund received', amount: 5000, balance: 225500 },
    { id: 8, date: '2024-10-08', account: 'City Bank', type: 'withdrawal', description: 'Utility bills', amount: 8000, balance: 220500 },
    { id: 9, date: '2024-10-07', account: 'IBBL', type: 'deposit', description: 'Product return credit', amount: 12000, balance: 228500 },
    { id: 10, date: '2024-10-06', account: 'CASH', type: 'deposit', description: 'Walk-in customer', amount: 9000, balance: 216500 },
  ];

  const [filtered, setFiltered] = useState(transactions);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  const handleFilter = () => {
    let f = transactions;
    if (startDate) f = f.filter(t => new Date(t.date) >= new Date(startDate));
    if (endDate) f = f.filter(t => new Date(t.date) <= new Date(endDate));
    setFiltered(f); setCurrentPage(1);
  };
  const handleReset = () => { setStartDate(''); setEndDate(''); setFiltered(transactions); setCurrentPage(1); };
  const handlePrint = () => {
    const el = document.getElementById("table-to-print"); if (!el) return;
    const w = window.open('', '_blank');
    w.document.write(`<html><head><title>Bank History</title><style>body{font-family:sans-serif}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px}th{background:#4f46e5;color:#fff}</style></head><body onload="window.print()">${el.outerHTML}</body></html>`);
    w.document.close();
  };

  const totalDeposit = filtered.filter(t => t.type === 'deposit').reduce((s, t) => s + t.amount, 0);
  const totalWithdrawal = filtered.filter(t => t.type === 'withdrawal').reduce((s, t) => s + t.amount, 0);
  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentItems = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"><History className="h-6 w-6 text-white" /></div>
        <div><h1 className="text-2xl font-bold text-gray-900">Bank Account History</h1><p className="text-sm text-gray-500">View all bank transactions and history</p></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 border-0"><CardContent className="p-4 text-white"><div className="flex items-center justify-between"><div><p className="text-sm opacity-80">Total Deposits</p><p className="text-2xl font-bold">৳{totalDeposit.toLocaleString()}</p></div><ArrowDownLeft className="h-8 w-8 opacity-50" /></div></CardContent></Card>
        <Card className="bg-gradient-to-br from-red-500 to-red-600 border-0"><CardContent className="p-4 text-white"><div className="flex items-center justify-between"><div><p className="text-sm opacity-80">Total Withdrawals</p><p className="text-2xl font-bold">৳{totalWithdrawal.toLocaleString()}</p></div><ArrowUpRight className="h-8 w-8 opacity-50" /></div></CardContent></Card>
        <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 border-0"><CardContent className="p-4 text-white"><div className="flex items-center justify-between"><div><p className="text-sm opacity-80">Net Balance</p><p className="text-2xl font-bold">৳{(totalDeposit - totalWithdrawal).toLocaleString()}</p></div><History className="h-8 w-8 opacity-50" /></div></CardContent></Card>
      </div>
      <Card><CardContent className="p-4"><div className="flex flex-col md:flex-row gap-3">
        <Input type="date" className="md:w-44" value={startDate} onChange={e => setStartDate(e.target.value)} />
        <Input type="date" className="md:w-44" value={endDate} onChange={e => setEndDate(e.target.value)} />
        <Button onClick={handleFilter}><Search className="h-4 w-4 mr-1" />Filter</Button>
        <Button variant="outline" onClick={handleReset}><RotateCcw className="h-4 w-4 mr-1" />Reset</Button>
        <Button variant="outline" onClick={handlePrint}><Printer className="h-4 w-4 mr-1" />Print</Button>
      </div></CardContent></Card>
      <Card><CardContent className="p-0"><div className="overflow-x-auto">
        <table id="table-to-print" className="w-full text-sm">
          <thead><tr className="bg-gradient-to-r from-indigo-600 to-indigo-700">{['#','Date','Account','Type','Description','Amount','Balance'].map(h=>(<th key={h} className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">{h}</th>))}</tr></thead>
          <tbody className="divide-y divide-gray-100">
            {currentItems.map((t, idx) => (
              <tr key={t.id} className="hover:bg-gray-50/80 transition-colors">
                <td className="px-4 py-3 text-gray-500">{indexOfFirst + idx + 1}</td>
                <td className="px-4 py-3 text-gray-600">{t.date}</td>
                <td className="px-4 py-3"><Badge variant="outline">{t.account}</Badge></td>
                <td className="px-4 py-3">{t.type === 'deposit' ? <Badge variant="success"><ArrowDownLeft className="h-3 w-3 mr-1" />Deposit</Badge> : <Badge variant="destructive"><ArrowUpRight className="h-3 w-3 mr-1" />Withdrawal</Badge>}</td>
                <td className="px-4 py-3 text-gray-600">{t.description}</td>
                <td className="px-4 py-3 font-medium">{t.type === 'deposit' ? <span className="text-emerald-600">+৳{t.amount.toLocaleString()}</span> : <span className="text-red-600">-৳{t.amount.toLocaleString()}</span>}</td>
                <td className="px-4 py-3 font-semibold text-gray-900">৳{t.balance.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div></CardContent></Card>
      {totalPages > 1 && (<div className="flex items-center justify-between"><p className="text-sm text-gray-500">Page {currentPage} of {totalPages}</p><div className="flex items-center gap-1"><Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage===1} onClick={()=>setCurrentPage(p=>p-1)}><ChevronLeft className="h-4 w-4"/></Button>{Array.from({length:totalPages},(_,i)=>(<Button key={i} variant={currentPage===i+1?'default':'outline'} size="sm" className="h-8 w-8 p-0" onClick={()=>setCurrentPage(i+1)}>{i+1}</Button>))}<Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage===totalPages} onClick={()=>setCurrentPage(p=>p+1)}><ChevronRight className="h-4 w-4"/></Button></div></div>)}
    </div>
  );
}
