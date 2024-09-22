"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { GrUserSettings } from 'react-icons/gr';
import { TbEdit, TbInvoice } from 'react-icons/tb';
import { IoTvOutline } from "react-icons/io5";

export default function Purchase() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(null);
    const [selectedPurchase, setSelectedPurchase] = useState(null);

    const [filter, setFilter] = useState({
      billNumber: "",
      startDate: "",
      endDate: "",
      product: "",
      supplier: ""
    });
    
      const purchasesData = [
        {
          billNo: 1,
          supplier: "Ayman Computer",
          purchaseDate: "22 Sep, 2024",
          items: "Laptop Computer | 000002",
          payable: "1,000,000.00 TK",
          paid: "0.00 TK",
          due: "1,000,000.00 TK",
        },
        {
          billNo: 2,
          supplier: "Computer City",
          purchaseDate: "22 Sep, 2024",
          items: "Tenda F3 Router | 0000014",
          payable: "15,000.00 TK",
          paid: "15,000.00 TK",
          due: "0.00 TK",
        },
        {
          billNo: 3,
          supplier: "Ayman Computer",
          purchaseDate: "22 Sep, 2024",
          items: "Tenda F3 Router | 0000014",
          payable: "13,000.00 TK",
          paid: "12,000.00 TK",
          due: "1,000.00 TK",
        },
        {
          billNo: 4,
          supplier: "Afko Khan",
          purchaseDate: "22 Sep, 2024",
          items: "Tenda F3 Router | 0000013",
          payable: "500.00 TK",
          paid: "500.00 TK",
          due: "0.00 TK",
        },
        {
          billNo: 5,
          supplier: "Riptith Hasan",
          purchaseDate: "22 Sep, 2024",
          items: "T-shirt Polo | 000001",
          payable: "40,000.00 TK",
          paid: "40,000.00 TK",
          due: "0.00 TK",
        },
        {
          billNo: 6,
          supplier: "Default Supplier",
          purchaseDate: "19 Sep, 2024",
          items: "Gaming Laptop | 000001",
          payable: "1,450,000.00 TK",
          paid: "1,450,000.00 TK",
          due: "0.00 TK",
        },
        {
          billNo: 7,
          supplier: "Default Supplier",
          purchaseDate: "19 Sep, 2024",
          items: "Dell Machine | 000001",
          payable: "2,750,000.00 TK",
          paid: "2,750,000.00 TK",
          due: "0.00 TK",
        },
        {
          billNo: 8,
          supplier: "Default Supplier",
          purchaseDate: "19 Sep, 2024",
          items: "Bijar For Men | 000001",
          payable: "250,000.00 TK",
          paid: "250,000.00 TK",
          due: "0.00 TK",
        },
        {
          billNo: 9,
          supplier: "Default Supplier",
          purchaseDate: "19 Sep, 2024",
          items: "Door Expert | 000001",
          payable: "1,395,400.00 TK",
          paid: "1,394,500.00 TK",
          due: "900.00 TK",
        },
        {
          billNo: 10,
          supplier: "Default Supplier",
          purchaseDate: "19 Sep, 2024",
          items: "Air Conditioner | 000001",
          payable: "9,135,000.00 TK",
          paid: "9,135,000.00 TK",
          due: "0.00 TK",
        },
        {
          billNo: 11,
          supplier: "Default Supplier",
          purchaseDate: "19 Sep, 2024",
          items: "Frieze | 000001",
          payable: "420,000.00 TK",
          paid: "420,000.00 TK",
          due: "0.00 TK",
        },
        {
          billNo: 12,
          supplier: "Default Supplier",
          purchaseDate: "19 Sep, 2024",
          items: "Ladies Shirt | 000005",
          payable: "70,000.00 TK",
          paid: "70,000.00 TK",
          due: "0.00 TK",
        },
        {
          billNo: 13,
          supplier: "Default Supplier",
          purchaseDate: "19 Sep, 2024",
          items: "T-shirt | 000004",
          payable: "120,000.00 TK",
          paid: "120,000.00 TK",
          due: "0.00 TK",
        },
        {
          billNo: 14,
          supplier: "Default Supplier",
          purchaseDate: "19 Sep, 2024",
          items: "Desktop Computer | 000001",
          payable: "375,000.00 TK",
          paid: "37,500.00 TK",
          due: "337,500.00 TK",
        },
        {
          billNo: 15,
          supplier: "Default Supplier",
          purchaseDate: "19 Sep, 2024",
          items: "Laptop Computer | 000002",
          payable: "7,200,000.00 TK",
          paid: "7,200,000.00 TK",
          due: "0.00 TK",
        },
        {
          billNo: 16,
          supplier: "Default Supplier",
          purchaseDate: "19 Sep, 2024",
          items: "Mobile Phone | 000001",
          payable: "415,000.00 TK",
          paid: "415,000.00 TK",
          due: "0.00 TK",
        }
      ];
      const [purchases, setPurchases] = useState(purchasesData);



      // Handle filtering changes
      const handleFilterChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
      };
    
      // Function to reset filters
      const resetFilters = () => {
        setFilter({
          billNumber: "",
          startDate: "",
          endDate: "",
          product: "",
          supplier: ""
        });
        setPurchases(purchasesData); // Reset the filtered purchases to the original data
      };
    
      // Function to apply filters
      const applyFilters = () => {
        let filteredPurchases = purchasesData;
    
        if (filter.billNumber) {
          filteredPurchases = filteredPurchases.filter((purchase) =>
            purchase.billNo.toString().includes(filter.billNumber)
          );
        }
    
        if (filter.startDate) {
          filteredPurchases = filteredPurchases.filter(
            (purchase) => purchase.purchaseDate >= filter.startDate
          );
        }
    
        if (filter.endDate) {
          filteredPurchases = filteredPurchases.filter(
            (purchase) => purchase.purchaseDate <= filter.endDate
          );
        }
    
        if (filter.product) {
          filteredPurchases = filteredPurchases.filter((purchase) =>
            purchase.items.toLowerCase().includes(filter.product.toLowerCase())
          );
        }
    
        if (filter.supplier) {
          filteredPurchases = filteredPurchases.filter((purchase) =>
            purchase.supplier.toLowerCase().includes(filter.supplier.toLowerCase())
          );
        }
    
        setPurchases(filteredPurchases);
      };
    
      const toggleDropdown = (index) => {
        setIsDropdownOpen(isDropdownOpen === index ? null : index); // Toggle the dropdown
      };

      
  return (
    <div className='bg-white dark:bg-[#141432]'>
        <div className="p-0  mt-[25%] lg:mt-[5%]  w-full">
      {/* Title Section */}
  
      <div className=" mb-4  shadow-sm rounded-lg font-bold">
      <h1 className="text-3xl text-gray-500 mx-5 ">Purchase</h1>
        <div className='flex items-start justify-start mx-5 py-5 gap-10'>
            <Link href="/Purchase" className="group text-gray-600 dark:text-white text-xl hover:text-rose-500">
            Purchase
            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
            </Link>
            <Link href="/Purchase/Create" className="group text-gray-600 dark:text-white text-xl hover:text-rose-500">
            + Add Purchase
            <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
            </Link>
        </div>
      </div>
              {/* here is another section */}
              <div className="">
      {/* Filter Section */}
                    <div className="mb-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                        <input
                        type="text"
                        name="billNumber"
                        value={filter.billNumber}
                        onChange={handleFilterChange}
                        placeholder="Bill Number"
                        className="p-2 border border-gray-300 rounded"
                        />
                        <input
                        type="date"
                        name="startDate"
                        value={filter.startDate}
                        onChange={handleFilterChange}
                        className="p-2 border border-gray-300 rounded"
                        />
                        <input
                        type="date"
                        name="endDate"
                        value={filter.endDate}
                        onChange={handleFilterChange}
                        className="p-2 border border-gray-300 rounded"
                        />
                        <input
                        type="text"
                        name="product"
                        value={filter.product}
                        onChange={handleFilterChange}
                        placeholder="Product"
                        className="p-2 border border-gray-300 rounded"
                        />
                        <input
                        type="text"
                        name="supplier"
                        value={filter.supplier}
                        onChange={handleFilterChange}
                        placeholder="Supplier"
                        className="p-2 border border-gray-300 rounded"
                        />
                        <button
                        className="bg-blue-500 text-white p-2 rounded"
                        onClick={applyFilters}
                        >
                        Filter
                        </button>
                        <button
                        className="bg-gray-500 text-white p-2 rounded"
                        onClick={resetFilters}
                        >
                        Reset
                        </button>
                    </div>

                    {/* Table Section */}
                    <div className="overflow-x-auto dark:bg-[#212144] dark:text-white">
                        <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-teal-500">
                            <th className="p-2 text-left">Bill No</th>
                            <th className="p-2 text-left">Supplier</th>
                            <th className="p-2 text-left">Purchase Date</th>
                            <th className="p-2 text-left">Items</th>
                            <th className="p-2 text-left">Payable</th>
                            <th className="p-2 text-left">Paid</th>
                            <th className="p-2 text-left">Due</th>
                            <th className="p-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchases.map((purchase, index) => (
                            <tr key={purchase.billNo} className="border-b">
                                <td className="p-2">{purchase.billNo}</td>
                                <td className="p-2">{purchase.supplier}</td>
                                <td className="p-2">{purchase.purchaseDate}</td>
                                <td className="p-2">{purchase.items}</td>
                                <td className="p-2">{purchase.payable}</td>
                                <td className="p-2">{purchase.paid}</td>
                                <td className="p-2">{purchase.due}</td>
                                <td className="p-2 relative">
                                <button
                                    className="bg-teal-500 text-white p-2 rounded flex items-center"
                                    onClick={() => toggleDropdown(index)}
                                >
                                    <span>Manage</span>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-2 h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                    </svg>
                                </button>
                                {isDropdownOpen === index && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20">
                                    <ul className="py-1">
                                        <li>
                                        <button
                                            className="w-full px-4 hover:scale-110 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 flex items-center"
                                            onClick={() => alert('Invoice Action')}
                                        >
                                            <span className="mr-2">
                                            <TbInvoice size={16}/>
                                            </span>
                                            Invoice
                                        </button>
                                        </li>
                                        <li>
                                        <button
                                            className="w-full px-4 hover:scale-110 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 flex items-center"
                                            onClick={() => alert('Show Action')}
                                        >
                                            <span className="mr-2 ">
                                            <IoTvOutline size={16}/>
                                            </span>
                                            Show
                                        </button>
                                        </li>
                                        <li>
                                        <button
                                            className="w-full px-4 py-2 hover:scale-110 text-sm text-left text-gray-700 hover:bg-gray-100 flex items-center"
                                            onClick={() => alert('Edit Action')}
                                        >
                                            <span className="mr-2 ">
                                           
                                            <TbEdit size={16}/>
                                            
                                            </span>
                                            Edit
                                        </button>
                                        </li>
                                        <li>
                                        <button
                                            className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 flex items-center"
                                            onClick={() => alert('Add Payment Action')}
                                        >
                                            <span className="mr-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                fillRule="evenodd"
                                                d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 11V9H7v2H9zm2 0h2V9h-2v2z"
                                                clipRule="evenodd"
                                                />
                                            </svg>
                                            </span>
                                            Add Payment
                                        </button>
                                        </li>
                                        <li>
                                        <button
                                            className="w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-100 flex items-center"
                                            onClick={() => alert('Delete Action')}
                                        >
                                            <span className="mr-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                fillRule="evenodd"
                                                d="M8 4a1 1 0 011-1h2a1 1 0 011 1v1h5a1 1 0 110 2H4a1 1 0 110-2h5V4zm3 4v5a1 1 0 01-2 0V8a1 1 0 012 0z"
                                                clipRule="evenodd"
                                                />
                                            </svg>
                                            </span>
                                            Delete
                                        </button>
                                        </li>
                                    </ul>
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
    </div>
  )
}
