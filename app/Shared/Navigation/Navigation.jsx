'use client'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import { Moon, SunMedium, Search, Bell } from 'lucide-react';
import Sidebar from '../Sidebar/Sidebar';

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
  ];

  return (
    <div className="w-full lg:w-[86%] fixed top-0 z-50 font-inter text-sm">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left - Mobile sidebar + Brand */}
          <div className="flex items-center gap-3">
            <span className="min-[769px]:hidden"><Sidebar /></span>
            <h1 className="text-slate-700 dark:text-white font-semibold text-base hidden sm:block">
              Repwoop <span className="text-indigo-600 dark:text-indigo-400">POS</span>
            </h1>
          </div>

          {/* Center - Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right - Actions */}
          <div className="flex items-center gap-3">
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
