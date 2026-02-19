'use client'
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import Papa from "papaparse";
import * as XLSX from 'xlsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Eye, Filter, Trash2, Pencil, Download, FileSpreadsheet, Printer, Plus, Upload, X, Search, DollarSign, TrendingUp, TrendingDown, ReceiptText, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ExpenseList() {
  const [showModal, setShowModal] = useState(false);
  const [product, setProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ category: '', status: '' });
  const [sortOrder, setSortOrder] = useState('');
  const [dateSortOrder, setDateSortOrder] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [openAction, setOpenAction] = useState(null);

  const products = [
    { reference: 'EXP-001', category: 'Office Supplies', date: '2023-08-15', status: 'Active', amount: 1200, description: 'Office stationery and supplies' },
    { reference: 'EXP-002', category: 'Utilities', date: '2023-08-12', status: 'Inactive', amount: 400, description: 'Monthly electricity bill' },
    { reference: 'EXP-003', category: 'Travel', date: '2023-09-01', status: 'Active', amount: 100, description: 'Business travel expenses' },
    { reference: 'EXP-004', category: 'Maintenance', date: '2023-08-21', status: 'Inactive', amount: 550, description: 'Equipment maintenance cost' },
    { reference: 'EXP-005', category: 'Marketing', date: '2023-08-10', status: 'Active', amount: 200, description: 'Social media advertising' },
    { reference: 'EXP-006', category: 'Rent', date: '2023-08-08', status: 'Active', amount: 750, description: 'Monthly office rent' },
    { reference: 'EXP-007', category: 'Insurance', date: '2023-08-14', status: 'Active', amount: 80, description: 'Business insurance premium' },
    { reference: 'EXP-008', category: 'Software', date: '2023-09-12', status: 'Inactive', amount: 900, description: 'SaaS subscription renewal' },
    { reference: 'EXP-009', category: 'Salary', date: '2023-07-29', status: 'Active', amount: 300, description: 'Overtime payments' },
    { reference: 'EXP-010', category: 'Transport', date: '2023-08-01', status: 'Inactive', amount: 60, description: 'Delivery logistics costs' },
    { reference: 'EXP-011', category: 'Office Supplies', date: '2023-09-15', status: 'Active', amount: 1500, description: 'New office furniture' },
    { reference: 'EXP-012', category: 'Utilities', date: '2023-09-10', status: 'Inactive', amount: 800, description: 'Internet and phone bills' },
    { reference: 'EXP-013', category: 'Marketing', date: '2023-09-20', status: 'Active', amount: 950, description: 'Google Ads campaign' },
    { reference: 'EXP-014', category: 'Travel', date: '2023-09-18', status: 'Inactive', amount: 850, description: 'Conference attendance' },
    { reference: 'EXP-015', category: 'Maintenance', date: '2023-08-22', status: 'Active', amount: 1350, description: 'AC repair and servicing' },
  ];

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedProducts(products.map((_, i) => i));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (e, idx) => {
    if (e.target.checked) {
      setSelectedProducts([...selectedProducts, idx]);
    } else {
      setSelectedProducts(selectedProducts.filter((id) => id !== idx));
    }
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('Expense List', 20, 10);
    products.forEach((p, i) => {
      doc.text(`${i + 1}. ${p.reference} - ${p.category}: $${p.amount}`, 20, 20 + i * 10);
    });
    doc.save('expenses.pdf');
  };

  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(products);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Expenses');
    XLSX.writeFile(wb, 'expenses.xlsx');
  };

  const handlePrint = () => {
    const printContent = document.getElementById("table-to-print").outerHTML;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`<html><head><title>Expenses</title><style>body{font-family:Arial,sans-serif}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px;text-align:left}th{background:#6366f1;color:white}</style></head><body onload="window.print()">${printContent}</body></html>`);
    newWindow.document.close();
  };

  const handleFilterChange = (e) => setFilters({ ...filters, [e.target.name]: e.target.value });
  const handlePriceSort = (e) => setSortOrder(e.target.value);
  const handleDateSort = (e) => setDateSortOrder(e.target.value);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const uniqueCategories = [...new Set(products.map((p) => p.category))];
  const uniqueStatuses = [...new Set(products.map((p) => p.status))];

  const filteredProducts = products
    .filter((p) =>
      (p.category.toLowerCase().includes(searchTerm.toLowerCase()) || p.reference.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filters.category === '' || p.category === filters.category) &&
      (filters.status === '' || p.status === filters.status)
    )
    .sort((a, b) => {
      if (sortOrder === 'Low to High') return a.amount - b.amount;
      if (sortOrder === 'High to Low') return b.amount - a.amount;
      if (dateSortOrder === 'Oldest First') return new Date(a.date) - new Date(b.date);
      if (dateSortOrder === 'Newest First') return new Date(b.date) - new Date(a.date);
      return 0;
    });

  const totalExpenses = products.reduce((sum, p) => sum + p.amount, 0);
  const activeExpenses = products.filter(p => p.status === 'Active').reduce((sum, p) => sum + p.amount, 0);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const fileType = file.name.split('.').pop();
    if (fileType === 'csv') {
      Papa.parse(file, { header: true, complete: (results) => setProducts(results.data) });
    } else if (fileType === 'xlsx') {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
        setProducts(excelData);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className="font-inter text-sm">
      <div className="container mx-auto px-4 py-6 md:mt-[5%] mt-[20%]">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg">
              <ReceiptText size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Expenses</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Track all business expenses</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="success" className="gap-1.5" size="sm"><Plus size={15} />Add Expense</Button>
            <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setShowModal(true)}><Upload size={15} />Import</Button>
            <Button variant="destructive" size="sm" className="gap-1.5" onClick={exportPDF}><Download size={15} />PDF</Button>
            <Button variant="warning" size="sm" className="gap-1.5" onClick={exportExcel}><FileSpreadsheet size={15} />Excel</Button>
            <Button variant="secondary" size="sm" className="gap-1.5" onClick={handlePrint}><Printer size={15} />Print</Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0">
            <CardContent className="p-4">
              <p className="text-indigo-100 text-xs">Total Expenses</p>
              <p className="text-2xl font-bold">${totalExpenses.toLocaleString()}</p>
              <p className="text-xs text-indigo-200 mt-1">{products.length} records</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0">
            <CardContent className="p-4">
              <p className="text-emerald-100 text-xs">Active</p>
              <p className="text-2xl font-bold">${activeExpenses.toLocaleString()}</p>
              <p className="text-xs text-emerald-200 mt-1">{products.filter(p => p.status === 'Active').length} active</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0">
            <CardContent className="p-4">
              <p className="text-amber-100 text-xs">This Month</p>
              <p className="text-2xl font-bold">${products.filter(p => p.date.startsWith('2023-09')).reduce((s, p) => s + p.amount, 0).toLocaleString()}</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="p-4">
              <p className="text-purple-100 text-xs">Categories</p>
              <p className="text-2xl font-bold">{uniqueCategories.length}</p>
              <p className="text-xs text-purple-200 mt-1">expense types</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-3 items-end">
              <div className="flex-1 min-w-[180px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Search</label>
                <div className="relative">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search expenses..." className="pl-9 h-9" />
                </div>
              </div>
              <div className="min-w-[140px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Category</label>
                <select name="category" value={filters.category} onChange={handleFilterChange} className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 dark:text-slate-300">
                  <option value="">All</option>
                  {uniqueCategories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="min-w-[120px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Status</label>
                <select name="status" value={filters.status} onChange={handleFilterChange} className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 dark:text-slate-300">
                  <option value="">All</option>
                  {uniqueStatuses.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="min-w-[130px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Sort by</label>
                <select onChange={handleDateSort} className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 dark:text-slate-300">
                  <option value="">Default</option>
                  <option value="Newest First">Newest</option>
                  <option value="Oldest First">Oldest</option>
                </select>
              </div>
              <div className="min-w-[130px]">
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Amount</label>
                <select onChange={handlePriceSort} className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 dark:text-slate-300">
                  <option value="">Default</option>
                  <option value="Low to High">Low → High</option>
                  <option value="High to Low">High → Low</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Table */}
        <Card>
          <div className="overflow-x-auto">
            <table id="table-to-print" className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <th className="px-4 py-3 text-left font-medium w-10">
                    <input type="checkbox" onChange={handleSelectAll} className="rounded" />
                  </th>
                  <th className="px-4 py-3 text-left font-medium">Reference</th>
                  <th className="px-4 py-3 text-left font-medium">Category</th>
                  <th className="px-4 py-3 text-left font-medium">Date</th>
                  <th className="px-4 py-3 text-center font-medium">Status</th>
                  <th className="px-4 py-3 text-right font-medium">Amount</th>
                  <th className="px-4 py-3 text-left font-medium">Description</th>
                  <th className="px-4 py-3 text-center font-medium w-20">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct).map((p, idx) => (
                  <tr key={p.reference} className="border-b border-slate-100 dark:border-slate-800 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-3">
                      <input type="checkbox" checked={selectedProducts.includes(idx)} onChange={(e) => handleSelectProduct(e, idx)} className="rounded" />
                    </td>
                    <td className="px-4 py-3 font-mono text-indigo-600 dark:text-indigo-400 font-medium">{p.reference}</td>
                    <td className="px-4 py-3"><Badge variant="outline" className="text-xs">{p.category}</Badge></td>
                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{p.date}</td>
                    <td className="px-4 py-3 text-center">
                      <Badge variant={p.status === 'Active' ? 'success' : 'secondary'} className="text-xs">{p.status}</Badge>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-slate-800 dark:text-white">${p.amount.toFixed(2)}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400 max-w-[200px] truncate">{p.description}</td>
                    <td className="px-4 py-3 text-center">
                      <div className="relative">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpenAction(openAction === p.reference ? null : p.reference)}>
                          <MoreVertical size={16} />
                        </Button>
                        {openAction === p.reference && (
                          <div className="absolute right-0 top-full mt-1 w-36 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-20 py-1">
                            <button className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-slate-700 dark:text-slate-300"><Eye size={14} />View</button>
                            <button className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-blue-600"><Pencil size={14} />Edit</button>
                            <button className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 text-red-500"><Trash2 size={14} />Delete</button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Showing {indexOfFirstProduct + 1} to {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length}
          </p>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
              <ChevronLeft size={16} />
            </Button>
            {[...Array(totalPages).keys()].map((n) => (
              <Button key={n + 1} variant={currentPage === n + 1 ? 'default' : 'outline'} size="sm" className="h-8 w-8 p-0" onClick={() => setCurrentPage(n + 1)}>
                {n + 1}
              </Button>
            ))}
            <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>

        {/* Import Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2"><Upload size={18} />Import Expenses</CardTitle>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setShowModal(false)}><X size={16} /></Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 text-center">
                  <Upload size={32} className="mx-auto text-slate-400 mb-3" />
                  <p className="text-sm text-slate-500 mb-2">Upload CSV or Excel file</p>
                  <input type="file" accept=".csv,.xlsx" onChange={handleFileUpload} className="text-sm" />
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline" onClick={() => setShowModal(false)}>Cancel</Button>
                  <Button>Submit</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
