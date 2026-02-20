"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { DollarSign, Search, RotateCcw, Printer, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Salary() {
  const pathname = usePathname();
  const tabs = [
    { label: 'Employees', href: '/Employee-and-Salary' },
    { label: '+ New Employee', href: '/Employee-and-Salary/New-Employee' },
    { label: 'Salary List', href: '/Employee-and-Salary/Salary' },
    { label: '+ New Salary', href: '/Employee-and-Salary/Salary/Create' },
    { label: 'Payments', href: '/Employee-and-Salary/Payments' },
  ];

  const employeesData = [
    { id: 1, date: '2024-10-01', name: 'Sanower Hossain', email: 'sanower@gmail.com', phone: '01789898989', overtime: 0, advance: 9000, totalReceivable: 0, paid: 3000, due: -3000 },
    { id: 2, date: '2024-09-01', name: 'Md Shamsuzzaman', email: 'shams@gmail.com', phone: '01828686154', overtime: 0, advance: 0, totalReceivable: 18000, paid: 18000, due: 0 },
    { id: 3, date: '2024-08-15', name: 'Rafiq Ahmed', email: 'rafiq@example.com', phone: '01923456789', overtime: 300, advance: 5000, totalReceivable: 1500, paid: 7000, due: 2000 },
    { id: 4, date: '2024-07-10', name: 'Kamal Hossain', email: 'kamal@example.com', phone: '01812345678', overtime: 200, advance: 0, totalReceivable: 1000, paid: 5000, due: 5000 },
    { id: 5, date: '2024-07-05', name: 'Sakib Hasan', email: 'sakib@example.com', phone: '01756789012', overtime: 400, advance: 2000, totalReceivable: 500, paid: 3000, due: 500 },
    { id: 6, date: '2024-06-01', name: 'Tanvir Rahman', email: 'tanvir@example.com', phone: '01712345678', overtime: 0, advance: 0, totalReceivable: 1000, paid: 1000, due: 0 },
    { id: 7, date: '2024-05-25', name: 'Nusrat Jahan', email: 'nusrat@example.com', phone: '01698765432', overtime: 500, advance: 0, totalReceivable: 2000, paid: 1000, due: 1000 },
    { id: 8, date: '2024-05-15', name: 'Fahim Islam', email: 'fahim@example.com', phone: '01587654321', overtime: 200, advance: 0, totalReceivable: 1500, paid: 1500, due: 0 },
  ];

  const [filterName, setFilterName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(employeesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [openAction, setOpenAction] = useState(null);
  const perPage = 10;

  const handleFilter = () => {
    let filtered = employeesData;
    if (filterName) filtered = filtered.filter(e => e.name.toLowerCase().includes(filterName.toLowerCase()));
    if (startDate) filtered = filtered.filter(e => new Date(e.date) >= new Date(startDate));
    if (endDate) filtered = filtered.filter(e => new Date(e.date) <= new Date(endDate));
    setFilteredEmployees(filtered); setCurrentPage(1);
  };
  const handleReset = () => { setFilterName(''); setStartDate(''); setEndDate(''); setFilteredEmployees(employeesData); setCurrentPage(1); };

  const handlePrint = () => {
    const el = document.getElementById("table-to-print"); if (!el) return;
    const w = window.open('', '_blank');
    w.document.write(`<html><head><title>Salary</title><style>body{font-family:sans-serif}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px}th{background:#4f46e5;color:#fff}</style></head><body onload="window.print()">${el.outerHTML}</body></html>`);
    w.document.close();
  };

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentItems = filteredEmployees.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredEmployees.length / perPage);
  const avatarColors = ['bg-indigo-500', 'bg-purple-500', 'bg-pink-500', 'bg-blue-500', 'bg-emerald-500'];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"><DollarSign className="h-6 w-6 text-white" /></div>
        <div><h1 className="text-2xl font-bold text-gray-900">Employee Salary</h1><p className="text-sm text-gray-500">View and manage salary records</p></div>
      </div>
      <Card><CardContent className="p-1"><div className="flex flex-wrap gap-1">{tabs.map(tab => (<Link key={tab.href} href={tab.href}><Button variant={pathname === tab.href ? 'default' : 'ghost'} size="sm" className="text-xs">{tab.label}</Button></Link>))}</div></CardContent></Card>
      <Card><CardContent className="p-4"><div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" /><Input placeholder="Search by name..." className="pl-9" value={filterName} onChange={e => setFilterName(e.target.value)} /></div>
        <Input type="date" className="md:w-40" value={startDate} onChange={e => setStartDate(e.target.value)} />
        <Input type="date" className="md:w-40" value={endDate} onChange={e => setEndDate(e.target.value)} />
        <Button onClick={handleFilter}><Search className="h-4 w-4 mr-1" />Filter</Button>
        <Button variant="outline" onClick={handleReset}><RotateCcw className="h-4 w-4 mr-1" />Reset</Button>
        <Button variant="outline" onClick={handlePrint}><Printer className="h-4 w-4 mr-1" />Print</Button>
      </div></CardContent></Card>
      <Card><CardContent className="p-0"><div className="overflow-x-auto">
        <table id="table-to-print" className="w-full text-sm">
          <thead><tr className="bg-gradient-to-r from-indigo-600 to-indigo-700">{['#','Employee','Date','Overtime','Advance','Receivable','Paid','Due','Action'].map(h=>(<th key={h} className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">{h}</th>))}</tr></thead>
          <tbody className="divide-y divide-gray-100">
            {currentItems.map((emp, idx) => (
              <tr key={emp.id} className="hover:bg-gray-50/80 transition-colors">
                <td className="px-4 py-3 text-gray-500">{indexOfFirst + idx + 1}</td>
                <td className="px-4 py-3"><div className="flex items-center gap-3"><div className={`w-8 h-8 rounded-full ${avatarColors[idx % avatarColors.length]} flex items-center justify-center text-white font-bold text-xs`}>{emp.name.charAt(0)}</div><div><p className="font-medium text-gray-900">{emp.name}</p><p className="text-xs text-gray-500">{emp.email}</p></div></div></td>
                <td className="px-4 py-3 text-gray-600">{emp.date}</td>
                <td className="px-4 py-3 text-gray-600">৳{emp.overtime.toLocaleString()}</td>
                <td className="px-4 py-3 text-gray-600">৳{emp.advance.toLocaleString()}</td>
                <td className="px-4 py-3 text-gray-600">৳{emp.totalReceivable.toLocaleString()}</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">৳{emp.paid.toLocaleString()}</td>
                <td className="px-4 py-3"><Badge variant={emp.due > 0 ? 'destructive' : emp.due < 0 ? 'warning' : 'success'}>৳{emp.due.toLocaleString()}</Badge></td>
                <td className="px-4 py-3"><div className="relative"><Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpenAction(openAction === emp.id ? null : emp.id)}><MoreVertical className="h-4 w-4" /></Button>{openAction === emp.id && (<div className="absolute right-0 mt-1 w-32 bg-white border rounded-lg shadow-lg z-10 py-1">{['View','Edit','Delete'].map(a=>(<button key={a} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50" onClick={()=>setOpenAction(null)}>{a}</button>))}</div>)}</div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div></CardContent></Card>
      {totalPages > 1 && (<div className="flex items-center justify-between"><p className="text-sm text-gray-500">Page {currentPage} of {totalPages}</p><div className="flex items-center gap-1"><Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage===1} onClick={()=>setCurrentPage(p=>p-1)}><ChevronLeft className="h-4 w-4"/></Button>{Array.from({length:totalPages},(_,i)=>(<Button key={i} variant={currentPage===i+1?'default':'outline'} size="sm" className="h-8 w-8 p-0" onClick={()=>setCurrentPage(i+1)}>{i+1}</Button>))}<Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage===totalPages} onClick={()=>setCurrentPage(p=>p+1)}><ChevronRight className="h-4 w-4"/></Button></div></div>)}
    </div>
  );
}
