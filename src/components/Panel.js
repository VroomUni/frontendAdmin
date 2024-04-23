import React from "react";
import "./Panel.css";
import VroomLog from '../pic/logo.png'; 

const Panel = () => {
  return (
    <div className="left-panel">
      <div className="content">
      <img className="LogoImage"src={VroomLog} alt="Logo" />
        
      </div>
      <h3 className="panel-header">Welcome Admin!</h3>
    </div>
  );
};

export default Panel;
