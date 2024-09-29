'use client'; 

import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import Image from 'next/image';

export default function Stock() {
  const printRef = useRef(); // Reference for print and PDF generation

  // Initial data: 20 rows of product data
  const initialData = [
    {
      id: 1,
      image: '/path-to-image', // replace with actual image path
      product: 'Mobile Phone - 000001',
      category: 'Electronics',
      price: '4500.00 TK',
      cost: '4150.00 TK',
      purchased: '100 pc',
      sold: '5 pc',
      damaged: '0 pc',
      returned: '0 pc',
      availableStock: '95 pc',
      sellValue: '427500 TK',
      purchaseValue: '394250 TK',
    },
    {
      id: 2,
      image: '/path-to-image',
      product: 'Laptop Computer - 000002',
      category: 'Hardware',
      price: '72000.00 TK',
      cost: '70000.00 TK',
      purchased: '100 pc',
      sold: '10 pc',
      damaged: '1 pc',
      returned: '0 pc',
      availableStock: '89 pc',
      sellValue: '795000 TK',
      purchaseValue: '754000 TK',
    },
    // Add 18 more product entries below with similar structure
    {
      id: 3,
      image: '/path-to-image',
      product: 'Desktop Computer - 000003',
      category: 'Electronics',
      price: '458.00 TK',
      cost: '375.00 TK',
      purchased: '100 pc',
      sold: '4 pc',
      damaged: '0 pc',
      returned: '0 pc',
      availableStock: '96 pc',
      sellValue: '43968 TK',
      purchaseValue: '36000 TK',
    },
    {
      id: 4,
      image: '/path-to-image',
      product: 'T Shirt - 000004',
      category: 'Fashion',
      price: '1500.00 TK',
      cost: '1200.00 TK',
      purchased: '100 pc',
      sold: '1 pc',
      damaged: '0 pc',
      returned: '1 pc',
      availableStock: '100 pc',
      sellValue: '150000 TK',
      purchaseValue: '120000 TK',
    },
    {
      id: 5,
      image: '/path-to-image',
      product: 'Ladies Shirt - 000005',
      category: 'Document',
      price: '900.00 TK',
      cost: '700.00 TK',
      purchased: '100 pc',
      sold: '0 pc',
      damaged: '1 pc',
      returned: '0 pc',
      availableStock: '100 pc',
      sellValue: '90000 TK',
      purchaseValue: '70000 TK',
    },
    // More rows to meet the 20 product entries...
    {
      id: 6,
      image: '/path-to-image',
      product: 'Freez - 000006',
      category: 'Hardware',
      price: '46000.00 TK',
      cost: '42000.00 TK',
      purchased: '100 pc',
      sold: '10 pc',
      damaged: '0 pc',
      returned: '1 pc',
      availableStock: '97 pc',
      sellValue: '407400 TK',
      purchaseValue: '445500 TK',
    },
    {
      id: 7,
      image: '/path-to-image',
      product: 'Air Condition - 000007',
      category: 'Hardware',
      price: '94000.00 TK',
      cost: '91350.00 TK',
      purchased: '100 pc',
      sold: '10 pc',
      damaged: '2 pc',
      returned: '0 pc',
      availableStock: '97 pc',
      sellValue: '337950 TK',
      purchaseValue: '337950 TK',
    },
    {
      id: 8,
      image: '/path-to-image',
      product: 'Door Export - 000008',
      category: 'Electronics',
      price: '15000.00 TK',
      cost: '13945.00 TK',
      purchased: '100 pc',
      sold: '10 pc',
      damaged: '1 pc',
      returned: '0 pc',
      availableStock: '97 pc',
      sellValue: '97615 TK',
      purchaseValue: '97615 TK',
    },
    {
      id: 9,
      image: '/path-to-image',
      product: 'Blazer For Men - 000009',
      category: 'Document',
      price: '3000.00 TK',
      cost: '2500.00 TK',
      purchased: '100 pc',
      sold: '12 pc',
      damaged: '0 pc',
      returned: '0 pc',
      availableStock: '89 pc',
      sellValue: '267000 TK',
      purchaseValue: '222500 TK',
    },
    {
      id: 10,
      image: '/path-to-image',
      product: 'Drill Machine - 000010',
      category: 'Document',
      price: '3000.00 TK',
      cost: '2500.00 TK',
      purchased: '100 pc',
      sold: '12 pc',
      damaged: '0 pc',
      returned: '0 pc',
      availableStock: '89 pc',
      sellValue: '267000 TK',
      purchaseValue: '222500 TK',
    },
    // Continue up to 20...
  ];

  // State to hold the filter values
  const [filters, setFilters] = useState({
    productName: '',
    productCode: '',
    category: '',
  });

  // State to hold filtered data
  const [filteredData, setFilteredData] = useState(initialData);

  // Function to handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    console.log("hi");
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Function to filter the data based on the filters
  const applyFilters = () => {
    const filtered = initialData.filter((item) => {
      return (
        returnItem.productName.toLowerCase().includes(filters.toLowerCase()) &&
        (filters.productCode === '' || item.product.toLowerCase().includes(filters.productCode.toLowerCase())) &&
        (filters.category === '' || item.category.toLowerCase().includes(filters.category.toLowerCase()))
      );
    });
    setFilteredData(filtered);
  };

  // Function to reset the filters and show all data
  const resetFilters = () => {
    setFilters({
      productName: '',
      productCode: '',
      category: '',
    });
    setFilteredData(initialData); // Reset the data to the initial state
  };

  // Function to handle printing and downloading PDF
  const handlePrint = () => {
    const imageHeader = document.querySelector(".image-header");
    const imageColumns = document.querySelectorAll(".image-column");
    
    // Hide the image header and columns
    if (imageHeader) imageHeader.style.display = "none";
    imageColumns.forEach((col) => {
      col.style.display = "none";
    });
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;
  
    document.body.innerHTML = printContents; // Replace the body content with the part we want to print
    window.print(); // Trigger print dialog
    document.body.innerHTML = originalContents;

    window.location.reload(); // Reload to re-render the original content
    html2pdf()
    .from(element)
    .set({
      margin: 1,
      filename: 'cashbook.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    })
    .save();
  };
  
  return (
    <div>
       <div  className="p-4 max-w-full mx-auto mt-[5%]">
      {/* Title and Print Button */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-3xl font-bold text-gray-800">Product Stock</div>
        <button
          onClick={handlePrint}
          className="bg-teal-500 text-white cursor-pointer  px-10 py-2 rounded-md hover:bg-teal-600"
        >
          Print
        </button>
      </div>

      {/* Filter Options */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Product Name Input */}
        <input
          type="text"
          placeholder="Product Name"
          name="productName"
          value={filters.productName}
          onChange={handleFilterChange}
          className="border rounded-md px-3 py-2 w-full md:w-1/4"
        />

        {/* Product Code Input */}
        <input
          type="text"
          placeholder="Product Code"
          name="productCode"
          value={filters.productCode}
          onChange={handleFilterChange}
          className="border rounded-md px-3 py-2 w-full md:w-1/4"
        />

        {/* Select Category Dropdown */}
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="border rounded-md px-3 py-2 w-full md:w-1/4"
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Hardware">Hardware</option>
          <option value="Fashion">Fashion</option>
          <option value="Document">Document</option>
          {/* Add more categories as needed */}
        </select>

        {/* Filter and Reset Buttons */}
        <button onClick={applyFilters} className="bg-green-500 text-white px-10 py-2 rounded-md hover:bg-green-600">
          Filter
        </button>
        <button onClick={resetFilters} className="bg-gray-500 text-white px-10 py-2 rounded-md hover:bg-gray-600">
          Reset
        </button>
      </div>

      {/* Product Stock Table */}
      <div ref={printRef} className="overflow-auto">
  <table className=" w-full table-auto border-collapse bg-white text-sm text-center">
    <thead className="bg-gray-100">
      <tr>
        <th className="border px-1 py-2">#</th>
        {/* Add class for image header */}
        <th className="border px-1 py-2 image-header">Image</th>
        <th className="border px-1 py-2">Product</th>
        <th className="border px-1 py-2">Category</th>
        <th className="border px-1 py-2">Price</th>
        <th className="border px-1 py-2">Cost</th>
        <th className="border px-1 py-2">Purchased</th>
        <th className="border px-1 py-2">Sold</th>
        <th className="border px-1 py-2">Damaged</th>
        <th className="border px-1 py-2">Returned</th>
        <th className="border px-1 py-2">Available Stock</th>
        <th className="border px-1 py-2">Sell Value</th>
        <th className="border px-1 py-2">Purchase Value</th>
      </tr>
    </thead>
    <tbody>
      {filteredData?.map((product) => (
        <tr key={product.id}>
          <td className="border px-1 py-2">{product.id}</td>
          {/* Add class for image data cell */}
          <td className="border px-1 py-2 image-column">
            <Image
              src={product.image}
              alt={product.product}
              width={200}
              height={300}
              className="w-16 h-16 object-cover"
            />
          </td>
          <td className="border px-1 py-2">{product.product}</td>
          <td className="border px-1 py-2">{product.category}</td>
          <td className="border px-1 py-2">{product.price}</td>
          <td className="border px-1 py-2">{product.cost}</td>
          <td className="border px-1 py-2">{product.purchased}</td>
          <td className="border px-1 py-2">{product.sold}</td>
          <td className="border px-1 py-2">{product.damaged}</td>
          <td className="border px-1 py-2">{product.returned}</td>
          <td className="border px-1 py-2">{product.availableStock}</td>
          <td className="border px-1 py-2">{product.sellValue}</td>
          <td className="border px-1 py-2">{product.purchaseValue}</td>
        </tr>
      ))}
    </tbody>
  </table>
      </div>


    </div>
    </div>
  )
}
