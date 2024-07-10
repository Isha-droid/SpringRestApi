import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Employee List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {employees.map(employee => (
          <div key={employee.id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 bg-white">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{employee.firstName} {employee.lastName}</h2>
              <p className="text-gray-600">{employee.emailId}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
