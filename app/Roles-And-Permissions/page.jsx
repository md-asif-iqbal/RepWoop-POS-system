"use client"
import React, { useState } from 'react';

export default function RolesAndPermission() {
  const permissionSections = [
    { section: 'Unit', actions: ['List Unit', 'Create Unit', 'Edit Unit', 'Delete Unit'] },
    { section: 'Owner', actions: ['List Owner', 'Create Owner', 'Edit Owner', 'Delete Owner'] },
    { section: 'Bank Account', actions: ['List Bank Account', 'Create Bank Account', 'Withdraw Money', 'Add Money', 'History'] },
    { section: 'Product', actions: ['List Product', 'Create Product', 'Delete Product', 'Edit Product', 'Sell History', 'Add to Cart'] },
    { section: 'Customer', actions: ['List Customer', 'Create Customer', 'Delete Customer', 'View Customer', 'Validate Customer'] },
    { section: 'Dashboard', actions: ['View Dashboard', 'View Stats', 'View Reports'] },
    { section: 'Sales', actions: ['List Sales', 'Create Sales', 'Return Sales', 'Delete Sales'] },
    { section: 'Purchase', actions: ['List Purchase', 'Create Purchase', 'Edit Purchase', 'Delete Purchase'] },
    { section: 'Employee', actions: ['List Employee', 'Create Employee', 'Delete Employee', 'Edit Employee', 'Assign Roles'] },
    { section: 'Settings', actions: ['View Settings', 'Edit Settings', 'Change Password'] },
    { section: 'Inventory', actions: ['List Inventory', 'Edit Inventory', 'Update Stock', 'Transfer Stock', 'View Inventory'] },
    { section: 'Reports', actions: ['View Sales Report', 'View Purchase Report', 'View Profit/Loss', 'Download Reports'] },
    { section: 'Supplier', actions: ['List Supplier', 'Create Supplier', 'Edit Supplier', 'Delete Supplier'] },
    { section: 'Expenses', actions: ['List Expenses', 'Add Expense', 'Edit Expense', 'Delete Expense'] },
    { section: 'Tax Management', actions: ['List Taxes', 'Create Tax', 'Edit Tax', 'Delete Tax'] },
    { section: 'Payments', actions: ['List Payments', 'Process Payments', 'Refund Payments'] },
    { section: 'Notifications', actions: ['View Notifications', 'Manage Notifications'] },
  ];

  const [permissions, setPermissions] = useState({});

  // Handle permission for individual actions
  const handlePermissionChange = (section, action) => {
    setPermissions((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [action]: !prev[section]?.[action],
      },
    }));
  };

  // Handle selecting all actions in a section
  const handleSelectAllInSection = (section) => {
    const allSelected = permissionSections
      .find((sec) => sec.section === section)
      ?.actions.every((action) => permissions[section]?.[action]);
    
    setPermissions((prev) => ({
      ...prev,
      [section]: permissionSections
        .find((sec) => sec.section === section)
        ?.actions.reduce((acc, action) => {
          acc[action] = !allSelected;
          return acc;
        }, {}),
    }));
  };

  // Handle selecting all permissions across all sections
  const handleSelectAllPermissions = () => {
    const allSelected = permissionSections.every((sec) =>
      sec.actions.every((action) => permissions[sec.section]?.[action])
    );

    const newPermissions = permissionSections.reduce((acc, sec) => {
      acc[sec.section] = sec.actions.reduce((actionAcc, action) => {
        actionAcc[action] = !allSelected;
        return actionAcc;
      }, {});
      return acc;
    }, {});

    setPermissions(newPermissions);
  };
  return (
    <div className="container mx-auto px-4 py-8">
    <h2 className="text-xl font-bold mb-4">Update Permissions</h2>

    {/* Select All Permissions */}
    <div className="flex justify-between items-center mb-4">
      <label className="font-bold">Select All</label>
      <input
        type="checkbox"
        onChange={handleSelectAllPermissions}
        className="form-checkbox h-5 w-5"
      />
    </div>

    {/* Permission Sections */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {permissionSections.map((section) => (
        <div key={section.section} className="border p-4 rounded shadow">
          <div className="flex justify-between items-center mb-2">
            <label className="font-bold">{section.section}</label>
            <input
              type="checkbox"
              onChange={() => handleSelectAllInSection(section.section)}
              checked={section.actions.every((action) => permissions[section.section]?.[action])}
              className="form-checkbox h-5 w-5"
            />
          </div>

          {/* Actions */}
          {section.actions.map((action) => (
            <div key={action} className="flex justify-between items-center mb-2">
              <label>{action}</label>
              <input
                type="checkbox"
                onChange={() => handlePermissionChange(section.section, action)}
                checked={permissions[section.section]?.[action] || false}
                className="form-checkbox h-5 w-5"
              />
            </div>
          ))}
        </div>
      ))}
    </div>

    {/* Update Button */}
    <div className="flex justify-end mt-4">
      <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700">
        Update Permissions
      </button>
    </div>
  </div>
  )
}
