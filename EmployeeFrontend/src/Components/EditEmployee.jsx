import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployee = () => {
  const { id } = useParams(); // Access route parameter
  const navigate = useNavigate(); // Navigate programmatically

  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    emailId: ''
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/employees/${id}`);
        setEmployee(response.data);
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prevEmployee => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/v1/employees/${id}`, employee);
      console.log(`Employee with ID ${id} updated successfully.`);
      navigate('/dashboard'); // Redirect to employee list after successful update
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Edit Employee</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-100 shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-800 font-semibold mb-1">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-800 font-semibold mb-1">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="emailId" className="block text-gray-800 font-semibold mb-1">Email</label>
          <input
            type="email"
            id="emailId"
            name="emailId"
            value={employee.emailId}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button type="submit" className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 focus:outline-none">
          Update Employee
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
