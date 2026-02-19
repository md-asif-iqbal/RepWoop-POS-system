"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { MessageSquare, Send, Users, FileText } from 'lucide-react';

export default function PromotionalSMS() {
  const customers = [
    { id: 1, name: 'Rahim Ahmed', phone: '01712345678' },
    { id: 2, name: 'Karim Hossain', phone: '01812345678' },
    { id: 3, name: 'Fatima Begum', phone: '01912345678' },
    { id: 4, name: 'Salma Khatun', phone: '01612345678' },
    { id: 5, name: 'Nusrat Jahan', phone: '01512345678' },
    { id: 6, name: 'Tanvir Islam', phone: '01412345678' },
  ];

  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [smsBody, setSmsBody] = useState('');

  const handleSend = () => {
    if (!selectedCustomer || !smsBody) { alert("Please select a customer and write a message."); return; }
    alert(`SMS sent to ${selectedCustomer}: ${smsBody}`);
  };

  const templates = [
    "🎉 Special Offer! Get 20% off on all products this week. Visit us today!",
    "📢 New arrivals! Check out our latest collection. Limited stock available!",
    "🛒 Flash Sale! Buy 2 Get 1 Free on selected items. Hurry up!",
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"><MessageSquare className="h-6 w-6 text-white" /></div>
        <div><h1 className="text-2xl font-bold text-gray-900">Promotional SMS</h1><p className="text-sm text-gray-500">Send promotional messages to your customers</p></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card><CardContent className="p-6 space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><Users className="h-4 w-4 text-indigo-500" />Select Customer</label>
              <select value={selectedCustomer} onChange={e => setSelectedCustomer(e.target.value)} className="flex h-10 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Choose a customer...</option>
                {customers.map(c => <option key={c.id} value={c.name}>{c.name} — {c.phone}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><FileText className="h-4 w-4 text-indigo-500" />SMS Body</label>
              <textarea value={smsBody} onChange={e => setSmsBody(e.target.value)} className="flex w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[120px]" placeholder="Write your promotional message here..." rows={5} />
              <p className="text-xs text-gray-400 text-right">{smsBody.length} / 160 characters {smsBody.length > 160 && `(${Math.ceil(smsBody.length / 160)} SMS)`}</p>
            </div>
            <Button onClick={handleSend} className="w-full"><Send className="h-4 w-4 mr-2" />Send SMS</Button>
          </CardContent></Card>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-4"><h3 className="font-semibold text-gray-900 mb-3">Quick Templates</h3><div className="space-y-2">{templates.map((t, i) => (<button key={i} onClick={() => setSmsBody(t)} className="w-full text-left p-3 text-xs bg-gray-50 hover:bg-indigo-50 rounded-lg border border-gray-100 hover:border-indigo-200 transition-colors">{t}</button>))}</div></CardContent></Card>
          <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 border-0"><CardContent className="p-4 text-white"><p className="text-sm opacity-80">Total Customers</p><p className="text-2xl font-bold">{customers.length}</p></CardContent></Card>
        </div>
      </div>
    </div>
  );
}