import React from 'react';
import './Dashboard.css';

import BarChart from './Barchart';

import StatCardList from './StatCardList';

const MainSection = () => {
  return (
    <div className="container">
    
      <section className="main">
        <div className="main-top">
          <p>the main section one test !</p>
        </div>
        <StatCardList /> {/* Move StatCardList here */}
        <div style={{ marginLeft: '100px' }}> {/* Add left margin here */}
          <BarChart />
        </div>
      </section>
    </div>
  );
};

export default MainSection;