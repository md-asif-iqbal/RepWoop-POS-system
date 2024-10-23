"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NewUsers() {
    const pathname = usePathname();
    const spanClass = " block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [role, setRole] = useState('');
    const [userImage, setUserImage] = useState(null);

    // Roles that users can select
  const roles = ['Admin', 'Operator', 'Editor', 'Viewer'];

  // Handle file upload for user image
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUserImage(file);
    }
  };

  // Handle form submission
  const handleSaveUser = (e) => {
    e.preventDefault();
    // Handle saving the user data here (e.g., send to API or log)
    alert('User saved successfully!');
  };

  return (
    <div className='bg-white dark:bg-[#141432] font-nunito text-sm dark:text-white'>

    <div className="p-0  mt-[25%] sm:mt-[5%]  w-full">
              {/* Title Section */}

  <div className=" mb-4  shadow-sm rounded-sm ">
  <h1 className="text-lg text-gray-500 dark:text-white mx-5 ">Users </h1>
    <div className=' sm:md:flex items-start justify-start mx-5 py-5 gap-10 '>
        <Link href="/Users" className= {`${
                          pathname === '/Users' 
                          ? ' group text-orange-500  hover:text-orange-500' 
                          : 'group text-gray-500 dark:text-white hover:text-orange-500 '
                      }`}>
        Users
        <span className={spanClass}></span>
        </Link>
        <Link href="/Users/Create" className={`${
                          pathname === '/Users/Create' 
                          ? ' group text-orange-500  hover:text-orange-500' 
                          : 'group text-gray-500 dark:text-white hover:text-orange-500 '
                      }`}>
        + New Users
        <span className={spanClass}></span>
        </Link>
        
    </div>
  </div>

  <div className="container mx-auto px-4 py-8">
      <h2 className="text-lg  mb-6">Make User</h2>

      <form onSubmit={handleSaveUser} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className="block text-sm mb-2">First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-2 border rounded dark:bg-white"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm mb-2">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-2 border rounded dark:bg-white"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter Login Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" dark:bg-white w-full p-2 border rounded"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm mb-2">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className=" dark:bg-white w-full p-2 border rounded"
          >
            <option value="">Select Role</option>
            {roles.map((roleOption, index) => (
              <option key={index} value={roleOption}>
                {roleOption}
              </option>
            ))}
          </select>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm mb-2">Password</label>
          <input
            type="password"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" dark:bg-white w-full p-2 border rounded"
          />
        </div>

        {/* Password Confirmation */}
        <div>
          <label className="block text-sm mb-2">Password Confirmation</label>
          <input
            type="password"
            placeholder="*******"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className=" dark:bg-white w-full p-2 border rounded"
          />
        </div>

        {/* User Image */}
        <div className="md:col-span-2">
          <label className="block text-sm mb-2">User Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className=" dark:bg-white w-full p-2 border rounded"
          />
          <p className="text-sm text-gray-500 mt-2">Image Size Must be 128x128</p>
        </div>

        {/* Save User Button */}
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-teal-700 flex items-center"
          >
            <i className="fas fa-save mr-2"></i> Save User
          </button>
        </div>
      </form>
    </div>

 
</div>
</div>
  )
}
