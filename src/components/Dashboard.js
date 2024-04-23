
import './Dashboard.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './Dashboard.css';
import logo from '../pic/R.png'; 
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import MainSection1 from './MainSection1';

const Dashboard = () => {
    return (
        <div className="container">
        
            <MainSection1 />
        </div>
    );
}

export default Dashboard;
