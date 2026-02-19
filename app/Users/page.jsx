"use client"
import { MoreVertical, UserCog, Shield } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

export default function Users() {
  const users = [
    { id: 1, name: 'SOFT GHOR', email: 'operator@softghor.com', role: 'Operator' },
    { id: 2, name: 'John Doe', email: 'johndoe@gmail.com', role: 'Admin' },
    { id: 3, name: 'Jane Smith', email: 'janesmith@gmail.com', role: 'Editor' },
    { id: 4, name: 'David Miller', email: 'davidmiller@gmail.com', role: 'Moderator' },
    { id: 5, name: 'Emily Johnson', email: 'emilyjohnson@gmail.com', role: 'Viewer' },
  ];

  const [openMenu, setOpenMenu] = useState(null);
  const roleColors = { Admin: 'destructive', Operator: 'warning', Editor: 'info', Moderator: 'success', Viewer: 'secondary' };
  const bgColors = ['from-indigo-500 to-blue-500', 'from-rose-500 to-pink-500', 'from-emerald-500 to-teal-500', 'from-amber-500 to-orange-500', 'from-purple-500 to-violet-500'];

  return (
    <div className="font-inter text-sm">
      <div className="container mx-auto px-4 py-6 md:mt-[5%] mt-[20%]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl text-white shadow-lg"><UserCog size={24} /></div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Users</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{users.length} registered users</p>
            </div>
          </div>
          <Link href="/Users/Create"><Button className="gap-1.5" size="sm">+ New User</Button></Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0"><CardContent className="p-4"><p className="text-indigo-100 text-xs">Total Users</p><p className="text-2xl font-bold">{users.length}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-rose-500 to-rose-600 text-white border-0"><CardContent className="p-4"><p className="text-rose-100 text-xs">Admins</p><p className="text-2xl font-bold">{users.filter(u => u.role === 'Admin').length}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0"><CardContent className="p-4"><p className="text-amber-100 text-xs">Operators</p><p className="text-2xl font-bold">{users.filter(u => u.role === 'Operator').length}</p></CardContent></Card>
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0"><CardContent className="p-4"><p className="text-emerald-100 text-xs">Unique Roles</p><p className="text-2xl font-bold">{[...new Set(users.map(u => u.role))].length}</p></CardContent></Card>
        </div>

        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <th className="px-3 py-3 text-left font-medium w-12">#</th>
                  <th className="px-3 py-3 text-left font-medium">User</th>
                  <th className="px-3 py-3 text-left font-medium">Email</th>
                  <th className="px-3 py-3 text-center font-medium">Role</th>
                  <th className="px-3 py-3 text-center font-medium w-16">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={user.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-3 py-3 text-slate-500">{i + 1}</td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${bgColors[i % bgColors.length]} flex items-center justify-center text-white text-sm font-bold`}>{user.name.charAt(0)}</div>
                        <span className="font-medium text-slate-800 dark:text-white">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-slate-500 dark:text-slate-400">{user.email}</td>
                    <td className="px-3 py-3 text-center"><Badge variant={roleColors[user.role] || 'default'} className="text-xs"><Shield size={11} className="mr-1" />{user.role}</Badge></td>
                    <td className="px-3 py-3 text-center relative">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpenMenu(openMenu === user.id ? null : user.id)}><MoreVertical size={16} /></Button>
                      {openMenu === user.id && (
                        <div className="absolute right-4 top-10 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 py-1 z-20 w-28">
                          <Link href="/Users/Create"><button className="w-full text-left px-3 py-1.5 hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">Edit</button></Link>
                          <button className="w-full text-left px-3 py-1.5 hover:bg-red-50 dark:hover:bg-slate-800 text-red-500 text-xs">Delete</button>
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
    </div>
  );
}
