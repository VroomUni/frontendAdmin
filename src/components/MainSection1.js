import React from 'react';
import './Dashboard.css';
import Navigation from './Navigation';
import BarChart from './Barchart';
import SideBarNavigation from './SideBarNavigation';



const MainSection = () => {
  return (
     <div className="container">
       {/* <Navigation /> */}
       <SideBarNavigation/>
    <section className="main">
      
      <div className="main-top">
        <p>the main section one test !</p>
     
      </div>
      <div style={{ marginLeft: '100px' }}> {/* Add left margin here */}
          <BarChart />
        </div>
    
      
      
    </section>
    </div>
  );

};

export default MainSection;
