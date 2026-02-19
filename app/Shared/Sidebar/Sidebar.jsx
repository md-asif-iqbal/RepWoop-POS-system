'use client'

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import logo from '../../../assets/logo.png'
import { usePathname } from 'next/navigation';

import {
  Component, UserRound, Landmark, Banknote, Wallet, BadgeDollarSign,
  LayoutDashboard, MailPlus, Users, UserCog, ChartColumn,
  CalendarClock, CalendarDays, FileClock, CalendarCog, FileChartColumnIncreasing,
  PackageMinus, UserRoundSearch, ChartNoAxesCombined, Receipt, FileBox, CalendarPlus,
  CalendarFold, Settings, AlignJustify, Building2, FileX, UsersRound,
  BadgeInfo, DatabaseBackup, UserCheck, Cog, ShoppingCart, ShoppingBag,
  RotateCcwSquare, BaggageClaim, Boxes, Weight, Package, Ribbon
} from 'lucide-react';

// Sidebar navigation data structure
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

export default function Sidebar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="font-inter text-sm z-50">
      {/* Mobile Toggle */}
      <div className="dropdown lg:hidden items-center">
        <div
          ref={toggleButtonRef}
          tabIndex={0}
          role="button"
          className="btn btn-ghost sm:block lg:hidden dark:text-white"
          onClick={toggleSidebar}
        >
          <AlignJustify size={20} strokeWidth={2} />
        </div>
      </div>

      {/* Sidebar Content */}
      <div
        ref={sidebarRef}
        className={`sidebar fixed z-50 lg:static bg-white dark:bg-slate-900 
          scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent 
          p-3 space-y-1 md:h-screen transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'w-64 opacity-100' : 'w-0 opacity-0 hidden lg:block'}
          lg:w-64 lg:opacity-100`}
        style={{ overflowY: 'auto', maxHeight: '100vh' }}
      >
        <div className="space-y-5 text-[13px] transition-opacity duration-300">
          {/* Logo */}
          <Link href="/" className="block px-2 py-3">
            <Image 
              src={logo} 
              width={150} 
              height={300} 
              alt="Repwoop POS Software" 
              className="bg-transparent w-[55%] xl:w-[80%]"
            />
          </Link>

          {/* Navigation Sections */}
          {sidebarSections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              {section.title && (
                <p className="section-title px-3 pt-2">
                  {section.title}
                </p>
              )}
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                          isActive
                            ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        <Icon
                          size={18}
                          strokeWidth={isActive ? 2 : 1.5}
                          className={isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'}
                        />
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Bottom Links */}
          <div className="space-y-0.5 pb-8">
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            >
              <DatabaseBackup size={18} strokeWidth={1.5} className="text-slate-400 dark:text-slate-500" />
              <span>Backup</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            >
              <Building2 size={18} strokeWidth={1.5} className="text-slate-400 dark:text-slate-500" />
              <span>Repwoop</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
