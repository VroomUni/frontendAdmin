import React from "react";
import SignInForm from "../components/SignInForm";
import Panel from "../components/Panel";
import "./SignIn.css";

export const SignIn = () => {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <SignInForm />
        </div>
      </div>
      <div className="panel-container">
        <Panel />
      </div>
    </div>
  );
};
