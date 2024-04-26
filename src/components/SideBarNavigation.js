import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiTable, FiDollarSign, FiCompass, FiBell, FiUser, FiLogIn, FiUserPlus } from 'react-icons/fi';
import './SideBarNavigation.css'; 
const SideBarNavigation = () => {
  return (
    
        <nav className="sidebar">
          <div className="sidebar-header">
            <h3>Material Dashboard 2</h3>
          </div>
          <ul className="sidebar-list">
            <li>
              <NavLink to="/adminDashboard" exact activeClassName="active">
                <FiHome />
                 Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/table" activeClassName="active">
                <FiTable /> 
                Reports
              </NavLink>
            </li>
           
           
           
          </ul>
          <button className="btn-upgrade">  <FiLogIn /> Logout</button>
        </nav>
      );
    };

export default SideBarNavigation;
