
import React from "react";
import SignInForm from "../components/SignInForm";
import Panel from "../components/Panel";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
   
    navigate("/adminDashboard");
  };

  return (
    <div className="containerSignIn">
      <div className="forms-container">
        <div className="signin-signup">
          <SignInForm onLogin={handleLogin} /> 
        </div>
      </div>
      <div className="panel-container">
        <Panel />
      </div>
    </div>
  );
};

