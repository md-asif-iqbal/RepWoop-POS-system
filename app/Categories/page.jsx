'use client';
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import Papa from 'papaparse'; // For CSV parsing
import * as XLSX from 'xlsx';
import { Eye, Filter, View } from 'lucide-react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TbEdit } from 'react-icons/tb';

export default function CategoryList() {
    const [showModal, setShowModal] = useState(false);
    const [products, setProducts] = useState([
        { id: 1, category: 'Laptop', categorySlug: 'laptop', createdOn: '2023-08-15', status: 'Active' },
        { id: 2, category: 'Electronics', categorySlug: 'electronics', createdOn: '2023-08-12', status: 'Inactive' },
        { id: 3, category: 'Shoe', categorySlug: 'shoe', createdOn: '2023-09-01', status: 'Active' },
        { id: 4, category: 'Electronics', categorySlug: 'electronics', createdOn: '2023-08-21', status: 'Inactive' },
        { id: 5, category: 'Speaker', categorySlug: 'speaker', createdOn: '2023-08-10', status: 'Active' },
        { id: 6, category: 'Furniture', categorySlug: 'furniture', createdOn: '2023-08-08', status: 'Inactive' },
        { id: 7, category: 'Bags', categorySlug: 'bags', createdOn: '2023-08-14', status: 'Active' },
        { id: 8, category: 'Phone', categorySlug: 'phone', createdOn: '2023-09-12', status: 'Inactive' },
        { id: 9, category: 'Chairs', categorySlug: 'chairs', createdOn: '2023-07-29', status: 'Active' },
        { id: 10, category: 'Bags', categorySlug: 'bags', createdOn: '2023-08-01', status: 'Inactive' },
        { id: 11, category: 'Laptop', categorySlug: 'laptop', createdOn: '2023-09-15', status: 'Active' },
        { id: 12, category: 'Phone', categorySlug: 'phone', createdOn: '2023-09-10', status: 'Inactive' },
        { id: 13, category: 'Phone', categorySlug: 'phone', createdOn: '2023-09-20', status: 'Active' },
        { id: 14, category: 'Phone', categorySlug: 'phone', createdOn: '2023-09-18', status: 'Inactive' },
        { id: 15, category: 'Laptop', categorySlug: 'laptop', createdOn: '2023-08-22', status: 'Active' },
        { id: 16, category: 'Headphones', categorySlug: 'headphones', createdOn: '2023-09-03', status: 'Inactive' },
        { id: 17, category: 'Headphones', categorySlug: 'headphones', createdOn: '2023-08-31', status: 'Active' },
        { id: 18, category: 'Laptop', categorySlug: 'laptop', createdOn: '2023-09-06', status: 'Inactive' },
        { id: 19, category: 'Laptop', categorySlug: 'laptop', createdOn: '2023-09-09', status: 'Active' },
        { id: 20, category: 'Laptop', categorySlug: 'laptop', createdOn: '2023-09-14', status: 'Inactive' }
    ]);
    
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ category: '', createdOn: '', status: '' });
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

    // Modal handlers
    // const handleOpenModal = () => setShowModal(true);
    // const handleCloseModal = () => setShowModal(false);

    // File upload handler
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const fileType = file.name.split('.').pop();

        if (fileType === 'csv') {
            Papa.parse(file, {
                header: true,
                complete: (results) => setProducts(results.data),
                error: (err) => console.error('Error parsing CSV file:', err)
            });
        } else if (fileType === 'xlsx') {
            const reader = new FileReader();
            reader.onload = (event) => {
                const data = new Uint8Array(event.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const excelData = XLSX.utils.sheet_to_json(worksheet);
                setProducts(excelData);
            };
            reader.readAsArrayBuffer(file);
        } else {
            console.error('Unsupported file type');
        }
    };

    // Export functions
    const exportPDF = () => {
        const doc = new jsPDF();
        doc.text('Category List', 20, 10);
        products.forEach((product, index) => {
            doc.text(`${index + 1}. ${product.category}, Created On: ${product.createdOn}, Status: ${product.status}`, 20, 20 + index * 10);
        });
        doc.save('products.pdf');
    };

    const exportExcel = () => {
        const ws = XLSX.utils.json_to_sheet(products);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Products');
        XLSX.writeFile(wb, 'products.xlsx');
    };

    // Filtering and sorting
    const filteredProducts = products
        .filter(product => 
            (filters.category === '' || product.category === filters.category) &&
            (filters.createdOn === '' || product.createdOn === filters.createdOn) &&
            (filters.status === '' || product.status === filters.status) &&
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => sortOrder === 'asc' ? new Date(a.createdOn) - new Date(b.createdOn) : new Date(b.createdOn) - new Date(a.createdOn));

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Handle pagination
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Unique filter values
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    const uniqueCreatedOn = [...new Set(products.map(product => product.createdOn))];
    const uniqueStatuses = [...new Set(products.map(product => product.status))];
     // Toggle Filters
     const [showFilters, setShowFilters] = useState(false);
      const toggleFilters = () => {
        setShowFilters(!showFilters);
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


    return (
        <div className=" font-nunito text-sm container mx-auto px-4 py-6 md:mt-[5%] mt-[20%] bg-white  dark:bg-[#151530] dark:text-white">
            {/* Action Buttons */}
            <div className="md:flex flex-col md:flex-row justify-between items-center mb-4">
                <h2 className="text-lg  mb-2 md:mb-0">Category list</h2>
                <div className="md:flex space-x-2 space-y-2 md:space-y-0">
                    <button className="px-4 py-2 bg-green-500 text-white rounded">Add New Product</button>
                    <button onClick={handleOpenModal} className="px-4 py-2 bg-blue-500 text-white rounded">Import Product</button>
                    <button onClick={exportPDF} className="px-4 py-2 bg-red-500 text-white rounded">Export PDF</button>
                    <button onClick={exportExcel} className="px-4 py-2 bg-blue-500 text-white rounded">Export Excel</button>
                </div>
            </div>

            {/* Modal for Importing Products */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
                    <div className="bg-white rounded-lg p-6 w-1/2">
                        <h2 className="text-lg  mb-4">Import Products</h2>
                        <input
                            type="file"
                            accept=".csv, .xlsx"
                            onChange={handleFileUpload}
                            className="mb-4"
                        />
                        <div className="flex justify-end space-x-4">
                            <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => { /* Submit logic here */ }}>Submit</button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={handleCloseModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex md:justify-end md:items-end mb-4">
                  
                  <div className="flex space-x-2">
                    <button onClick={toggleFilters} className="bg-red-500 text-white px-4 py-2 rounded">
                      {showFilters ? '✕' : <Filter size={20} strokeWidth={2} /> }
                    </button>
                  </div>
                </div>
                {showFilters && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-6 dark:text-black text-gray-500">

            <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none mb-2 md:mb-0"
            />
                <div className="flex space-x-2">
                    <select onChange={(e) => setFilters({ ...filters, category: e.target.value })} className="border p-2 rounded">
                        <option value="">Filter by Category</option>
                        {uniqueCategories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                    <select onChange={(e) => setFilters({ ...filters, createdOn: e.target.value })} className="border p-2 rounded">
                        <option value="">Filter by Created On</option>
                        {uniqueCreatedOn.map((date, index) => (
                            <option key={index} value={date}>{date}</option>
                        ))}
                    </select>
                    <select onChange={(e) => setFilters({ ...filters, status: e.target.value })} className="border p-2 rounded">
                        <option value="">Filter by Status</option>
                        {uniqueStatuses.map((status, index) => (
                            <option key={index} value={status}>{status}</option>
                        ))}
                    </select>
                </div>
           
        </div>
      )}

            {/* Search and Filter */}
            

            {/* Product Table */}
            <table className="min-w-full bg-white dark:bg-[#1c1c3c] dark:text-white border border-gray-300 font-nunito text-gray-500">
                <thead>
                    <tr className='bg-emerald-500 text-white'>
                    <th className="border px-4 py-2 ">
                <input type="checkbox" onChange={handleSelectAll} />
              </th>
                        <th className="border px-4 py-2">Category</th>
                        <th className="border px-4 py-2">Category Slug</th>
                        <th className="border px-4 py-2">Created On</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.length > 0 ? (
                        currentProducts.map((product, index) => (
                            <tr key={index} className="border-b text-center">
                                <td className="px-4 py-2  border">
                                  <input
                                    type="checkbox"
                                    checked={selectedProducts.includes(product.id)}
                                    onChange={(e) => handleSelectProduct(e, product.id)}
                                  />
                                </td>
                                <td className=" px-4 py-2">{product.category}</td>
                                <td className=" px-4 py-2 border">{product.categorySlug}</td>
                                <td className=" px-4 py-2">{product.createdOn}</td>
                                <td className=" px-4 py-2 border"><span className={`px-2 py-1 text-xs  rounded-full ${
                                                product.status === "Active"
                                                  ? "bg-green-100 text-green-700"
                                                  : product.status === "Inactive"
                                                  ? "bg-red-100 text-red-700"
                                                  : "bg-yellow-100 text-yellow-700"
                                              }`}>{product.status}</span></td>
                                <td className=" px-4 py-2  flex space-x-2 items-center justify-center gap-5">
                                    
                                <button className="p-2 rounded-lg border transform text-center text-blue-600 hover:bg-[#288EC7] hover:text-white hover:scale-110">
                                  <TbEdit size={16}/>
                                </button>
                                <button onClick={handleOpenModal} className="p-2 text-center rounded-lg transform text-red-500 hover:bg-red-500 hover:text-white hover:scale-110 border">
                                  <RiDeleteBin5Line size={16}/>
                                </button>
                                {modalVisible && (
                                  <div
                                        className={`fixed inset-0 flex items-center border justify-center bg-opacity-50 transition-all duration-700 ease-in-out ${showModal2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} `}
                                    >
                                        <div className="bg-white w-[20%] border text-center rounded-lg p-10 transition-all duration-300 ease-in-out">
                                            <h2 className="text-lg  mb-4">Are you sure?</h2>
                                            <p className="mb-6">You wont be able to revert this!</p>

                                            {/* Show details */}
                                            <div className="mb-6">
                                                <p><strong>Item ID:</strong> {product.category}</p>
                                                <p><strong>Item Name:</strong> {product.id}</p>
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
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="border text-center py-4">No products found</td>
                        </tr>
                    )}
                </tbody>
            </table>

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
    );
}
