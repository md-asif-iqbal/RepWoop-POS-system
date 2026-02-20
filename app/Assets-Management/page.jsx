"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Building2, Search, RotateCcw, Printer, MoreVertical, Plus, TrendingUp, Package } from 'lucide-react';

export default function Assets() {
  const pathname = usePathname();
  const tabs = [
    { label: 'Assets', href: '/Assets-Management' },
    { label: '+ Add Asset', href: '/Assets-Management/Create' },
  ];

  const initialAssets = [
    { id: 1, name: 'Office Computer', purchasePrice: 45000, forcedSalePrice: 30000, quantity: 5, note: 'Dell Inspiron 15' },
    { id: 2, name: 'Printer', purchasePrice: 12000, forcedSalePrice: 8000, quantity: 2, note: 'HP LaserJet Pro' },
    { id: 3, name: 'Air Conditioner', purchasePrice: 55000, forcedSalePrice: 35000, quantity: 3, note: 'Samsung 1.5 Ton' },
    { id: 4, name: 'Office Desk', purchasePrice: 8000, forcedSalePrice: 5000, quantity: 8, note: 'Wooden with drawers' },
    { id: 5, name: 'CCTV Camera', purchasePrice: 25000, forcedSalePrice: 15000, quantity: 4, note: 'Hikvision 4 Channel' },
    { id: 6, name: 'Cash Register', purchasePrice: 18000, forcedSalePrice: 12000, quantity: 2, note: 'Electronic POS Terminal' },
    { id: 7, name: 'Generator', purchasePrice: 85000, forcedSalePrice: 55000, quantity: 1, note: 'Honda 5KVA' },
    { id: 8, name: 'Display Shelf', purchasePrice: 15000, forcedSalePrice: 9000, quantity: 6, note: 'Glass showcase' },
  ];

  const [assets, setAssets] = useState(initialAssets);
  const [assetNameFilter, setAssetNameFilter] = useState('');
  const [openAction, setOpenAction] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);

  const handleDeleteAsset = (id) => { setAssets(assets.filter(a => a.id !== id)); setDeleteModal(null); };
  const handleSaveEdit = () => { setAssets(assets.map(a => a.id === editModal.id ? editModal : a)); setEditModal(null); };

  const handleFilter = () => { setAssets(initialAssets.filter(a => a.name.toLowerCase().includes(assetNameFilter.toLowerCase()))); };
  const handleReset = () => { setAssetNameFilter(''); setAssets(initialAssets); };

  const handlePrint = () => {
    const el = document.getElementById("table-to-print"); if (!el) return;
    const w = window.open('', '_blank');
    w.document.write(`<html><head><title>Assets</title><style>body{font-family:sans-serif}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px}th{background:#4f46e5;color:#fff}</style></head><body onload="window.print()">${el.outerHTML}</body></html>`);
    w.document.close();
  };

  const totalPurchase = assets.reduce((s, a) => s + a.purchasePrice * a.quantity, 0);
  const totalSale = assets.reduce((s, a) => s + a.forcedSalePrice * a.quantity, 0);
  const totalQty = assets.reduce((s, a) => s + a.quantity, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"><Building2 className="h-6 w-6 text-white" /></div>
          <div><h1 className="text-2xl font-bold text-gray-900">Asset Management</h1><p className="text-sm text-gray-500">Track and manage your business assets</p></div>
        </div>
        <Link href="/Assets-Management/Create"><Button><Plus className="h-4 w-4 mr-2" />Add Asset</Button></Link>
      </div>
      <Card><CardContent className="p-1"><div className="flex flex-wrap gap-1">{tabs.map(tab => (<Link key={tab.href} href={tab.href}><Button variant={pathname === tab.href ? 'default' : 'ghost'} size="sm" className="text-xs">{tab.label}</Button></Link>))}</div></CardContent></Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 border-0"><CardContent className="p-4 text-white"><div className="flex items-center justify-between"><div><p className="text-sm opacity-80">Total Purchase Value</p><p className="text-2xl font-bold">৳{totalPurchase.toLocaleString()}</p></div><TrendingUp className="h-8 w-8 opacity-50" /></div></CardContent></Card>
        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 border-0"><CardContent className="p-4 text-white"><div className="flex items-center justify-between"><div><p className="text-sm opacity-80">Total Sale Value</p><p className="text-2xl font-bold">৳{totalSale.toLocaleString()}</p></div><TrendingUp className="h-8 w-8 opacity-50" /></div></CardContent></Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 border-0"><CardContent className="p-4 text-white"><div className="flex items-center justify-between"><div><p className="text-sm opacity-80">Total Items</p><p className="text-2xl font-bold">{totalQty}</p></div><Package className="h-8 w-8 opacity-50" /></div></CardContent></Card>
      </div>
      <Card><CardContent className="p-4"><div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" /><Input placeholder="Search asset name..." className="pl-9" value={assetNameFilter} onChange={e => setAssetNameFilter(e.target.value)} /></div>
        <Button onClick={handleFilter}><Search className="h-4 w-4 mr-1" />Filter</Button>
        <Button variant="outline" onClick={handleReset}><RotateCcw className="h-4 w-4 mr-1" />Reset</Button>
        <Button variant="outline" onClick={handlePrint}><Printer className="h-4 w-4 mr-1" />Print</Button>
      </div></CardContent></Card>
      <Card><CardContent className="p-0"><div className="overflow-x-auto">
        <table id="table-to-print" className="w-full text-sm">
          <thead><tr className="bg-gradient-to-r from-indigo-600 to-indigo-700">{['#','Asset Name','Purchase Price','Sale Price','Qty','Note','Action'].map(h=>(<th key={h} className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">{h}</th>))}</tr></thead>
          <tbody className="divide-y divide-gray-100">
            {assets.map((asset, idx) => (
              <tr key={asset.id} className="hover:bg-gray-50/80 transition-colors">
                <td className="px-4 py-3 text-gray-500">{idx + 1}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{asset.name}</td>
                <td className="px-4 py-3 text-gray-600">৳{asset.purchasePrice.toLocaleString()}</td>
                <td className="px-4 py-3 text-gray-600">৳{asset.forcedSalePrice.toLocaleString()}</td>
                <td className="px-4 py-3"><Badge variant="info">{asset.quantity}</Badge></td>
                <td className="px-4 py-3 text-gray-500 text-xs">{asset.note}</td>
                <td className="px-4 py-3"><div className="relative"><Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpenAction(openAction === asset.id ? null : asset.id)}><MoreVertical className="h-4 w-4" /></Button>{openAction === asset.id && (<div className="absolute right-0 mt-1 w-32 bg-white border rounded-lg shadow-lg z-10 py-1"><button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 text-blue-600" onClick={() => { setEditModal({...asset}); setOpenAction(null); }}><Pencil size={13}/>Edit</button><button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 text-red-500" onClick={() => { setDeleteModal(asset); setOpenAction(null); }}><Trash2 size={13}/>Delete</button></div>)}</div></td>
              </tr>
            ))}
            <tr className="bg-gray-50 font-semibold">
              <td className="px-4 py-3" colSpan={2}>Total</td>
              <td className="px-4 py-3 text-indigo-600">৳{assets.reduce((s,a)=>s+a.purchasePrice,0).toLocaleString()}</td>
              <td className="px-4 py-3 text-emerald-600">৳{assets.reduce((s,a)=>s+a.forcedSalePrice,0).toLocaleString()}</td>
              <td className="px-4 py-3" colSpan={3}></td>
            </tr>
          </tbody>
        </table>
      </div></CardContent></Card>

      {/* Edit Modal */}
      {editModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setEditModal(null)}>
          <Card className="w-full max-w-md" onClick={e => e.stopPropagation()}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Edit Asset</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setEditModal(null)}><X size={18}/></Button>
            </CardHeader>
            <CardContent className="space-y-3">
              <div><label className="text-xs font-medium text-slate-600 mb-1 block">Asset Name</label><Input value={editModal.name} onChange={e => setEditModal({...editModal, name: e.target.value})} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-xs font-medium text-slate-600 mb-1 block">Purchase Price (৳)</label><Input type="number" value={editModal.purchasePrice} onChange={e => setEditModal({...editModal, purchasePrice: Number(e.target.value)})} /></div>
                <div><label className="text-xs font-medium text-slate-600 mb-1 block">Sale Price (৳)</label><Input type="number" value={editModal.forcedSalePrice} onChange={e => setEditModal({...editModal, forcedSalePrice: Number(e.target.value)})} /></div>
              </div>
              <div><label className="text-xs font-medium text-slate-600 mb-1 block">Quantity</label><Input type="number" value={editModal.quantity} onChange={e => setEditModal({...editModal, quantity: Number(e.target.value)})} /></div>
              <div><label className="text-xs font-medium text-slate-600 mb-1 block">Note</label><Input value={editModal.note} onChange={e => setEditModal({...editModal, note: e.target.value})} /></div>
              <div className="flex gap-2 pt-2">
                <Button onClick={handleSaveEdit} className="flex-1">Save Changes</Button>
                <Button variant="outline" onClick={() => setEditModal(null)} className="flex-1">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Delete Modal */}
      {deleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setDeleteModal(null)}>
          <Card className="w-full max-w-sm" onClick={e => e.stopPropagation()}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg text-red-600">Delete Asset</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setDeleteModal(null)}><X size={18}/></Button>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Delete asset <strong>{deleteModal.name}</strong>? This cannot be undone.</p>
              <div className="flex gap-2">
                <Button variant="destructive" onClick={() => handleDeleteAsset(deleteModal.id)} className="flex-1">Delete</Button>
                <Button variant="outline" onClick={() => setDeleteModal(null)} className="flex-1">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
