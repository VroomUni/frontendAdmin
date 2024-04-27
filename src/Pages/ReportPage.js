import React from 'react';
import SideBarNavigation from '../components/SideBarNavigation';
import ReportTableAdmin from '../components/ReportTableAdmin';
import '../components/Dashboard.css';

function ReportPage() {
  return (
    <div className="container">
      <SideBarNavigation />
      <div className="main">
        <h4 className="main-top">Users Reports</h4>
        <div className="main-body">
          <ReportTableAdmin />
        </div>
      </div>
    </div>
  );
}

export default ReportPage;