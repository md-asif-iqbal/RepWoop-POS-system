"use client"

import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Users() {
    const pathname = usePathname();
    const spanClass = " block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"
    const users = [
        {
          id: 1,
          name: 'SOFT GHOR',
          email: 'oaretor@softghor.com',
          role: 'Operator',
          avatar: '/path-to-avatar1.jpg', // Replace with actual image path or placeholder
        },
        {
          id: 2,
          name: 'John Doe',
          email: 'johndoe@gmail.com',
          role: 'Admin',
          avatar: '/path-to-avatar2.jpg', // Replace with actual image path or placeholder
        },
        {
          id: 3,
          name: 'Jane Smith',
          email: 'janesmith@gmail.com',
          role: 'Editor',
          avatar: '/path-to-avatar3.jpg', // Replace with actual image path or placeholder
        },
        {
          id: 4,
          name: 'David Miller',
          email: 'davidmiller@gmail.com',
          role: 'Moderator',
          avatar: '/path-to-avatar4.jpg', // Replace with actual image path or placeholder
        },
        {
          id: 5,
          name: 'Emily Johnson',
          email: 'emilyjohnson@gmail.com',
          role: 'Viewer',
          avatar: '/path-to-avatar5.jpg', // Replace with actual image path or placeholder
        },
      ];
    
  return (
    <div className='bg-white dark:bg-[#141432] font-nunito text-sm dark:text-white'>

    <div className="p-0  mt-[25%] sm:mt-[5%]  w-full">
              {/* Title Section */}

  <div className=" mb-4  shadow-sm rounded-sm ">
  <h1 className="text-xl text-gray-500 dark:text-white mx-5 ">Users </h1>
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
      <h2 className="text-xl  mb-4">Users</h2>
      
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-teal-500 text-white">
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Role</th>
              <th className="border px-4 py-2">Avatar</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="text-center">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="border px-4 py-2">
                  <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full mx-auto" />
                </td>
                <td className="border px-2 py-2">
                 <Link href="/Users/Create">
                 <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-2 rounded mr-2">
                  <Pencil size={16}/>
                  </button>
                 </Link>
                  <button className="bg-red-500 hover:bg-red-700 text-white  py-2 px-2 rounded">
                  <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
</div>
</div>
  )
}
