'use client';
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import Papa from 'papaparse'; // For CSV parsing
import * as XLSX from 'xlsx';
import { Eye, Filter, View } from 'lucide-react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TbEdit } from 'react-icons/tb';

export default function Brands() {
    const [showModal, setShowModal] = useState(false);
    const [products, setProducts] = useState([
        { id: 1, brand: 'Dell', logo: 'dell-logo.png', createdOn: '2023-08-15', status: 'Active' },
        { id: 2, brand: 'Sony', logo: 'sony-logo.png', createdOn: '2023-08-12', status: 'Inactive' },
        { id: 3, brand: 'Nike', logo: 'nike-logo.png', createdOn: '2023-09-01', status: 'Active' },
        { id: 4, brand: 'Samsung', logo: 'samsung-logo.png', createdOn: '2023-08-21', status: 'Inactive' },
        { id: 5, brand: 'Bose', logo: 'bose-logo.png', createdOn: '2023-08-10', status: 'Active' },
        { id: 6, brand: 'Ikea', logo: 'ikea-logo.png', createdOn: '2023-08-08', status: 'Inactive' },
        { id: 7, brand: 'Gucci', logo: 'gucci-logo.png', createdOn: '2023-08-14', status: 'Active' },
        { id: 8, brand: 'Apple', logo: 'apple-logo.png', createdOn: '2023-09-12', status: 'Inactive' },
        { id: 9, brand: 'Herman Miller', logo: 'herman-miller-logo.png', createdOn: '2023-07-29', status: 'Active' },
        { id: 10, brand: 'Louis Vuitton', logo: 'lv-logo.png', createdOn: '2023-08-01', status: 'Inactive' },
        { id: 11, brand: 'HP', logo: 'hp-logo.png', createdOn: '2023-09-15', status: 'Active' },
        { id: 12, brand: 'Google', logo: 'google-logo.png', createdOn: '2023-09-10', status: 'Inactive' },
        { id: 13, brand: 'OnePlus', logo: 'oneplus-logo.png', createdOn: '2023-09-20', status: 'Active' },
        { id: 14, brand: 'Xiaomi', logo: 'xiaomi-logo.png', createdOn: '2023-09-18', status: 'Inactive' },
        { id: 15, brand: 'Asus', logo: 'asus-logo.png', createdOn: '2023-08-22', status: 'Active' },
        { id: 16, brand: 'Beats', logo: 'beats-logo.png', createdOn: '2023-09-03', status: 'Inactive' },
        { id: 17, brand: 'JBL', logo: 'jbl-logo.png', createdOn: '2023-08-31', status: 'Active' },
        { id: 18, brand: 'Lenovo', logo: 'lenovo-logo.png', createdOn: '2023-09-06', status: 'Inactive' },
        { id: 19, brand: 'Acer', logo: 'acer-logo.png', createdOn: '2023-09-09', status: 'Active' },
        { id: 20, brand: 'Microsoft', logo: 'microsoft-logo.png', createdOn: '2023-09-14', status: 'Inactive' }
    ]);
    
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ brand: '', createdOn: '', status: '' });
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;


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


    const exportPDF = () => {
        const doc = new jsPDF();
        doc.text('Brands List', 20, 10);
        products.forEach((product, index) => {
            doc.text(`${index + 1}. ${product.brand}, Created On: ${product.createdOn}, Status: ${product.status}`, 20, 20 + index * 10);
        });
        doc.save('Brands.pdf');
    };

    const exportExcel = () => {
        const ws = XLSX.utils.json_to_sheet(products);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Products');
        XLSX.writeFile(wb, 'products.xlsx');
    };


    const filteredProducts = products
        .filter(product => 
            (filters.brand === '' || product.brand === filters.brand) &&
            (filters.createdOn === '' || product.createdOn === filters.createdOn) &&
            (filters.status === '' || product.status === filters.status) &&
            product.brand.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => sortOrder === 'asc' ? new Date(a.createdOn) - new Date(b.createdOn) : new Date(b.createdOn) - new Date(a.createdOn));

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const uniqueCategories = [...new Set(products.map(product => product.brand))];
    const uniqueCreatedOn = [...new Set(products.map(product => product.createdOn))];
    const uniqueStatuses = [...new Set(products.map(product => product.status))];

     const [showFilters, setShowFilters] = useState(false);
      const toggleFilters = () => {
        setShowFilters(!showFilters);
      };

      const handleSelectAll = (e) => {
        if (e.target.checked) {
          const allProductIds = products.map((product) => product.id);
          setSelectedProducts(allProductIds);
        } else {
          setSelectedProducts([]);
        }
      };

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
        <div className="text-sm container mx-auto px-4 py-6 md:mt-[5%] mt-[20%] font-nunito bg-white  dark:bg-[#151530] dark:text-white">
            {/* Action Buttons */}
            <div className="md:flex flex-col md:flex-row justify-between items-center mb-4">
                <h2 className="text-lg  mb-2 md:mb-0">Brands List</h2>
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
                    <select onChange={(e) => setFilters({ ...filters, brand: e.target.value })} className="border p-2 rounded">
                        <option value="">Filter by brand</option>
                        {uniqueCategories.map((brand, index) => (
                            <option key={index} value={brand}>{brand}</option>
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
                        <th className="border px-4 py-2">brand</th>
                        <th className="border px-4 py-2">Logo</th>
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
                                <td className=" px-4 py-2">{product.brand}</td>
                                <td className=" px-4 py-2 border">{product.logo}</td>
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
                                                <p><strong>Item ID:</strong> {product.brand}</p>
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
