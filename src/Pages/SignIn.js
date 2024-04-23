// SignIn.js
import React from "react";
import SignInForm from "../components/SignInForm";
import Panel from "../components/Panel";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect to the dashboard page after successful login
    navigate("/Dashboard");
  };

  return (
    <div className="container1">
      <div className="forms-container">
        <div className="signin-signup">
          <SignInForm onLogin={handleLogin} /> {/* Pass handleLogin as prop */}
        </div>
      </div>
      <div className="panel-container">
        <Panel />
      </div>
    </div>
  );
};

