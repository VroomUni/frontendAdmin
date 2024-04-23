import React from "react";

function FormInput({ iconClass, placeholder, type }) {
  return (
    <div className="input-field">
      <i className={iconClass}></i>
      <input type={type} placeholder={placeholder} autoComplete="off" />
    </div>
  );
}

export default FormInput;
