import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import StatCard from './StatCard';
import { FaCar } from 'react-icons/fa'; 
import { FiUsers, FiAlertCircle } from 'react-icons/fi';
import './StatCardList.css';
import './StatCard.css';

const StatCardList = () => {
  return (
    <div className="dashboard">
      <StatCard
        icon={<FiUsers />}
        title="Number of Users"
        value="2,300"
        percentage="+3% than last month"
        description="Just updated"
        isPositive={true}
      />
      <StatCard
        icon={<FaCar/>} 
        title="Number of Rides Posted"
        value="281"
        percentage="+55% than last week"
        description="Just updated"
        isPositive={true}
      />
      <Link to="/reportTable"> {/* Wrap the last card with Link */}
        <StatCard
          icon={<FiAlertCircle />}
          title="Number of Reports"
          value="+91"
          percentage="Just updated"
          description=""
          isPositive={true}
        />
      </Link>
    </div>
  );
};

export default StatCardList;
