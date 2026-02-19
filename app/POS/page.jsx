"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Search, RotateCcw, Plus, Minus, Trash2, ShoppingCart, CreditCard, X, User, Phone, Mail, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card'
import { Badge } from '@/app/components/ui/badge'
import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'

export default function POSManage() {
    const productImages = {
      1: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&h=200&fit=crop",
      2: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200&h=200&fit=crop",
      3: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=200&h=200&fit=crop",
      4: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=200&h=200&fit=crop",
      5: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=200&h=200&fit=crop",
      6: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=200&h=200&fit=crop",
      7: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop",
      8: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a21?w=200&h=200&fit=crop",
      9: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop",
      10: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop",
      11: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=200&h=200&fit=crop",
      12: "https://images.unsplash.com/photo-1615669169014-913554be0dae?w=200&h=200&fit=crop",
      13: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=200&h=200&fit=crop",
      14: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=200&fit=crop",
      15: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=200&h=200&fit=crop",
      16: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop",
    };

    const products = [
      { id: 1, name: "Air Conditioner", price: 96000, stock: 96, category: "House" },
      { id: 2, name: "Blazer For Men", price: 3000, stock: 98, category: "Fashion" },
      { id: 3, name: "Desktop Computer", price: 458, stock: 99, category: "Electronics" },
      { id: 4, name: "Door Export", price: 15000, stock: 100, category: "House" },
      { id: 5, name: "Drill Machine", price: 3000, stock: 100, category: "Hardware" },
      { id: 6, name: "Freezer", price: 4500, stock: 100, category: "House" },
      { id: 7, name: "Gaming Laptop", price: 150000, stock: 100, category: "Electronics" },
      { id: 8, name: "Ladie's Shirt", price: 900, stock: 100, category: "Fashion" },
      { id: 9, name: "Laptop Computer", price: 78000, stock: 100, category: "Electronics" },
      { id: 10, name: "Mobile Phone", price: 4500, stock: 100, category: "Electronics" },
      { id: 11, name: "Printer", price: 12000, stock: 50, category: "Document" },
      { id: 12, name: "Scanner", price: 5000, stock: 70, category: "Document" },
      { id: 13, name: "Smartwatch", price: 6000, stock: 30, category: "Electronics" },
      { id: 14, name: "Leather Jacket", price: 7000, stock: 20, category: "Fashion" },
      { id: 15, name: "Hammer", price: 1200, stock: 100, category: "Hardware" },
      { id: 16, name: "Television", price: 45000, stock: 80, category: "House" },
    ];

  const categories = [...new Set(products.map(p => p.category))];
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cart, setCart] = useState([]);

  const filterByCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
      setFilteredProducts(products);
    } else {
      setSelectedCategory(category);
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    let filtered = products.filter((p) => p.name.toLowerCase().includes(term.toLowerCase()));
    if (selectedCategory) filtered = filtered.filter((p) => p.category === selectedCategory);
    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(cart.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const updateQty = (id, delta) => {
    setCart(cart.map((item) => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item));
  };

  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className='dark:text-white font-inter text-sm'>
      <div className="p-4 lg:p-6 mt-14 lg:mt-0">
        <h1 className="text-xl font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2">
          <ShoppingCart size={22} className="text-indigo-500" />
          POS Terminal
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
          {/* Left - Cart Panel */}
          <div className="xl:col-span-2 space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Cart & Billing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Scan Barcode or Enter Code" />
                <Input type="date" defaultValue="2024-09-21" />
                <div className="flex gap-2">
                  <select className="select-base flex-1">
                    <option>Walk-in Customer</option>
                    <option>Registered Customer</option>
                  </select>
                  <Button onClick={() => document.getElementById('my_modal_3').showModal()} size="sm" className="px-4">
                    <Plus size={16} className="mr-1" /> New
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Add Customer Dialog */}
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box max-w-lg bg-white dark:bg-slate-800 rounded-2xl">
                <form method="dialog">
                  <button className="absolute right-4 top-4 p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">
                    <X size={18} />
                  </button>
                </form>
                <h2 className="text-lg font-semibold mb-5 flex items-center gap-2"><User size={18} className="text-indigo-500" /> Add Customer</h2>
                <div className="space-y-3">
                  <div className="relative"><User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><Input className="pl-10" placeholder="Name" /></div>
                  <div className="relative"><Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><Input className="pl-10" placeholder="Email" /></div>
                  <div className="relative"><MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><Input className="pl-10" placeholder="Address" /></div>
                  <div className="relative"><Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><Input className="pl-10" placeholder="Phone" /></div>
                  <Input placeholder="Opening Receivable" type="number" />
                  <Input placeholder="Opening Payable" type="number" />
                  <div className="flex gap-3 pt-2">
                    <Button variant="success" className="flex-1">Add Customer</Button>
                    <Button variant="outline" className="flex-1">Close</Button>
                  </div>
                </div>
              </div>
            </dialog>

            {/* Cart Items */}
            <Card>
              <CardContent className="p-0">
                {cart.length === 0 ? (
                  <div className="p-10 text-center">
                    <ShoppingCart size={40} className="mx-auto text-slate-300 dark:text-slate-600 mb-3" />
                    <p className="text-slate-400 dark:text-slate-500 text-sm">Cart is empty</p>
                    <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">Click products to add them here</p>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100 dark:divide-slate-700">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 flex-shrink-0">
                          <Image src={productImages[item.id]} alt={item.name} width={40} height={40} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{item.name}</p>
                          <p className="text-xs text-slate-500">{item.price.toLocaleString()} Tk</p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 rounded-md bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"><Minus size={14} /></button>
                          <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 rounded-md bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"><Plus size={14} /></button>
                        </div>
                        <span className="text-sm font-semibold w-20 text-right">{(item.price * item.qty).toLocaleString()} Tk</span>
                        <button onClick={() => removeFromCart(item.id)} className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"><Trash2 size={14} /></button>
                      </div>
                    ))}
                  </div>
                )}
                {cart.length > 0 && (
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-slate-500">Total ({cart.reduce((s, i) => s + i.qty, 0)} items)</span>
                      <span className="text-xl font-bold text-slate-800 dark:text-white">{cartTotal.toLocaleString()} Tk</span>
                    </div>
                    <Button className="w-full" size="lg">
                      <CreditCard size={18} className="mr-2" /> Complete Payment
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right - Products */}
          <div className="xl:col-span-3 space-y-4">
            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <Input placeholder="Search products..." className="pl-10" value={searchTerm} onChange={handleSearch} />
                  </div>
                  <Button variant="outline" onClick={() => { setFilteredProducts(products); setSearchTerm(""); setSelectedCategory(""); }}>
                    <RotateCcw size={16} />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button key={cat} onClick={() => filterByCategory(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedCategory === cat ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'}`}>
                      {cat}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {filteredProducts.slice(0, 12).map((product) => (
                <Card key={product.id} className="cursor-pointer hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all group" onClick={() => addToCart(product)}>
                  <CardContent className="p-3">
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 mb-3">
                      <Image src={productImages[product.id]} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                      <Badge variant="info" className="absolute top-1.5 right-1.5 text-[10px]">{product.stock} pcs</Badge>
                    </div>
                    <p className="text-sm font-medium text-slate-800 dark:text-white truncate">{product.name}</p>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{product.price.toLocaleString()} Tk</span>
                      <div className="w-7 h-7 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Plus size={14} className="text-indigo-600 dark:text-indigo-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};