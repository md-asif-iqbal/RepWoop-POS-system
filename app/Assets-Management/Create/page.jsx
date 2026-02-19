"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Building2, Package, DollarSign, Hash, FileText, Save } from 'lucide-react';

export default function CreateAssets() {
  const pathname = usePathname();
  const tabs = [
    { label: 'Assets', href: '/Assets-Management' },
    { label: '+ Add Asset', href: '/Assets-Management/Create' },
  ];
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [forcedSalePrice, setForcedSalePrice] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id: Date.now(), name, quantity: parseInt(quantity), purchasePrice: parseFloat(purchasePrice), forcedSalePrice: parseFloat(forcedSalePrice), note });
    setName(''); setQuantity(''); setPurchasePrice(''); setForcedSalePrice(''); setNote('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"><Building2 className="h-6 w-6 text-white" /></div>
        <div><h1 className="text-2xl font-bold text-gray-900">Add New Asset</h1><p className="text-sm text-gray-500">Register a new business asset</p></div>
      </div>
      <Card><CardContent className="p-1"><div className="flex flex-wrap gap-1">{tabs.map(tab => (<Link key={tab.href} href={tab.href}><Button variant={pathname === tab.href ? 'default' : 'ghost'} size="sm" className="text-xs">{tab.label}</Button></Link>))}</div></CardContent></Card>
      <Card><CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2"><label className="text-sm font-medium text-gray-700 flex items-center gap-2"><Package className="h-4 w-4 text-indigo-500" />Asset Name <span className="text-red-500">*</span></label><Input placeholder="Enter asset name" value={name} onChange={e => setName(e.target.value)} required /></div>
            <div className="space-y-2"><label className="text-sm font-medium text-gray-700 flex items-center gap-2"><Hash className="h-4 w-4 text-indigo-500" />Quantity <span className="text-red-500">*</span></label><Input type="number" placeholder="Enter quantity" value={quantity} onChange={e => setQuantity(e.target.value)} required /></div>
            <div className="space-y-2"><label className="text-sm font-medium text-gray-700 flex items-center gap-2"><DollarSign className="h-4 w-4 text-emerald-500" />Purchase Price <span className="text-red-500">*</span></label><Input type="number" step="0.01" placeholder="৳ 0.00" value={purchasePrice} onChange={e => setPurchasePrice(e.target.value)} required /></div>
            <div className="space-y-2"><label className="text-sm font-medium text-gray-700 flex items-center gap-2"><DollarSign className="h-4 w-4 text-orange-500" />Forced Sale Price <span className="text-red-500">*</span></label><Input type="number" step="0.01" placeholder="৳ 0.00" value={forcedSalePrice} onChange={e => setForcedSalePrice(e.target.value)} required /></div>
          </div>
          <div className="space-y-2"><label className="text-sm font-medium text-gray-700 flex items-center gap-2"><FileText className="h-4 w-4 text-gray-500" />Note</label><textarea value={note} onChange={e => setNote(e.target.value)} className="flex w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[100px]" placeholder="Enter any additional notes..." rows={4} /></div>
          <div className="flex justify-end"><Button type="submit" className="px-8"><Save className="h-4 w-4 mr-2" />Save Asset</Button></div>
        </form>
      </CardContent></Card>
    </div>
  );
}
