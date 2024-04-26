import React from 'react';
import './StatCard.css';

const StatCard = ({ icon, title, value, percentage, description, isPositive }) => {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div className="stat-info">
        <div className="stat-title">{title}</div>
        <div className="stat-value">{value}</div>
        <div className={`stat-percentage ${isPositive ? 'positive' : 'negative'}`}>
          {percentage}
        </div>
        <div className="stat-description">{description}</div>
      </div>
    </div>
  );
};

export default StatCard;