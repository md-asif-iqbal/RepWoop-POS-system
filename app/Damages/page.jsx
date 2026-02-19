"use client"
import React, { useState } from 'react';
import { Trash2, Search, AlertTriangle, RotateCcw, Printer } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

export default function Damages() {
  const [filterText, setFilterText] = useState('');
  const [damages, setDamages] = useState([
    { id: 3, date: '26/09/2024', product: 'Motherboard Esinic 61', quantity: 1, note: 'Defective chipset' },
    { id: 4, date: '27/09/2024', product: 'TP Link Router R100M', quantity: 5, note: 'Water damage' },
    { id: 5, date: '28/09/2024', product: 'Dell Monitor E2421HN', quantity: 2, note: 'Cracked screen' },
    { id: 6, date: '29/09/2024', product: 'HP Laptop G6', quantity: 3, note: 'Damaged keyboard' },
    { id: 7, date: '30/09/2024', product: 'Logitech Mouse M185', quantity: 4, note: 'Malfunction' },
    { id: 8, date: '01/10/2024', product: 'Samsung SSD 1TB', quantity: 1, note: 'Not working' },
    { id: 9, date: '02/10/2024', product: 'Acer Monitor 24"', quantity: 2, note: 'Broken stand' },
    { id: 10, date: '03/10/2024', product: 'Sony Headphones WH1000XM4', quantity: 2, note: 'Sound issue' },
  ]);
  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = (id) => { setDamages(damages.filter(d => d.id !== id)); setDeleteId(null); };
  const totalDamaged = damages.reduce((s, d) => s + d.quantity, 0);

  const handlePrint = () => {
    const printContent = document.getElementById('table-to-print').outerHTML;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`<html><head><title>Damages</title><style>body{font-family:Arial,sans-serif}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px;text-align:left}th{background:#6366f1;color:white}</style></head><body onload="window.print()">${printContent}</body></html>`);
    newWindow.document.close();
  };

  const filteredDamages = damages.filter(d => d.product.toLowerCase().includes(filterText.toLowerCase()));

  return (
    <div className="font-inter text-sm">
      <div className="container mx-auto px-4 py-6 md:mt-[5%] mt-[20%]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-rose-500 to-red-600 rounded-xl text-white shadow-lg"><AlertTriangle size={24} /></div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Damages</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{damages.length} damage records</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Link href="/Damages/Create"><Button className="gap-1.5" size="sm">+ Add Damage</Button></Link>
            <Button variant="outline" size="sm" className="gap-1.5" onClick={handlePrint}><Printer size={15} />Print</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-rose-500 to-rose-600 text-white border-0"><CardContent className="p-4"><p className="text-rose-100 text-xs">Total Records</p><p className="text-2xl font-bold">{damages.length}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0"><CardContent className="p-4"><p className="text-amber-100 text-xs">Total Items Damaged</p><p className="text-2xl font-bold">{totalDamaged} pcs</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0"><CardContent className="p-4"><p className="text-indigo-100 text-xs">Unique Products</p><p className="text-2xl font-bold">{[...new Set(damages.map(d => d.product))].length}</p></CardContent></Card>
        </div>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex gap-3 items-end">
              <div className="flex-1">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Search Product</label>
                <div className="relative"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><Input value={filterText} onChange={(e) => setFilterText(e.target.value)} placeholder="Search damaged product..." className="pl-9 h-9" /></div>
              </div>
              <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setFilterText('')}><RotateCcw size={14} />Reset</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <div className="overflow-x-auto">
            <table id="table-to-print" className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <th className="px-3 py-3 text-left font-medium w-12">#</th>
                  <th className="px-3 py-3 text-left font-medium">Date</th>
                  <th className="px-3 py-3 text-left font-medium">Product</th>
                  <th className="px-3 py-3 text-center font-medium">Quantity</th>
                  <th className="px-3 py-3 text-left font-medium">Note</th>
                  <th className="px-3 py-3 text-center font-medium w-20">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredDamages.map((d, i) => (
                  <tr key={d.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-3 py-3 text-slate-500">{i + 1}</td>
                    <td className="px-3 py-3 text-slate-500 dark:text-slate-400 text-xs">{d.date}</td>
                    <td className="px-3 py-3 font-medium text-slate-800 dark:text-white">{d.product}</td>
                    <td className="px-3 py-3 text-center"><Badge variant="warning" className="text-xs">{d.quantity} pc</Badge></td>
                    <td className="px-3 py-3 text-slate-500 dark:text-slate-400 text-xs max-w-[200px] truncate">{d.note}</td>
                    <td className="px-3 py-3 text-center">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => setDeleteId(d.id)}><Trash2 size={16} /></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Delete Modal */}
        {deleteId && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <Card className="w-full max-w-sm text-center">
              <CardContent className="p-6">
                <AlertTriangle size={40} className="mx-auto text-amber-500 mb-3" />
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Are you sure?</h3>
                <p className="text-sm text-slate-500 mb-4">This action cannot be undone.</p>
                <div className="flex justify-center gap-3">
                  <Button variant="destructive" onClick={() => handleDelete(deleteId)}>Yes, Delete</Button>
                  <Button variant="outline" onClick={() => setDeleteId(null)}>Cancel</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
