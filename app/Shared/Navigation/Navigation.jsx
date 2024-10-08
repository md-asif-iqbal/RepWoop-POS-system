'use client'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';




import React, { useEffect, useState } from 'react';
export default function Navigation({toggleSidebar}) {
    const spanClass = " block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"
    
  const pathname = usePathname();


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
    <div className='w-[90%] lg:w-[85%] fixed top-0 z-50'>
        <div className="navbar bg-white dark:bg-[#141432] backdrop-blur-sm">
            <div className="navbar-start">
                
                <a className=" text-gray-500 dark:text-white text-md">Repwoop POS Software</a>
            </div>
            {/* nav center */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu-horizontal gap-8 px-1">
                <li >
                  <Link href="/POS" className=
                        {`${
                          pathname === '/POS' 
                            ? ' group text-orange-500  ' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                            POS
                  <span className={spanClass}></span>
                  </Link>
                  
                </li>
                <li>
                  <Link href="/Sales"  className=
                  {`${
                    pathname === '/Sales' 
                      ? ' group text-orange-500  ' 
                      : 'group text-gray-500 dark:text-white hover:text-orange-500'
                  }`}
               
                  >
                   
              Sales
   
                            
                  <span className={spanClass}></span>
                  </Link>
                </li>
                <li>
                  <Link href="/Stock" className=
                        {`${
                          pathname === '/Stock' 
                            ? ' group text-orange-500  ' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                            Stock
                  <span className={spanClass}></span>
                  </Link>
                </li>
                <li>
                  <Link href="/Products" className=
                        {`${
                          pathname === '/Products' 
                            ? ' group text-orange-500  ' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                  Products
                  <span className={spanClass}></span>
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
        <li><Link href="/Login">Log In</Link></li>
      </ul>
            </div>
          </div>
        </div>

    </div>
  )
}
