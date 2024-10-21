import Link from 'next/link'
import React from 'react'

export default function CreatePruchase() {
    const spanClass = " block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"
  return (

      <div className='bg-white dark:bg-[#141432] font-nunito text-sm'>
        <div className="p-0  mt-[25%] lg:mt-[5%]  w-full">
      {/* Title Section */}
          <div className=" mb-4  shadow-sm rounded-lg ">
          <h1 className="text-xl text-gray-500 mx-5 ">Purchase</h1>
            <div className='flex items-start justify-start mx-5 py-5 gap-10'>
                <Link href="/Purchase" className="group text-gray-500 dark:text-white text-md hover:text-orange-500">
                Purchase
                <span className={spanClass}></span>
                </Link>
                <Link href="/Purchase/Create" className="group text-gray-500 dark:text-white text-md hover:text-orange-500">
                + Add Purchase
                <span className={spanClass}></span>
                </Link>
            </div>
          </div>
        </div>
      </div>
  )
}
