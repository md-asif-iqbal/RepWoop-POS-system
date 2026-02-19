"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Users, UserPlus, Calendar, Mail, Phone, DollarSign, MapPin, Clock, Save } from 'lucide-react';

export default function NewEmployeeForm() {
  const pathname = usePathname();

  const tabs = [
    { label: 'Employees', href: '/Employee-and-Salary' },
    { label: '+ New Employee', href: '/Employee-and-Salary/New-Employee' },
    { label: 'Salary List', href: '/Employee-and-Salary/Salary' },
    { label: '+ New Salary', href: '/Employee-and-Salary/Salary/Create' },
    { label: 'Payments', href: '/Employee-and-Salary/Payments' },
  ];

  const [formData, setFormData] = useState({
    joiningDate: '', name: '', email: '', phone: '', salary: '', overtimeRate: '0', address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
          <UserPlus className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">New Employee</h1>
          <p className="text-sm text-gray-500">Add a new employee to the system</p>
        </div>
      </div>

      <Card>
        <CardContent className="p-1">
          <div className="flex flex-wrap gap-1">
            {tabs.map(tab => (
              <Link key={tab.href} href={tab.href}>
                <Button variant={pathname === tab.href ? 'default' : 'ghost'} size="sm" className="text-xs">{tab.label}</Button>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1 text-indigo-500" /> Joining Date <span className="text-red-500">*</span>
                </label>
                <Input type="date" name="joiningDate" value={formData.joiningDate} onChange={handleInputChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="inline h-4 w-4 mr-1 text-indigo-500" /> Name <span className="text-red-500">*</span>
                </label>
                <Input name="name" placeholder="Enter employee name..." value={formData.name} onChange={handleInputChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline h-4 w-4 mr-1 text-indigo-500" /> Email
                </label>
                <Input type="email" name="email" placeholder="Enter email..." value={formData.email} onChange={handleInputChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline h-4 w-4 mr-1 text-indigo-500" /> Phone <span className="text-red-500">*</span>
                </label>
                <Input name="phone" placeholder="Enter phone..." value={formData.phone} onChange={handleInputChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <DollarSign className="inline h-4 w-4 mr-1 text-indigo-500" /> Salary <span className="text-red-500">*</span>
                </label>
                <Input type="number" name="salary" placeholder="Enter salary..." value={formData.salary} onChange={handleInputChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline h-4 w-4 mr-1 text-indigo-500" /> Overtime Rate <span className="text-red-500">*</span>
                </label>
                <Input type="number" name="overtimeRate" placeholder="0 if not applicable" value={formData.overtimeRate} onChange={handleInputChange} required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-1 text-indigo-500" /> Address
              </label>
              <textarea name="address" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" rows="3" placeholder="Write address..." value={formData.address} onChange={handleInputChange} />
            </div>
            <div className="flex justify-center">
              <Button type="submit" className="px-10">
                <Save className="h-4 w-4 mr-2" /> Save Employee
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
