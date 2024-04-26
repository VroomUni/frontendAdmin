import React from 'react';
import './Dashboard.css';
import Navigation from './Navigation';
import TableAdmin from './ReportTableAdmin';

const MainSection = () => {
  return (
     <div className="container">
       <Navigation />
   
    <TableAdmin/>
    </div>
  );

};

export default MainSection;
