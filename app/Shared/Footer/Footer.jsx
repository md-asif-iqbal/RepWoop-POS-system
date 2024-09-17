import React from 'react'

export default function Footer() {
  return (
    <div className='w-full bg-white dark:bg-[#141432] '>
        <footer className="relative  pb-6">
  <div className="container mx-auto px-4">
  <div className="divider"></div>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2024</span> POS Software by Repwoop cpmpany
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}
