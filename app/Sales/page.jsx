"use client"

import React, { useState } from 'react'
import { MoreVertical, Filter, RotateCcw, TrendingUp, Wallet, BarChart3, DollarSign, Search, Printer, FileEdit, Eye, RotateCcwSquare, CreditCard, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export default function Sales() {
    const [selectedInvoice, setSelectedInvoice] = useState(null);
    const [billNumber, setBillNumber] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState('');

    const salesData = [
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
      
      const [filteredData, setFilteredData] = useState(salesData);
      const uniqueCustomers = [...new Set(salesData.map((item) => item.customer))];

  const handleFilter = () => {
    let filtered = salesData;
    if (billNumber) filtered = filtered.filter((item) => item.invoiceNo.toString().includes(billNumber));
    if (startDate) filtered = filtered.filter((item) => new Date(item.date) >= new Date(startDate));
    if (endDate) filtered = filtered.filter((item) => new Date(item.date) <= new Date(endDate));
    if (selectedCustomer) filtered = filtered.filter((item) => item.customer === selectedCustomer);
    setFilteredData(filtered);
  };

  const handleReset = () => {
    setBillNumber(''); setStartDate(''); setEndDate(''); setSelectedCustomer('');
    setFilteredData(salesData);
  };

  const statsCards = [
    { label: "Sold Today", value: "Tk 20,000", icon: TrendingUp, color: "from-indigo-500 to-indigo-600" },
    { label: "Today Received", value: "Tk 20,000", icon: Wallet, color: "from-purple-500 to-purple-600" },
    { label: "Today Profit", value: "Tk 20,000", icon: BarChart3, color: "from-emerald-500 to-emerald-600" },
    { label: "Total Sold", value: "Tk 3,000,000", icon: DollarSign, color: "from-blue-500 to-blue-600" },
  ];

  const actionItems = [
    { label: "Print", icon: Printer }, { label: "Edit", icon: FileEdit }, { label: "View", icon: Eye },
    { label: "Return", icon: RotateCcwSquare }, { label: "Add Payment", icon: CreditCard }, { label: "Delete", icon: Trash2, danger: true },
  ];

  return (
    <div className='text-slate-600 dark:text-white font-inter text-sm'>
      <div className="p-4 lg:p-6 mt-14 lg:mt-0 space-y-6">
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
                  {filteredData.map((sale) => (
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
                        <Badge variant={sale.status === "PAID" ? "success" : "destructive"}>{sale.status}</Badge>
                      </td>
                      <td className="py-3 px-3 relative">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setSelectedInvoice(selectedInvoice === sale.invoiceNo ? null : sale.invoiceNo)}>
                          <MoreVertical size={16} />
                        </Button>
                        {selectedInvoice === sale.invoiceNo && (
                          <div className="absolute right-10 top-0 z-20 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-1 min-w-[160px]">
                            {actionItems.map((item, i) => (
                              <button key={i} className={`flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${item.danger ? 'text-red-500' : 'text-slate-600 dark:text-slate-300'}`}>
                                <item.icon size={14} /> {item.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
