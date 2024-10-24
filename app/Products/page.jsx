'use client'
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import Papa from "papaparse"; // For CSV parsing
import * as XLSX from 'xlsx';
import { Eye, Filter, View } from 'lucide-react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TbEdit } from 'react-icons/tb';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductList() {
    const [showModal, setShowModal] = useState(false);
    const [product, setProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    product: '',
    category: '',
    brand: '',
    price: ''
  });
  const [sortOrder, setSortOrder] = useState(''); // State for sorting by price
  const [dateSortOrder, setDateSortOrder] = useState(''); // State for sorting by date
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [productsPerPage] = useState(10); // Products per page

  const products = [
    { id: 1, product: 'Lenovo 3rd Generation', sku: 'PT001', category: 'Laptop', brand: 'Lenovo', price: 12500.00, createdDate: '2023-08-15', unit: 'Pc', qty: 100, createdBy: 'Arron' },
    { id: 2, product: 'Bold V3.2', sku: 'PT002', category: 'Electronics', brand: 'Bolt', price: 1600.00, createdDate: '2023-08-12', unit: 'Pc', qty: 140, createdBy: 'Kenneth' },
    { id: 3, product: 'Nike Jordan', sku: 'PT003', category: 'Shoe', brand: 'Nike', price: 6000.00, createdDate: '2023-09-01', unit: 'Pc', qty: 780, createdBy: 'Gooch' },
    { id: 4, product: 'Apple Series 5 Watch', sku: 'PT004', category: 'Electronics', brand: 'Apple', price: 25000.00, createdDate: '2023-08-21', unit: 'Pc', qty: 450, createdBy: 'Nathan' },
    { id: 5, product: 'Amazon Echo Dot', sku: 'PT005', category: 'Speaker', brand: 'Amazon', price: 1600.00, createdDate: '2023-08-10', unit: 'Pc', qty: 477, createdBy: 'Alice' },
    { id: 6, product: 'Lobar Handy', sku: 'PT006', category: 'Furniture', brand: 'Woodmart', price: 4521.00, createdDate: '2023-08-08', unit: 'Kg', qty: 145, createdBy: 'Robb' },
    { id: 7, product: 'Red Premium Handy', sku: 'PT007', category: 'Bags', brand: 'Versace', price: 2024.00, createdDate: '2023-08-14', unit: 'Kg', qty: 747, createdBy: 'Steven' },
    { id: 8, product: 'Iphone 14 Pro', sku: 'PT008', category: 'Phone', brand: 'Iphone', price: 1698.00, createdDate: '2023-09-12', unit: 'Pc', qty: 897, createdBy: 'Gravely' },
    { id: 9, product: 'Black Slim 200', sku: 'PT009', category: 'Chairs', brand: 'Bently', price: 6794.00, createdDate: '2023-07-29', unit: 'Pc', qty: 741, createdBy: 'Kevin' },
    { id: 10, product: 'Woodcraft Sandal', sku: 'PT010', category: 'Bags', brand: 'Woodcraft', price: 4547.00, createdDate: '2023-08-01', unit: 'Kg', qty: 148, createdBy: 'Grillo' },
    { id: 11, product: 'MacBook Air M1', sku: 'PT011', category: 'Laptop', brand: 'Apple', price: 999.99, createdDate: '2023-09-15', unit: 'Pc', qty: 320, createdBy: 'Riley' },
    { id: 12, product: 'Samsung Galaxy S22', sku: 'PT012', category: 'Phone', brand: 'Samsung', price: 850.00, createdDate: '2023-09-10', unit: 'Pc', qty: 230, createdBy: 'Jordan' },
    { id: 13, product: 'Google Pixel 6', sku: 'PT013', category: 'Phone', brand: 'Google', price: 699.00, createdDate: '2023-09-20', unit: 'Pc', qty: 180, createdBy: 'Alexa' },
    { id: 14, product: 'OnePlus 9 Pro', sku: 'PT014', category: 'Phone', brand: 'OnePlus', price: 750.00, createdDate: '2023-09-18', unit: 'Pc', qty: 400, createdBy: 'Chris' },
    { id: 15, product: 'Dell XPS 13', sku: 'PT015', category: 'Laptop', brand: 'Dell', price: 1200.00, createdDate: '2023-08-22', unit: 'Pc', qty: 90, createdBy: 'Sam' },
    { id: 16, product: 'Sony WH-1000XM4', sku: 'PT016', category: 'Headphones', brand: 'Sony', price: 349.99, createdDate: '2023-09-03', unit: 'Pc', qty: 210, createdBy: 'Tina' },
    { id: 17, product: 'Bose QuietComfort 35', sku: 'PT017', category: 'Headphones', brand: 'Bose', price: 299.99, createdDate: '2023-08-31', unit: 'Pc', qty: 120, createdBy: 'Lucas' },
    { id: 18, product: 'Asus ROG Zephyrus', sku: 'PT018', category: 'Laptop', brand: 'Asus', price: 1400.00, createdDate: '2023-09-06', unit: 'Pc', qty: 110, createdBy: 'Nina' },
    { id: 19, product: 'HP Spectre x360', sku: 'PT019', category: 'Laptop', brand: 'HP', price: 1350.00, createdDate: '2023-09-09', unit: 'Pc', qty: 85, createdBy: 'Ethan' },
    { id: 20, product: 'Acer Predator Helios', sku: 'PT020', category: 'Laptop', brand: 'Acer', price: 1499.99, createdDate: '2023-09-14', unit: 'Pc', qty: 95, createdBy: 'Zoe' },
  ];
  const [showModal2, setShowModal2] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    console.log("test");
      setModalVisible(true);
      setTimeout(() => {
          setShowModal2(true);
      }, 0); // Small delay to trigger transition
  };

  const handleCloseModal = () => {
      setShowModal2(false);
      setTimeout(() => {
          setModalVisible(false);
      }, 300); // Delay based on transition duration
  };






  // Function to handle select all products
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allProductIds = products.map((product) => product.id);
      setSelectedProducts(allProductIds);
    } else {
      setSelectedProducts([]);
    }
  };

  // Function to handle individual product selection
  const handleSelectProduct = (e, productId) => {
    if (e.target.checked) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    }
  };

  // Toggle Filters
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Function to export as PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('Product List', 20, 10);
    products.forEach((product, index) => {
      doc.text(`${index + 1}. ${product.product}, SKU: ${product.sku}, Price: $${product.price}`, 20, 20 + index * 10);
    });
    doc.save('products.pdf');
  };

  // Function to export as Excel
  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(products);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Products');
    XLSX.writeFile(wb, 'products.xlsx');
  };

  const handlePrint = () => {
    const printContent = document.getElementById("table-to-print").outerHTML;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
      <html>
        <head>
          <title>Products List</title>
          <style>
            body { font-family: Arial, sans-serif; }
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid #000; padding: 8px; text-align: left; }
          </style>
        </head>
        <body onload="window.print()">
          ${printContent.replace(/<th>Actions<\/th>.*?<\/tr>/, '')} <!-- Remove the Actions column -->
        </body>
      </html>
    `);
    newWindow.document.close();
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  // Handle price sort change
  const handlePriceSort = (e) => {
    setSortOrder(e.target.value); // Set the sort order
  };

  // Handle date sort change
  const handleDateSort = (e) => {
    setDateSortOrder(e.target.value); // Set the date sort order
  };

  // Pagination logic: get current products based on the page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle changing pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Filter and sort the products based on the selected filters and sorting
  const filteredProducts = products
    .filter((product) =>
      product.product.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.product === '' || product.product === filters.product) &&
      (filters.category === '' || product.category === filters.category) &&
      (filters.brand === '' || product.brand === filters.brand)
    )
    .sort((a, b) => {
      if (sortOrder === 'Low to High') {
        return a.price - b.price; // Ascending order
      } else if (sortOrder === 'High to Low') {
        return b.price - a.price; // Descending order
      } else if (dateSortOrder === 'Oldest First') {
        return new Date(a.createdDate) - new Date(b.createdDate); // Ascending date
      } else if (dateSortOrder === 'Newest First') {
        return new Date(b.createdDate) - new Date(a.createdDate); // Descending date
      } else {
        return 0; // No sorting if not selected
      }
    });

  // Get unique values for filters
  const uniqueProducts = [...new Set(products.map((product) => product.product))];
  const uniqueCategories = [...new Set(products.map((product) => product.category))];
  const uniqueBrands = [...new Set(products.map((product) => product.brand))];
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const fileType = file.name.split('.').pop();

    if (fileType === 'csv') {
      // Handle CSV file
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          console.log("CSV data: ", results.data);
          setProducts(results.data); // Process CSV data
        },
        error: (err) => {
          console.error("Error parsing CSV file:", err);
        }
      });
    } else if (fileType === 'xlsx') {
      // Handle Excel file
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const excelData = XLSX.utils.sheet_to_json(worksheet);
        console.log("Excel data: ", excelData);
        setProducts(excelData); // Process Excel data
      };
      reader.readAsArrayBuffer(file);
    } else {
      console.error("Unsupported file type");
    }
  };

  // Optional: Submit data to your server for processing
  const submitProducts = async () => {
    try {
      const response = await fetch("/api/import-products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      });
      const result = await response.json();
      console.log("Server response:", result);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
//   const handleDelete = (id) => {
//     setSelectedProducts(products.filter((product) => product.id !== id));
//     setShowModal2(false);
//   };

  return (
    <div className='font-nunito text-sm'>
        <div className="container mx-auto px-4 py-6 md:mt-[5%] mt-[20%] font-nunito text-sm">
      {/* Action Buttons */}
      <div className="md:flex mflex-col md:flex-row justify-between items-center mb-4">
        <h2 className=" dark:text-white text-lg  mb-2 md:mb-0">Product List</h2>
        <div className="md:flex space-x-2 space-y-2 md:space-y-0">
          <Link href="/Products/Create">
          <button className="px-4 py-2 bg-green-500 text-white rounded">Add New Product</button>
          </Link>
          <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setShowModal(true)}
            >
                Import Product
            </button>
             {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white  p-6 w-1/2">
                        <h2 className=" dark:text-white text-lg  mb-4">Import Products</h2>
                        <input
                        type="file"
                        accept=".csv, .xlsx"
                        onChange={handleFileUpload}
                        className="mb-4 bg-white"
                        />
                        <div className="flex justify-end space-x-4">
                        <button
                            className="px-4 py-2 bg-green-500 text-white rounded"
                            onClick={submitProducts}
                        >
                            Submit
                        </button>
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                        </div>
                    </div>
                    </div>
                )}
          <button onClick={exportPDF} className="px-4 py-2 bg-red-500 text-white rounded">PDF</button>
          <button onClick={exportExcel} className="px-4 py-2 bg-yellow-500 text-white rounded">Excel</button>
          <button onClick={handlePrint} className="px-4 py-2 bg-gray-500 text-white rounded">Print</button>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex md:justify-end md:items-end mb-4">
       
        <div className="flex space-x-2">
          <button onClick={toggleFilters} className="bg-red-500 text-white px-4 py-2 rounded">
            {showFilters ? '✕' : <Filter size={20} strokeWidth={2} /> }
          </button>
          {/* <select className="border border-gray-300 px-4 py-2 rounded" onChange={handlePriceSort}>
            <option value="">Sort by Price</option>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </select> */}
          <select className="border border-gray-300 px-4 py-2 rounded" onChange={handleDateSort}>
            <option value="">Sort by Date</option>
            <option value="Newest First">Newest First</option>
            <option value="Oldest First">Oldest First</option>
          </select>
        </div>
      </div>

      {/* Filters - Toggle Visibility */}
      {showFilters && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
          {/* <select
            name="product"
            className="border border-gray-300 px-4 py-2 rounded"
            value={filters.product}
            onChange={handleFilterChange}
          >
            <option value="">Choose Product</option>
            {uniqueProducts.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select> */}
          <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border bg-white border-gray-300 px-4 py-2 rounded focus:outline-none mb-2 md:mb-0"
        />
          <select
            name="category"
            className="border border-gray-300 px-4 py-2 rounded"
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="">Choose Category</option>
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            name="brand"
            className="border border-gray-300 px-4 py-2 rounded"
            value={filters.brand}
            onChange={handleFilterChange}
          >
            <option value="">All Brand</option>
            {uniqueBrands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
          <select className="border border-gray-300 px-4 py-2 rounded" onChange={handlePriceSort}>
            <option value="">Sort by Price</option>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </select>
        </div>
      )}

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table id='table-to-print' className="min-w-full table-auto  bg-white dark:bg-[#1c1c3c] dark:text-white shadow-sm  overflow-hidden">
          <thead>
            <tr className="bg-emerald-500 text-white">
              <th className="px-4 py-2 ">
                <input className='bg-white' type="checkbox" onChange={handleSelectAll} />
              </th>
              <th className="px-4 py-2 ">Product</th>
              <th className="px-4 py-2 ">SKU</th>
              <th className="px-4 py-2 ">Category</th>
              <th className="px-4 py-2 ">Brand</th>
              <th className="px-4 py-2 ">Price</th>
              <th className="px-4 py-2 ">Unit</th>
              <th className="px-4 py-2 ">Quantity</th>
              <th className="px-4 py-2 ">Created Date</th>
              <th className="px-4 py-2 ">Created By</th>
              <th className="px-4 py-2 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct).map((product) => (
              <tr key={product.id} className="border-t border-gray-200 ">
                <td className="px-4 py-2 ">
                  <input
                  className='bg-white'
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={(e) => handleSelectProduct(e, product.id)}
                  />
                </td>
                <td className="px-4 py-2 flex items-center">
                  <Image 
                  width={200} height={300}
                    src={`/${product.sku}.png`}
                    alt={product.product}
                    className="w-10 h-10 object-cover rounded mr-2"
                  />
                  {product.product}
                </td>
                <td className="px-4 py-2 ">{product.sku}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">{product.brand}</td>
                <td className="px-4 py-2">${product.price.toFixed(2)}</td>
                <td className="px-4 py-2">{product.unit}</td>
                <td className="px-4 py-2">{product.qty}</td>
                <td className="px-4 py-2">{product.createdDate}</td>
                <td className="px-4 py-2">{product.createdBy}</td>
                <td className="px-4 py-2 flex space-x-2">
                  <button className="border  p-2 transform hover:scale-110 hover:bg-[#092C4C] hover:text-white"><Eye size={16} strokeWidth={1.5} /></button>
                  <button className="p-2  border transform text-blue-600 hover:bg-[#288EC7] hover:text-white hover:scale-110">
                  <TbEdit size={16}/>
                </button>
                <button onClick={handleOpenModal} className="p-2  transform text-red-500 hover:bg-red-500 hover:text-white hover:scale-110 border">
                  <RiDeleteBin5Line size={16}/>
                </button>
                    {/* Modal */}
                    {modalVisible && (
                        <div
                                        className={`fixed inset-0 flex items-center border justify-center bg-opacity-50 transition-all duration-700 ease-in-out ${showModal2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} `}
                                    >
                                        <div className="bg-white w-[20%] border text-center  p-10 transition-all duration-300 ease-in-out">
                                            <h2 className=" dark:text-white text-lg  mb-4">Are you sure?</h2>
                                            <p className=" dark:text-white mb-6">You wont be able to revert this!</p>

                                            {/* Show details */}
                                            <div className="mb-6">
                                                <p><strong>Item ID:</strong> {product.product}</p>
                                                <p><strong>Item Name:</strong> {product.qty}</p>
                                            </div>

                                            {/* Buttons */}
                                            <div className="flex justify-center">
                                                <button
                                                    onClick={() => handleDelete(product.id)}
                                                    className="bg-orange-500 hover:bg-orange-600 text-white  py-2 px-4 rounded mr-2"
                                                >
                                                    Yes, delete it!
                                                </button>
                                                <button
                                                    onClick={handleCloseModal}
                                                    className="bg-red-500 hover:bg-red-600 text-white  py-2 px-4 rounded"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                        </div>
                    )}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="lg:flex justify-center items-center gap-5 mt-4">
        {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map((number) => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`px-3 py-2 mx-1 border rounded ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
          >
            {number + 1}
          </button>
        ))}
         <div >Showing {indexOfFirstProduct + 1} to {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} entries</div>
      </div>
     
        </div>
    </div>
  );
}
