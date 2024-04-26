import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiTable,  FiLogIn, } from 'react-icons/fi';
import './SideBarNavigation.css'; 
import VroomLog from '../pic/logo.png'; 
import { useNavigate } from "react-router-dom";
const SideBarNavigation = () => {
    const navigate = useNavigate()
    const handleLogout = () =>{
        navigate("/");
    }
  return (
    
        <nav className="sidebar">
          <div className="sidebar-header">
          <img className="LogoImageSideBar"src={VroomLog} alt="Logo" />
          </div>
          <ul className="sidebar-list">
            <li>
              <NavLink to="/adminDashboard" exact activeClassName="active">
                <FiHome className="Link-icons" />
                 Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/reportTable" activeClassName="active">
                <FiTable className="Link-icons" /> 
                Reports
              </NavLink>
            </li>
           
           
           
          </ul>
          <button className="btn-logout" onClick={handleLogout}>  <FiLogIn  className="Link-icons"/> Logout</button>
        </nav>
      );
    };

export default SideBarNavigation;
