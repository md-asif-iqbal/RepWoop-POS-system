"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Image from "next/image";
import {
  ArrowDownFromLine,
  ArrowUpFromLine,
  TrendingUp,
  Users,
  Truck,
  FileText,
  ShoppingCart,
  Package,
  DollarSign,
  Calendar,
  Pencil,
  Trash2,
  ArrowUpRight,
  BarChart3,
  CreditCard,
  Activity,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = window.localStorage.getItem("theme") === "dark";
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Sales",
        data: [100, 200, 150, 220, 180, 250, 270, 240, 300],
        backgroundColor: darkMode ? "#818cf8" : "#6366f1",
        hoverBackgroundColor: darkMode ? "#a5b4fc" : "#4f46e5",
        borderRadius: 8,
        barThickness: 24,
      },
      {
        label: "Purchase",
        data: [-150, -180, -120, -170, -130, -210, -190, -160, -200],
        backgroundColor: darkMode ? "#f87171" : "#ef4444",
        hoverBackgroundColor: darkMode ? "#fca5a5" : "#dc2626",
        borderRadius: 8,
        barThickness: 24,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: { color: darkMode ? "#94a3b8" : "#64748b", font: { family: "Inter" } },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        grid: { color: darkMode ? "#1e293b" : "#f1f5f9" },
        ticks: { color: darkMode ? "#94a3b8" : "#64748b", font: { family: "Inter" } },
      },
    },
    plugins: {
      legend: {
        labels: { color: darkMode ? "#e2e8f0" : "#334155", font: { family: "Inter", weight: 500 }, usePointStyle: true, pointStyle: "circle" },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  const summaryCards = [
    { label: "Total Purchase Due", value: "$307,144", icon: ShoppingCart, color: "from-violet-500 to-purple-600", change: "+12.5%" },
    { label: "Total Sales Due", value: "$4,385", icon: DollarSign, color: "from-emerald-500 to-green-600", change: "-3.2%" },
    { label: "Total Sale Amount", value: "$385,656", icon: TrendingUp, color: "from-blue-500 to-indigo-600", change: "+18.7%" },
    { label: "Total Expense", value: "$40,000", icon: ArrowUpFromLine, color: "from-rose-500 to-pink-600", change: "+5.1%" },
  ];

  const quickStats = [
    { label: "Customers", value: "1,248", icon: Users, color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-50 dark:bg-indigo-500/10" },
    { label: "Suppliers", value: "356", icon: Truck, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
    { label: "Purchase Invoice", value: "2,150", icon: FileText, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-500/10" },
    { label: "Sales Invoice", value: "5,870", icon: CreditCard, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-500/10" },
  ];

  const todaySummary = [
    { label: "Today Sold", value: "Tk 20,000", color: "border-l-indigo-500" },
    { label: "Sold - Purchase Cost", value: "Tk 8,500", color: "border-l-purple-500" },
    { label: "Today Expense", value: "Tk 3,200", color: "border-l-rose-500" },
    { label: "Today Profit", value: "Tk 4,800", color: "border-l-emerald-500" },
  ];

  const monthSummary = [
    { label: "Sold This Month", value: "Tk 3,886,022", icon: TrendingUp },
    { label: "Purchased This Month", value: "Tk 3,884,105", icon: ShoppingCart },
    { label: "Expense This Month", value: "Tk 200,000", icon: ArrowUpFromLine },
    { label: "Returns This Month", value: "Tk 20,000", icon: ArrowDownFromLine },
    { label: "Profit This Month", value: "Tk 123,122", icon: BarChart3 },
  ];

  const recentProducts = [
    { name: "MacBook Pro 16\"", price: "$2,499", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=100&fit=crop" },
    { name: "iPhone 15 Pro Max", price: "$1,199", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&h=100&fit=crop" },
    { name: "Nike Air Max 90", price: "$130", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop" },
    { name: "Apple Watch Ultra", price: "$799", image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=100&h=100&fit=crop" },
    { name: "Sony WH-1000XM5", price: "$349", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop" },
  ];

  const expiredProducts = [
    { id: 1, name: "Red Premium Handy", sku: "PT006", manufactured: "17 Jan 2023", expired: "29 Mar 2023", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop" },
    { id: 2, name: "iPhone 14 Pro", sku: "PT007", manufactured: "22 Feb 2023", expired: "04 Apr 2023", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&h=100&fit=crop" },
    { id: 3, name: "Black Slim 200", sku: "PT008", manufactured: "18 Mar 2023", expired: "13 May 2023", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop" },
    { id: 4, name: "Woodcraft Sandal", sku: "PT009", manufactured: "29 Mar 2023", expired: "27 May 2023", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop" },
    { id: 5, name: "Apple Series 5 Watch", sku: "PT010", manufactured: "24 Mar 2023", expired: "26 May 2023", image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=100&h=100&fit=crop" },
  ];

  return (
    <div className="dark:text-white p-4 lg:p-8 font-inter text-sm">
      <main className="space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
              Welcome Back! 👋
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              Here&apos;s what&apos;s happening with your store today
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700">
            <Calendar size={16} />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {summaryCards.map((card, i) => (
            <div key={i} className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${card.color} p-5 text-white shadow-lg`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <card.icon size={20} />
                  </div>
                  <span className="flex items-center gap-1 text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
                    <ArrowUpRight size={12} />
                    {card.change}
                  </span>
                </div>
                <p className="text-2xl font-bold">{card.value}</p>
                <p className="text-sm text-white/80 mt-1">{card.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStats.map((stat, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${stat.bg}`}>
                    <stat.icon size={22} className={stat.color} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800 dark:text-white">{stat.value}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Today Summary */}
        <div>
          <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
            <Activity size={20} className="text-indigo-500" />
            Today&apos;s Summary
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {todaySummary.map((item, i) => (
              <Card key={i} className={`border-l-4 ${item.color} hover:shadow-md transition-shadow`}>
                <CardContent className="p-5">
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium">{item.label}</p>
                  <p className="text-xl font-bold text-slate-800 dark:text-white mt-2">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Monthly Summary */}
        <div>
          <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
            <Calendar size={20} className="text-indigo-500" />
            Current Month Summary
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {monthSummary.map((item, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5 text-center">
                  <div className="mx-auto mb-3 p-2 w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
                    <item.icon size={18} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <p className="text-lg font-bold text-slate-800 dark:text-white">{item.value}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Chart + Recent Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Purchase & Sales Overview</CardTitle>
                <select className="text-sm bg-slate-100 dark:bg-slate-700 rounded-lg px-3 py-1.5 border-0 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-indigo-500">
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <Bar data={data} options={options} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Recent Products</CardTitle>
                <Button variant="ghost" size="sm" className="text-indigo-600 dark:text-indigo-400">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProducts.map((product, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 flex-shrink-0">
                      <Image src={product.image} alt={product.name} width={48} height={48} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-800 dark:text-white truncate">{product.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Latest product</p>
                    </div>
                    <span className="text-sm font-semibold text-slate-800 dark:text-white">{product.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Expired Products Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base flex items-center gap-2">
                <Package size={18} className="text-rose-500" />
                Expired Products
              </CardTitle>
              <Badge variant="destructive">{expiredProducts.length} items</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Product</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">SKU</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Manufactured</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Expired</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {expiredProducts.map((product) => (
                    <tr key={product.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 flex-shrink-0">
                            <Image src={product.image} alt={product.name} width={40} height={40} className="w-full h-full object-cover" />
                          </div>
                          <span className="font-medium text-slate-700 dark:text-slate-200">{product.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="secondary">{product.sku}</Badge>
                      </td>
                      <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{product.manufactured}</td>
                      <td className="py-3 px-4">
                        <Badge variant="destructive">{product.expired}</Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-500/10">
                            <Pencil size={14} />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10">
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
