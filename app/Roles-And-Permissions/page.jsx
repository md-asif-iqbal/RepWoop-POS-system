"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { ShieldCheck, Plus, Pencil, Trash2, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

export default function Roles() {
  const [roleName, setRoleName] = useState('');
  const [roles, setRoles] = useState([
    { id: 1, name: 'Super Admin', users: 1 },
    { id: 2, name: 'Admin', users: 1 },
    { id: 3, name: 'Operator', users: 1 },
    { id: 4, name: 'Employee', users: 3 },
    { id: 5, name: 'Cashier', users: 2 },
  ]);

  const handleAddRole = () => {
    if (roleName.trim()) {
      setRoles([...roles, { id: Date.now(), name: roleName, users: 0 }]);
      setRoleName('');
    }
  };

  const handleDelete = (id) => setRoles(roles.filter(r => r.id !== id));

  return (
    <div className="font-inter text-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl text-white shadow-lg"><ShieldCheck size={24} /></div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Roles & Permissions</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">{roles.length} roles configured</p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0"><CardContent className="p-4"><p className="text-indigo-100 text-xs">Total Roles</p><p className="text-2xl font-bold">{roles.length}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0"><CardContent className="p-4"><p className="text-emerald-100 text-xs">Total Users</p><p className="text-2xl font-bold">{roles.reduce((s, r) => s + r.users, 0)}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0"><CardContent className="p-4"><p className="text-amber-100 text-xs">Empty Roles</p><p className="text-2xl font-bold">{roles.filter(r => r.users === 0).length}</p></CardContent></Card>
        </div>

        <Card className="mb-6">
          <CardHeader className="pb-3"><CardTitle className="text-base">Add New Role</CardTitle></CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Input placeholder="Enter role name..." value={roleName} onChange={e => setRoleName(e.target.value)} className="flex-1" onKeyDown={e => e.key === 'Enter' && handleAddRole()} />
              <Button onClick={handleAddRole} className="gap-1.5"><Plus size={16} />Add Role</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <th className="px-3 py-3 text-left font-medium w-12">#</th>
                  <th className="px-3 py-3 text-left font-medium">Role Name</th>
                  <th className="px-3 py-3 text-center font-medium">Users</th>
                  <th className="px-3 py-3 text-center font-medium w-48">Actions</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role, i) => (
                  <tr key={role.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-3 py-3 text-slate-500">{i + 1}</td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-indigo-500" />
                        <span className="font-medium text-slate-800 dark:text-white">{role.name}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-center"><Badge variant={role.users > 0 ? 'info' : 'secondary'} className="text-xs gap-1"><Users size={11} />{role.users}</Badge></td>
                    <td className="px-3 py-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Link href="/Roles-And-Permissions/Create"><Button variant="outline" size="sm" className="h-7 text-xs gap-1"><ShieldCheck size={12} />Permission</Button></Link>
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-blue-500 hover:text-blue-600 hover:bg-blue-50" onClick={() => { const n = prompt('Edit role name:', role.name); if (n) setRoles(roles.map(r => r.id === role.id ? { ...r, name: n } : r)); }}><Pencil size={14} /></Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => handleDelete(role.id)}><Trash2 size={14} /></Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
