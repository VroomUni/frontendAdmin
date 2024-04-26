import React from 'react';
import StatCard from './StatCard';
import { FiShoppingCart, FiUsers, FiDollarSign, FiHeart } from 'react-icons/fi';
import './StatCardList.css';


const StatCardList = () => {
  return (
    <div className="dashboard">
      <StatCard
        icon={<FiShoppingCart />}
        title="Bookings"
        value="281"
        percentage="+55% than last week"
        description="Just updated"
        isPositive={true}
      />
      <StatCard
        icon={<FiUsers />}
        title="Today's Users"
        value="2,300"
        percentage="+3% than last month"
        description="Just updated"
        isPositive={true}
      />
      <StatCard
        icon={<FiDollarSign />}
        title="Revenue"
        value="34k"
        percentage="+1% than yesterday"
        description="Just updated"
        isPositive={true}
      />
      <StatCard
        icon={<FiHeart />}
        title="Followers"
        value="+91"
        percentage="Just updated"
        description=""
        isPositive={true}
      />
    </div>
  );
};

export default StatCardList;