import React from 'react';
import './TableAdmin.css';

const usersData = [
  { id: 1, name: 'Isabella Christensen', message: 'Lorem ipsum is simply...', date: '11 MAY 12:56' },
  { id: 2, name: 'Mathilde Andersen', message: 'Lorem ipsum is simply text of...', date: '11 MAY 10:35' },
  // ... more users
];

const TableAdmin = () => {
  const handleApprove = (userId) => {
    console.log('Approve', userId);
    // Implement the approve logic here
  };

  const handleReject = (userId) => {
    console.log('Reject', userId);
    // Implement the reject logic here
  };

  return (
    <div className="dashboard">
      <h2>Recent Users</h2>
      <div className="user-list">
        {usersData.map(user => (
          <div key={user.id} className="user-item">
            <div className="user-info">
              <div className="avatar">
                {/* Avatar should be placed here */}
              </div>
              <div className="details">
                <h3>{user.name}</h3>
                <p>{user.message}</p>
              </div>
            </div>
            <div className="timestamp">
              {user.date}
            </div>
            <div className="actions">
              <button className="btn reject" onClick={() => handleReject(user.id)}>Reject</button>
              <button className="btn approve" onClick={() => handleApprove(user.id)}>Approve</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableAdmin;
