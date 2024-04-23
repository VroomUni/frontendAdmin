import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn } from './Pages/SignIn';
import TableAdmin from './components/TableAdmin';
import Dashboard from './components/Dashboard';
import MainSection1 from './components/MainSection1';
import MainSection2 from './components/MainSection2';


function App() {
  
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Mainsection1" element={<MainSection1 />} />
        <Route path="/dashboard" element={<TableAdmin />} />
          <Route path="/Mainsection2" element={<MainSection2 />} />
        </Routes>
      </Router>
    
  );
}


export default App;