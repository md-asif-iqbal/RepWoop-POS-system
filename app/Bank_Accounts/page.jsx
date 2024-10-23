"use client"
import React, { useState } from 'react';

export default function AccountPage() {
  const [accounts, setAccounts] = useState([
    { id: 1, name: 'PlayBoy', openingBalance: 0, currentBalance: 120000000 },
    { id: 2, name: 'PlayGirl', openingBalance: 1000000, currentBalance: 100000 },
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
    <div className='dark:bg-[#141432] h-full font-nunito text-sm bg-white p-2'>
        <div className="  py-8  mt-[25%] md:mt-[5%]">
      {/* New Account Section */}
      <div className="p-0 shadow-sm rounded-md  ">
        <h2 className=" dark:text-white text-lg  mb-4">New Account</h2>
        <div className="lg:flex md:space-x-4 space-y-3 md:space-y-0">
          <input
            type="text"
            placeholder="Enter Account Name"
            className="border border-gray-300 rounded px-4 py-2 flex-1 bg-white w-full"
          />
          <input
            type="number"
            placeholder="Opening Balance"
            className="border border-gray-300 rounded px-4 py-2 flex-1 bg-white w-full"
          />
          <button
            className="bg-emerald-500 text-white px-8 py-2 rounded "
            onClick={() => alert("Account Added")}
          >
            Save
          </button>
        </div>
      </div>

      {/* Accounts Table */}
      <div className="overflow-x-auto shadow-sm dark:bg-[#1a1a3d] w-full mt-5">
  <h2 className="  text-lg mb-4 dark:text-white">Accounts</h2>
  <table className="min-w-full w-full border-collapse">
    <thead>
      <tr className="bg-emerald-500 text-white">
        <th className="py-2 px-2 md:px-4 border">#</th>
        <th className="py-2 px-2 md:px-4 border">Name</th>
        <th className="py-2 px-2 md:px-4 border">Opening Balance</th>
        <th className="py-2 px-2 md:px-4 border">Current Balance</th>
        <th className="py-2 px-2 md:px-4 border">Actions</th>
      </tr>
    </thead>
    <tbody>
      {accounts.map((account) => (
        <tr key={account.id} className="text-center dark:text-white">
          <td className="py-2 px-2 md:px-4 border">{account.id}</td>
          <td className="py-2 px-2 md:px-4 border">{account.name}</td>
          <td className="py-2 px-2 md:px-4 border">Tk.{account.openingBalance.toFixed(2)}</td>
          <td className="py-2 px-2 md:px-4 border">Tk.{account.currentBalance.toFixed(2)}</td>
          <td className="py-2 px-2 md:px-4 border grid grid-cols-1 gap-5 md:grid-cols-3">
            <button
              className="border-b-2 border-teal-500 hover:bg-emerald-500 hover:text-white dark:text-white px-0 py-1 md:px-4 md:py-2 rounded"
              onClick={() => {
                setSelectedAccount(account);
                setShowAddBalanceModal(true);
              }}
            >
              Add Balance
            </button>

            <button
              className="border-b-2 border-teal-500 hover:bg-emerald-500 hover:text-white dark:text-white px-0 py-1 md:px-4 md:py-2 rounded"
              onClick={() => {
                setSelectedAccount(account);
                setShowTransferModal(true);
              }}
            >
              Transfer
            </button>

            <button
              className="bg-emerald-500 text-white px-0 py-1 md:px-4 md:py-2 rounded"
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
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 md:p-8 shadow-sm w-full max-w-xs md:max-w-md lg:max-w-lg mx-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className=" dark:text-white text-md md:text-lg">Add Balance to {selectedAccount?.name}</h2>
                <button className="text-gray-500 text-lg" onClick={() => setShowAddBalanceModal(false)}>
                  &times;
                </button>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Amount</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded px-2 py-1 md:px-4 md:py-2 bg-white"
                  value={balanceForm.amount}
                  onChange={(e) => setBalanceForm({ ...balanceForm, amount: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Note</label>
                <textarea
                  className="w-full border border-gray-300 rounded px-2 py-1 md:px-4 md:py-2"
                  rows="3"
                  value={balanceForm.note}
                  onChange={(e) => setBalanceForm({ ...balanceForm, note: e.target.value })}
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Owner</label>
                <select
                  className="w-full border border-gray-300 rounded px-2 py-1 md:px-4 md:py-2"
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
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddBalance}>
                  Add Balance
                </button>
                <button className="bg-gray-300 px-4 py-2 rounded" onClick={() => setShowAddBalanceModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal for Transferring Balance */}
        {showTransferModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 md:p-8 shadow-sm w-full max-w-xs md:max-w-md lg:max-w-lg mx-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className=" dark:text-white text-md md:text-lg">Transfer Balance to {selectedAccount?.name}</h2>
                <button className="text-gray-500 text-lg" onClick={() => setShowTransferModal(false)}>
                  &times;
                </button>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Amount</label>
                <input
                  type="number"
                  className="w-full border bg-white border-gray-300 rounded px-2 py-1 md:px-4 md:py-2"
                  value={balanceForm.amount}
                  onChange={(e) => setBalanceForm({ ...balanceForm, amount: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Note</label>
                <textarea
                  className="w-full border border-gray-300 rounded px-2 py-1 md:px-4 md:py-2"
                  rows="3"
                  value={balanceForm.note}
                  onChange={(e) => setBalanceForm({ ...balanceForm, note: e.target.value })}
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">From Account</label>
                <select
                  className="w-full border border-gray-300 rounded px-2 py-1 md:px-4 md:py-2"
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
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleTransferBalance}>
                  Transfer
                </button>
                <button className="bg-gray-300 px-4 py-2 rounded" onClick={() => setShowTransferModal(false)}>
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
