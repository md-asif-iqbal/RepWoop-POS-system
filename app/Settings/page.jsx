"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Separator } from '@/app/components/ui/separator';
import { Settings as SettingsIcon, Building2, FileText, Barcode, SlidersHorizontal, Upload, Save, Phone, Mail, MapPin, DollarSign, AlertTriangle, Palette, Receipt } from 'lucide-react';

export default function Settings() {
  const [companyName, setCompanyName] = useState('Repwoop company');
  const [phone, setPhone] = useState('017150000000');
  const [email, setEmail] = useState('repwoop@info.com');
  const [address, setAddress] = useState('Sahajatpur, Gulshan, Dhaka');
  const [invoiceLogoType, setInvoiceLogoType] = useState('Logo');
  const [invoiceDesign, setInvoiceDesign] = useState('Pos Printer');
  const [barcodeType, setBarcodeType] = useState('Single');
  const [lowStockQuantity, setLowStockQuantity] = useState(2);
  const [currency, setCurrency] = useState('TK');
  const [logo, setLogo] = useState('/assets/logo.png');

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const logoURL = URL.createObjectURL(file);
      setLogo(logoURL);
    }
  };

  const handleSaveChanges = () => {
    alert('Changes saved successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-[25%] sm:mt-[5%] font-inter text-sm max-w-5xl">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg">
            <SettingsIcon size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Settings</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Manage your business configuration</p>
          </div>
        </div>
        <Badge variant="info">v2.0</Badge>
      </div>

      {/* Company Details */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 size={20} className="text-indigo-500" />
            <CardTitle>Company Details</CardTitle>
          </div>
          <CardDescription>Basic information about your business</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Logo */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Company Logo</label>
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-600 overflow-hidden bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                  <Image src={logo} alt="Company Logo" width={100} height={100} className="h-full w-full object-cover" />
                </div>
                <div>
                  <label className="cursor-pointer">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-lg text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors">
                      <Upload size={16} />
                      Upload Logo
                    </span>
                    <input type="file" accept="image/*" onChange={handleLogoChange} className="hidden" />
                  </label>
                  <p className="text-xs text-slate-400 mt-1">PNG, JPG up to 2MB</p>
                </div>
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Company Name</label>
              <div className="relative">
                <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="pl-10" />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Phone</label>
              <div className="relative">
                <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} className="pl-10" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10" />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Address</label>
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input value={address} onChange={(e) => setAddress(e.target.value)} className="pl-10" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Invoice Settings */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Receipt size={20} className="text-indigo-500" />
            <CardTitle>Invoice Settings</CardTitle>
          </div>
          <CardDescription>Configure how your invoices look</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Invoice Logo Type</label>
              <div className="flex items-center gap-4">
                {['Logo', 'Name', 'Both'].map((option) => (
                  <label key={option} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 cursor-pointer transition-all ${invoiceLogoType === option ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300'}`}>
                    <input type="radio" name="invoiceLogoType" value={option} checked={invoiceLogoType === option} onChange={(e) => setInvoiceLogoType(e.target.value)} className="hidden" />
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${invoiceLogoType === option ? 'border-indigo-500' : 'border-slate-300 dark:border-slate-600'}`}>
                      {invoiceLogoType === option && <div className="w-2 h-2 rounded-full bg-indigo-500" />}
                    </div>
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Invoice Design</label>
              <select value={invoiceDesign} onChange={(e) => setInvoiceDesign(e.target.value)} className="w-full h-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400">
                <option value="Pos Printer">Pos Printer</option>
                <option value="Classic">Classic</option>
                <option value="Modern">Modern</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Barcode Settings */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Barcode size={20} className="text-indigo-500" />
            <CardTitle>Barcode Settings</CardTitle>
          </div>
          <CardDescription>Choose your barcode format</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            {['Single', 'A4'].map((option) => (
              <label key={option} className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 cursor-pointer transition-all ${barcodeType === option ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300'}`}>
                <input type="radio" name="barcodeType" value={option} checked={barcodeType === option} onChange={(e) => setBarcodeType(e.target.value)} className="hidden" />
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${barcodeType === option ? 'border-indigo-500' : 'border-slate-300 dark:border-slate-600'}`}>
                  {barcodeType === option && <div className="w-2 h-2 rounded-full bg-indigo-500" />}
                </div>
                {option}
              </label>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Other Settings */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={20} className="text-indigo-500" />
            <CardTitle>Other Settings</CardTitle>
          </div>
          <CardDescription>Additional business configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Low Stock Quantity</label>
              <div className="relative">
                <AlertTriangle size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500" />
                <Input type="number" value={lowStockQuantity} onChange={(e) => setLowStockQuantity(Number(e.target.value))} className="pl-10" />
              </div>
              <p className="text-xs text-slate-400 mt-1">Alert when stock falls below this number</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Currency</label>
              <div className="relative">
                <DollarSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500" />
                <Input value={currency} onChange={(e) => setCurrency(e.target.value)} className="pl-10" />
              </div>
              <p className="text-xs text-slate-400 mt-1">Display currency in invoices and reports</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSaveChanges} size="lg" className="gap-2 px-8">
          <Save size={18} />
          Save Changes
        </Button>
      </div>
    </div>
  );
}
