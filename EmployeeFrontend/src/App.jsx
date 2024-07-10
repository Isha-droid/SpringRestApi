import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the import change
import Navbar from './Components/Navbar';
import AddEmployee from './Components/AddEmployee';
import EmployeeList from './Components/EmployeeList';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Updated for version 6 usage */}
          <Route path="/add" element={<AddEmployee />} /> {/* Updated for version 6 usage */}
          <Route path="/display" element={<EmployeeList />} /> {/* Updated for version 6 usage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
