"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Wallet, Search, RotateCcw, Printer, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EmployeePayments() {
  const pathname = usePathname();
  const tabs = [
    { label: 'Employees', href: '/Employee-and-Salary' },
    { label: '+ New Employee', href: '/Employee-and-Salary/New-Employee' },
    { label: 'Salary List', href: '/Employee-and-Salary/Salary' },
    { label: '+ New Salary', href: '/Employee-and-Salary/Salary/Create' },
    { label: 'Payments', href: '/Employee-and-Salary/Payments' },
  ];

  const data = [
    { invoiceNo: 1001, date: '2024-09-01', name: 'Md Shamsuzzaman', email: 'md@gmail.com', phone: '01828686154', paid: 18000 },
    { invoiceNo: 1002, date: '2024-10-01', name: 'Sanower Hossain', email: 'sanower@gmail.com', phone: '01789898989', paid: 3000 },
    { invoiceNo: 1003, date: '2024-08-01', name: 'Rafiq Ahmed', email: 'rafiq@gmail.com', phone: '01888888888', paid: 2500 },
    { invoiceNo: 1004, date: '2024-07-01', name: 'Kamal Hossain', email: 'kamal@gmail.com', phone: '01777777777', paid: 4000 },
    { invoiceNo: 1005, date: '2024-06-01', name: 'Sakib Hasan', email: 'sakib@gmail.com', phone: '01666666666', paid: 5500 },
    { invoiceNo: 1006, date: '2024-05-01', name: 'Tanvir Rahman', email: 'tanvir@gmail.com', phone: '01555555555', paid: 6200 },
    { invoiceNo: 1007, date: '2024-04-01', name: 'Nusrat Jahan', email: 'nusrat@gmail.com', phone: '01999999999', paid: 7000 },
    { invoiceNo: 1008, date: '2024-03-01', name: 'Fahim Islam', email: 'fahim@gmail.com', phone: '01222222222', paid: 8200 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [openAction, setOpenAction] = useState(null);
  const perPage = 10;

  const filterData = () => {
    let filtered = data;
    if (startDate) filtered = filtered.filter(i => new Date(i.date) >= new Date(startDate));
    if (endDate) filtered = filtered.filter(i => new Date(i.date) <= new Date(endDate));
    setFilteredData(filtered); setCurrentPage(1);
  };
  const resetFilter = () => { setFilteredData(data); setStartDate(''); setEndDate(''); setCurrentPage(1); };

  const handlePrint = () => {
    const el = document.getElementById("table-to-print"); if (!el) return;
    const w = window.open('', '_blank');
    w.document.write(`<html><head><title>Payments</title><style>body{font-family:sans-serif}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px}th{background:#4f46e5;color:#fff}</style></head><body onload="window.print()">${el.outerHTML}</body></html>`);
    w.document.close();
  };

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentItems = filteredData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredData.length / perPage);
  const totalPaid = filteredData.reduce((s, i) => s + i.paid, 0);
  const avatarColors = ['bg-indigo-500', 'bg-purple-500', 'bg-pink-500', 'bg-blue-500', 'bg-emerald-500'];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"><Wallet className="h-6 w-6 text-white" /></div>
        <div><h1 className="text-2xl font-bold text-gray-900">Employee Payments</h1><p className="text-sm text-gray-500">Track all employee payment transactions</p></div>
      </div>
      <Card><CardContent className="p-1"><div className="flex flex-wrap gap-1">{tabs.map(tab => (<Link key={tab.href} href={tab.href}><Button variant={pathname === tab.href ? 'default' : 'ghost'} size="sm" className="text-xs">{tab.label}</Button></Link>))}</div></CardContent></Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 border-0"><CardContent className="p-4 text-white"><p className="text-sm opacity-80">Total Payments</p><p className="text-2xl font-bold">৳{totalPaid.toLocaleString()}</p></CardContent></Card>
        <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 border-0"><CardContent className="p-4 text-white"><p className="text-sm opacity-80">Total Records</p><p className="text-2xl font-bold">{filteredData.length}</p></CardContent></Card>
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
          <thead><tr className="bg-gradient-to-r from-indigo-600 to-indigo-700">{['#','Invoice','Employee','Date','Phone','Paid','Action'].map(h=>(<th key={h} className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">{h}</th>))}</tr></thead>
          <tbody className="divide-y divide-gray-100">
            {currentItems.map((item, idx) => (
              <tr key={item.invoiceNo} className="hover:bg-gray-50/80 transition-colors">
                <td className="px-4 py-3 text-gray-500">{indexOfFirst + idx + 1}</td>
                <td className="px-4 py-3"><Badge variant="outline">#{item.invoiceNo}</Badge></td>
                <td className="px-4 py-3"><div className="flex items-center gap-3"><div className={`w-8 h-8 rounded-full ${avatarColors[idx % avatarColors.length]} flex items-center justify-center text-white font-bold text-xs`}>{item.name.charAt(0)}</div><div><p className="font-medium text-gray-900">{item.name}</p><p className="text-xs text-gray-500">{item.email}</p></div></div></td>
                <td className="px-4 py-3 text-gray-600">{item.date}</td>
                <td className="px-4 py-3 text-gray-600">{item.phone}</td>
                <td className="px-4 py-3"><Badge variant="success">৳{item.paid.toLocaleString()}</Badge></td>
                <td className="px-4 py-3"><div className="relative"><Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpenAction(openAction === item.invoiceNo ? null : item.invoiceNo)}><MoreVertical className="h-4 w-4" /></Button>{openAction === item.invoiceNo && (<div className="absolute right-0 mt-1 w-32 bg-white border rounded-lg shadow-lg z-10 py-1">{['View','Print','Delete'].map(a=>(<button key={a} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50" onClick={()=>setOpenAction(null)}>{a}</button>))}</div>)}</div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div></CardContent></Card>
      {totalPages > 1 && (<div className="flex items-center justify-between"><p className="text-sm text-gray-500">Page {currentPage} of {totalPages}</p><div className="flex items-center gap-1"><Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage===1} onClick={()=>setCurrentPage(p=>p-1)}><ChevronLeft className="h-4 w-4"/></Button>{Array.from({length:totalPages},(_,i)=>(<Button key={i} variant={currentPage===i+1?'default':'outline'} size="sm" className="h-8 w-8 p-0" onClick={()=>setCurrentPage(i+1)}>{i+1}</Button>))}<Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage===totalPages} onClick={()=>setCurrentPage(p=>p+1)}><ChevronRight className="h-4 w-4"/></Button></div></div>)}
    </div>
  );
}
