import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AddEmployee from './Components/AddEmployee';
import EmployeeList from './Components/EmployeeList';
import Home from './Components/Home';
import DashBoard from './Components/DashBoard';
import EditEmployee from './Components/EditEmployee';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/edit-employee/:id" element={<EditEmployee />} /> {/* Use `element` prop for components */}
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/display" element={<EmployeeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
