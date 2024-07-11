import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/employees/${id}`);
      setEmployees(employees.filter(emp => emp.id !== id));
      console.log(`Employee with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Employee List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {employees.map(employee => (
          <div key={employee.id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 bg-white">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{employee.firstName} {employee.lastName}</h2>
              <p className="text-gray-600">{employee.emailId}</p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  <FaTrash className="w-5 h-5" />
                </button>
                <Link to={`/edit-employee/${employee.id}`} className="ml-3 text-blue-500 hover:text-blue-700 focus:outline-none">
                  <FaEdit className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
