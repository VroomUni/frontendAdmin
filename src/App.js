import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn } from './Pages/SignIn';
import TableAdmin from './components/ReportTableAdmin';
import Dashboard from './components/Dashboard';
import MainSection1 from './components/MainSection1';
import MainSection2 from './components/MainSection2';
import SideBarNavigation from './components/SideBarNavigation';
import AdminDashboard from './Pages/AdminDashboard';
import ReportPage from './Pages/ReportPage';


function App() {
  
  return (
    
      <Router>
        <Routes>
      
         
       
          <Route path="/adminDashboard" element={<AdminDashboard />} />
       
        <Route path="/reportTable" element={<ReportPage />} />
          <Route path="/Mainsection2" element={<MainSection2 />} />
          <Route path="/"element={<SignIn/>} /> 
          {/* <Route path="/"element={<SideBarNavigation/>} /> */}
        </Routes>
      </Router>
    
  );
}


export default App;