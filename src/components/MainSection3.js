import React from 'react';
import './Dashboard.css';
import Navigation from './Navigation';
import TableAdmin from './ReportTableAdmin';

const MainSection3 = () => {
  return (
     <div className="container">
       <Navigation />
    <section className="main">
      
      <div className="main-top">
        <p>the main section 222222222222222222222 test !</p>
      </div>
      <div className="main-body">
        <h1>Recent Jobs</h1>

        <div className="search_bar">
          <input type="search" placeholder="Search job here..." />
          <select name="">
            <option>Category</option>
            <option>Web Design</option>
            <option>App Design</option>
            <option>App Development</option>
          </select>
          <select className="filter">
            <option>Filter</option>
          </select>
        </div>

        <div className="tags_bar">
          <div className="tag">
            <i className="fas fa-times"></i>
            <span>Programming</span>
          </div>
          <div className="tag">
            <i className="fas fa-times"></i>
            <span>Design</span>
          </div>
          <div className="tag">
            <i className="fas fa-times"></i>
            <span>PHP</span>
          </div>
          <div className="tag">
            <i className="fas fa-times"></i>
            <span>JavaScript</span>
          </div>
        </div>

        <div className="row">
          <p>There are more than <span>400</span> Jobs</p>
          <a href="#">See all</a>
        </div>

       
        <div className="job_card">
     
        </div>
      </div>
    </section>
   
    </div>
  );

};

export default MainSection3;
