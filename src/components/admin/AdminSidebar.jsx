import React from 'react'

const AdminSidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
        <ul className="space-y-4">
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Dashboard</li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Users</li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Settings</li>
        </ul>
    </aside>
  )
}

export default AdminSidebar