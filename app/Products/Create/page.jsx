'use client'
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';

export default function ProductList() {

    const products = [
        { id: 1, product: 'Lenovo 3rd Generation', sku: 'PT001', category: 'Laptop', brand: 'Lenovo', price: '12500.00', unit: 'Pc', qty: 100, createdBy: 'Arron' },
        { id: 2, product: 'Bold V3.2', sku: 'PT002', category: 'Electronics', brand: 'Bolt', price: '1600.00', unit: 'Pc', qty: 140, createdBy: 'Kenneth' },
        { id: 3, product: 'Nike Jordan', sku: 'PT003', category: 'Shoe', brand: 'Nike', price: '6000.00', unit: 'Pc', qty: 780, createdBy: 'Gooch' },
        { id: 4, product: 'Apple Series 5 Watch', sku: 'PT004', category: 'Electronics', brand: 'Apple', price: '25000.00', unit: 'Pc', qty: 450, createdBy: 'Nathan' },
        { id: 5, product: 'Amazon Echo Dot', sku: 'PT005', category: 'Speaker', brand: 'Amazon', price: '1600.00', unit: 'Pc', qty: 477, createdBy: 'Alice' },
        { id: 6, product: 'Lobar Handy', sku: 'PT006', category: 'Furnitures', brand: 'Woodmart', price: '4521.00', unit: 'Kg', qty: 145, createdBy: 'Robb' },
        { id: 7, product: 'Red Premium Handy', sku: 'PT007', category: 'Bags', brand: 'Versace', price: '2024.00', unit: 'Kg', qty: 747, createdBy: 'Steven' },
        { id: 8, product: 'Iphone 14 Pro', sku: 'PT008', category: 'Phone', brand: 'Iphone', price: '1698.00', unit: 'Pc', qty: 897, createdBy: 'Gravely' },
        { id: 9, product: 'Black Slim 200', sku: 'PT009', category: 'Chairs', brand: 'Bently', price: '6794.00', unit: 'Pc', qty: 741, createdBy: 'Kevin' },
        { id: 10, product: 'Woodcraft Sandal', sku: 'PT010', category: 'Bags', brand: 'Woodcraft', price: '4547.00', unit: 'Kg', qty: 148, createdBy: 'Grillo' },
      ];
    
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
    
      // Function to print the page
      const handlePrint = () => {
        window.print();
      };


  return (
    <div className='font-nunito text-sm'>
         <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl ">Product List</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-green-500 text-white rounded">Add New Product</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Import Product</button>
          <button onClick={exportPDF} className="px-4 py-2 bg-red-500 text-white rounded">PDF</button>
          <button onClick={exportExcel} className="px-4 py-2 bg-yellow-500 text-white rounded">Excel</button>
          <button onClick={handlePrint} className="px-4 py-2 bg-gray-500 text-white rounded">Print</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-sm rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Product</th>
              <th className="px-4 py-2 text-left">SKU</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Brand</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Unit</th>
              <th className="px-4 py-2 text-left">Qty</th>
              <th className="px-4 py-2 text-left">Created By</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t border-gray-200 hover:bg-gray-100">
                <td className="px-4 py-2 flex items-center">
                  <img src={`/${product.sku}.png`} alt={product.product} className="w-10 h-10 object-cover rounded mr-2" />
                  {product.product}
                </td>
                <td className="px-4 py-2">{product.sku}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">{product.brand}</td>
                <td className="px-4 py-2">${product.price}</td>
                <td className="px-4 py-2">{product.unit}</td>
                <td className="px-4 py-2">{product.qty}</td>
                <td className="px-4 py-2">{product.createdBy}</td>
                <td className="px-4 py-2 flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-600">View</button>
                  <button className="text-yellow-500 hover:text-yellow-600">Edit</button>
                  <button className="text-red-500 hover:text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}
