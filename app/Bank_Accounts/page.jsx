"use client"
import React, { useState } from 'react';

export default function AccountPage() {
    const [accounts, setAccounts] = useState([
        { id: 1, name: 'CASH', openingBalance: 0, currentBalance: 1250351 },
      ]);
      
      const [newAccount, setNewAccount] = useState({ name: '', openingBalance: 0 });
      const [showModal, setShowModal] = useState(false); // Modal state
      const [balanceForm, setBalanceForm] = useState({ amount: '', note: '', owner: '' });
    
      const handleAddAccount = () => {
        setAccounts([...accounts, { ...newAccount, id: accounts.length + 1 }]);
        setNewAccount({ name: '', openingBalance: 0 });
      };
    
      const handleAddBalance = () => {
        // Logic to add balance (if needed)
        setShowModal(false); // Close modal after adding balance
      };
    
  return (
    <div className="container mx-auto px-4 py-8">
    {/* New Account Section */}
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">New Account</h2>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Enter Account Name"
          className="border border-gray-300 rounded px-4 py-2 flex-1"
          value={newAccount.name}
          onChange={(e) => setNewAccount({ ...newAccount, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Opening Balance"
          className="border border-gray-300 rounded px-4 py-2 flex-1"
          value={newAccount.openingBalance}
          onChange={(e) => setNewAccount({ ...newAccount, openingBalance: e.target.value })}
        />
        <button
          className="bg-teal-500 text-white px-4 py-2 rounded"
          onClick={handleAddAccount}
        >
          Save
        </button>
      </div>
    </div>

    {/* Accounts Table */}
    <div className="bg-white p-4 mt-8 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Accounts</h2>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-teal-500 text-white">
            <th className="py-2 px-4 border">#</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Opening Balance</th>
            <th className="py-2 px-4 border">Current Balance</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id} className="text-center">
              <td className="py-2 px-4 border">{account.id}</td>
              <td className="py-2 px-4 border">{account.name}</td>
              <td className="py-2 px-4 border">Tk.{account.openingBalance.toFixed(2)}</td>
              <td className="py-2 px-4 border">Tk.{account.currentBalance.toFixed(2)}</td>
              <td className="py-2 px-4 border">
                <button
                  className="bg-teal-500 text-white px-4 py-1 rounded mr-2"
                  onClick={() => setShowModal(true)}
                >
                  Add Balance
                </button>
                {/* Other actions */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Modal for Adding Balance */}
    {showModal && (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Add Balance</h2>
            <button
              className="text-gray-500 text-2xl font-bold"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Amount</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-4 py-2"
              value={balanceForm.amount}
              onChange={(e) => setBalanceForm({ ...balanceForm, amount: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Note</label>
            <textarea
              className="w-full border border-gray-300 rounded px-4 py-2"
              rows="3"
              value={balanceForm.note}
              onChange={(e) => setBalanceForm({ ...balanceForm, note: e.target.value })}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Owner</label>
            <select
              className="w-full border border-gray-300 rounded px-4 py-2"
              value={balanceForm.owner}
              onChange={(e) => setBalanceForm({ ...balanceForm, owner: e.target.value })}
            >
              <option value="ghjghjghjh">ghjghjghjh</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleAddBalance}
            >
              Add Balance
            </button>
            <button
              className="bg-gray-300 px-4 py-2 rounded"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
);
}
