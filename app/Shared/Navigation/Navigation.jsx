'use client'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import { Moon, SunMedium, Bell, Rocket } from 'lucide-react';
import { MobileMenuButton } from '../Sidebar/MobileNav';

export default function Navigation() {
  const [theme, setTheme] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const detectSystemTheme = () => {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      return 'light';
    };

    const savedTheme = localStorage.getItem('theme') || detectSystemTheme();
    setTheme(savedTheme);

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinks = [
    { href: '/POS', label: 'POS' },
    { href: '/Sales', label: 'Sales' },
    { href: '/Stock', label: 'Stock' },
    { href: '/Products', label: 'Products' },
    { href: '/Purchase', label: 'Purchase' },
    { href: '/Customers', label: 'Customers' },
    { href: '/Suppliers', label: 'Suppliers' },
    { href: '/Reports', label: 'Reports' },
  ];

  return (
    <div className="w-full fixed top-0 z-[55] font-inter text-sm lg:left-64 lg:w-[calc(100%-256px)]">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left - Mobile hamburger + Brand */}
          <div className="flex items-center gap-2">
            <MobileMenuButton />
            {/* Mobile logo - only visible on mobile (< lg) */}
            <Link href="/" className="flex items-center gap-2 lg:hidden">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
                <Rocket size={15} className="text-white -rotate-45" />
              </div>
              <span className="text-slate-700 dark:text-white font-bold text-sm">
                Soft<span className="text-indigo-600 dark:text-indigo-400">Landing</span>
              </span>
            </Link>
          </div>

          {/* Center - Nav Links */}
          <nav className="hidden lg:flex items-center gap-0.5 overflow-x-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  pathname === link.href
                    ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right - Actions (always visible) */}
          <div className="flex items-center gap-1 sm:gap-3 shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={handleToggle}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunMedium size={20} className="text-amber-400" />
              ) : (
                <Moon size={20} className="text-slate-500" />
              )}
            </button>

            {/* Notifications */}
            <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative">
              <Bell size={20} className="text-slate-500 dark:text-slate-400" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-indigo-500/20">
                  <Image
                    alt="User avatar"
                    width={32}
                    height={32}
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg rounded-xl w-52 
                bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <li>
                  <a className="rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
                    Profile
                    <span className="badge badge-sm bg-indigo-100 text-indigo-600 border-0">New</span>
                  </a>
                </li>
                <li>
                  <Link href="/Settings" className="rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
                    Settings
                  </Link>
                </li>
                <div className="divider my-1 h-px bg-slate-200 dark:bg-slate-700"></div>
                <li>
                  <Link href="/Login" className="rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10">
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
