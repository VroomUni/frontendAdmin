import React from 'react';
import './Dashboard.css';

import BarChart from './Barchart';
import StatCardList from './StatCardList';
import UserActivityChart from './UserActivityChart';

const MainSection = () => {
  return (
    <div className="container">
      <section className="main">
        <div className="main-top">
          <p>Welcome to the Admin Dashboard !</p>
        </div>
        <StatCardList />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '100px', marginTop: '20px' }}>
          <div style={{ marginRight: '1px' }}>
            <BarChart />
          </div>
          <UserActivityChart />
        </div>
      </section>
    </div>
  );
};

export default MainSection;