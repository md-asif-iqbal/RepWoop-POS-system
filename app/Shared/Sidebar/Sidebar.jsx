'use client'

import Link from 'next/link'
import React, { Children, useState } from 'react'
import { IoHome } from "react-icons/io5";
import { MdPerson3 } from "react-icons/md";
import { GiBank, GiCash } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { TbTruckReturn } from "react-icons/tb";
import { TbShoppingCartDollar } from "react-icons/tb";
import { FaBoxesPacking, FaPeopleGroup } from "react-icons/fa6";
import { RiFileDamageFill } from "react-icons/ri";
import { GiWeight } from "react-icons/gi";
import { RiProductHuntFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { GiExpense } from "react-icons/gi";
import { TbBrandSupernova } from "react-icons/tb";
import { GiWallet } from "react-icons/gi";
import { FaSms } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { Ri24HoursLine } from "react-icons/ri";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { TbReport } from "react-icons/tb";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { TbReportMoney } from "react-icons/tb";
import { BiSolidReport } from "react-icons/bi";
import { PiBoxArrowDownBold } from "react-icons/pi";
import { FaBoxTissue } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { MdOutlineSettings } from "react-icons/md";
import { BiErrorAlt } from "react-icons/bi";
import { FaUserCog } from "react-icons/fa";
import { SiNginxproxymanager } from "react-icons/si";
import { MdBackup } from "react-icons/md";
import Image from 'next/image';
import logo from '../../../assets/logo.png'
import { usePathname } from 'next/navigation';


import { Component,UserRound,Landmark,Banknote, Wallet, SmartphoneNfc, BadgeDollarSign, LayoutList, LayoutDashboard, MailPlus, Users, PackageCheck, UserCog, ChartColumn, CalendarClock, CalendarDays, FileClock, CalendarCog, FileChartColumnIncreasing, PackageMinus, UserRoundSearch, ChartNoAxesCombined, Receipt, FileBox, CalendarPlus, CalendarFold, Cog, BadgeInfo, DatabaseBackup, UserCheck, Settings } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { BaggageClaim } from 'lucide-react';
import { Truck } from 'lucide-react';
import { RotateCcwSquare } from 'lucide-react';
import { Boxes } from 'lucide-react';
import { Weight } from 'lucide-react';
import { Package } from 'lucide-react';
import { Ribbon } from 'lucide-react';


export default function Sidebar({isSidebarOpen}) {
    const spanClass = " block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"

    const pathname = usePathname();

  return (
    <div>
          <div
             id="sidebar"
             className={`sidebar  bg-white dark:bg-[#141432] scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent p-4 space-y-3 rounded-l-3xl  h-screen   transition-all duration-600 ease-in-out 
             ${isSidebarOpen ? 'w-64 opacity-100' : 'w-0 opacity-0'}
             lg:w-64 lg:opacity-100`} // Always show on large screens (lg+)
             style={{ overflowY: 'auto' }}
         >

            <div className={`space-y-4 text-[14px] transition-opacity  border-r-2 duration-600 ease-in-out ${isSidebarOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
                {/* font*/}
               <Link href="/"> <Image src={logo} width={200} height={300} alt='Repwoop POS Software' className='bg-transparent '/></Link>
                <div className="text-start">
                    <ul className="pt-2 space-y-4 text-gray-600 dark:text-white ">
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <LayoutDashboard size={20}  strokeWidth={1} />
                        <Link href="/"  className=
                        {`${
                          pathname === '/' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                          Dashboard
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <UserRound size={20} strokeWidth={1}/>
                        <Link href="/Owners"  className=
                        {`${
                          pathname === '/Owners' 
                            ? ' group text-orange-500 ' 
                            : 'group text-gray-600 dark:text-white hover:text-orange-500'
                        }`}>
                         Owners
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <Landmark size={20} strokeWidth={1}/>
                        <Link href="/Bank_Accounts" className=
                        {`${
                          pathname === '/Bank_Accounts' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                            Bank Accounts
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <Banknote size={20} strokeWidth={1}/>
                        <Link href="/Cash_Book" className=
                        {`${
                          pathname === '/Cash_Book' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                            Cash Book
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                        
                    </ul>
                </div>
                {/* Sales & Purchase */}
                <div className="">
                    <span className="uppercase text-sm text-gray-500 dark:text-white ">
                    Sales & Purchase 
                    </span>
                    <ul className="pt-2 space-y-4 text-gray-500 dark:text-white ">
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <ShoppingCart size={20} strokeWidth={1}/>
                        <Link href="/POS" className=
                        {`${
                          pathname === '/POS' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                            POS
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <ShoppingBag size={20} strokeWidth={1}/>
                        <Link href="/Sales" 
                        className=
                        {`${
                          pathname === '/Sales' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                            Sales
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <RotateCcwSquare size={20} strokeWidth={1}/>
                        <Link href="/Returns" className=
                        {`${
                          pathname === '/Returns' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                            Returns
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <BaggageClaim size={20} strokeWidth={1}/>
                        <Link href="/Purchase" className=
                        {`${
                          pathname === '/Purchase' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                            Purchase
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <Boxes size={20} strokeWidth={1}/>
                        <Link href="/Stock" className=
                        {`${
                          pathname === '/Stock' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                        Stock
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <RiFileDamageFill size={20}/>
                        <Link href="/Damages" className=
                        {`${
                          pathname === '/Damages' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                        Damages
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                    </ul>
                </div>

                {/* Product Information */}
                <div>
                    <span className="uppercase text-sm text-gray-500 dark:text-white ">
                    Product Information 
                    </span>
                    <ul className="pt-2 space-y-4 text-gray-500 dark:text-white ">
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <Weight size={20} strokeWidth={1}/>
                            <Link href="/Units" className=
                        {`${
                          pathname === '/Units' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                            Units
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <Package size={20} strokeWidth={1}/>
                            <Link href="/Products" className=
                        {`${
                          pathname === '/Products' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                            Products
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <Component size={20} strokeWidth={1} />
                            <Link href="/Categories" className=
                        {`${
                          pathname === '/Categories' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                            Categories
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <Ribbon size={20} strokeWidth={1}/>
                            <Link href="/Brands" className=
                        {`${
                          pathname === '/Brands' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                            Brands
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                    </ul>

                </div>

                {/* Expenses & Payments */}
                <div>
                    <span className="uppercase text-sm text-gray-500 dark:text-white ">
                    Expenses & Payments 
                    </span>
                    <ul className="pt-2 space-y-4 text-gray-500 dark:text-white">
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                            <Wallet size={20} strokeWidth={1} />
                            <Link href="/Expenses" className=
                        {`${
                          pathname === '/Expenses' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                            Expenses
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <BadgeDollarSign size={20} strokeWidth={1} />
                            <Link href="/Payments" className=
                        {`${
                          pathname === '/Payments' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                            Payments
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Promotion */}
                <div>
                    <span className="uppercase text-sm text-gray-500 dark:text-white">
                    Promotions
                    </span>
                    <ul className="pt-2 space-y-4 text-gray-500 dark:text-white">
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <MailPlus size={20} strokeWidth={1} />
                            <Link href="/Promotional-SMS" className=
                        {`${
                          pathname === '/Promotional-SMS' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                            Promotional SMS
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    {/* Peoples */}
                    <span className="uppercase text-sm text-gray-500 dark:text-white ">
                    Peoples 
                    </span>
                    <ul className="pt-2 space-y-4 text-gray-500 dark:text-white ">
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <Users size={20} strokeWidth={1} />
                            <Link href="/Customers" className=
                        {`${
                          pathname === '/Customers' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                            Customers
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <PackageCheck size={20} strokeWidth={1} />
                            <Link href="/Suppliers" className=
                        {`${
                          pathname === '/Suppliers' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                            Suppliers
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <UserCog size={20}  strokeWidth={1} />
                            <Link href="/Employee-and-Salary" className=
                        {`${
                          pathname === '/Employee-and-Salary' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                            Employee and Salary
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Reports */}
                <div>
                    <span className="uppercase text-sm text-gray-500 dark:text-white ">Reports</span>
                    <ul className="pt-2 space-y-4  text-gray-500 dark:text-white ">
                
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <ChartColumn size={20} strokeWidth={1} />
                            <Link href="/Profit-Loss-Report" className=
                        {`${
                          pathname === '/Profit-Loss-Report' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                                Profit Loss Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <CalendarDays size={20} strokeWidth={1} />
                        
                            <Link href="/Today-Report" className=
                        {`${
                          pathname === '/Today-Report' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                                Today Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <CalendarClock size={20} strokeWidth={1} />
                            <Link href="/Current-Month-Report" className=
                        {`${
                          pathname === '/Current-Month-Report' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                                Current Month Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <FileClock size={20} strokeWidth={1} />
                            <Link href="/Summary-Report" className=
                        {`${
                          pathname === '/Summary-Report' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                                Summary Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <CalendarCog size={20} strokeWidth={1} />
                            <Link href="/Daily-Report" className=
                        {`${
                          pathname === '/Daily-Report' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                                Daily Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <TbReportMoney size={22} strokeWidth={1}/>
                            <Link href="/Customer-Due-Report" className=
                        {`${
                          pathname === '/Customer-Due-Report' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                                Customer Due Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <FileChartColumnIncreasing size={20} strokeWidth={1} />
                            <Link href="/Supplier-Due-Report" className=
                        {`${
                          pathname === '/Supplier-Due-Report' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                                Supplier Due Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <PackageMinus size={20}  strokeWidth={1} />
                            <Link href="/Low-Stock-Report" className=
                        {`${
                          pathname === '/Low-Stock-Report' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                                Low Stock Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <UserRoundSearch size={20} strokeWidth={1} />
                            <Link href="/Top-Customer" className=
                        {`${
                          pathname === '/Top-Customer' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                                Top Customer
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <ChartNoAxesCombined size={20} strokeWidth={1} />
                        
                            <Link href="/Top-Product" className=
                        {`${
                          pathname === '/Top-Product' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                                Top Product (All Time)
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <FileBox size={20} strokeWidth={1} />
                            <Link href="/Category-Wise-Report" className=
                        {`${
                          pathname === '/Category-Wise-Report' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                                Category Wise Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <Receipt size={20} strokeWidth={1} />
                            <Link href="/Purchase-Report" className=
                        {`${
                          pathname === '/Purchase-Report' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                                Purchase Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <CalendarPlus size={20} strokeWidth={1} />
                            <Link href="/Customer-Ledger" className=
                        {`${
                          pathname === '/Customer-Ledger' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                                Customer Ledger
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <CalendarFold size={20} strokeWidth={1} />
                            <Link href="/Supplier-Ledger" className=
                        {`${
                          pathname === '/Supplier-Ledger' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                                Supplier Ledger
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                 {/* Settings & Customize */}
                 <div>
                            <span className="uppercase text-sm text-gray-500 dark:text-white ">
                                Settings & Customize 
                            </span>
                            <ul className="pt-2 space-y-4 text-gray-500 dark:text-white ">
                            <li className='flex items-center gap-3 hover:text-orange-500'>
                            <Settings size={20} strokeWidth={1} />
                                <Link href="/Settings" className=
                        {`${
                          pathname === '/Settings' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                                    Settings
                                    <span className={spanClass}></span>
                                </Link>
                            </li>
                            <li className='flex items-center gap-3 hover:text-orange-500'>
                            <BadgeInfo size={20} strokeWidth={1} />
                                <Link href="/Roles-And-Permissions" className=
                        {`${
                          pathname === '/Roles-And-Permissions' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                                    Roles & Permissions
                                    <span className={spanClass}></span>
                                </Link>
                            </li>
                            <li className='flex items-center gap-3 hover:text-orange-500'>
                            <UserCheck size={20} strokeWidth={1} />
                                <Link href="/Users" className=
                        {`${
                          pathname === '/Users' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                                    Users
                                    <span className={spanClass}></span>
                                </Link>
                            </li>
                            <li className='flex items-center gap-3 hover:text-orange-500'>
                            
                            <Cog size={20} strokeWidth={1} />
                                <Link href="/Assets-Management" className=
                        {`${
                          pathname === '/Assets-Management' 
                            ? ' group text-orange-500' 
                            : 'group text-gray-500 dark:text-white hover:text-orange-500'
                        }`}>
                                    Assets Management
                                    <span className={spanClass}></span>
                                </Link>
                            </li>
                            </ul>
                        </div>

                        {/* Backup */}
                        <div className='flex items-center gap-3 hover:text-orange-500  text-gray-500 dark:text-white '>
                        <DatabaseBackup size={20} strokeWidth={1} />
                            <span className="uppercase text-sm text-gray-500 dark:text-white hover:text-orange-500">Backup</span>
                        </div>
                    
                
            </div>
        </div>
        {/* <Outlet */}
        {/* <div className="flex-1 p-2 text-md font-bold"> */}
                {/* <Dashboard/> */}
        {/* </div> */}
    </div>
  )
}
