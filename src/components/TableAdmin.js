import React, { useState } from 'react';
import './TableAdmin.css'; // Ensure your CSS file is named TableAdmin.css and is in the same directory

// ReportRow component represents a single row in the reports table
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

// ReportTableAdmin component holds the state for all reports and renders the table
const ReportTableAdmin = () => {
  const [reports, setReports] = useState([
    // Example report data
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
    // ... add more reports as needed
  ]);

  const handleSeeDetails = (userId) => {
    console.log('See Details', userId);
    // Placeholder for ban logic, e.g., API call to ban the user
    // After banning, you may want to remove the report from the list or mark as resolved
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
            <ReportRow key={report.reportId} report={report} onDetails={handleSeeDetails} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTableAdmin;
