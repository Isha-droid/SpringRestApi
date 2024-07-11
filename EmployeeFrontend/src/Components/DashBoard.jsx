import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const updateEmployee = (id, updatedEmployee) => {
    const updatedEmployees = employees.map(emp =>
      emp.id === id ? { ...emp, ...updatedEmployee } : emp
    );
    setEmployees(updatedEmployees);
  };

  const deleteEmployee = (id) => {
    const filteredEmployees = employees.filter(emp => emp.id !== id);
    setEmployees(filteredEmployees);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Employee Management Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card for Add Employee */}
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Add Employee</h2>
              {/* <EmployeeForm addEmployee={addEmployee} /> */}
            </div>
            <div className="bg-gray-800 p-4 flex justify-center items-center">
              <Link to="/add" className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg focus:outline-none">
                Add Employee
              </Link>
            </div>
          </div>

          {/* Card for Update Employee */}
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Update Employee</h2>
              {/* Add update functionality here */}
            </div>
            <div className="bg-gray-800 p-4 flex justify-center items-center">
              <Link to="/display" className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg focus:outline-none">
                Update Employee
              </Link>
            </div>
          </div>

          {/* Card for Delete Employee */}
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Delete Employee</h2>
              {/* Add delete functionality here */}
            </div>
            <div className="bg-gray-800 p-4 flex justify-center items-center">
              <Link to="/display" className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg focus:outline-none">
                Delete Employee
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;
