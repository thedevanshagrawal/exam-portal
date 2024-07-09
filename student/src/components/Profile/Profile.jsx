import React from "react";
import "./Profile.css"; // Import your CSS file

const Profile = () => {
  // Static profile data
  const staticProfile = {
    name: "Pratiksha",
    email: "pratik@gmail.com",
    phone: "123-456-7890",
    profilePhoto: "https://example.com/path/to/static/profile/photo.jpg", // Replace with your static photo URL
  };

  const handleForgotPassword = () => {
    alert("Forgot Password functionality");
    // Implement your forgot password logic here
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <form className="profile-form">
        <div className="ProfileMainContainer">
          <div className="profile-FormContainer">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={staticProfile.name}
              readOnly
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={staticProfile.email}
              readOnly
            />

            <label htmlFor="phone">Phone No:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={staticProfile.phone}
              readOnly
            />
          </div>

          <div className="profile-photo">
            <label>Profile Photo:</label>
            {/* Static image display */}
            <div className="profile-photo-preview">
              <img src={staticProfile.profilePhoto} alt="Profile" />
            </div>
          </div>
        </div>

        <button
          type="button"
          className="forgot-password-btn"
          onClick={handleForgotPassword}
        >
          Forgot Password
        </button>
      </form>
    </div>
  );
};

export default Profile;
