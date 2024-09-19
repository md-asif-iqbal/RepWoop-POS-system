"use client"
import Link from 'next/link'
import { useState } from 'react';
import { GrUserSettings } from "react-icons/gr";
export default function page() {
    const ownersData = [
        {
          id: 1,
          name: 'John Doe',
          mobile: '123456789',
          address: 'New York',
          invested: 1000,
          withdrawn: 500,
          balance: 500,
        },
        {
          id: 2,
          name: 'Jane Smith',
          mobile: '987654321',
          address: 'Los Angeles',
          invested: 2000,
          withdrawn: 800,
          balance: 1200,
        },
        {
          id: 3,
          name: 'Mark Wilson',
          mobile: '555888999',
          address: 'Chicago',
          invested: 1500,
          withdrawn: 600,
          balance: 900,
        },
        {
          id: 4,
          name: 'Sara Connor',
          mobile: '444222333',
          address: 'San Francisco',
          invested: 1800,
          withdrawn: 700,
          balance: 1100,
        },
      ];
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [isDropdownOpen, setDropdownOpen] = useState(null);
      const toggleDropdown = (id) => {
        setDropdownOpen(isDropdownOpen === id ? null : id);
      };
  return (
    <div className='bg-white dark:bg-[#141432] h-screen'>
        <div className="p-0  mt-[25%] lg:mt-[5%]  w-full min-h-full">
      {/* Title Section */}
  
      <div className=" mb-4  shadow-sm rounded-lg ">
      <h1 className="text-3xl text-gray-500 mx-5 ">Owners</h1>
        <div className='flex items-start justify-start mx-5 py-5 gap-10'>
            <Link href="/Owners" className="group text-gray-600 dark:text-white text-xl hover:text-rose-500">
            Owners
            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
            </Link>
            <Link href="/Owners/Create" className="group text-gray-600 dark:text-white text-xl hover:text-rose-500">
            + Add new Owners
            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
            </Link>
        </div>
      </div>
              {/* Table Section */}
              <div className="relative overflow-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent bg-white dark:bg-[#141432] shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-teal-500 text-gray-600 dark:text-white">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Mobile</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">Invested</th>
              <th className="px-4 py-2 text-left">Withdrawn</th>
              <th className="px-4 py-2 text-left">Balance</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
          {ownersData.map((owner) => (
              <tr key={owner.id} className="border-b hover:bg-gray-50 dark:hover:bg-[#141432]  dark:text-white">
                <td className="px-4 py-2">{owner.id}</td>
                <td className="px-4 py-2">{owner.name}</td>
                <td className="px-4 py-2">{owner.mobile}</td>
                <td className="px-4 py-2">{owner.address}</td>
                <td className="px-4 py-2">{owner.invested}</td>
                <td className="px-4 py-2">{owner.withdrawn}</td>
                <td className="px-4 py-2">{owner.balance}</td>
                <td className="px-4 py-2 relative">
                  <button
                    onClick={() => toggleDropdown(owner.id)}
                    className="flex items-center justify-center ml-6 text-gray-900 dark:text-white hover:text-rose-600"
                  >
                    <GrUserSettings />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen === owner.id && (
                    <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-[#141432] shadow-lg rounded-md border border-gray-200 z-50">
                      <button className="block w-full px-4 py-2 text-left text-gray-700 dark:text-white hover:bg-gray-800">
                        Edit
                      </button>
                      <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-800 dark:text-white">
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
    </div>
  )
}
