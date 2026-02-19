"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { DollarSign, Calendar, User, Clock, CreditCard, Save } from 'lucide-react';

export default function EmployeeSalary() {
  const pathname = usePathname();
  const tabs = [
    { label: 'Employees', href: '/Employee-and-Salary' },
    { label: '+ New Employee', href: '/Employee-and-Salary/New-Employee' },
    { label: 'Salary List', href: '/Employee-and-Salary/Salary' },
    { label: '+ New Salary', href: '/Employee-and-Salary/Salary/Create' },
    { label: 'Payments', href: '/Employee-and-Salary/Payments' },
  ];

  const [formData, setFormData] = useState({
    salaryMonth: new Date().toISOString().split('T')[0],
    employee: '', basicSalary: '', overtimeRate: '', totalOvertime: '', totalSalary: '', advanceAmount: '0', payAmount: '', transactionAccount: 'CASH',
  });

  const transactionAccounts = ['CASH', 'IBBL', 'Nagud', 'Bkash', 'Shobuj', 'City Bank'];
  const employees = [
    { id: 1, name: 'Sanower Hossain' }, { id: 2, name: 'Md Shamsuzzaman' }, { id: 3, name: 'Rafiq Ahmed' },
    { id: 4, name: 'Kamal Hossain' }, { id: 5, name: 'Sakib Hasan' },
  ];

  const handleInputChange = (e) => { const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: value })); };
  const handleSubmit = (e) => { e.preventDefault(); console.log('Salary Submitted:', formData); };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"><DollarSign className="h-6 w-6 text-white" /></div>
        <div><h1 className="text-2xl font-bold text-gray-900">Add Employee Salary</h1><p className="text-sm text-gray-500">Create a new salary entry for an employee</p></div>
      </div>
      <Card><CardContent className="p-1"><div className="flex flex-wrap gap-1">{tabs.map(tab => (<Link key={tab.href} href={tab.href}><Button variant={pathname === tab.href ? 'default' : 'ghost'} size="sm" className="text-xs">{tab.label}</Button></Link>))}</div></CardContent></Card>
      <Card><CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2"><label className="text-sm font-medium text-gray-700 flex items-center gap-2"><Calendar className="h-4 w-4 text-indigo-500" />Salary Month <span className="text-red-500">*</span></label><Input type="date" name="salaryMonth" value={formData.salaryMonth} onChange={handleInputChange} required /></div>
            <div className="space-y-2"><label className="text-sm font-medium text-gray-700 flex items-center gap-2"><User className="h-4 w-4 text-indigo-500" />Employee <span className="text-red-500">*</span></label><select name="employee" value={formData.employee} onChange={handleInputChange} required className="flex h-10 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-indigo-500"><option value="">Select Employee</option>{employees.map(e => <option key={e.id} value={e.name}>{e.name}</option>)}</select></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2"><label className="text-sm font-medium text-gray-700 flex items-center gap-2"><DollarSign className="h-4 w-4 text-emerald-500" />Basic Salary <span className="text-red-500">*</span></label><Input type="number" name="basicSalary" placeholder="৳ 0.00" value={formData.basicSalary} onChange={handleInputChange} required /></div>
            <div className="space-y-2"><label className="text-sm font-medium text-gray-700 flex items-center gap-2"><Clock className="h-4 w-4 text-orange-500" />Overtime Rate</label><Input type="number" name="overtimeRate" placeholder="৳ / hr" value={formData.overtimeRate} onChange={handleInputChange} /></div>
            <div className="space-y-2"><label className="text-sm font-medium text-gray-700 flex items-center gap-2"><Clock className="h-4 w-4 text-orange-500" />Total Overtime (hr)</label><Input type="number" name="totalOvertime" placeholder="Hours" value={formData.totalOvertime} onChange={handleInputChange} /></div>
            <div className="space-y-2"><label className="text-sm font-medium text-gray-700 flex items-center gap-2"><DollarSign className="h-4 w-4 text-indigo-500" />Total Salary</label><Input type="number" name="totalSalary" placeholder="৳ 0.00" value={formData.totalSalary} onChange={handleInputChange} /></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2"><label className="text-sm font-medium text-gray-700 flex items-center gap-2"><DollarSign className="h-4 w-4 text-amber-500" />Advance Amount</label><Input type="number" name="advanceAmount" placeholder="৳ 0.00" value={formData.advanceAmount} onChange={handleInputChange} /></div>
            <div className="space-y-2"><label className="text-sm font-medium text-gray-700 flex items-center gap-2"><DollarSign className="h-4 w-4 text-emerald-500" />Pay Amount <span className="text-red-500">*</span></label><Input type="number" name="payAmount" placeholder="৳ 0.00" value={formData.payAmount} onChange={handleInputChange} required /></div>
            <div className="space-y-2"><label className="text-sm font-medium text-gray-700 flex items-center gap-2"><CreditCard className="h-4 w-4 text-blue-500" />Transaction Account</label><select name="transactionAccount" value={formData.transactionAccount} onChange={handleInputChange} className="flex h-10 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-indigo-500">{transactionAccounts.map(a => <option key={a} value={a}>{a}</option>)}</select></div>
          </div>
          <div className="flex justify-end"><Button type="submit" className="px-8"><Save className="h-4 w-4 mr-2" />Save Salary</Button></div>
        </form>
      </CardContent></Card>
    </div>
  );
}
