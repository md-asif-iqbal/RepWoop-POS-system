"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import {
  Calendar,
  DollarSign,
  ShoppingCart,
  Receipt,
  TrendingUp,
  FileSpreadsheet,
  FileText,
  FileDown,
  Search,
  ChevronLeft,
  ChevronRight,
  Package,
  Truck,
  Users,
} from "lucide-react";

export default function TodayReport() {
  const pathname = usePathname();

  const topSaleProducts = [
    { id: 1, productName: "Mobile Phone", quantity: 10, totalSale: 50000, saleAmount: "50000" },
    { id: 2, productName: "Laptop", quantity: 5, totalSale: 200000, saleAmount: " 200000" },
    { id: 3, productName: "Headphones", quantity: 15, totalSale: 45000, saleAmount: " 45000" },
    { id: 4, productName: "Monitor", quantity: 8, totalSale: 80000, saleAmount: " 80000" },
    { id: 5, productName: "Keyboard", quantity: 20, totalSale: 10000, saleAmount: " 10000" },
    { id: 6, productName: "Mouse", quantity: 25, totalSale: 12500, saleAmount: " 12500" },
    { id: 7, productName: "Printer", quantity: 2, totalSale: 50000, saleAmount: " 50000" },
  ];

  const expenses = [
    { id: 1, expense: "Office Rent", category: "Administrative", amount: " 30000" },
    { id: 2, expense: "Electricity Bill", category: "Utility", amount: " 5000" },
    { id: 3, expense: "Internet Bill", category: "Utility", amount: " 2000" },
    { id: 4, expense: "Stationery", category: "Office Supplies", amount: " 1500" },
    { id: 5, expense: "Travel Expenses", category: "Logistics", amount: " 8000" },
    { id: 6, expense: "Snacks", category: "Entertainment", amount: " 1000" },
  ];

  const paymentsToSuppliers = [
    { id: 1, supplier: "Hasan Trading", paymentDate: "2024-10-01", amount: "50000" },
    { id: 2, supplier: "Alif Corporation", paymentDate: "2024-10-02", amount: " 60000" },
    { id: 3, supplier: "Khan Enterprise", paymentDate: "2024-10-03", amount: " 30000" },
    { id: 4, supplier: "Mithila Supplies", paymentDate: "2024-10-04", amount: " 40000" },
    { id: 5, supplier: "Bengal Suppliers", paymentDate: "2024-10-05", amount: " 70000" },
  ];

  const paymentsFromCustomers = [
    { id: 1, customer: "Sakib Rabby", paymentDate: "2024-10-01", amount: " 50000" },
    { id: 2, customer: "Ahmed Zubyer", paymentDate: "2024-10-02", amount: " 30000" },
    { id: 3, customer: "Mahmud Hasan", paymentDate: "2024-10-03", amount: " 20000" },
    { id: 4, customer: "Rony Akter", paymentDate: "2024-10-04", amount: " 40000" },
    { id: 5, customer: "Shakil Khan", paymentDate: "2024-10-05", amount: " 35000" },
  ];

  const defaultEntries = 10;
  const [entriesPerPage1, setEntriesPerPage1] = useState(defaultEntries);
  const [entriesPerPage2, setEntriesPerPage2] = useState(defaultEntries);
  const [entriesPerPage3, setEntriesPerPage3] = useState(defaultEntries);
  const [entriesPerPage4, setEntriesPerPage4] = useState(defaultEntries);
  const [currentPage1, setCurrentPage1] = useState(0);
  const [currentPage2, setCurrentPage2] = useState(0);
  const [currentPage3, setCurrentPage3] = useState(0);
  const [currentPage4, setCurrentPage4] = useState(0);
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");
  const [search4, setSearch4] = useState("");

  const paginate = (data, page, perPage) => {
    const startIndex = page * perPage;
    return data.slice(startIndex, startIndex + perPage);
  };

  const handleEntriesChange = (e, setPerPage, setPage) => {
    setPerPage(Number(e.target.value));
    setPage(0);
  };

  const handleSearch = (data, searchTerm, fields) => {
    return data.filter((item) =>
      fields.some((field) => String(item[field]).toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const exportToExcel = (data, filename) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${filename}.xlsx`);
  };

  const exportPDF = (data, title) => {
    const doc = new jsPDF();
    doc.text(title, 20, 10);
    doc.autoTable({
      head: [["#", "Name", "Details", "Amount"]],
      body: data.map((item, index) => [
        index + 1,
        item.productName || item.expense || item.supplier || item.customer,
        item.quantity || item.category || item.paymentDate || "",
        item.totalSale || item.amount,
      ]),
    });
    doc.save(`${title}.pdf`);
  };

  const calcTotal = (data, key) => {
    return data.reduce((acc, item) => {
      const val = parseInt(String(item[key]).replace(/[^0-9]/g, ""), 10);
      return acc + (isNaN(val) ? 0 : val);
    }, 0);
  };

  const navTabs = [
    { href: "/Today-Report", label: "Today Report" },
    { href: "/Current-Month-Report", label: "Current Month" },
    { href: "/Summary-Report", label: "Summary Report" },
  ];

  const summaryCards = [
    { label: "Sale Amount", value: "TK 0", icon: DollarSign, color: "from-emerald-500 to-green-600", iconBg: "bg-emerald-100 text-emerald-600" },
    { label: "Purchase Cost", value: "TK 0", icon: ShoppingCart, color: "from-red-500 to-rose-600", iconBg: "bg-red-100 text-red-600" },
    { label: "Expense", value: "TK 0", icon: Receipt, color: "from-slate-600 to-gray-700", iconBg: "bg-slate-100 text-slate-600" },
    { label: "Sell Profit", value: "TK 0", icon: TrendingUp, color: "from-teal-500 to-emerald-600", iconBg: "bg-teal-100 text-teal-600" },
  ];

  const renderTable = ({ title, titleIcon: TIcon, titleColor, data, columns, search, setSearch, searchFields, page, setPage, perPage, setPerPage, csvFile, excelName, pdfName, totalKey, totalSpan }) => {
    const filtered = handleSearch(data, search, searchFields);
    const rows = paginate(filtered, page, perPage);
    const totalPages = Math.ceil(filtered.length / perPage) || 1;

    return (
      <Card className="overflow-hidden border-0 shadow-lg">
        <div className={`bg-gradient-to-r ${titleColor} px-5 py-3.5 flex items-center gap-2.5`}>
          <div className="p-1.5 bg-white/20 rounded-lg">
            <TIcon className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-white font-semibold text-sm">{title}</h2>
          <Badge className="ml-auto bg-white/20 text-white hover:bg-white/30 text-xs">{filtered.length} entries</Badge>
        </div>
        <CardContent className="p-4 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="outline" className="text-emerald-600 border-emerald-200 hover:bg-emerald-50 h-8 text-xs" onClick={() => exportToExcel(data, excelName)}>
                <FileSpreadsheet className="h-3.5 w-3.5 mr-1.5" />Excel
              </Button>
              <Button size="sm" variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50 h-8 text-xs">
                <CSVLink data={data} filename={csvFile} className="flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5" />CSV
                </CSVLink>
              </Button>
              <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 h-8 text-xs" onClick={() => exportPDF(data, pdfName)}>
                <FileDown className="h-3.5 w-3.5 mr-1.5" />PDF
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
              <Input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-8 h-8 text-xs w-full sm:w-44" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Show</span>
            <select value={perPage} onChange={(e) => handleEntriesChange(e, setPerPage, setPage)} className="border border-gray-200 rounded-md px-2 py-1 text-xs bg-white focus:ring-1 focus:ring-indigo-500">
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={data.length}>All</option>
            </select>
            <span>entries</span>
          </div>
          <div className="overflow-x-auto rounded-lg border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-50 to-purple-50">
                  {columns.map((col) => (
                    <th key={col.key} className="px-3 py-2.5 text-left text-xs font-semibold text-indigo-900 border-b border-indigo-100">{col.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {rows.map((item, index) => (
                  <tr key={item.id || index} className="hover:bg-gray-50/50 transition-colors">
                    {columns.map((col) => (
                      <td key={col.key} className="px-3 py-2.5 text-xs text-gray-600">
                        {col.key === "sl" ? index + 1 + page * perPage : col.render ? col.render(item) : item[col.key]}
                      </td>
                    ))}
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr><td colSpan={columns.length} className="px-3 py-8 text-center text-xs text-gray-400">No data found</td></tr>
                )}
              </tbody>
              {totalKey && (
                <tfoot>
                  <tr className="bg-gradient-to-r from-indigo-50 to-purple-50 font-semibold">
                    <td colSpan={totalSpan} className="px-3 py-2.5 text-xs text-indigo-900 text-right">Total:</td>
                    <td className="px-3 py-2.5 text-xs text-indigo-900">
                      <Badge variant="default" className="font-bold">TK {calcTotal(data, totalKey).toLocaleString()}</Badge>
                    </td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500">Page {page + 1} of {totalPages}</p>
            <div className="flex items-center gap-1">
              <Button size="sm" variant="outline" className="h-7 w-7 p-0" onClick={() => setPage(Math.max(0, page - 1))} disabled={page === 0}>
                <ChevronLeft className="h-3.5 w-3.5" />
              </Button>
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => (
                <Button key={i} size="sm" variant={page === i ? "default" : "outline"} className="h-7 w-7 p-0 text-xs" onClick={() => setPage(i)}>{i + 1}</Button>
              ))}
              <Button size="sm" variant="outline" className="h-7 w-7 p-0" onClick={() => setPage(Math.min(totalPages - 1, page + 1))} disabled={page >= totalPages - 1}>
                <ChevronRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="bg-gray-50/30 min-h-screen">
      <div className="p-4 sm:p-6 w-full max-w-[1400px] mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-indigo-200">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Today Report</h1>
              <p className="text-xs text-gray-500 mt-0.5">Daily business overview & analytics</p>
            </div>
          </div>
        </div>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-1.5">
            <div className="flex gap-1">
              {navTabs.map((tab) => (
                <Link key={tab.href} href={tab.href} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${pathname === tab.href ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-200" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}>
                  {tab.label}
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryCards.map((card, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className={`h-1 bg-gradient-to-r ${card.color}`} />
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{card.label}</p>
                    <p className="text-xl font-bold text-gray-900 mt-1">{card.value}</p>
                  </div>
                  <div className={`p-2.5 rounded-xl ${card.iconBg}`}>
                    <card.icon className="h-5 w-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {renderTable({
            title: "Top Sale Products", titleIcon: Package, titleColor: "from-emerald-500 to-green-600",
            data: topSaleProducts,
            columns: [
              { key: "sl", label: "SL" },
              { key: "productName", label: "Product Name" },
              { key: "quantity", label: "Qty" },
              { key: "totalSale", label: "Total Sale", render: (item) => `TK ${item.totalSale.toLocaleString()}` },
              { key: "saleAmount", label: "Amount", render: (item) => <Badge variant="success">TK {parseInt(String(item.saleAmount).replace(/[^0-9]/g, ""), 10).toLocaleString()}</Badge> },
            ],
            search: search1, setSearch: setSearch1, searchFields: ["productName"],
            page: currentPage1, setPage: setCurrentPage1, perPage: entriesPerPage1, setPerPage: setEntriesPerPage1,
            csvFile: "top-sale-products.csv", excelName: "Top Sale Product", pdfName: "Top Sale Product",
            totalKey: "saleAmount", totalSpan: 4,
          })}

          {renderTable({
            title: "Expenses", titleIcon: Receipt, titleColor: "from-red-500 to-rose-600",
            data: expenses,
            columns: [
              { key: "sl", label: "SL" },
              { key: "expense", label: "Expense" },
              { key: "category", label: "Category", render: (item) => <Badge variant="outline" className="text-xs">{item.category}</Badge> },
              { key: "amount", label: "Amount", render: (item) => <Badge variant="destructive">TK {parseInt(String(item.amount).replace(/[^0-9]/g, ""), 10).toLocaleString()}</Badge> },
            ],
            search: search2, setSearch: setSearch2, searchFields: ["expense"],
            page: currentPage2, setPage: setCurrentPage2, perPage: entriesPerPage2, setPerPage: setEntriesPerPage2,
            csvFile: "expenses.csv", excelName: "Expenses", pdfName: "Expenses",
            totalKey: "amount", totalSpan: 3,
          })}

          {renderTable({
            title: "Pay to Supplier", titleIcon: Truck, titleColor: "from-amber-500 to-orange-600",
            data: paymentsToSuppliers,
            columns: [
              { key: "sl", label: "SL" },
              { key: "supplier", label: "Supplier" },
              { key: "paymentDate", label: "Payment Date", render: (item) => <Badge variant="outline" className="text-xs">{item.paymentDate}</Badge> },
              { key: "amount", label: "Amount", render: (item) => <Badge variant="warning">TK {parseInt(String(item.amount).replace(/[^0-9]/g, ""), 10).toLocaleString()}</Badge> },
            ],
            search: search3, setSearch: setSearch3, searchFields: ["supplier"],
            page: currentPage3, setPage: setCurrentPage3, perPage: entriesPerPage3, setPerPage: setEntriesPerPage3,
            csvFile: "payments-to-suppliers.csv", excelName: "Payments to Suppliers", pdfName: "Payments to Suppliers",
            totalKey: "amount", totalSpan: 3,
          })}

          {renderTable({
            title: "Receive from Customer", titleIcon: Users, titleColor: "from-blue-500 to-indigo-600",
            data: paymentsFromCustomers,
            columns: [
              { key: "sl", label: "SL" },
              { key: "customer", label: "Customer" },
              { key: "paymentDate", label: "Payment Date", render: (item) => <Badge variant="outline" className="text-xs">{item.paymentDate}</Badge> },
              { key: "amount", label: "Amount", render: (item) => <Badge variant="info">TK {parseInt(String(item.amount).replace(/[^0-9]/g, ""), 10).toLocaleString()}</Badge> },
            ],
            search: search4, setSearch: setSearch4, searchFields: ["customer"],
            page: currentPage4, setPage: setCurrentPage4, perPage: entriesPerPage4, setPerPage: setEntriesPerPage4,
            csvFile: "payments-from-customers.csv", excelName: "Payments from Customers", pdfName: "Payments from Customers",
            totalKey: "amount", totalSpan: 3,
          })}
        </div>
      </div>
    </div>
  );
}
