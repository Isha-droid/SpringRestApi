import React from 'react';
import { FaUserTie, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaUserTie className="text-xl" />
          <span className="text-2xl font-bold">Employee Management</span>
        </div>
        <div className="flex space-x-4">
          <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Dashboard</button>
          <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Employees</button>
          <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Settings</button>
          <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-md flex items-center space-x-1">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
