'use client'
import React from "react";
import { BookOpen, Printer, TrendingUp, TrendingDown, Wallet } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

export default function CashBook() {
  const transactions = [
    { id: 1, date: '29/09/2024', details: 'Sales #81 · Customer: Walking Customer · Oraimo Glass Rambo ×1', type: 'Received', debit: 130, credit: 0, balance: 130 },
    { id: 2, date: '29/09/2024', details: 'Sales #80 · Customer: Walking Customer · Blazer For Men ×1', type: 'Received', debit: 3000, credit: 0, balance: 3000 },
    { id: 3, date: '29/09/2024', details: 'Sales #78 · Customer: Raky · Laptop Computer ×1', type: 'Received', debit: 50000, credit: 0, balance: 50000 },
    { id: 4, date: '30/09/2024', details: 'Sales #82 · Customer: John Doe · Headphone ×2', type: 'Received', debit: 2000, credit: 0, balance: 2000 },
    { id: 5, date: '30/09/2024', details: 'Sales #83 · Customer: Jane Smith · Monitor ×1', type: 'Received', debit: 10000, credit: 0, balance: 10000 },
    { id: 6, date: '01/10/2024', details: 'Purchase #45 · Supplier: TechSupply · Keyboard ×20', type: 'Paid', debit: 0, credit: 8000, balance: -8000 },
    { id: 7, date: '01/10/2024', details: 'Expense · Office Rent October', type: 'Paid', debit: 0, credit: 15000, balance: -15000 },
  ];

  const totalDebit = transactions.reduce((s, t) => s + t.debit, 0);
  const totalCredit = transactions.reduce((s, t) => s + t.credit, 0);
  const netBalance = totalDebit - totalCredit;

  const handlePrint = () => {
    const printContent = document.getElementById("table-to-print").outerHTML;
    const w = window.open('', '_blank');
    w.document.write(`<html><head><title>Cash Book</title><style>body{font-family:Arial,sans-serif}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px;text-align:left}th{background:#6366f1;color:white}</style></head><body onload="window.print()">${printContent}</body></html>`);
    w.document.close();
  };

  return (
    <div className="font-inter text-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl text-white shadow-lg"><BookOpen size={24} /></div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Cash Book</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{transactions.length} transactions</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-1.5" onClick={handlePrint}><Printer size={15} />Print</Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-slate-500 to-slate-600 text-white border-0"><CardContent className="p-4"><p className="text-slate-200 text-xs">Opening Balance</p><p className="text-2xl font-bold">৳0.00</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0"><CardContent className="p-4"><div className="flex items-center gap-1 text-emerald-100 text-xs"><TrendingUp size={14}/>Total Debit</div><p className="text-2xl font-bold">৳{totalDebit.toLocaleString()}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-rose-500 to-rose-600 text-white border-0"><CardContent className="p-4"><div className="flex items-center gap-1 text-rose-100 text-xs"><TrendingDown size={14}/>Total Credit</div><p className="text-2xl font-bold">৳{totalCredit.toLocaleString()}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0"><CardContent className="p-4"><div className="flex items-center gap-1 text-indigo-100 text-xs"><Wallet size={14}/>Net Balance</div><p className="text-2xl font-bold">৳{netBalance.toLocaleString()}</p></CardContent></Card>
        </div>

        <Card>
          <div className="overflow-x-auto">
            <table id="table-to-print" className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <th className="px-3 py-3 text-left font-medium w-12">#</th>
                  <th className="px-3 py-3 text-left font-medium">Date</th>
                  <th className="px-3 py-3 text-left font-medium">Transaction Details</th>
                  <th className="px-3 py-3 text-center font-medium">Type</th>
                  <th className="px-3 py-3 text-right font-medium">Debit</th>
                  <th className="px-3 py-3 text-right font-medium">Credit</th>
                  <th className="px-3 py-3 text-right font-medium">Balance</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t, i) => (
                  <tr key={t.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-3 py-3 text-slate-500">{i + 1}</td>
                    <td className="px-3 py-3 text-slate-500 dark:text-slate-400 text-xs whitespace-nowrap">{t.date}</td>
                    <td className="px-3 py-3 text-slate-700 dark:text-slate-300 max-w-xs">{t.details}</td>
                    <td className="px-3 py-3 text-center"><Badge variant={t.type === 'Received' ? 'success' : 'destructive'} className="text-xs">{t.type}</Badge></td>
                    <td className="px-3 py-3 text-right font-medium text-emerald-600">{t.debit ? `৳${t.debit.toLocaleString()}` : '-'}</td>
                    <td className="px-3 py-3 text-right font-medium text-rose-500">{t.credit ? `৳${t.credit.toLocaleString()}` : '-'}</td>
                    <td className="px-3 py-3 text-right font-semibold">{t.balance >= 0 ? <span className="text-emerald-600">৳{t.balance.toLocaleString()}</span> : <span className="text-rose-500">-৳{Math.abs(t.balance).toLocaleString()}</span>}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-slate-50 dark:bg-slate-800/50 font-semibold">
                  <td colSpan="4" className="px-3 py-3 text-right text-slate-600 dark:text-slate-300">Total</td>
                  <td className="px-3 py-3 text-right text-emerald-600">৳{totalDebit.toLocaleString()}</td>
                  <td className="px-3 py-3 text-right text-rose-500">৳{totalCredit.toLocaleString()}</td>
                  <td className="px-3 py-3 text-right text-indigo-600 dark:text-indigo-400">৳{netBalance.toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
