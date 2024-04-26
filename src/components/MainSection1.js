import React from 'react';
import './Dashboard.css';

import BarChart from './Barchart';
import SideBarNavigation from './SideBarNavigation';
import UserActivityChart from './UserActivityChart';



const MainSection = () => {
  return (
     <div className="container">
     
       <SideBarNavigation/>
    <section className="main">
      
      <div className="main-top">
        <p>the main section one test !</p>
     
      </div>
      <div style={{ marginLeft: '100px' }}> 
          <BarChart />
        </div>
        <UserActivityChart/>
    
      
      
    </section>
    </div>
  );

};

export default MainSection;
