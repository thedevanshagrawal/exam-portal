import React, { useState } from "react";
import "./Updatepassword.css";

const Updatepassword = () => {
  const [formData, setFormData] = useState({
    username: "John Doe",
    userId: "12345",
    email: "johndoe@example.com",
    contact: "123-456-7890",
    newPassword: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword === formData.confirmPassword) {
      alert("Password updated successfully!");
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="UpdatePassword-Full-Main-Container">
    <div className="UpdatePassword-Full-Container">
      <div className="update-password-container">
        <h2>Update Password</h2>
        <form className="update-password-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-input"
              value={formData.username}
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="userId" className="form-label">
              User ID:
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              className="form-input"
              value={formData.userId}
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact" className="form-label">
              Contact No:
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              className="form-input"
              value={formData.contact}
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="newPassword" className="form-label">
              New Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="newPassword"
              name="newPassword"
              className="form-input"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="form-input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="checkbox"
              id="showPassword"
              className="form-checkbox"
              checked={showPassword}
              onChange={togglePasswordVisibility}
            />
            <label htmlFor="showPassword" className="form-checkbox-label">
              Show Password
            </label>
          </div>

          <div className="form-button-container">
            <button type="submit" className="form-button">
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Updatepassword;
