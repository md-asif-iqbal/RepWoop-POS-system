"use client"

import React, { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
export default function Damages() {
    const printRef = useRef();
    const [filterText, setFilterText] = useState('');
    const [damages, setDamages] = useState([
        { id: 3, date: '26/09/2024', product: 'Motherboard Esinic 61', quantity: '1 pc', note: '574' },
        { id: 4, date: '27/09/2024', product: 'TP Link Router_R100M', quantity: '5 pc', note: 'Problem' },
        { id: 5, date: '28/09/2024', product: 'Dell Monitor E2421HN', quantity: '2 pc', note: 'Cracked screen' },
        { id: 6, date: '29/09/2024', product: 'HP Laptop G6', quantity: '3 pc', note: 'Damaged keyboard' },
        { id: 7, date: '30/09/2024', product: 'Logitech Mouse M185', quantity: '4 pc', note: 'Malfunction' },
        { id: 8, date: '01/10/2024', product: 'Samsung SSD 1TB', quantity: '1 pc', note: 'Not working' },
        { id: 9, date: '02/10/2024', product: 'Acer Monitor 24"', quantity: '2 pc', note: 'Broken stand' },
        { id: 10, date: '03/10/2024', product: 'Sony Headphones WH1000XM4', quantity: '2 pc', note: 'Sound issue' },
      ]);

  const [showOptions, setShowOptions] = useState(null); // To show options on a row

  // Function to handle filtering
  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  // Function to reset filter
  const handleReset = () => {
    setFilterText('');
  };

  // Function to handle delete
  const handleDelete = (id) => {
    setDamages(damages.filter((damage) => damage.id !== id));
  };

  // Print functionality
  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = `<div style="display: flex; justify-content: center; margin-top: 2%;">${printContents}</div>`;
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

  // Filtering logic
  const filteredDamages = damages.filter((damage) =>
    damage.product.toLowerCase().includes(filterText.toLowerCase()) || damage.quantity.toLowerCase().includes(filterText.toLowerCase())
  );
  return (
    <div>
        <div className="container mx-auto p-4 md:mt-[5%]">
        <h1 className="text-2xl font-bold mb-4">Damages</h1>

            {/* Search Bar with Filter and Reset */}
            <div className="flex flex-wrap justify-between mb-4">
            <div className="relative w-full md:w-2/3">
                <input
                type="text"
                placeholder="Select Product"
                value={filterText}
                onChange={handleFilterChange}
                className="border p-2 rounded w-full"
                />
                <button
                onClick={() => {}}
                className="absolute right-0 top-0 bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
                >
                Filter
                </button>
            </div>
            <div className="justify-between mt-2 md:mt-0">
                <button
                onClick={handleReset}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
                >
                Reset
                </button>
                <button
                onClick={handlePrint}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                Print
                </button>
            </div>
            </div>
                {/* Damages Table */}
                <div className="overflow-x-auto">
                {/* Damages Table */}
                <div ref={printRef} className="overflow-x-auto">
                        <table className="min-w-full text-center border-collapse print:block items-center justify-center">
                        <thead>
                            <tr>
                            <th className="border p-2 print:table-cell">#</th>
                            
                            <th className="border p-2 print:table-cell">Date</th>
                            <th className="border p-2 print:table-cell">Product</th>
                            <th className="border p-2 print:table-cell">Quantity</th>
                            <th className="border p-2 print:table-cell">Note</th>
                            <th className="border p-2 print:hidden">Actions</th> {/* Hide actions column in print */}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredDamages.map((damage, index) => (
                            <tr key={damage.id}>
                                <td className="border p-2 print:table-cell">{index + 1}</td>
                                <td className="border p-2 print:table-cell">{damage.date}</td>
                                <td className="border p-2 print:table-cell">{damage.product}</td>
                                <td className="border p-2 print:table-cell">{damage.quantity}</td>
                                <td className="border p-2 print:table-cell">{damage.note}</td>
                                <td className="border p-2 print:hidden relative"> {/* Hidden when printing */}
                                <button
                                    onClick={() => handleDelete(damage.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
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
