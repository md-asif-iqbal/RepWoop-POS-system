'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import {
  Component, UserRound, Landmark, Banknote, Wallet, BadgeDollarSign,
  LayoutDashboard, MailPlus, Users, UserCog, ChartColumn,
  CalendarClock, CalendarDays, FileClock, CalendarCog, FileChartColumnIncreasing,
  PackageMinus, UserRoundSearch, ChartNoAxesCombined, Receipt, FileBox, CalendarPlus,
  CalendarFold, Settings, Menu, Building2, FileX, UsersRound,
  BadgeInfo, DatabaseBackup, UserCheck, Cog, ShoppingCart, ShoppingBag,
  RotateCcwSquare, BaggageClaim, Boxes, Weight, Package, Ribbon, X, Rocket
} from 'lucide-react';
import { useSidebar } from './SidebarContext';

const sidebarSections = [
  {
    title: null,
    items: [
      { href: '/', label: 'Dashboard', icon: LayoutDashboard },
      { href: '/Owners', label: 'Owners', icon: UserRound },
      { href: '/Bank_Accounts', label: 'Bank Accounts', icon: Landmark },
      { href: '/Cash_Book', label: 'Cash Book', icon: Banknote },
    ]
  },
  {
    title: 'Sales & Purchase',
    items: [
      { href: '/POS', label: 'POS', icon: ShoppingCart },
      { href: '/Sales', label: 'Sales', icon: ShoppingBag },
      { href: '/Returns', label: 'Returns', icon: RotateCcwSquare },
      { href: '/Purchase', label: 'Purchase', icon: BaggageClaim },
      { href: '/Stock', label: 'Stock', icon: Boxes },
      { href: '/Damages', label: 'Damages', icon: FileX },
    ]
  },
  {
    title: 'Product Information',
    items: [
      { href: '/Units', label: 'Units', icon: Weight },
      { href: '/Products', label: 'Products', icon: Package },
      { href: '/Categories', label: 'Categories', icon: Component },
      { href: '/Brands', label: 'Brands', icon: Ribbon },
    ]
  },
  {
    title: 'Expenses & Payments',
    items: [
      { href: '/Expenses', label: 'Expenses', icon: Wallet },
      { href: '/Payments', label: 'Payments', icon: BadgeDollarSign },
    ]
  },
  {
    title: 'Promotions',
    items: [
      { href: '/Promotional-SMS', label: 'Promotional SMS', icon: MailPlus },
    ]
  },
  {
    title: 'Peoples',
    items: [
      { href: '/Customers', label: 'Customers', icon: Users },
      { href: '/Suppliers', label: 'Suppliers', icon: UsersRound },
      { href: '/Employee-and-Salary', label: 'Employee & Salary', icon: UserCog },
    ]
  },
  {
    title: 'Reports',
    items: [
      { href: '/Profit-Loss-Report', label: 'Profit & Loss', icon: ChartColumn },
      { href: '/Today-Report', label: 'Today Report', icon: CalendarDays },
      { href: '/Current-Month-Report', label: 'Monthly Report', icon: CalendarClock },
      { href: '/Summary-Report', label: 'Summary Report', icon: FileClock },
      { href: '/Daily-Report', label: 'Daily Report', icon: CalendarCog },
      { href: '/Customer-Due-Report', label: 'Customer Due', icon: FileChartColumnIncreasing },
      { href: '/Supplier-Due-Report', label: 'Supplier Due', icon: FileChartColumnIncreasing },
      { href: '/Low-Stock-Report', label: 'Low Stock', icon: PackageMinus },
      { href: '/Top-Customer', label: 'Top Customers', icon: UserRoundSearch },
      { href: '/Top-Product', label: 'Top Products', icon: ChartNoAxesCombined },
      { href: '/Category-Wise-Report', label: 'Category Report', icon: FileBox },
      { href: '/Purchase-Report', label: 'Purchase Report', icon: Receipt },
      { href: '/Customer-Ledger', label: 'Customer Ledger', icon: CalendarPlus },
      { href: '/Supplier-Ledger', label: 'Supplier Ledger', icon: CalendarFold },
    ]
  },
  {
    title: 'Settings',
    items: [
      { href: '/Settings', label: 'Settings', icon: Settings },
      { href: '/Roles-And-Permissions', label: 'Roles & Permissions', icon: BadgeInfo },
      { href: '/Users', label: 'Users', icon: UserCheck },
      { href: '/Assets-Management', label: 'Asset Management', icon: Cog },
    ]
  },
];

/** Hamburger button — place this in the nav bar */
export function MobileMenuButton() {
  const { open } = useSidebar();
  return (
    <button
      onClick={open}
      className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 text-slate-600 dark:text-slate-300 transition-all duration-200 active:scale-95"
      aria-label="Open menu"
    >
      <Menu size={20} strokeWidth={2} />
    </button>
  );
}

/** Drawer + backdrop — place this at body root, outside any stacking context */
export default function MobileDrawer() {
  const { isOpen, close } = useSidebar();
  const pathname = usePathname();

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300
          ${isOpen ? 'opacity-100 pointer-events-auto z-[200]' : 'opacity-0 pointer-events-none -z-10'}`}
      />

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white dark:bg-slate-900
          border-r border-slate-200 dark:border-slate-800 lg:hidden
          transition-transform duration-300 ease-in-out z-[300]
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <div className="p-3 space-y-4 text-[13px] font-inter">

            {/* Logo + close */}
            <div className="flex items-center justify-between">
              <Link href="/" onClick={close} className="flex items-center gap-2.5 px-2 py-3 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 shrink-0">
                  <Rocket size={18} className="text-white -rotate-45" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-slate-800 dark:text-white leading-tight tracking-tight">
                    Soft<span className="text-indigo-600 dark:text-indigo-400">Landing</span>
                  </span>
                  <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                    POS System
                  </span>
                </div>
              </Link>
              <button
                onClick={close}
                className="p-2 mr-1 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 text-slate-400 hover:text-red-500 transition-all duration-200"
                aria-label="Close menu"
              >
                <X size={20} strokeWidth={2} />
              </button>
            </div>

            {/* Nav sections */}
            {sidebarSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                {section.title && (
                  <p className="section-title px-3 pt-2">{section.title}</p>
                )}
                <ul className="space-y-0.5">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={close}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                            isActive
                              ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium'
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          <Icon
                            size={18}
                            strokeWidth={isActive ? 2 : 1.5}
                            className={isActive
                              ? 'text-indigo-600 dark:text-indigo-400'
                              : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'}
                          />
                          <span>{item.label}</span>
                          {isActive && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            {/* Bottom links */}
            <div className="space-y-0.5 pb-8">
              <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200">
                <DatabaseBackup size={18} strokeWidth={1.5} className="text-slate-400 dark:text-slate-500" />
                <span>Backup</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200">
                <Building2 size={18} strokeWidth={1.5} className="text-slate-400 dark:text-slate-500" />
                <span>SoftLanding</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
