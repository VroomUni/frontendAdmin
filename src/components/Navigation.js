import { Link } from 'react-router-dom';
import './Dashboard.css';
import logo from '../pic/R.png'; 
import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
          <h4>Hello Admin </h4>
        </div>
        <ul>
          <li>
            <Link to="/Mainsection1">
              <i className="fas fa-user"></i>
              <span className="nav-item">Dashboard</span>
            </Link>
          </li>
          <li>
          <Link to="/Mainsection2">
              <i className="fas fa-chart-bar"></i>
              <span className="nav-item">Analytics</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-tasks"></i>
              <span className="nav-item">Jobs Board</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-dochub"></i>
              <span className="nav-item">Documents</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-cog"></i>
              <span className="nav-item">Setting</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-question-circle"></i>
              <span className="nav-item">Help</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <i className="fas fa-sign-out-alt"></i>
              <span className="nav-item">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
