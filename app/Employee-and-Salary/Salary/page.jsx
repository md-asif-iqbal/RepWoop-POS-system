"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Salary() {
    const spanClass = " block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"
    const pathname = usePathname();
  return (
    <div>
        <div className='bg-white dark:bg-[#141432] font-nunito text-sm'>

<div className="p-0  mt-[25%] lg:mt-[5%]  w-full">
          {/* Title Section */}

<div className=" mb-4  shadow-sm rounded-lg font-bold">
<h1 className="text-xl text-gray-500 dark:text-white mx-5 ">Employee and Salary</h1>
<div className=' lg:flex items-start justify-start mx-5 py-5 gap-10 '>
    <Link href="/Employee-and-Salary" className= {`${
                      pathname === '/Employee-and-Salary' 
                      ? ' group text-orange-500  hover:text-orange-500' 
                      : 'group text-gray-500 dark:text-white hover:text-orange-500 '
                  }`}>
    Employees
    <span className={spanClass}></span>
    </Link>
    <Link href="/Employee-and-Salary/New-Employee" className={`${
                      pathname === '/Employee-and-Salary/New-Employee' 
                      ? ' group text-orange-500  hover:text-orange-500' 
                      : 'group text-gray-500 dark:text-white hover:text-orange-500 '
                  }`}>
    + New Employee
    <span className={spanClass}></span>
    </Link>
    <Link href="/Employee-and-Salary/Salary" className= {`${
                      pathname === '/Employee-and-Salary/Salary' 
                      ? ' group text-orange-500  hover:text-orange-500' 
                      : 'group text-gray-500 dark:text-white hover:text-orange-500 '
                  }`}>
    Employees Salary
    <span className={spanClass}></span>
    </Link>
    <Link href="/Employee-and-Salary/New-Salary" className= {`${
                      pathname === '/Employee-and-Salary/New-Salary' 
                      ? ' group text-orange-500  hover:text-orange-500' 
                      : 'group text-gray-500 dark:text-white hover:text-orange-500 '
                  }`}>
    + New Employee Salary
    <span className={spanClass}></span>
    </Link>
    <Link href="/Employee-and-Salary/Payments" className= {`${
                      pathname === '/Employee-and-Salary/Payments' 
                      ? ' group text-orange-500  hover:text-orange-500' 
                      : 'group text-gray-500 dark:text-white hover:text-orange-500 '
                  }`}>
    Payment List
    <span className={spanClass}></span>
    </Link>
</div>
</div>



</div>
</div>
    </div>
  )
}
