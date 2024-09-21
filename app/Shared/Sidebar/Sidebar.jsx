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
                <Image src={logo} width={200} height={300} alt='Repwoop POS Software' className='bg-transparent '/>
                <div className="text-start">
                    <ul className="pt-2 space-y-4 text-gray-600 dark:text-white text-sm">
                        <li className='flex items-center gap-3'>
                        <IoHome size={24}/>
                        <Link href="/" className="group  text-gray-600 dark:text-white hover:text-orange-500">
                          Dashboard
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <MdPerson3 size={24}/>
                        <Link href="/Owners" className="group  text-gray-600 dark:text-white hover:text-orange-500">
                         Owners
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <GiBank size={24}/>
                        <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                            Bank Accounts
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <GiCash size={24}/>
                        <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                            Cash Book
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                        </Link>
                        </li>
                        
                    </ul>
                </div>
                {/* Sales & Purchase */}
                <div className="">
                    <span className="uppercase text-sm text-gray-600 dark:text-white font-bold">
                    Sales & Purchase 
                    </span>
                    <ul className="pt-2 space-y-4 text-gray-600 dark:text-white text-sm">
                        <li className='flex items-center gap-3'>
                        <FaCartArrowDown size={24}/>
                        <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                            POS
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <IoBagHandle size={24}/>
                        <Link href="/Sales" 
                        className=
                        {`${
                          pathname === '/Sales' 
                            ? ' group text-orange-500  border-b-2 border-red-500 pb-1' 
                            : 'group text-gray-600 dark:text-white hover:text-orange-500'
                        }`}>
                            Sales
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <TbTruckReturn size={24}/>
                        <Link href="/Returns" className="group text-gray-600 dark:text-white hover:text-orange-500">
                            Returns
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <TbShoppingCartDollar size={24}/>
                        <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                            Purchase
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <FaBoxesPacking size={24}/>
                        <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                        Stock
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                        </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <RiFileDamageFill size={24}/>
                        <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                        Damages
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                        </Link>
                        </li>
                    </ul>
                </div>

                {/* Product Information */}
                <div>
                    <span className="uppercase text-sm text-gray-600 dark:text-white font-bold">
                    Product Information 
                    </span>
                    <ul className="pt-2 space-y-4 text-gray-600 dark:text-white text-sm">
                        <li className='flex items-center gap-3'>
                        <GiWeight size={24}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                            Units
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                            <RiProductHuntFill size={24}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                            Products
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <AiFillProduct size={24}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                            Categories
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                            <TbBrandSupernova size={24}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                            Brands
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                    </ul>

                </div>

                {/* Expenses & Payments */}
                <div>
                    <span className="uppercase text-sm text-gray-600 dark:text-white font-bold">
                    Expenses & Payments 
                    </span>
                    <ul className="pt-2 space-y-4 text-gray-600 dark:text-white text-sm">
                        <li className='flex items-center gap-3'>
                            <GiExpense size={24}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                            Expenses
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <GiWallet size={24}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                            Payments
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Promotion */}
                <div>
                    <span className="uppercase text-sm text-gray-600 dark:text-white font-bold">
                    Promotions
                    </span>
                    <ul className="pt-2 space-y-4 text-gray-600 dark:text-white text-sm">
                        <li className='flex items-center gap-3'>
                            <FaSms size={24}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                            Promotional SMS
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    {/* Peoples */}
                    <span className="uppercase text-sm text-gray-600 dark:text-white font-bold">
                    Peoples 
                    </span>
                    <ul className="pt-2 space-y-4 text-gray-600 dark:text-white text-sm">
                        <li className='flex items-center gap-3'>
                            <IoIosPeople size={24}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                            Customers
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <FaPeopleCarry size={24}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                            Suppliers
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <MdManageAccounts size={24}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                            Employee and Salary
                            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Reports */}
                <div>
                    <span className="uppercase text-sm text-gray-600 dark:text-white font-bold">Reports</span>
                    <ul className="pt-2 space-y-4  text-gray-600 dark:text-white text-sm">
                
                        <li className='flex items-center gap-3'>
                        <GiTakeMyMoney size={24}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                                Profit Loss Report
                                <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <Ri24HoursLine size={24}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                                Today Report
                                <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <IoCalendarNumberSharp size={24}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                                Current Month Report
                                <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <TbReport size={24}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                                Summary Report
                                <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <RiCalendarScheduleFill size={24}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                                Daily Report
                                <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <TbReportMoney size={24}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                                Customer Due Report
                                <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <BiSolidReport size={24}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                                Supplier Due Report
                                <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        
                        <li className='flex items-center gap-3'>
                        <PiBoxArrowDownBold size={24}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                                Low Stock Report
                                <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <FaPeopleGroup size={24} />
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                                Top Customer
                                <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <GiProgression size={24} />
                        
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                                Top Product (All Time)
                                <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <FaBoxTissue size={23} />
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                                Category Wise Report
                                <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                        <TbReportMoney size={23}/>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                                Purchase Report
                                <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                                Customer Ledger
                                <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                        <li className='flex items-center gap-3'>
                            <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                                Supplier Ledger
                                <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                 {/* Settings & Customize */}
                 <div>
                            <span className="uppercase text-sm text-gray-600 dark:text-white font-bold">
                                Settings & Customize 
                            </span>
                            <ul className="pt-2 space-y-4 text-gray-600 dark:text-white text-sm">
                            <li className='flex items-center gap-3'>
                            <MdOutlineSettings size={24}/>
                                <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                                    Settings
                                    <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                                </Link>
                            </li>
                            <li className='flex items-center gap-3'>
                            <BiErrorAlt size={24}/>
                                <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                                    Roles & Permissions
                                    <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                                </Link>
                            </li>
                            <li className='flex items-center gap-3'>
                            <FaUserCog size={24}/>
                                <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                                    Users
                                    <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                                </Link>
                            </li>
                            <li className='flex items-center gap-3'>
                            <SiNginxproxymanager size={24}/>
                                <Link href="/" className="group text-gray-600 dark:text-white hover:text-orange-500">
                                    Assets Management
                                    <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                                </Link>
                            </li>
                            </ul>
                        </div>

                        {/* Backup */}
                        <div className='flex items-center gap-3  text-gray-600 dark:text-white text-sm'>
                        <MdBackup size={24}/>
                            <span className="uppercase text-sm text-gray-600 dark:text-white font-bold">Backup</span>
                        </div>
                    
                
            </div>
        </div>
        {/* <Outlet */}
        {/* <div class="flex-1 p-2 text-xl font-bold"> */}
                {/* <Dashboard/> */}
        {/* </div> */}
    </div>
  )
}
