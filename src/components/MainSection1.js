import React from 'react';
import './Dashboard.css';
import Navigation from './Navigation';
import BarChart from './Barchart';



const MainSection = () => {
  return (
     <div className="container">
       <Navigation />
    <section className="main">
      
      <div className="main-top">
        <p>the main section one test !</p>
     
      </div>
      <BarChart/>
  
    
      
      
    </section>
    </div>
  );

};

export default MainSection;
