"use client"
import Link from "next/link";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Users, UserPlus, Search, RotateCcw, Printer, Eye, Phone, Mail, MapPin, Wallet, X, DollarSign, TrendingUp, AlertCircle } from 'lucide-react';

export default function CustomersList() {
  const [filter, setFilter] = useState({ name: "", mobileNumber: "" });
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const customers = [
    { id: 1, name: "Malek", email: "khanengcor@hotmail.com", phone: "01741992993", address: "Madbor Bazar", receivable: "162,958 Tk", paid: "58,500 Tk", saleDue: "104,458 Tk", walletBalance: "-4000 Tk", totalDue: "108,458 Tk" },
    { id: 2, name: "মোঃ মিজানুর হোসেন", email: "01978808130", phone: "01757808130", address: "Peroly Norail", receivable: "4,851 Tk", paid: "4,871 Tk", saleDue: "-20 Tk", walletBalance: "-1000 Tk", totalDue: "980 Tk" },
    { id: 3, name: "Jilani Mla", email: "unknown", phone: "545465", address: "Dhaka", receivable: "99,900 Tk", paid: "4,500 Tk", saleDue: "95,400 Tk", walletBalance: "0 Tk", totalDue: "95,400 Tk" },
    { id: 4, name: "Mahmudul Hasan", email: "mahmud@gmail.com", phone: "01987845455", address: "Dhaka", receivable: "0 Tk", paid: "0 Tk", saleDue: "0 Tk", walletBalance: "0 Tk", totalDue: "0 Tk" },
    { id: 5, name: "Md Sumon", email: "sumon@gmail.com", phone: "01847898745", address: "Dhaka", receivable: "30,000 Tk", paid: "30,000 Tk", saleDue: "0 Tk", walletBalance: "0 Tk", totalDue: "0 Tk" },
    { id: 6, name: "Md Juwel Khan", email: "juwel@gmail.com", phone: "01845787455", address: "Dhaka", receivable: "0 Tk", paid: "0 Tk", saleDue: "0 Tk", walletBalance: "0 Tk", totalDue: "0 Tk" },
    { id: 7, name: "Sakib Rabby", email: "sakib@gmail.com", phone: "0184578745", address: "Dhaka", receivable: "99,000 Tk", paid: "666 Tk", saleDue: "98,334 Tk", walletBalance: "0 Tk", totalDue: "98,334 Tk" },
    { id: 8, name: "Tanvir Ahmed", email: "tanvir@gmail.com", phone: "0194578545", address: "Comilla", receivable: "65,000 Tk", paid: "25,000 Tk", saleDue: "40,000 Tk", walletBalance: "-3000 Tk", totalDue: "43,000 Tk" },
    { id: 9, name: "Shah Alam", email: "shahalam@gmail.com", phone: "0174578545", address: "Chittagong", receivable: "50,000 Tk", paid: "10,000 Tk", saleDue: "40,000 Tk", walletBalance: "0 Tk", totalDue: "40,000 Tk" },
    { id: 10, name: "Nasir Uddin", email: "nasir@gmail.com", phone: "01845787455", address: "Dhaka", receivable: "120,000 Tk", paid: "60,000 Tk", saleDue: "60,000 Tk", walletBalance: "-5000 Tk", totalDue: "65,000 Tk" },
  ];

  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilter = () => {
    const filtered = customers.filter((c) => {
      const nameMatch = filter.name ? c.name.toLowerCase().includes(filter.name.toLowerCase()) : true;
      const mobileMatch = filter.mobileNumber ? c.phone.includes(filter.mobileNumber) : true;
      return nameMatch && mobileMatch;
    });
    setFilteredCustomers(filtered);
  };

  const resetFilters = () => {
    setFilter({ name: '', mobileNumber: '' });
    setFilteredCustomers([]);
  };

  const openModal = (customer) => { setSelectedCustomer(customer); setIsModalOpen(true); };
  const closeModal = () => { setIsModalOpen(false); setSelectedCustomer(null); };

  const handlePrint = () => {
    const printContent = document.getElementById("table-to-print").outerHTML;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`<html><head><title>Customers</title><style>body{font-family:Arial,sans-serif}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px;text-align:left}th{background:#6366f1;color:white}</style></head><body onload="window.print()">${printContent}</body></html>`);
    newWindow.document.close();
  };

  const displayCustomers = filteredCustomers.length > 0 ? filteredCustomers : customers;
  const totalDue = customers.reduce((sum, c) => sum + parseInt(c.totalDue.replace(/[^\d-]/g, '') || 0), 0);

  return (
    <div className="font-inter text-sm">
      <div className="p-4 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg">
              <Users size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Customers</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{customers.length} total customers</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Link href="/Customers/Create">
              <Button className="gap-1.5"><UserPlus size={16} />Add Customer</Button>
            </Link>
            <Button variant="outline" className="gap-1.5" onClick={handlePrint}><Printer size={16} />Print</Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100 text-xs">Total Customers</p>
                  <p className="text-2xl font-bold">{customers.length}</p>
                </div>
                <Users size={28} className="text-indigo-200" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-xs">Total Receivable</p>
                  <p className="text-2xl font-bold">৳631K</p>
                </div>
                <TrendingUp size={28} className="text-emerald-200" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-amber-100 text-xs">Total Due</p>
                  <p className="text-2xl font-bold">৳{Math.abs(totalDue).toLocaleString()}</p>
                </div>
                <AlertCircle size={28} className="text-amber-200" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-xs">Total Paid</p>
                  <p className="text-2xl font-bold">৳193K</p>
                </div>
                <DollarSign size={28} className="text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filter Section */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-3 items-end">
              <div className="flex-1 min-w-[180px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Name</label>
                <div className="relative">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input name="name" value={filter.name} onChange={handleFilter} placeholder="Search by name..." className="pl-9 h-9" />
                </div>
              </div>
              <div className="flex-1 min-w-[180px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Mobile Number</label>
                <div className="relative">
                  <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input name="mobileNumber" value={filter.mobileNumber} onChange={handleFilter} placeholder="Search by phone..." className="pl-9 h-9" />
                </div>
              </div>
              <Button size="sm" className="gap-1.5 h-9" onClick={applyFilter}>
                <Search size={14} />Filter
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5 h-9" onClick={resetFilters}>
                <RotateCcw size={14} />Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Table */}
        <Card>
          <div className="overflow-x-auto">
            <table id="table-to-print" className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <th className="px-4 py-3 text-left font-medium">#</th>
                  <th className="px-4 py-3 text-left font-medium">Name</th>
                  <th className="px-4 py-3 text-left font-medium">Contact</th>
                  <th className="px-4 py-3 text-left font-medium">Address</th>
                  <th className="px-4 py-3 text-right font-medium">Receivable</th>
                  <th className="px-4 py-3 text-right font-medium">Paid</th>
                  <th className="px-4 py-3 text-right font-medium">Sale Due</th>
                  <th className="px-4 py-3 text-right font-medium">Total Due</th>
                  <th className="px-4 py-3 text-center font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {displayCustomers.map((customer, index) => (
                  <tr key={customer.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-3 text-slate-400">{index + 1}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                          {customer.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 dark:text-white">{customer.name}</p>
                          <p className="text-xs text-slate-400">{customer.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                        <Phone size={13} className="text-slate-400" />
                        {customer.phone}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{customer.address}</td>
                    <td className="px-4 py-3 text-right font-medium text-slate-700 dark:text-slate-300">{customer.receivable}</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-medium">{customer.paid}</td>
                    <td className="px-4 py-3 text-right">
                      <Badge variant={customer.saleDue === '0 Tk' ? 'success' : customer.saleDue.startsWith('-') ? 'info' : 'warning'} className="text-xs">
                        {customer.saleDue}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className={`font-semibold ${customer.totalDue === '0 Tk' ? 'text-emerald-600' : 'text-red-500'}`}>
                        {customer.totalDue}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-500/10" onClick={() => openModal(customer)}>
                        <Eye size={16} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Customer Detail Modal */}
        {isModalOpen && selectedCustomer && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md animate-in fade-in zoom-in-95">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                      {selectedCustomer.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <CardTitle>{selectedCustomer.name}</CardTitle>
                      <p className="text-sm text-slate-500">{selectedCustomer.email}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={closeModal}><X size={16} /></Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <Phone size={14} className="text-slate-400" />{selectedCustomer.phone}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <MapPin size={14} className="text-slate-400" />{selectedCustomer.address}
                </div>
                <div className="h-px bg-slate-200 dark:bg-slate-700 my-3" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                    <p className="text-xs text-slate-500">Receivable</p>
                    <p className="font-semibold text-slate-800 dark:text-white">{selectedCustomer.receivable}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                    <p className="text-xs text-slate-500">Paid</p>
                    <p className="font-semibold text-emerald-600">{selectedCustomer.paid}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                    <p className="text-xs text-slate-500">Sale Due</p>
                    <p className="font-semibold text-amber-600">{selectedCustomer.saleDue}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                    <p className="text-xs text-slate-500">Total Due</p>
                    <p className="font-semibold text-red-500">{selectedCustomer.totalDue}</p>
                  </div>
                </div>
                <Button className="w-full mt-4" onClick={closeModal}>Close</Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}


