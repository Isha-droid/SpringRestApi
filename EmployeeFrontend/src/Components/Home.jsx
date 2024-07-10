import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Employee Management System</h1>
        <p className="text-lg text-gray-600 mb-6">Efficiently manage your employees with our easy-to-use system.</p>
        <Link to="/dashboard" className="block w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Home;
