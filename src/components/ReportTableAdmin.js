import React, { useState } from 'react';
import './ReportTableAdmin.css'; 
import ReportDetails from './ReportDetails';


const ReportRow = ({ report, onDetails }) => {
  return (
    <tr>
      <td>{report.reportedBy.name}</td>
      <td>{report.reportedUser.name}</td>
      <td>{report.reason}</td>
      <td>{report.date}</td>
      <td>
        <button className="action-button ban" onClick={() => onDetails(report.reportedUser.userId)}>
          See Detail
        </button>
      </td>
    </tr>
  );
};


const ReportTableAdmin = () => {
 
  const [reports, setReports] = useState([
    {
      reportId: 'R1',
      reportedBy: {
        name: 'Alice Smith',
        userId: 'U1'
      },
      reportedUser: {
        name: 'Bob Johnson',
        userId: 'U2'
      },
      reason: 'Inappropriate behavior',
      date: '2024-04-22',
    },
    {
      reportId: 'R2',
      reportedBy: {
        name: 'Charlie Davis',
        userId: 'U3'
      },
      reportedUser: {
        name: 'Eva Green',
        userId: 'U4'
      },
      reason: 'Spamming',
      date: '2024-04-23',
    },
    {
      reportId: 'R3',
      reportedBy: {
        name: 'Frank Harris',
        userId: 'U5'
      },
      reportedUser: {
        name: 'Grace Ives',
        userId: 'U6'
      },
      reason: 'Harassment',
      date: '2024-04-24',
    },
  ]);
  const reportDetails = {
    reportingUser: "John Doe",
    reportedUser: "Jane Smith",
    reportContent: "Unacceptable behavior during the ride."
  };
  

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="reports-table-container">
      <table className="reports-table">
        <thead className="reports-table-header">
          <tr>
            <th>Reported By</th>
            <th>Reported User</th>
            <th>Reason</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <ReportRow key={report.reportId} report={report} onDetails={handleModalOpen} />
          ))}
        </tbody>
      </table>
      {isModalOpen &&   <ReportDetails reportDetails={reportDetails} handleClose={handleModalClose} />} 
    </div>
  );
};

export default ReportTableAdmin;
