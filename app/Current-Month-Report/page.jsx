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
  CalendarDays,
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

export default function CurrentMonthReport() {
  const pathname = usePathname();

  const topSaleProducts = [
    { id: 1, productName: "Mobile Phone", quantity: 150, totalSale: 75000, saleAmount: "TK 75,000" },
    { id: 2, productName: "Laptop", quantity: 80, totalSale: 400000, saleAmount: "TK 400,000" },
    { id: 3, productName: "Headphones", quantity: 100, totalSale: 30000, saleAmount: "TK 30,000" },
    { id: 4, productName: "Smartwatch", quantity: 50, totalSale: 75000, saleAmount: "TK 75,000" },
    { id: 5, productName: "Tablet", quantity: 40, totalSale: 200000, saleAmount: "TK 200,000" },
    { id: 6, productName: "Keyboard", quantity: 90, totalSale: 27000, saleAmount: "TK 27,000" },
    { id: 7, productName: "Mouse", quantity: 110, totalSale: 22000, saleAmount: "TK 22,000" },
    { id: 8, productName: "Monitor", quantity: 30, totalSale: 60000, saleAmount: "TK 60,000" },
    { id: 9, productName: "Printer", quantity: 20, totalSale: 50000, saleAmount: "TK 50,000" },
    { id: 10, productName: "Camera", quantity: 60, totalSale: 180000, saleAmount: "TK 180,000" },
  ];

  const expenses = [
    { id: 1, expense: "Office Rent", category: "Administrative", amount: "TK 120,000" },
    { id: 2, expense: "Electricity Bill", category: "Utility", amount: "TK 35,000" },
    { id: 3, expense: "Internet Bill", category: "Utility", amount: "TK 10,000" },
    { id: 4, expense: "Office Supplies", category: "Stationery", amount: "TK 15,000" },
    { id: 5, expense: "Travel Expenses", category: "Logistics", amount: "TK 25,000" },
    { id: 6, expense: "Marketing Costs", category: "Advertising", amount: "TK 100,000" },
    { id: 7, expense: "Staff Training", category: "HR", amount: "TK 50,000" },
    { id: 8, expense: "Software Subscription", category: "IT", amount: "TK 60,000" },
    { id: 9, expense: "Website Maintenance", category: "IT", amount: "TK 20,000" },
    { id: 10, expense: "Security Services", category: "Administrative", amount: "TK 40,000" },
  ];

  const paymentsToSuppliers = [
    { id: 1, supplier: "TechMart Ltd.", paymentDate: "2024-10-01", amount: "TK 500,000" },
    { id: 2, supplier: "Office World Supplies", paymentDate: "2024-10-05", amount: "TK 150,000" },
    { id: 3, supplier: "City Electric Co.", paymentDate: "2024-10-10", amount: "TK 80,000" },
    { id: 4, supplier: "NetCom Solutions", paymentDate: "2024-10-12", amount: "TK 120,000" },
    { id: 5, supplier: "WorkTech Office Furniture", paymentDate: "2024-10-15", amount: "TK 200,000" },
    { id: 6, supplier: "CleanWorld Services", paymentDate: "2024-10-18", amount: "TK 50,000" },
    { id: 7, supplier: "OfficeEquip Ltd.", paymentDate: "2024-10-20", amount: "TK 100,000" },
    { id: 8, supplier: "Global IT Supplies", paymentDate: "2024-10-22", amount: "TK 250,000" },
    { id: 9, supplier: "Marketing Pro", paymentDate: "2024-10-25", amount: "TK 180,000" },
    { id: 10, supplier: "Security Guard Services", paymentDate: "2024-10-28", amount: "TK 70,000" },
  ];

  const paymentsFromCustomers = [
    { id: 1, customer: "John Doe", paymentDate: "2024-10-02", amount: "TK 125,000" },
    { id: 2, customer: "Jane Smith", paymentDate: "2024-10-06", amount: "TK 75,000" },
    { id: 3, customer: "Acme Corporation", paymentDate: "2024-10-08", amount: "TK 180,000" },
    { id: 4, customer: "Global Industries", paymentDate: "2024-10-11", amount: "TK 250,000" },
    { id: 5, customer: "Tech Innovators", paymentDate: "2024-10-13", amount: "TK 320,000" },
    { id: 6, customer: "Future Tech Solutions", paymentDate: "2024-10-15", amount: "TK 210,000" },
    { id: 7, customer: "Creative Minds Ltd.", paymentDate: "2024-10-18", amount: "TK 270,000" },
    { id: 8, customer: "Digital Ventures", paymentDate: "2024-10-20", amount: "TK 180,000" },
    { id: 9, customer: "NextGen Enterprises", paymentDate: "2024-10-22", amount: "TK 150,000" },
    { id: 10, customer: "GlobalCom LLC", paymentDate: "2024-10-25", amount: "TK 300,000" },
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
    { label: "Sale Amount", value: "TK 4,167,593", icon: DollarSign, color: "from-emerald-500 to-green-600", iconBg: "bg-emerald-100 text-emerald-600" },
    { label: "Purchase Cost", value: "TK 3,651,596", icon: ShoppingCart, color: "from-red-500 to-rose-600", iconBg: "bg-red-100 text-red-600" },
    { label: "Expense", value: "TK 25,130", icon: Receipt, color: "from-slate-600 to-gray-700", iconBg: "bg-slate-100 text-slate-600" },
    { label: "Sell Profit", value: "TK 515,997", icon: TrendingUp, color: "from-teal-500 to-emerald-600", iconBg: "bg-teal-100 text-teal-600" },
  ];

  const renderTable = ({ title, titleIcon: TIcon, titleColor, data, columns, search, setSearch, searchField, page, setPage, perPage, setPerPage, csvFile, excelName, pdfName, totalKey, totalSpan }) => {
    const filtered = data.filter((item) => String(item[searchField] || "").toLowerCase().includes(search.toLowerCase()));
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
      <div className="p-4 sm:p-6 mt-[25%] sm:mt-[5%] w-full max-w-[1400px] mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-indigo-200">
              <CalendarDays className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Current Month Report</h1>
              <p className="text-xs text-gray-500 mt-0.5">Monthly business performance & analytics</p>
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
              { key: "saleAmount", label: "Amount", render: (item) => <Badge variant="success">{item.saleAmount}</Badge> },
            ],
            search: search1, setSearch: setSearch1, searchField: "productName",
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
              { key: "amount", label: "Amount", render: (item) => <Badge variant="destructive">{item.amount}</Badge> },
            ],
            search: search2, setSearch: setSearch2, searchField: "expense",
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
              { key: "amount", label: "Amount", render: (item) => <Badge variant="warning">{item.amount}</Badge> },
            ],
            search: search3, setSearch: setSearch3, searchField: "supplier",
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
              { key: "amount", label: "Amount", render: (item) => <Badge variant="info">{item.amount}</Badge> },
            ],
            search: search4, setSearch: setSearch4, searchField: "customer",
            page: currentPage4, setPage: setCurrentPage4, perPage: entriesPerPage4, setPerPage: setEntriesPerPage4,
            csvFile: "payments-from-customers.csv", excelName: "Payments from Customers", pdfName: "Payments from Customers",
            totalKey: "amount", totalSpan: 3,
          })}
        </div>
      </div>
    </div>
  );
}
