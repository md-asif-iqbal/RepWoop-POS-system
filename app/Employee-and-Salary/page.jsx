"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Users, UserPlus, DollarSign, Clock, Search, RotateCcw, Printer, MoreVertical, ChevronLeft, ChevronRight, X, Pencil, Trash2, Eye } from 'lucide-react';

export default function EmployeeAndSalary() {
  const pathname = usePathname();

  const tabs = [
    { label: 'Employees', href: '/Employee-and-Salary' },
    { label: '+ New Employee', href: '/Employee-and-Salary/New-Employee' },
    { label: 'Salary List', href: '/Employee-and-Salary/Salary' },
    { label: '+ New Salary', href: '/Employee-and-Salary/Salary/Create' },
    { label: 'Payments', href: '/Employee-and-Salary/Payments' },
  ];

  const employeesData = [
    { id: 1, joiningDate: '2024-10-01', name: 'Sanower Hossain', email: 'sanower@gmail.com', phone: '01789898989', address: 'Mirpur, Dhaka', salary: 9000, overtimeRate: 300, totalReceivable: 0, totalPaid: 3000, totalDue: -3000 },
    { id: 2, joiningDate: '2024-09-21', name: 'Ali Mortuza', email: 'alimortuza@gmail.com', phone: '01700011122', address: 'Gulshan, Dhaka', salary: 25000, overtimeRate: 0, totalReceivable: 25000, totalPaid: 25000, totalDue: 0 },
    { id: 3, joiningDate: '2024-09-21', name: 'Md Shamsuzzaman', email: 'shamsuzzaman@gmail.com', phone: '01828686154', address: 'Uttara, Dhaka', salary: 18000, overtimeRate: 0, totalReceivable: 18000, totalPaid: 18000, totalDue: 0 },
    { id: 4, joiningDate: '2024-09-15', name: 'Rafiq Ahmed', email: 'rafiq@example.com', phone: '01712345678', address: 'Dhanmondi, Dhaka', salary: 15000, overtimeRate: 200, totalReceivable: 15200, totalPaid: 12000, totalDue: 3200 },
    { id: 5, joiningDate: '2024-08-15', name: 'Nusrat Jahan', email: 'nusrat@example.com', phone: '01912345678', address: 'Chattogram', salary: 30000, overtimeRate: 500, totalReceivable: 30500, totalPaid: 25000, totalDue: 5500 },
    { id: 6, joiningDate: '2024-08-05', name: 'Kamal Hossain', email: 'kamal@example.com', phone: '01512345678', address: 'Sylhet', salary: 12000, overtimeRate: 100, totalReceivable: 12100, totalPaid: 11000, totalDue: 1100 },
    { id: 7, joiningDate: '2024-07-25', name: 'Tanvir Rahman', email: 'tanvir@example.com', phone: '01812345678', address: 'Rajshahi', salary: 45000, overtimeRate: 600, totalReceivable: 45600, totalPaid: 42000, totalDue: 3600 },
    { id: 8, joiningDate: '2024-07-10', name: 'Fahim Islam', email: 'fahim@example.com', phone: '01612345678', address: 'Khulna', salary: 25000, overtimeRate: 400, totalReceivable: 25400, totalPaid: 23000, totalDue: 2400 },
    { id: 9, joiningDate: '2024-06-30', name: 'Sakib Hasan', email: 'sakib@example.com', phone: '01798765432', address: 'Barisal', salary: 20000, overtimeRate: 300, totalReceivable: 20300, totalPaid: 19000, totalDue: 1300 },
    { id: 10, joiningDate: '2024-06-15', name: 'Taslima Akter', email: 'taslima@example.com', phone: '01898765432', address: 'Comilla', salary: 22000, overtimeRate: 350, totalReceivable: 22350, totalPaid: 21000, totalDue: 1350 },
  ];

  const [filterName, setFilterName] = useState('');
  const [filterPhone, setFilterPhone] = useState('');
  const [employees, setEmployees] = useState(employeesData);
  const [filteredEmployees, setFilteredEmployees] = useState(employeesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [openAction, setOpenAction] = useState(null);
  const [viewModal, setViewModal] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const employeesPerPage = 10;

  const handleDeleteEmp = (id) => { const updated = employees.filter(e => e.id !== id); setEmployees(updated); setFilteredEmployees(updated); setDeleteModal(null); };
  const handleSaveEdit = () => { const updated = employees.map(e => e.id === editModal.id ? editModal : e); setEmployees(updated); setFilteredEmployees(updated); setEditModal(null); };

  const indexOfLast = currentPage * employeesPerPage;
  const indexOfFirst = indexOfLast - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  const handleFilter = () => {
    const filtered = employeesData.filter(e =>
      e.name.toLowerCase().includes(filterName.toLowerCase()) &&
      e.phone.includes(filterPhone)
    );
    setFilteredEmployees(filtered);
    setCurrentPage(1);
  };

  const handleReset = () => { setFilterName(''); setFilterPhone(''); setFilteredEmployees(employeesData); setCurrentPage(1); };

  const handlePrint = () => {
    const el = document.getElementById("table-to-print");
    if (!el) return;
    const w = window.open('', '_blank');
    w.document.write(`<html><head><title>Employees</title><style>body{font-family:sans-serif}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px;text-align:left}th{background:#4f46e5;color:#fff}</style></head><body onload="window.print()">${el.outerHTML}</body></html>`);
    w.document.close();
  };

  const totalSalary = filteredEmployees.reduce((s, e) => s + e.salary, 0);
  const totalPaid = filteredEmployees.reduce((s, e) => s + e.totalPaid, 0);
  const totalDue = filteredEmployees.reduce((s, e) => s + e.totalDue, 0);

  const avatarColors = ['bg-indigo-500', 'bg-purple-500', 'bg-pink-500', 'bg-blue-500', 'bg-emerald-500', 'bg-amber-500'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
          <Users className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employee & Salary</h1>
          <p className="text-sm text-gray-500">Manage employees, salaries & payments</p>
        </div>
      </div>

      {/* Tabs */}
      <Card>
        <CardContent className="p-1">
          <div className="flex flex-wrap gap-1">
            {tabs.map(tab => (
              <Link key={tab.href} href={tab.href}>
                <Button variant={pathname === tab.href ? 'default' : 'ghost'} size="sm" className="text-xs">
                  {tab.label}
                </Button>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Employees', value: filteredEmployees.length, icon: Users, gradient: 'from-indigo-500 to-indigo-600' },
          { label: 'Total Salary', value: `৳${(totalSalary / 1000).toFixed(0)}K`, icon: DollarSign, gradient: 'from-emerald-500 to-emerald-600' },
          { label: 'Total Paid', value: `৳${(totalPaid / 1000).toFixed(0)}K`, icon: Clock, gradient: 'from-blue-500 to-blue-600' },
          { label: 'Total Due', value: `৳${totalDue.toLocaleString()}`, icon: UserPlus, gradient: 'from-amber-500 to-orange-500' },
        ].map((card, i) => (
          <Card key={i} className="border-0 shadow-md overflow-hidden">
            <CardContent className="p-0">
              <div className={`bg-gradient-to-r ${card.gradient} p-4 flex items-center justify-between`}>
                <div>
                  <p className="text-white/80 text-xs font-medium">{card.label}</p>
                  <p className="text-white text-2xl font-bold mt-1">{card.value}</p>
                </div>
                <card.icon className="h-10 w-10 text-white/30" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search by name..." className="pl-9" value={filterName} onChange={e => setFilterName(e.target.value)} />
            </div>
            <Input placeholder="Mobile number..." className="md:w-48" value={filterPhone} onChange={e => setFilterPhone(e.target.value)} />
            <Button onClick={handleFilter}><Search className="h-4 w-4 mr-1" /> Filter</Button>
            <Button variant="outline" onClick={handleReset}><RotateCcw className="h-4 w-4 mr-1" /> Reset</Button>
            <Button variant="outline" onClick={handlePrint}><Printer className="h-4 w-4 mr-1" /> Print</Button>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table id="table-to-print" className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-600 to-indigo-700">
                  {['#', 'Employee', 'Phone', 'Joining Date', 'Salary', 'OT Rate', 'Receivable', 'Paid', 'Due', 'Action'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentEmployees.map((emp, idx) => (
                  <tr key={emp.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-4 py-3 text-gray-500 font-medium">{indexOfFirst + idx + 1}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full ${avatarColors[idx % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm`}>
                          {emp.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{emp.name}</p>
                          <p className="text-xs text-gray-500">{emp.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{emp.phone}</td>
                    <td className="px-4 py-3 text-gray-600">{emp.joiningDate}</td>
                    <td className="px-4 py-3 font-semibold text-gray-900">৳{emp.salary.toLocaleString()}</td>
                    <td className="px-4 py-3 text-gray-600">৳{emp.overtimeRate}</td>
                    <td className="px-4 py-3 text-gray-600">৳{emp.totalReceivable.toLocaleString()}</td>
                    <td className="px-4 py-3 text-emerald-600 font-medium">৳{emp.totalPaid.toLocaleString()}</td>
                    <td className="px-4 py-3">
                      <Badge variant={emp.totalDue > 0 ? 'destructive' : emp.totalDue < 0 ? 'warning' : 'success'}>
                        ৳{emp.totalDue.toLocaleString()}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="relative">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpenAction(openAction === emp.id ? null : emp.id)}>
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                        {openAction === emp.id && (
                          <div className="absolute right-0 mt-1 w-36 bg-white border rounded-lg shadow-lg z-10 py-1">
                              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 text-slate-700" onClick={() => { setViewModal(emp); setOpenAction(null); }}><Eye size={14}/>View</button>
                              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 text-blue-600" onClick={() => { setEditModal({...emp}); setOpenAction(null); }}><Pencil size={14}/>Edit</button>
                              <Link href="/Employee-and-Salary/Salary/Create"><button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 text-emerald-600" onClick={() => setOpenAction(null)}><DollarSign size={14}/>Salary</button></Link>
                              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 text-red-500" onClick={() => { setDeleteModal(emp); setOpenAction(null); }}><Trash2 size={14}/>Delete</button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Showing {indexOfFirst + 1}-{Math.min(indexOfLast, filteredEmployees.length)} of {filteredEmployees.length}</p>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => (
              <Button key={i} variant={currentPage === i + 1 ? 'default' : 'outline'} size="sm" className="h-8 w-8 p-0" onClick={() => setCurrentPage(i + 1)}>{i + 1}</Button>
            ))}
            <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* View Modal */}
      {viewModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setViewModal(null)}>
          <Card className="w-full max-w-md" onClick={e => e.stopPropagation()}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Employee Details</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setViewModal(null)}><X size={18}/></Button>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white text-lg font-bold">{viewModal.name.charAt(0)}</div>
                <div><p className="font-semibold text-lg">{viewModal.name}</p><p className="text-slate-500">{viewModal.email}</p></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><span className="text-slate-500 text-xs">Phone</span><p>{viewModal.phone}</p></div>
                <div><span className="text-slate-500 text-xs">Joining Date</span><p>{viewModal.joiningDate}</p></div>
                <div><span className="text-slate-500 text-xs">Address</span><p>{viewModal.address}</p></div>
                <div><span className="text-slate-500 text-xs">Salary</span><p className="font-semibold">৳{viewModal.salary.toLocaleString()}</p></div>
                <div><span className="text-slate-500 text-xs">Total Paid</span><p className="text-emerald-600 font-medium">৳{viewModal.totalPaid.toLocaleString()}</p></div>
                <div><span className="text-slate-500 text-xs">Due</span><p className={viewModal.totalDue > 0 ? 'text-red-500 font-medium' : 'text-emerald-600 font-medium'}>৳{viewModal.totalDue.toLocaleString()}</p></div>
              </div>
              <Button variant="outline" onClick={() => setViewModal(null)} className="w-full mt-2">Close</Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Edit Modal */}
      {editModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setEditModal(null)}>
          <Card className="w-full max-w-md" onClick={e => e.stopPropagation()}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Edit Employee</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setEditModal(null)}><X size={18}/></Button>
            </CardHeader>
            <CardContent className="space-y-3">
              <div><label className="text-xs font-medium text-slate-600 mb-1 block">Name</label><Input value={editModal.name} onChange={e => setEditModal({...editModal, name: e.target.value})} /></div>
              <div><label className="text-xs font-medium text-slate-600 mb-1 block">Email</label><Input value={editModal.email} onChange={e => setEditModal({...editModal, email: e.target.value})} /></div>
              <div><label className="text-xs font-medium text-slate-600 mb-1 block">Phone</label><Input value={editModal.phone} onChange={e => setEditModal({...editModal, phone: e.target.value})} /></div>
              <div><label className="text-xs font-medium text-slate-600 mb-1 block">Address</label><Input value={editModal.address} onChange={e => setEditModal({...editModal, address: e.target.value})} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-xs font-medium text-slate-600 mb-1 block">Salary (৳)</label><Input type="number" value={editModal.salary} onChange={e => setEditModal({...editModal, salary: Number(e.target.value)})} /></div>
                <div><label className="text-xs font-medium text-slate-600 mb-1 block">Overtime Rate</label><Input type="number" value={editModal.overtimeRate} onChange={e => setEditModal({...editModal, overtimeRate: Number(e.target.value)})} /></div>
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
              <CardTitle className="text-lg text-red-600">Delete Employee</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setDeleteModal(null)}><X size={18}/></Button>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Delete employee <strong>{deleteModal.name}</strong>? This cannot be undone.</p>
              <div className="flex gap-2">
                <Button variant="destructive" onClick={() => handleDeleteEmp(deleteModal.id)} className="flex-1">Delete</Button>
                <Button variant="outline" onClick={() => setDeleteModal(null)} className="flex-1">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
