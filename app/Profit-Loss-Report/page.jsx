"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { TrendingUp, TrendingDown, Search, RotateCcw, Printer, DollarSign, BarChart3 } from 'lucide-react';

export default function ProfitLossReport() {
  const profitLossData = [
    { month: 'Jan 2023', sales: 800000, cogs: 700000, grossProfit: 100000, expenses: 20000, netProfit: 80000 },
    { month: 'Feb 2023', sales: 600000, cogs: 500000, grossProfit: 100000, expenses: 15000, netProfit: 85000 },
    { month: 'Mar 2023', sales: 500000, cogs: 450000, grossProfit: 50000, expenses: 10000, netProfit: 40000 },
    { month: 'Apr 2023', sales: 900000, cogs: 800000, grossProfit: 100000, expenses: 30000, netProfit: 70000 },
    { month: 'May 2023', sales: 400000, cogs: 350000, grossProfit: 50000, expenses: 10000, netProfit: 40000 },
    { month: 'Jun 2023', sales: 700000, cogs: 600000, grossProfit: 100000, expenses: 20000, netProfit: 80000 },
    { month: 'Jul 2023', sales: 850000, cogs: 750000, grossProfit: 100000, expenses: 30000, netProfit: 70000 },
    { month: 'Aug 2023', sales: 650000, cogs: 550000, grossProfit: 100000, expenses: 25000, netProfit: 75000 },
    { month: 'Sep 2023', sales: 950000, cogs: 850000, grossProfit: 100000, expenses: 30000, netProfit: 70000 },
    { month: 'Oct 2023', sales: 620000, cogs: 570000, grossProfit: 50000, expenses: 20000, netProfit: 30000 },
    { month: 'Nov 2023', sales: 800000, cogs: 720000, grossProfit: 80000, expenses: 25000, netProfit: 55000 },
    { month: 'Dec 2023', sales: 700000, cogs: 650000, grossProfit: 50000, expenses: 20000, netProfit: 30000 },
    { month: 'Sep 2024', sales: 9078226, cogs: 8893701, grossProfit: 184525, expenses: 1700, netProfit: 182825 },
    { month: 'Oct 2024', sales: 4272183, cogs: 3749946, grossProfit: 522237, expenses: 25130, netProfit: 497107 },
  ];

  const [startDate, setStartDate] = useState('2023-01');
  const [endDate, setEndDate] = useState('2024-12');
  const [filteredData, setFilteredData] = useState(profitLossData);

  const convertMonth = (m) => { const d = new Date(`${m} 01`); return d.toISOString().slice(0, 7); };
  const handleFilter = () => { setFilteredData(profitLossData.filter(i => { const c = convertMonth(i.month); return c >= startDate && c <= endDate; })); };
  const handleReset = () => { setStartDate('2023-01'); setEndDate('2024-12'); setFilteredData(profitLossData); };
  const handlePrint = () => { const el = document.getElementById("table-to-print"); if(!el) return; const w=window.open('','_blank'); w.document.write(`<html><head><title>Profit Loss</title><style>body{font-family:sans-serif}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px}th{background:#4f46e5;color:#fff}</style></head><body onload="window.print()">${el.outerHTML}</body></html>`); w.document.close(); };

  const totals = filteredData.reduce((a, c) => ({ sales: a.sales + c.sales, cogs: a.cogs + c.cogs, gross: a.gross + c.grossProfit, expenses: a.expenses + c.expenses, net: a.net + c.netProfit }), { sales: 0, cogs: 0, gross: 0, expenses: 0, net: 0 });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"><BarChart3 className="h-6 w-6 text-white" /></div>
        <div><h1 className="text-2xl font-bold text-gray-900">Profit & Loss Report</h1><p className="text-sm text-gray-500">Monthly profit and loss analysis</p></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 border-0"><CardContent className="p-4 text-white"><p className="text-xs opacity-80">Total Sales</p><p className="text-xl font-bold">৳{totals.sales.toLocaleString()}</p></CardContent></Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 border-0"><CardContent className="p-4 text-white"><p className="text-xs opacity-80">Total COGS</p><p className="text-xl font-bold">৳{totals.cogs.toLocaleString()}</p></CardContent></Card>
        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 border-0"><CardContent className="p-4 text-white"><p className="text-xs opacity-80">Gross Profit</p><p className="text-xl font-bold">৳{totals.gross.toLocaleString()}</p></CardContent></Card>
        <Card className={`bg-gradient-to-br ${totals.net >= 0 ? 'from-emerald-500 to-emerald-600' : 'from-red-500 to-red-600'} border-0`}><CardContent className="p-4 text-white"><p className="text-xs opacity-80">Net Profit</p><p className="text-xl font-bold">৳{totals.net.toLocaleString()}</p></CardContent></Card>
      </div>
      <Card><CardContent className="p-4"><div className="flex flex-col md:flex-row gap-3">
        <Input type="month" className="md:w-44" value={startDate} onChange={e => setStartDate(e.target.value)} />
        <Input type="month" className="md:w-44" value={endDate} onChange={e => setEndDate(e.target.value)} />
        <Button onClick={handleFilter}><Search className="h-4 w-4 mr-1" />Filter</Button>
        <Button variant="outline" onClick={handleReset}><RotateCcw className="h-4 w-4 mr-1" />Reset</Button>
        <Button variant="outline" onClick={handlePrint}><Printer className="h-4 w-4 mr-1" />Print</Button>
      </div></CardContent></Card>
      <Card><CardContent className="p-0"><div className="overflow-x-auto">
        <table id="table-to-print" className="w-full text-sm">
          <thead><tr className="bg-gradient-to-r from-indigo-600 to-indigo-700">{['Month','Sales','COGS','Gross Profit','Expenses','Net Profit'].map(h=>(<th key={h} className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">{h}</th>))}</tr></thead>
          <tbody className="divide-y divide-gray-100">
            {filteredData.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-900">{item.month}</td>
                <td className="px-4 py-3 text-indigo-600">৳{item.sales.toLocaleString()}</td>
                <td className="px-4 py-3 text-gray-600">৳{item.cogs.toLocaleString()}</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">৳{item.grossProfit.toLocaleString()}</td>
                <td className="px-4 py-3 text-orange-600">৳{item.expenses.toLocaleString()}</td>
                <td className="px-4 py-3"><Badge variant={item.netProfit >= 0 ? 'success' : 'destructive'}>৳{item.netProfit.toLocaleString()}</Badge></td>
              </tr>
            ))}
          </tbody>
          <tfoot><tr className="bg-gray-50 font-semibold border-t-2 border-gray-200">
            <td className="px-4 py-3">Total</td>
            <td className="px-4 py-3 text-indigo-600">৳{totals.sales.toLocaleString()}</td>
            <td className="px-4 py-3">৳{totals.cogs.toLocaleString()}</td>
            <td className="px-4 py-3 text-emerald-600">৳{totals.gross.toLocaleString()}</td>
            <td className="px-4 py-3 text-orange-600">৳{totals.expenses.toLocaleString()}</td>
            <td className="px-4 py-3"><Badge variant={totals.net >= 0 ? 'success' : 'destructive'}>৳{totals.net.toLocaleString()}</Badge></td>
          </tr></tfoot>
        </table>
      </div></CardContent></Card>
    </div>
  );
}
