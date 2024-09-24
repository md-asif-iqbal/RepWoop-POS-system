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

            <div className={`space-y-4  transition-opacity  border-r-2 duration-600 ease-in-out ${isSidebarOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
                {/* font*/}
               <Link href="/"> <Image src={logo} width={200} height={300} alt='Repwoop POS Software' className='bg-transparent '/></Link>
                <div className="text-start">
                    <ul className="pt-2 space-y-4 text-gray-500 dark:text-white text-sm">
                        <li className='flex items-center gap-3 hover:text-orange-500 '>
                        <IoHome size={24}/>
                        <Link href="/"  className=
                        {`${
                          pathname === '/' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                          Dashboard
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <MdPerson3 size={24}/>
                        <Link href="/Owners"  className=
                        {`${
                          pathname === '/Owners' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                         Owners
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <GiBank size={24}/>
                        <Link href="/Bank_Accounts" className=
                        {`${
                          pathname === '/Bank_Accounts' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                            Bank Accounts
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <GiCash size={24}/>
                        <Link href="/Cash_Book" className=
                        {`${
                          pathname === '/Cash_Book' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                            Cash Book
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                        
                    </ul>
                </div>
                {/* Sales & Purchase */}
                <div className="">
                    <span className="uppercase text-sm text-gray-500 dark:text-white font-bold">
                    Sales & Purchase 
                    </span>
                    <ul className="pt-2 space-y-4 text-gray-500 dark:text-white text-sm">
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <FaCartArrowDown size={24}/>
                        <Link href="/POS" className=
                        {`${
                          pathname === '/POS' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                            POS
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <IoBagHandle size={24}/>
                        <Link href="/Sales" 
                        className=
                        {`${
                          pathname === '/Sales' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                            Sales
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <TbTruckReturn size={24}/>
                        <Link href="/Returns" className=
                        {`${
                          pathname === '/Returns' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                            Returns
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <TbShoppingCartDollar size={24}/>
                        <Link href="/Purchase" className=
                        {`${
                          pathname === '/Purchase' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                            Purchase
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <FaBoxesPacking size={24}/>
                        <Link href="/Stock" className=
                        {`${
                          pathname === '/Stock' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                        Stock
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <RiFileDamageFill size={24}/>
                        <Link href="/Damages" className=
                        {`${
                          pathname === '/Damages' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                        Damages
                            <span className={spanClass}></span>
                        </Link>
                        </li>
                    </ul>
                </div>

                {/* Product Information */}
                <div>
                    <span className="uppercase text-sm text-gray-500 dark:text-white font-bold">
                    Product Information 
                    </span>
                    <ul className="pt-2 space-y-4 text-gray-500 dark:text-white text-sm">
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <GiWeight size={24}/>
                            <Link href="/Units" className=
                        {`${
                          pathname === '/Units' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                            Units
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                            <RiProductHuntFill size={24}/>
                            <Link href="/Products" className=
                        {`${
                          pathname === '/Products' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                            Products
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <AiFillProduct size={24}/>
                            <Link href="/Categories" className=
                        {`${
                          pathname === '/Categories' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                            Categories
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                            <TbBrandSupernova size={24}/>
                            <Link href="/Brands" className=
                        {`${
                          pathname === '/Brands' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                            Brands
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                    </ul>

                </div>

                {/* Expenses & Payments */}
                <div>
                    <span className="uppercase text-sm text-gray-500 dark:text-white font-bold">
                    Expenses & Payments 
                    </span>
                    <ul className="pt-2 space-y-4 text-gray-500 dark:text-white text-sm">
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                            <GiExpense size={24}/>
                            <Link href="/Expenses" className=
                        {`${
                          pathname === '/Expenses' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                            Expenses
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <GiWallet size={24}/>
                            <Link href="/Payments" className=
                        {`${
                          pathname === '/Payments' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                            Payments
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Promotion */}
                <div>
                    <span className="uppercase text-sm text-gray-500 dark:text-white font-bold">
                    Promotions
                    </span>
                    <ul className="pt-2 space-y-4 text-gray-500 dark:text-white text-sm">
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                            <FaSms size={24}/>
                            <Link href="/Promotional-SMS" className=
                        {`${
                          pathname === '/Promotional-SMS' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                            Promotional SMS
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    {/* Peoples */}
                    <span className="uppercase text-sm text-gray-500 dark:text-white font-bold">
                    Peoples 
                    </span>
                    <ul className="pt-2 space-y-4 text-gray-500 dark:text-white text-sm">
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                            <IoIosPeople size={24}/>
                            <Link href="/Customers" className=
                        {`${
                          pathname === '/Customers' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                            Customers
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <FaPeopleCarry size={24}/>
                            <Link href="/Suppliers" className=
                        {`${
                          pathname === '/Suppliers' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                            Suppliers
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <MdManageAccounts size={24}/>
                            <Link href="/Employee-and-Salary" className=
                        {`${
                          pathname === '/Employee-and-Salary' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                            Employee and Salary
                            <span className={spanClass}></span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Reports */}
                <div>
                    <span className="uppercase text-sm text-gray-500 dark:text-white font-bold">Reports</span>
                    <ul className="pt-2 space-y-4  text-gray-500 dark:text-white text-sm">
                
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <GiTakeMyMoney size={24}/>
                            <Link href="/Profit-Loss-Report" className=
                        {`${
                          pathname === '/Profit-Loss-Report' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                                Profit Loss Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <Ri24HoursLine size={24}/>
                            <Link href="/Today-Report" className=
                        {`${
                          pathname === '/Today-Report' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                                Today Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <IoCalendarNumberSharp size={24}/>
                            <Link href="/Current-Month-Report" className=
                        {`${
                          pathname === '/Current-Month-Report' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                                Current Month Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <TbReport size={24}/>
                            <Link href="/Summary-Report" className=
                        {`${
                          pathname === '/Summary-Report' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                                Summary Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <RiCalendarScheduleFill size={24}/>
                            <Link href="/Daily-Report" className=
                        {`${
                          pathname === '/Daily-Report' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                                Daily Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <TbReportMoney size={24}/>
                            <Link href="/Customer-Due-Report" className=
                        {`${
                          pathname === '/Customer-Due-Report' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                                Customer Due Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <BiSolidReport size={24}/>
                            <Link href="/Supplier-Due-Report" className=
                        {`${
                          pathname === '/Supplier-Due-Report' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                                Supplier Due Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <PiBoxArrowDownBold size={24}/>
                            <Link href="/Low-Stock-Report" className=
                        {`${
                          pathname === '/Low-Stock-Report' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                                Low Stock Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <FaPeopleGroup size={24} />
                            <Link href="/Top-Customer" className=
                        {`${
                          pathname === '/Top-Customer' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                                Top Customer
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <GiProgression size={24} />
                        
                            <Link href="/Top-Product" className=
                        {`${
                          pathname === '/Top-Product' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                                Top Product (All Time)
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <FaBoxTissue size={23} />
                            <Link href="/Category-Wise-Report" className=
                        {`${
                          pathname === '/Category-Wise-Report' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                                Category Wise Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                        <TbReportMoney size={23}/>
                            <Link href="/Purchase-Report" className=
                        {`${
                          pathname === '/Purchase-Report' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                                Purchase Report
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                            <Link href="/Customer-Ledger" className=
                        {`${
                          pathname === '/Customer-Ledger' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                                Customer Ledger
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3 hover:text-orange-500'>
                            <Link href="/Supplier-Ledger" className=
                        {`${
                          pathname === '/Supplier-Ledger' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                                Supplier Ledger
                                <span className={spanClass}></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                 {/* Settings & Customize */}
                 <div>
                            <span className="uppercase text-sm text-gray-500 dark:text-white font-bold">
                                Settings & Customize 
                            </span>
                            <ul className="pt-2 space-y-4 text-gray-500 dark:text-white text-sm">
                            <li className='flex items-center gap-3 hover:text-orange-500'>
                            <MdOutlineSettings size={24}/>
                                <Link href="/Settings" className=
                        {`${
                          pathname === '/Settings' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                                    Settings
                                    <span className={spanClass}></span>
                                </Link>
                            </li>
                            <li className='flex items-center gap-3 hover:text-orange-500'>
                            <BiErrorAlt size={24}/>
                                <Link href="/Roles-And-Permissions" className=
                        {`${
                          pathname === '/Roles-And-Permissions' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                                    Roles & Permissions
                                    <span className={spanClass}></span>
                                </Link>
                            </li>
                            <li className='flex items-center gap-3 hover:text-orange-500'>
                            <FaUserCog size={24}/>
                                <Link href="/Users" className=
                        {`${
                          pathname === '/Users' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                                    Users
                                    <span className={spanClass}></span>
                                </Link>
                            </li>
                            <li className='flex items-center gap-3 hover:text-orange-500'>
                            <SiNginxproxymanager size={24}/>
                                <Link href="/Assets-Management" className=
                        {`${
                          pathname === '/Assets-Management' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-500 dark:text-white '
                        }`}>
                                    Assets Management
                                    <span className={spanClass}></span>
                                </Link>
                            </li>
                            </ul>
                        </div>

                        {/* Backup */}
                        <div className='flex items-center gap-3 hover:text-orange-500  text-gray-500 dark:text-white text-sm'>
                        <MdBackup size={24}/>
                            <span className="uppercase text-sm text-gray-500 dark:text-white font-bold">Backup</span>
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
