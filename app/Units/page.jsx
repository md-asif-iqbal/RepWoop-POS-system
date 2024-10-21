"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Units() {
    const pathname = usePathname();
    const spanClass = " block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"

    const initialUnits = [
        { id: 1, name: 'pc', relatedTo: '-', relatedSign: '-', relatedBy: '-', result: 'pc = 1' },
        { id: 2, name: 'Dozen', relatedTo: 'pc', relatedSign: '*', relatedBy: '12', result: 'Dozen = 1 pc * 12' },
        { id: 3, name: 'gm', relatedTo: '-', relatedSign: '-', relatedBy: '-', result: 'gm = 1' },
        { id: 4, name: 'Kg', relatedTo: 'gm', relatedSign: '*', relatedBy: '1000', result: 'Kg = 1 gm * 1000' },
        { id: 5, name: 'ml', relatedTo: '-', relatedSign: '-', relatedBy: '-', result: 'ml = 1' },
        { id: 6, name: 'Litre', relatedTo: 'ml', relatedSign: '*', relatedBy: '1000', result: 'Litre = 1 ml * 1000' },
        { id: 7, name: 'Box', relatedTo: 'pc', relatedSign: '*', relatedBy: '12', result: 'Box = 1 pc * 12' },
        { id: 8, name: 'Screw Packet', relatedTo: 'pc', relatedSign: '*', relatedBy: '1000', result: 'Screw Packet = 1 pc * 1000' },
        { id: 9, name: 'thousand', relatedTo: 'pc', relatedSign: '*', relatedBy: '1000', result: 'thousand = 1 pc * 1000' },
        { id: 10, name: 'Shoes_pair', relatedTo: 'Dozen', relatedSign: '*', relatedBy: '12', result: 'Shoes_pair = 1 Dozen * 12' },
        { id: 11, name: 'Shoes_pair_2', relatedTo: 'Dozen', relatedSign: '*', relatedBy: '1', result: 'Shoes_pair_2 = 1 Dozen * 1' },
        { id: 12, name: 'Shoes_pair_3', relatedTo: 'Shoes_pair_2', relatedSign: '*', relatedBy: '12', result: 'Shoes_pair_3 = 1 Shoes_pair_2 * 12' },
        { id: 13, name: 'Pcs', relatedTo: 'pc', relatedSign: '*', relatedBy: '1', result: 'Pcs = 1 pc * 1' },
        { id: 14, name: 'Dz', relatedTo: 'Pcs', relatedSign: '*', relatedBy: '12', result: 'Dz = 1 Pcs * 12' },
        { id: 15, name: 'kg', relatedTo: 'pc', relatedSign: '*', relatedBy: '1', result: 'kg = 1 pc * 1' },
        { id: 16, name: 'sack', relatedTo: 'kg', relatedSign: '*', relatedBy: '50', result: 'sack = 1 kg * 50' },
        { id: 17, name: 'Tonne', relatedTo: 'kg', relatedSign: '*', relatedBy: '1000', result: 'Tonne = 1 kg * 1000' },
        { id: 18, name: 'Ounces', relatedTo: 'Pcs', relatedSign: '*', relatedBy: '1', result: 'Ounces = 1 Pcs * 1' },
        { id: 19, name: 'Pound', relatedTo: 'Ounces', relatedSign: '*', relatedBy: '16', result: 'Pound = 1 Ounces * 16' },
        { id: 20, name: 'gm_2', relatedTo: 'pc', relatedSign: '*', relatedBy: '1', result: 'gm_2 = 1 pc * 1' },
        // Add 5 more rows to make it 25 data points
        { id: 21, name: 'Box_2', relatedTo: 'pc', relatedSign: '*', relatedBy: '24', result: 'Box_2 = 1 pc * 24' },
        { id: 22, name: 'Pack', relatedTo: 'Pcs', relatedSign: '*', relatedBy: '6', result: 'Pack = 1 Pcs * 6' },
        { id: 23, name: 'Meter', relatedTo: '-', relatedSign: '-', relatedBy: '-', result: 'Meter = 1' },
        { id: 24, name: 'Square Meter', relatedTo: 'Meter', relatedSign: '*', relatedBy: '100', result: 'Square Meter = 1 Meter * 100' },
        { id: 25, name: 'Tonne_2', relatedTo: 'kg', relatedSign: '*', relatedBy: '1000', result: 'Tonne_2 = 1 kg * 1000' },
      ];

      const onAddUnit = (newUnit) => {
        setUnits((prevUnits) => [...prevUnits, newUnit]);
      };
    
      const [currentPage, setCurrentPage] = useState(1);
      const rowsPerPage = 20;
    
      // Pagination logic
      const totalPages = Math.ceil(initialUnits.length / rowsPerPage);
      const currentData = initialUnits.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
    
      const handleNextPage = () => {
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      const handlePrevPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };

  return (
    <div className='bg-white dark:bg-[#141432] font-nunito text-sm dark:text-white'>

    <div className="p-0  mt-[25%] sm:mt-[5%]  w-full">
              {/* Title Section */}

  <div className=" mb-4  shadow-sm rounded-sm ">
  <h1 className="text-xl text-gray-500 dark:text-white mx-5 ">Units </h1>
    <div className=' sm:md:flex items-start justify-start mx-5 py-5 gap-10 '>
        <Link href="/Units" className= {`${
                          pathname === '/Units' 
                          ? ' group text-orange-500  hover:text-orange-500' 
                          : 'group text-gray-500 dark:text-white hover:text-orange-500 '
                      }`}>
        Units
        <span className={spanClass}></span>
        </Link>
        <Link href="/Units/Create" className={`${
                          pathname === '/Units/Create' 
                          ? ' group text-orange-500  hover:text-orange-500' 
                          : 'group text-gray-500 dark:text-white hover:text-orange-500 '
                      }`}>
        + Add Unit
        <span className={spanClass}></span>
        </Link>
        
    </div>
  </div>
  <div className="container px-4 py-8">


      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-emerald-500 text-white">
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Related To</th>
              <th className="border px-4 py-2">Related Sign</th>
              <th className="border px-4 py-2">Related By</th>
              <th className="border px-4 py-2">Result</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((unit, index) => (
              <tr key={unit.id} className="text-center">
                <td className="border px-4 py-2">{(currentPage - 1) * rowsPerPage + index + 1}</td>
                <td className="border px-4 py-2">{unit.name}</td>
                <td className="border px-4 py-2">{unit.relatedTo}</td>
                <td className="border px-4 py-2">{unit.relatedSign}</td>
                <td className="border px-4 py-2">{unit.relatedBy}</td>
                <td className="border px-4 py-2">{unit.result}</td>
                <td className="border px-4 py-2">
                  <div className="inline-flex space-x-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          className={`bg-gray-500 text-white px-4 py-2 rounded ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={handleNextPage}
          className={`bg-gray-500 text-white px-4 py-2 rounded ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  
</div>
</div>
  )
}
