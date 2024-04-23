import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn } from './Pages/SignIn';
import TableAdmin from './components/TableAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<TableAdmin />} />
  
      </Routes>
    </Router>
  );
}



export default App;
