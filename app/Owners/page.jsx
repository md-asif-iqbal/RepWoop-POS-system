"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Users, MoreVertical, TrendingUp, TrendingDown, Wallet, X, Pencil, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';

export default function OwnersPage() {
  const initialOwners = [
    { id: 1, name: 'John Doe', mobile: '123456789', address: 'New York', invested: 50000, withdrawn: 12000, balance: 38000 },
    { id: 2, name: 'Jane Smith', mobile: '987654321', address: 'Los Angeles', invested: 120000, withdrawn: 35000, balance: 85000 },
    { id: 3, name: 'Mark Wilson', mobile: '555888999', address: 'Chicago', invested: 75000, withdrawn: 20000, balance: 55000 },
    { id: 4, name: 'Sara Connor', mobile: '444222333', address: 'San Francisco', invested: 95000, withdrawn: 30000, balance: 65000 },
  ];

  const [owners, setOwners] = useState(initialOwners);
  const [openMenu, setOpenMenu] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const totalInvested = owners.reduce((s, o) => s + o.invested, 0);
  const totalWithdrawn = owners.reduce((s, o) => s + o.withdrawn, 0);
  const totalBalance = owners.reduce((s, o) => s + o.balance, 0);

  const handleDelete = (id) => { setOwners(owners.filter(o => o.id !== id)); setDeleteModal(null); };
  const handleSaveEdit = () => { setOwners(owners.map(o => o.id === editModal.id ? {...editModal, balance: editModal.invested - editModal.withdrawn} : o)); setEditModal(null); };

  return (
    <div className="font-inter text-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl text-white shadow-lg"><Users size={24} /></div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Owners</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{owners.length} registered owners</p>
            </div>
          </div>
          <Link href="/Owners/Create"><Button className="gap-1.5" size="sm">+ Add Owner</Button></Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0"><CardContent className="p-4"><p className="text-indigo-100 text-xs">Total Owners</p><p className="text-2xl font-bold">{owners.length}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0"><CardContent className="p-4"><div className="flex items-center gap-1 text-emerald-100 text-xs"><TrendingUp size={14}/>Total Invested</div><p className="text-2xl font-bold">৳{totalInvested.toLocaleString()}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0"><CardContent className="p-4"><div className="flex items-center gap-1 text-amber-100 text-xs"><TrendingDown size={14}/>Total Withdrawn</div><p className="text-2xl font-bold">৳{totalWithdrawn.toLocaleString()}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white border-0"><CardContent className="p-4"><div className="flex items-center gap-1 text-cyan-100 text-xs"><Wallet size={14}/>Total Balance</div><p className="text-2xl font-bold">৳{totalBalance.toLocaleString()}</p></CardContent></Card>
        </div>

        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <th className="px-3 py-3 text-left font-medium w-12">#</th>
                  <th className="px-3 py-3 text-left font-medium">Owner</th>
                  <th className="px-3 py-3 text-left font-medium">Mobile</th>
                  <th className="px-3 py-3 text-left font-medium">Address</th>
                  <th className="px-3 py-3 text-right font-medium">Invested</th>
                  <th className="px-3 py-3 text-right font-medium">Withdrawn</th>
                  <th className="px-3 py-3 text-right font-medium">Balance</th>
                  <th className="px-3 py-3 text-center font-medium w-16">Action</th>
                </tr>
              </thead>
              <tbody>
                {owners.map((owner, i) => (
                  <tr key={owner.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-3 py-3 text-slate-500">{i + 1}</td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">{owner.name.charAt(0)}</div>
                        <span className="font-medium text-slate-800 dark:text-white">{owner.name}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-slate-500 dark:text-slate-400">{owner.mobile}</td>
                    <td className="px-3 py-3 text-slate-500 dark:text-slate-400">{owner.address}</td>
                    <td className="px-3 py-3 text-right font-medium text-emerald-600">৳{owner.invested.toLocaleString()}</td>
                    <td className="px-3 py-3 text-right font-medium text-amber-600">৳{owner.withdrawn.toLocaleString()}</td>
                    <td className="px-3 py-3 text-right"><Badge variant={owner.balance > 50000 ? 'success' : 'info'}>৳{owner.balance.toLocaleString()}</Badge></td>
                    <td className="px-3 py-3 text-center relative">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpenMenu(openMenu === owner.id ? null : owner.id)}><MoreVertical size={16} /></Button>
                      {openMenu === owner.id && (
                        <div className="absolute right-4 top-10 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 py-1 z-20 w-32">
                          <button className="w-full text-left px-3 py-1.5 hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs flex items-center gap-1" onClick={() => { setEditModal({...owner}); setOpenMenu(null); }}><Pencil size={12}/>Edit</button>
                          <button className="w-full text-left px-3 py-1.5 hover:bg-red-50 dark:hover:bg-slate-800 text-red-500 text-xs flex items-center gap-1" onClick={() => { setDeleteModal(owner); setOpenMenu(null); }}><Trash2 size={12}/>Delete</button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Edit Modal */}
      {editModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setEditModal(null)}>
          <Card className="w-full max-w-md" onClick={e => e.stopPropagation()}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Edit Owner</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setEditModal(null)}><X size={18}/></Button>
            </CardHeader>
            <CardContent className="space-y-3">
              <div><label className="text-xs font-medium text-slate-600 mb-1 block">Name</label><Input value={editModal.name} onChange={e => setEditModal({...editModal, name: e.target.value})} /></div>
              <div><label className="text-xs font-medium text-slate-600 mb-1 block">Mobile</label><Input value={editModal.mobile} onChange={e => setEditModal({...editModal, mobile: e.target.value})} /></div>
              <div><label className="text-xs font-medium text-slate-600 mb-1 block">Address</label><Input value={editModal.address} onChange={e => setEditModal({...editModal, address: e.target.value})} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-xs font-medium text-slate-600 mb-1 block">Invested (৳)</label><Input type="number" value={editModal.invested} onChange={e => setEditModal({...editModal, invested: Number(e.target.value)})} /></div>
                <div><label className="text-xs font-medium text-slate-600 mb-1 block">Withdrawn (৳)</label><Input type="number" value={editModal.withdrawn} onChange={e => setEditModal({...editModal, withdrawn: Number(e.target.value)})} /></div>
              </div>
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
              <CardTitle className="text-lg text-red-600">Delete Owner</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setDeleteModal(null)}><X size={18}/></Button>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Are you sure you want to delete <strong>{deleteModal.name}</strong>? This action cannot be undone.</p>
              <div className="flex gap-2">
                <Button variant="destructive" onClick={() => handleDelete(deleteModal.id)} className="flex-1">Delete</Button>
                <Button variant="outline" onClick={() => setDeleteModal(null)} className="flex-1">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
