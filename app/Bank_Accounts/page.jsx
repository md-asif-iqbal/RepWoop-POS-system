"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Landmark, Plus, ArrowUpDown, History, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

export default function AccountPage() {
  const [accounts, setAccounts] = useState([
    { id: 1, name: 'Business Account', openingBalance: 500000, currentBalance: 1200000 },
    { id: 2, name: 'Savings Account', openingBalance: 100000, currentBalance: 350000 },
    { id: 3, name: 'Petty Cash', openingBalance: 0, currentBalance: 75000 },
  ]);

  const [newName, setNewName] = useState('');
  const [newBalance, setNewBalance] = useState('');
  const [modal, setModal] = useState({ type: null, account: null });
  const [form, setForm] = useState({ amount: '', note: '', fromAccount: '' });

  const handleAddAccount = () => {
    if (!newName) return;
    setAccounts([...accounts, { id: Date.now(), name: newName, openingBalance: Number(newBalance) || 0, currentBalance: Number(newBalance) || 0 }]);
    setNewName(''); setNewBalance('');
  };

  const handleAction = () => {
    const amt = parseFloat(form.amount);
    if (!amt || !modal.account) return;
    if (modal.type === 'add') {
      setAccounts(accounts.map(a => a.id === modal.account.id ? { ...a, currentBalance: a.currentBalance + amt } : a));
    } else if (modal.type === 'transfer') {
      const from = accounts.find(a => a.name === form.fromAccount);
      if (!from) return;
      setAccounts(accounts.map(a => {
        if (a.id === modal.account.id) return { ...a, currentBalance: a.currentBalance + amt };
        if (a.id === from.id) return { ...a, currentBalance: a.currentBalance - amt };
        return a;
      }));
    }
    setModal({ type: null, account: null }); setForm({ amount: '', note: '', fromAccount: '' });
  };

  const totalBalance = accounts.reduce((s, a) => s + a.currentBalance, 0);

  return (
    <div className="font-inter text-sm">
      <div className="container mx-auto px-4 py-6 md:mt-[5%] mt-[20%]">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white shadow-lg"><Landmark size={24} /></div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Bank Accounts</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">{accounts.length} accounts · Total ৳{totalBalance.toLocaleString()}</p>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader className="pb-3"><CardTitle className="text-base">Add New Account</CardTitle></CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-3">
              <Input placeholder="Account Name" value={newName} onChange={(e) => setNewName(e.target.value)} className="flex-1" />
              <Input type="number" placeholder="Opening Balance" value={newBalance} onChange={(e) => setNewBalance(e.target.value)} className="flex-1" />
              <Button onClick={handleAddAccount} className="gap-1.5"><Plus size={16} />Save</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {accounts.map(a => (
            <Card key={a.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-white text-base">{a.name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">Opening: ৳{a.openingBalance.toLocaleString()}</p>
                  </div>
                  <Badge variant={a.currentBalance > 100000 ? 'success' : 'warning'}>Active</Badge>
                </div>
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">৳{a.currentBalance.toLocaleString()}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 gap-1 text-xs" onClick={() => setModal({ type: 'add', account: a })}><Plus size={13} />Add</Button>
                  <Button size="sm" variant="outline" className="flex-1 gap-1 text-xs" onClick={() => setModal({ type: 'transfer', account: a })}><ArrowUpDown size={13} />Transfer</Button>
                  <Link href="/Bank_Accounts/History"><Button size="sm" className="flex-1 gap-1 text-xs"><History size={13} />History</Button></Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <th className="px-3 py-3 text-left font-medium w-12">#</th>
                  <th className="px-3 py-3 text-left font-medium">Account Name</th>
                  <th className="px-3 py-3 text-right font-medium">Opening Balance</th>
                  <th className="px-3 py-3 text-right font-medium">Current Balance</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((a, i) => (
                  <tr key={a.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-3 py-3 text-slate-500">{i + 1}</td>
                    <td className="px-3 py-3 font-medium text-slate-800 dark:text-white">{a.name}</td>
                    <td className="px-3 py-3 text-right text-slate-500">৳{a.openingBalance.toLocaleString()}</td>
                    <td className="px-3 py-3 text-right font-semibold text-indigo-600 dark:text-indigo-400">৳{a.currentBalance.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Modal */}
        {modal.type && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <Card className="w-full max-w-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">{modal.type === 'add' ? 'Add Balance' : 'Transfer'} — {modal.account?.name}</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setModal({ type: null, account: null })}><X size={16} /></Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div><label className="block text-xs font-medium text-slate-500 mb-1">Amount</label><Input type="number" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} placeholder="Enter amount" /></div>
                <div><label className="block text-xs font-medium text-slate-500 mb-1">Note</label><Input value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} placeholder="Optional note" /></div>
                {modal.type === 'transfer' && (
                  <div><label className="block text-xs font-medium text-slate-500 mb-1">From Account</label>
                    <select className="w-full h-10 rounded-lg border border-slate-200 dark:border-slate-700 px-3 text-sm bg-white dark:bg-slate-900" value={form.fromAccount} onChange={e => setForm({ ...form, fromAccount: e.target.value })}>
                      <option value="">Select Account</option>
                      {accounts.filter(a => a.id !== modal.account?.id).map(a => <option key={a.id} value={a.name}>{a.name}</option>)}
                    </select>
                  </div>
                )}
                <div className="flex justify-end gap-2 pt-2">
                  <Button onClick={handleAction}>{modal.type === 'add' ? 'Add Balance' : 'Transfer'}</Button>
                  <Button variant="outline" onClick={() => setModal({ type: null, account: null })}>Cancel</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
