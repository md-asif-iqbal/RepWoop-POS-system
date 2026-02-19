'use client'
import { jsPDF } from 'jspdf';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function ProductCreate() {
    const pathname = usePathname();
    const spanClass = " block h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedMainUnit, setSelectedMainUnit] = useState('');
    const [productName, setProductName] = useState('');
    const [productCode, setProductCode] = useState('');
    const [subUnit, setSubUnit] = useState('');
    const [openingStock, setOpeningStock] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [purchaseCost, setPurchaseCost] = useState('');
    const [productDetails, setProductDetails] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [showBrandModal, setShowBrandModal] = useState(false);
    const [newCategory, setNewCategory] = useState('');
    const [newBrand, setNewBrand] = useState('');
    const [categories, setCategories] = useState([
      'Document', 'Electronics', 'Fashion', 'Hardware', 'House', 'Automobile', 'Food & Beverage', 'Furniture', 'Cosmetics'
    ]);
    const [brands, setBrands] = useState(['Lenovo', 'Nike', 'Apple', 'Amazon', 'Versace']);
    const [mainUnits, setUnits] = useState([
      'pc', 'Dozen', 'gm', 'Kg', 'ml', 'Litre', 'Box', 'Screw Packet', 'Shoes_pair', 'Pound'
    ]);
  
    // Adding new category to the list
    const handleAddCategory = () => {
      if (newCategory) {
        setCategories([...categories, newCategory]);
        setNewCategory('');
        setShowCategoryModal(false);
      }
    };
  
    // Adding new brand to the list
    const handleAddBrand = () => {
      if (newBrand) {
        setBrands([...brands, newBrand]);
        setNewBrand('');
        setShowBrandModal(false);
      }
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Create a product object
      const productData = {
        productName,
        productCode,
        selectedCategory,
        selectedBrand,
        selectedMainUnit,
        subUnit,
        openingStock,
        salePrice,
        purchaseCost,
        productDetails,
        // productImage,
      };
  
      // Log the data to the console
      console.log('Product Data:', productData);
  
      // Simulate data upload
      alert('Product added successfully! Check the console for details.');
    };
  


  return (
    <div className='font-inter text-sm dark:text-white'>

    <div className="p-0  mt-[25%] sm:mt-[5%]  w-full">
              {/* Title Section */}

  <div className=" mb-4  shadow-sm rounded-sm ">
  <h1 className="text-lg text-gray-500 dark:text-white mx-5 ">Users </h1>
    <div className=' sm:md:flex items-start justify-start mx-5 py-5 gap-10 '>
        <Link href="/Products" className= {`${
                          pathname === '/Products' 
                          ? ' group text-indigo-600 dark:text-indigo-400  hover:text-indigo-500' 
                          : 'group text-gray-500 dark:text-white hover:text-indigo-500 '
                      }`}>
        Products
        <span className={spanClass}></span>
        </Link>
        <Link href="/Products/Create" className={`${
                          pathname === '/Products/Create' 
                          ? ' group text-indigo-600 dark:text-indigo-400  hover:text-indigo-500' 
                          : 'group text-gray-500 dark:text-white hover:text-indigo-500 '
                      }`}>
        + Add Products
        <span className={spanClass}></span>
        </Link>
        
    </div>
  </div>

      <div>
      <form onSubmit={handleSubmit} className="p-4 card-base">
      <h1 className="text-2xl mb-4">Add New Product</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block mb-2">
            Product Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="input-base"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            Product Code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Product Code"
            className="input-base"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
          />
        </div>

        {/* Category Selection */}
        <div className=" mb-4">
          <div className="w-full">
            <label className="block mb-2">
              Category <span className="text-red-500">*</span>
            </label>
           <div className='md:flex gap-2'>
           <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="select-base"
            >
              <option value="">Search Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <button
            type="button"
            className="p-2 btn-primary rounded w-full md:w-1/2"
            onClick={() => setShowCategoryModal(true)}
          >
            Add Category
          </button>

           </div>
          </div>
          
        </div>

        {/* Brand Selection */}
        <div className=" mb-4">
          <div className="w-full">
            <label className="block mb-2">
              Brand <span className="text-red-500">*</span>
            </label>
            <div className='w-full md:flex gap-2'>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="select-base"
            >
              <option value="">Search Brands</option>
              {brands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
            <button
            type="button"
            className="p-2 btn-primary rounded w-full md:w-1/2"
            onClick={() => setShowBrandModal(true)}
          >
            Add Brand
          </button>
          </div>
          
            </div>
        </div>

        {/* Unit Selection */}
        <div className="mb-4">
          <label className="block mb-2">
           Main Unit <span className="text-red-500">*</span>
          </label>
          <select
            value={selectedMainUnit}
            onChange={(e) => setSelectedMainUnit(e.target.value)}
            className="select-base"
          >
            <option value="">Select Unit</option>
            {mainUnits.map((unit, index) => (
              <option key={index} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">
           Sub Unit <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Main Unit"
            className="input-base"
            value={subUnit}
            onChange={(e) => setSubUnit(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Opening Stock</label>
          <input
            type="number"
            placeholder="Opening Stock"
            className="input-base"
            value={openingStock}
            onChange={(e) => setOpeningStock(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            Sale Price <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="Sale Price"
            className="input-base"
            value={salePrice}
            onChange={(e) => setSalePrice(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            Purchase Cost <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="Purchase Cost"
            className="input-base"
            value={purchaseCost}
            onChange={(e) => setPurchaseCost(e.target.value)}
          />
        </div>
 
        {/* Product Details Textarea */}
        <div className="mb-4">
          <label className="block mb-2">
            Product Details <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Enter product details..."
            className="input-base"
            rows="5"
            value={productDetails}
            onChange={(e) => setProductDetails(e.target.value)}
          />
        </div>

        {/* Product Image */}
        <div className="mb-4">
          <label className="block mb-2">Product Image</label>
          <input
            type="file"
            className="input-base"
            onChange={(e) => setProductImage(e.target.files[0])}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn-primary w-full md:w-1/6 justify-items-center flex justify-center px-8 py-2 rounded"
      >
        Save
      </button>

      {/* Modals for adding new category */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-slate-900/50 flex justify-center items-center">
          <div className="card-base p-6 rounded-xl shadow-lg w-1/3">
            <h2 className="text-lg mb-4">Add Category</h2>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Category Name"
              className="input-base mb-4"
            />
            <button
              type="button"
              className="btn-primary px-4 py-2 rounded mr-2"
              onClick={handleAddCategory}
            >
              Add Category
            </button>
            <button
              type="button"
              className="bg-gray-300 px-4 py-2 rounded"
              onClick={() => setShowCategoryModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modals for adding new brand */}
      {showBrandModal && (
        <div className="fixed inset-0 bg-slate-900/50 flex justify-center items-center">
          <div className="card-base p-6 rounded-xl shadow-lg w-1/3">
            <h2 className="text-lg mb-4">Add Brand</h2>
            <input
              type="text"
              value={newBrand}
              onChange={(e) => setNewBrand(e.target.value)}
              placeholder="Brand Name"
              className="input-base mb-4"
            />
            <button
              type="button"
              className="btn-primary px-4 py-2 rounded mr-2"
              onClick={handleAddBrand}
            >
              Add Brand
            </button>
            <button
              type="button"
              className="bg-gray-300 px-4 py-2 rounded"
              onClick={() => setShowBrandModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </form>
      </div>
</div>
</div>
  )
}
