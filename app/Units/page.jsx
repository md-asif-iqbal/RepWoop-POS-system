"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Ruler, ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

export default function Units() {
  const units = [
    { id: 1, name: 'pc', relatedTo: '-', relatedSign: '-', relatedBy: '-', result: 'pc = 1' },
    { id: 2, name: 'Dozen', relatedTo: 'pc', relatedSign: '*', relatedBy: '12', result: 'Dozen = 1 pc × 12' },
    { id: 3, name: 'gm', relatedTo: '-', relatedSign: '-', relatedBy: '-', result: 'gm = 1' },
    { id: 4, name: 'Kg', relatedTo: 'gm', relatedSign: '*', relatedBy: '1000', result: 'Kg = 1 gm × 1000' },
    { id: 5, name: 'ml', relatedTo: '-', relatedSign: '-', relatedBy: '-', result: 'ml = 1' },
    { id: 6, name: 'Litre', relatedTo: 'ml', relatedSign: '*', relatedBy: '1000', result: 'Litre = 1 ml × 1000' },
    { id: 7, name: 'Box', relatedTo: 'pc', relatedSign: '*', relatedBy: '12', result: 'Box = 1 pc × 12' },
    { id: 8, name: 'Pack', relatedTo: 'pc', relatedSign: '*', relatedBy: '6', result: 'Pack = 1 pc × 6' },
    { id: 9, name: 'Meter', relatedTo: '-', relatedSign: '-', relatedBy: '-', result: 'Meter = 1' },
    { id: 10, name: 'Sack', relatedTo: 'Kg', relatedSign: '*', relatedBy: '50', result: 'Sack = 1 Kg × 50' },
    { id: 11, name: 'Tonne', relatedTo: 'Kg', relatedSign: '*', relatedBy: '1000', result: 'Tonne = 1 Kg × 1000' },
    { id: 12, name: 'Ounce', relatedTo: 'gm', relatedSign: '*', relatedBy: '28', result: 'Ounce = 1 gm × 28' },
    { id: 13, name: 'Pound', relatedTo: 'Ounce', relatedSign: '*', relatedBy: '16', result: 'Pound = 1 Ounce × 16' },
    { id: 14, name: 'Pair', relatedTo: 'pc', relatedSign: '*', relatedBy: '2', result: 'Pair = 1 pc × 2' },
    { id: 15, name: 'Sq Meter', relatedTo: 'Meter', relatedSign: '*', relatedBy: '100', result: 'Sq Meter = 1 Meter × 100' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [openMenu, setOpenMenu] = useState(null);
  const perPage = 10;
  const totalPages = Math.ceil(units.length / perPage);
  const currentData = units.slice((currentPage - 1) * perPage, currentPage * perPage);
  const baseUnits = units.filter(u => u.relatedTo === '-').length;

  return (
    <div className="font-inter text-sm">
      <div className="container mx-auto px-4 py-6 md:mt-[5%] mt-[20%]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl text-white shadow-lg"><Ruler size={24} /></div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Units</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{units.length} measurement units</p>
            </div>
          </div>
          <Link href="/Units/Create"><Button className="gap-1.5" size="sm">+ Add Unit</Button></Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0"><CardContent className="p-4"><p className="text-indigo-100 text-xs">Total Units</p><p className="text-2xl font-bold">{units.length}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0"><CardContent className="p-4"><p className="text-emerald-100 text-xs">Base Units</p><p className="text-2xl font-bold">{baseUnits}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0"><CardContent className="p-4"><p className="text-amber-100 text-xs">Derived Units</p><p className="text-2xl font-bold">{units.length - baseUnits}</p></CardContent></Card>
        </div>

        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <th className="px-3 py-3 text-left font-medium w-12">#</th>
                  <th className="px-3 py-3 text-left font-medium">Name</th>
                  <th className="px-3 py-3 text-left font-medium">Related To</th>
                  <th className="px-3 py-3 text-center font-medium">Sign</th>
                  <th className="px-3 py-3 text-center font-medium">Factor</th>
                  <th className="px-3 py-3 text-left font-medium">Result</th>
                  <th className="px-3 py-3 text-center font-medium w-16">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((unit, i) => (
                  <tr key={unit.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-3 py-3 text-slate-500">{(currentPage - 1) * perPage + i + 1}</td>
                    <td className="px-3 py-3 font-medium text-slate-800 dark:text-white">{unit.name}</td>
                    <td className="px-3 py-3">{unit.relatedTo === '-' ? <Badge variant="secondary" className="text-xs">Base</Badge> : <span className="text-slate-600 dark:text-slate-300">{unit.relatedTo}</span>}</td>
                    <td className="px-3 py-3 text-center font-mono text-slate-500">{unit.relatedSign}</td>
                    <td className="px-3 py-3 text-center font-mono text-slate-500">{unit.relatedBy}</td>
                    <td className="px-3 py-3 text-xs font-mono text-indigo-600 dark:text-indigo-400">{unit.result}</td>
                    <td className="px-3 py-3 text-center relative">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpenMenu(openMenu === unit.id ? null : unit.id)}><MoreVertical size={16} /></Button>
                      {openMenu === unit.id && (
                        <div className="absolute right-4 top-10 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 py-1 z-20 w-28">
                          <button className="w-full text-left px-3 py-1.5 hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">Edit</button>
                          <button className="w-full text-left px-3 py-1.5 hover:bg-red-50 dark:hover:bg-slate-800 text-red-500 text-xs">Delete</button>
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
              <p className="text-xs text-slate-500">Page {currentPage} of {totalPages}</p>
              <div className="flex gap-1">
                <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}><ChevronLeft size={16} /></Button>
                {Array.from({ length: totalPages }, (_, i) => <Button key={i} variant={currentPage === i + 1 ? 'default' : 'outline'} size="icon" className="h-8 w-8 text-xs" onClick={() => setCurrentPage(i + 1)}>{i + 1}</Button>)}
                <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}><ChevronRight size={16} /></Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
