"use client"
import React, { useState } from 'react';

export default function AccountPage() {
  const [accounts, setAccounts] = useState([
    { id: 1, name: 'PlayBoy', openingBalance: 0, currentBalance: 1200050351 },
    { id: 2, name: 'PlayGirl', openingBalance: 1000000, currentBalance: 1000000 },
  ]);

  const [showAddBalanceModal, setShowAddBalanceModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null); // Store selected account
  const [balanceForm, setBalanceForm] = useState({ amount: '', note: '', owner: '' });

  const handleAddBalance = () => {
    const updatedAccounts = accounts.map(account => {
      if (account.id === selectedAccount.id) {
        return {
          ...account,
          currentBalance: account.currentBalance + parseFloat(balanceForm.amount),
        };
      }
      return account;
    });

    setAccounts(updatedAccounts);
    setShowAddBalanceModal(false); // Close modal
    setBalanceForm({ amount: '', note: '', owner: '' }); // Reset form
  };

  const handleWithdrawBalance = () => {
    const updatedAccounts = accounts.map(account => {
      if (account.id === selectedAccount.id) {
        return {
          ...account,
          currentBalance: account.currentBalance - parseFloat(balanceForm.amount),
        };
      }
      return account;
    });

    setAccounts(updatedAccounts);
    setShowWithdrawModal(false); // Close modal
    setBalanceForm({ amount: '', note: '', owner: '' }); // Reset form
  };

  const handleTransferBalance = () => {
    const fromAccount = accounts.find(account => account.name === balanceForm.owner);
    const updatedAccounts = accounts.map(account => {
      if (account.id === selectedAccount.id) {
        return {
          ...account,
          currentBalance: account.currentBalance + parseFloat(balanceForm.amount),
        };
      }
      if (account.id === fromAccount.id) {
        return {
          ...account,
          currentBalance: account.currentBalance - parseFloat(balanceForm.amount),
        };
      }
      return account;
    });

    setAccounts(updatedAccounts);
    setShowTransferModal(false); // Close modal
    setBalanceForm({ amount: '', note: '', owner: '' }); // Reset form
  };

    
  return (
    <div className='dark:bg-[#141432] h-full'>
        <div className="container mx-auto px-4 py-8  mt-[5%]">
      {/* New Account Section */}
      <div className="bg-white p-4 shadow-md rounded-md ">
        <h2 className="text-2xl font-bold mb-4">New Account</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Enter Account Name"
            className="border border-gray-300 rounded px-4 py-2 flex-1"
          />
          <input
            type="number"
            placeholder="Opening Balance"
            className="border border-gray-300 rounded px-4 py-2 flex-1"
          />
          <button
            className="bg-teal-500 text-white px-4 py-2 rounded"
            onClick={() => alert("Account Added")}
          >
            Save
          </button>
        </div>
      </div>

      {/* Accounts Table */}
      <div className="bg-white p-4 mt-8 shadow-sm rounded-lg dark:bg-[#1a1a3d]">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Accounts</h2>
        <table className="min-w-full border-collapse rounded-lg">
          <thead className='rounded-lg'>
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
              <tr key={account.id} className="text-center dark:text-white">
                <td className="py-2 px-4 border">{account.id}</td>
                <td className="py-2 px-4 border">{account.name}</td>
                <td className="py-2 px-4 border">Tk.{account.openingBalance.toFixed(2)}</td>
                <td className="py-2 px-4 border">Tk.{account.currentBalance.toFixed(2)}</td>
                <td className="py-2 px-4 border grid grid-cols-1 md:grid-cols-2 gap-5">
                  <button
                    className="border-b-2 border-teal-500 hover:bg-teal-500 hover:text-white dark:text-white px-4 py-2 rounded mr-2"
                    onClick={() => { setSelectedAccount(account); setShowAddBalanceModal(true); }}
                  >
                    Add Balance
                  </button>
                  <button
                    className="border-b-2 border-teal-500 hover:bg-teal-500 hover:text-white dark:text-white px-4 py-2 rounded mr-2"
                    onClick={() => { setSelectedAccount(account); setShowWithdrawModal(true); }}
                  >
                    Withdraw Balance
                  </button>
                  <button
                    className="border-b-2 border-teal-500 hover:bg-teal-500 hover:text-white dark:text-white px-4 py-2 rounded mr-2"
                    onClick={() => { setSelectedAccount(account); setShowTransferModal(true); }}
                  >
                    Transfer
                  </button>
                  <button
                    className="bg-teal-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => alert("History clicked")}
                  >
                    History
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

         {/* Modal for Adding Balance */}
      {showAddBalanceModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add Balance to {selectedAccount?.name}</h2>
              <button
                className="text-gray-500 text-2xl font-bold"
                onClick={() => setShowAddBalanceModal(false)}
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

            {/* Note Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Note</label>
              <textarea
                className="w-full border border-gray-300 rounded px-4 py-2"
                rows="3"
                value={balanceForm.note}
                onChange={(e) => setBalanceForm({ ...balanceForm, note: e.target.value })}
              ></textarea>
            </div>

            {/* Owner Select Box */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Owner</label>
              <select
                className="w-full border border-gray-300 rounded px-4 py-2"
                value={balanceForm.owner}
                onChange={(e) => setBalanceForm({ ...balanceForm, owner: e.target.value })}
              >
                <option value="">Select Owner</option>
                {accounts.map((account) => (
                  <option key={account.id} value={account.name}>
                    {account.name}
                  </option>
                ))}
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
                onClick={() => setShowAddBalanceModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Withdrawing Balance */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Withdraw Balance from {selectedAccount?.name}</h2>
              <button
                className="text-gray-500 text-2xl font-bold"
                onClick={() => setShowWithdrawModal(false)}
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

            {/* Note Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Note</label>
              <textarea
                className="w-full border border-gray-300 rounded px-4 py-2"
                rows="3"
                value={balanceForm.note}
                onChange={(e) => setBalanceForm({ ...balanceForm, note: e.target.value })}
              ></textarea>
            </div>

            {/* Owner Select Box */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Owner</label>
              <select
                className="w-full border border-gray-300 rounded px-4 py-2"
                value={balanceForm.owner}
                onChange={(e) => setBalanceForm({ ...balanceForm, owner: e.target.value })}
              >
                <option value="">Select Owner</option>
                {accounts.map((account) => (
                  <option key={account.id} value={account.name}>
                    {account.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleWithdrawBalance}
              >
                Withdraw
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setShowWithdrawModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Transferring Balance */}
      {showTransferModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Transfer Balance to {selectedAccount?.name}</h2>
              <button
                className="text-gray-500 text-2xl font-bold"
                onClick={() => setShowTransferModal(false)}
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

            {/* Note Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Note</label>
              <textarea
                className="w-full border border-gray-300 rounded px-4 py-2"
                rows="3"
                value={balanceForm.note}
                onChange={(e) => setBalanceForm({ ...balanceForm, note: e.target.value })}
              ></textarea>
            </div>

            {/* From Account Select Box */}
            <div className="mb-4">
              <label className="block text-sm font-medium">From Account</label>
              <select
                className="w-full border border-gray-300 rounded px-4 py-2"
                value={balanceForm.owner}
                onChange={(e) => setBalanceForm({ ...balanceForm, owner: e.target.value })}
              >
                <option value="">Select Account</option>
                {accounts.map((account) => (
                  <option key={account.id} value={account.name}>
                    {account.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleTransferBalance}
              >
                Transfer
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setShowTransferModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>

  );
}
