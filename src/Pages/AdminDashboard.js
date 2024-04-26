import React from 'react';
import SideBarNavigation from '../components/SideBarNavigation';
import MainSection from '../components/MainSection1';
import './AdminDashboard.css'; // Import the CSS file

function AdminDashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <SideBarNavigation />
      </div>
      <div className="main-container">
        <MainSection />
      </div>
    </div>
  );
}

export default AdminDashboard;
