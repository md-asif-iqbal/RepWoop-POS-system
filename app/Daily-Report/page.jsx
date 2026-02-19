"use client"
import { useState } from "react";
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { BarChart3, Search, RotateCcw, Printer, TrendingUp, TrendingDown, DollarSign, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function DailyReport() {
  const data = [
    { id: 1, date: '2024-10-01', sellAmount: 275505, purchaseAmount: 90150, expenses: 5000, returned: 0, grossProfit: 448855, netProfit: 184045 },
    { id: 2, date: '2024-10-02', sellAmount: 823048, purchaseAmount: 831910, expenses: 0, returned: 11759, grossProfit: 146219, netProfit: -14882 },
    { id: 3, date: '2024-10-03', sellAmount: 4393, purchaseAmount: 1660500, expenses: 0, returned: 700, grossProfit: 9839, netProfit: -1621776 },
    { id: 4, date: '2024-10-04', sellAmount: 111364, purchaseAmount: 461000, expenses: 0, returned: 0, grossProfit: 91700, netProfit: 23365 },
    { id: 5, date: '2024-10-05', sellAmount: 101764, purchaseAmount: 77600, expenses: 0, returned: 2341, grossProfit: 6321, netProfit: 9169 },
    { id: 6, date: '2024-10-06', sellAmount: 119675, purchaseAmount: 200000, expenses: 0, returned: 0, grossProfit: 11864, netProfit: -148321 },
    { id: 7, date: '2024-10-07', sellAmount: 29912, purchaseAmount: 0, expenses: 0, returned: 0, grossProfit: 351, netProfit: -30571 },
    { id: 8, date: '2024-10-08', sellAmount: 18510, purchaseAmount: 17480, expenses: 80, returned: 0, grossProfit: 205, netProfit: -1570 },
    { id: 9, date: '2024-10-09', sellAmount: 1565190, purchaseAmount: 1373690, expenses: 0, returned: 0, grossProfit: 211651, netProfit: 191300 },
    { id: 10, date: '2024-10-10', sellAmount: 9869, purchaseAmount: 33860, expenses: 0, returned: 0, grossProfit: 1797, netProfit: 6327 },
    { id: 11, date: '2024-10-11', sellAmount: 215, purchaseAmount: 0, expenses: 0, returned: 0, grossProfit: 0, netProfit: 215 },
    { id: 12, date: '2024-10-12', sellAmount: 104791, purchaseAmount: 455000, expenses: 0, returned: 0, grossProfit: 6421, netProfit: -350209 },
    { id: 13, date: '2024-10-13', sellAmount: 43935, purchaseAmount: 890, expenses: 20000, returned: 220, grossProfit: 7272, netProfit: 22195 },
    { id: 14, date: '2024-10-14', sellAmount: 387008, purchaseAmount: 0, expenses: 0, returned: 0, grossProfit: 224471, netProfit: 387008 },
    { id: 15, date: '2024-10-15', sellAmount: 2190, purchaseAmount: 860, expenses: 0, returned: 645, grossProfit: 562, netProfit: 685 },
  ];

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 15;

  const filterData = () => { let f = data; if (startDate) f = f.filter(i => new Date(i.date) >= new Date(startDate)); if (endDate) f = f.filter(i => new Date(i.date) <= new Date(endDate)); setFilteredData(f); setCurrentPage(1); };
  const resetFilter = () => { setFilteredData(data); setStartDate(''); setEndDate(''); setCurrentPage(1); };
  const handlePrint = () => { const el = document.getElementById("table-to-print"); if(!el) return; const w=window.open('','_blank'); w.document.write(`<html><head><title>Daily Report</title><style>body{font-family:sans-serif}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px}th{background:#4f46e5;color:#fff}</style></head><body onload="window.print()">${el.outerHTML}</body></html>`); w.document.close(); };

  const totals = filteredData.reduce((a, c) => ({ sell: a.sell + c.sellAmount, purchase: a.purchase + c.purchaseAmount, expenses: a.expenses + c.expenses, returned: a.returned + c.returned, gross: a.gross + c.grossProfit, net: a.net + c.netProfit }), { sell: 0, purchase: 0, expenses: 0, returned: 0, gross: 0, net: 0 });
  const indexOfLast = currentPage * perPage; const indexOfFirst = indexOfLast - perPage;
  const currentItems = filteredData.slice(indexOfFirst, indexOfLast); const totalPages = Math.ceil(filteredData.length / perPage);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"><BarChart3 className="h-6 w-6 text-white" /></div>
        <div><h1 className="text-2xl font-bold text-gray-900">Daily Report</h1><p className="text-sm text-gray-500">View daily sales and profit analysis</p></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 border-0"><CardContent className="p-4 text-white"><div className="flex items-center justify-between"><div><p className="text-xs opacity-80">Total Sales</p><p className="text-xl font-bold">৳{totals.sell.toLocaleString()}</p></div><ShoppingCart className="h-6 w-6 opacity-50" /></div></CardContent></Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 border-0"><CardContent className="p-4 text-white"><div className="flex items-center justify-between"><div><p className="text-xs opacity-80">Total Purchase</p><p className="text-xl font-bold">৳{totals.purchase.toLocaleString()}</p></div><DollarSign className="h-6 w-6 opacity-50" /></div></CardContent></Card>
        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 border-0"><CardContent className="p-4 text-white"><div className="flex items-center justify-between"><div><p className="text-xs opacity-80">Gross Profit</p><p className="text-xl font-bold">৳{totals.gross.toLocaleString()}</p></div><TrendingUp className="h-6 w-6 opacity-50" /></div></CardContent></Card>
        <Card className={`bg-gradient-to-br ${totals.net >= 0 ? 'from-emerald-500 to-emerald-600' : 'from-red-500 to-red-600'} border-0`}><CardContent className="p-4 text-white"><div className="flex items-center justify-between"><div><p className="text-xs opacity-80">Net Profit</p><p className="text-xl font-bold">৳{totals.net.toLocaleString()}</p></div>{totals.net >= 0 ? <TrendingUp className="h-6 w-6 opacity-50" /> : <TrendingDown className="h-6 w-6 opacity-50" />}</div></CardContent></Card>
      </div>
      <Card><CardContent className="p-4"><div className="flex flex-col md:flex-row gap-3">
        <Input type="date" className="md:w-44" value={startDate} onChange={e => setStartDate(e.target.value)} />
        <Input type="date" className="md:w-44" value={endDate} onChange={e => setEndDate(e.target.value)} />
        <Button onClick={filterData}><Search className="h-4 w-4 mr-1" />Filter</Button>
        <Button variant="outline" onClick={resetFilter}><RotateCcw className="h-4 w-4 mr-1" />Reset</Button>
        <Button variant="outline" onClick={handlePrint}><Printer className="h-4 w-4 mr-1" />Print</Button>
      </div></CardContent></Card>
      <Card><CardContent className="p-0"><div className="overflow-x-auto">
        <table id="table-to-print" className="w-full text-sm">
          <thead><tr className="bg-gradient-to-r from-indigo-600 to-indigo-700">{['#','Date','Sales','Purchase','Expenses','Returned','Gross Profit','Net Profit'].map(h=>(<th key={h} className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">{h}</th>))}</tr></thead>
          <tbody className="divide-y divide-gray-100">
            {currentItems.map((item, idx) => (
              <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                <td className="px-4 py-3 text-gray-500">{indexOfFirst + idx + 1}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{item.date}</td>
                <td className="px-4 py-3 text-indigo-600">৳{item.sellAmount.toLocaleString()}</td>
                <td className="px-4 py-3 text-gray-600">৳{item.purchaseAmount.toLocaleString()}</td>
                <td className="px-4 py-3 text-gray-600">৳{item.expenses.toLocaleString()}</td>
                <td className="px-4 py-3 text-orange-600">৳{item.returned.toLocaleString()}</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">৳{item.grossProfit.toLocaleString()}</td>
                <td className="px-4 py-3"><Badge variant={item.netProfit >= 0 ? 'success' : 'destructive'}>৳{item.netProfit.toLocaleString()}</Badge></td>
              </tr>
            ))}
          </tbody>
          <tfoot><tr className="bg-gray-50 font-semibold border-t-2 border-gray-200">
            <td className="px-4 py-3" colSpan={2}>Total</td>
            <td className="px-4 py-3 text-indigo-600">৳{totals.sell.toLocaleString()}</td>
            <td className="px-4 py-3">৳{totals.purchase.toLocaleString()}</td>
            <td className="px-4 py-3">৳{totals.expenses.toLocaleString()}</td>
            <td className="px-4 py-3">৳{totals.returned.toLocaleString()}</td>
            <td className="px-4 py-3 text-emerald-600">৳{totals.gross.toLocaleString()}</td>
            <td className="px-4 py-3"><Badge variant={totals.net >= 0 ? 'success' : 'destructive'}>৳{totals.net.toLocaleString()}</Badge></td>
          </tr></tfoot>
        </table>
      </div></CardContent></Card>
      {totalPages > 1 && (<div className="flex items-center justify-between"><p className="text-sm text-gray-500">Page {currentPage} of {totalPages}</p><div className="flex items-center gap-1"><Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage===1} onClick={()=>setCurrentPage(p=>p-1)}><ChevronLeft className="h-4 w-4"/></Button>{Array.from({length:totalPages},(_,i)=>(<Button key={i} variant={currentPage===i+1?'default':'outline'} size="sm" className="h-8 w-8 p-0" onClick={()=>setCurrentPage(i+1)}>{i+1}</Button>))}<Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage===totalPages} onClick={()=>setCurrentPage(p=>p+1)}><ChevronRight className="h-4 w-4"/></Button></div></div>)}
    </div>
  );
}
