import React from "react";
import Modal from "@mui/material/Modal";
import { CloseOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import "./ReportDetails.css";

function ReportDetails({ reportDetails, handleClose }) {
  const { reportingUser, reportedUser, reportContent } = reportDetails;

  const dismissReport = () => {
    console.log("Report dismissed");
    // Implement dismissal logic here
  };

  const banUser = () => {
    console.log("User banned");
    // Implement banning logic here
  };

  return (
    <Modal
      open={true}
      onClose={handleClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper className="modalContent">
        <div className="closeButton">
          <CloseOutlined onClick={handleClose} />
        </div>
        <div className="userDetails">
          <p><strong>Reported by:</strong> {reportingUser}</p>
          <p><strong>Reported user:</strong> {reportedUser}</p>
        </div>
        <div className="reportContent">
          <p><strong>Report Content:</strong> {reportContent}</p>
        </div>
        <div className="actionButtons">
          <Button variant="contained" color="error" onClick={banUser}>
            Ban User
          </Button>
          <Button variant="outlined" color="primary" onClick={dismissReport}>
            Dismiss Report
          </Button>
        </div>
      </Paper>
    </Modal>
  );
}

export default ReportDetails;
