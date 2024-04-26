import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from "./Pages/SignIn";
import AdminDashboard from "./Pages/AdminDashboard";
import ReportPage from "./Pages/ReportPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/adminDashboard" element={<AdminDashboard />} />

        <Route path="/reportTable" element={<ReportPage />} />

        <Route path="/" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
