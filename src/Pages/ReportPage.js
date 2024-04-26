import React from 'react';
import SideBarNavigation from '../components/SideBarNavigation';
import ReportTableAdmin from '../components/ReportTableAdmin';
import './ReportPage.css'; // Make sure to create a CSS file for the styles

function ReportPage() {
  return (
    <div className="report-page-container">
      <SideBarNavigation />
     
        <ReportTableAdmin />
    
    </div>
  );
}

export default ReportPage;
