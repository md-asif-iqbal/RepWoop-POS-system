'use client'

import useSidebarHook from '@/app/Hooks/SidebarHook/useSidebarHook';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
export default function Navigation({toggleSidebar}) {
  const [theme, setTheme] = useState(null); // State to track theme ('light' or 'dark')
  // console.log(theme);
   // Get the saved theme from localStorage on initial load and apply it
   useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light if no saved theme
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = () => {
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

  return (
    <div className='w-[85%] fixed top-0 z-50'>
        <div className="navbar bg-white dark:bg-[#141432] backdrop-blur-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleSidebar}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
               
                </div>
                <a className=" text-gray-600 dark:text-white text-xl">Repwoop POS Software</a>
            </div>
            {/* nav center */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu-horizontal gap-8 px-1">
                <li>
                  <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500 ">
                            POS
                  <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500 ">
                            Sales
                  <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500 ">
                            Stock
                  <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                  Today Report
                  <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className='navbar-end'>
            <button
                onClick={toggleTheme}
                className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {theme === 'light' ? (
                  <span role="img" aria-label="moon" className="text-gray-800 dark:text-gray-200">
                    🌙 Dark Mode
                  </span>
                ) : (
                  <span role="img" aria-label="sun" className="text-gray-800 dark:text-gray-200">
                    ☀️ Light Mode
                  </span>
                )}
              </button>
            <div className="dropdown dropdown-end">
            
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image
            alt="Tailwind CSS Navbar component"
            width={200}
            height={300}
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 mr-10 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
            </div>
          </div>
        </div>

    </div>
  )
}
