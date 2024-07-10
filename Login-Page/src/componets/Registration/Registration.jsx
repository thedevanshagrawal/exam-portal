// Registration.js
import React, { useState } from "react";
import "./Registration.css";

function Registration() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle form submission logic here
  };

  return (
    <div className="Registration-Main-Container" >
    <div className="Registrationcontainer">
      <div className="Registrationform-container">
        <h2 className="Registrationform-title">Exam Portal Registration</h2>
        <form id="registration-form" onSubmit={handleSubmit}>
          <label htmlFor="reg-name" className="Registrationform-label">Username</label>
          <input type="text" id="reg-name" name="name" className="Registrationform-input" required />

          <label htmlFor="reg-contact" className="Registrationform-label">Contact Number</label>
          <input type="tel" id="reg-contact" name="contact" className="Registrationform-input" required />

          <label htmlFor="reg-email" className="Registrationform-label">Email</label>
          <input type="email" id="reg-email" name="email" className="Registrationform-input" required />

          <label htmlFor="reg-password" className="Registrationform-label">Password</label>
          <input type="password" id="reg-password" name="password" className="Registrationform-input" required onChange={handlePasswordChange} />

          <label htmlFor="reg-confirm-password" className="Registrationform-label">Confirm Password</label>
          <input type="password" id="reg-confirm-password" name="confirmPassword" className="Registrationform-input" required onChange={handleConfirmPasswordChange} />

          <button type="submit" className="Registrationform-button">Register</button>
        </form>
      </div>
    </div>
      </div>
  );
}

export default Registration;
