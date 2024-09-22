import Link from 'next/link'
import React from 'react'

export default function CreatePruchase() {
  return (

            <div className='bg-white dark:bg-[#141432]'>
        <div className="p-0  mt-[25%] lg:mt-[5%]  w-full">
      {/* Title Section */}
  
      <div className=" mb-4  shadow-sm rounded-lg ">
      <h1 className="text-3xl text-gray-500 mx-5 font-bold">Purchase</h1>
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
    </div>
    </div>
  )
}
