import React, { useEffect, useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const AdminProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleLogin = async () => {
      try {
        const response = await fetch("/users/studentProfile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const studentDatas = await response.json();
          // console.log("profile", studentDatas);

          setProfileData(studentDatas.data);

          // Store the token and selectDashboard in localStorage
          localStorage.setItem("authToken", studentDatas.token);
          localStorage.setItem("selectDashboard", studentDatas.selectDashboard);
        } else {
          const errorText = await response.text();
          alert(errorText);
        }
      } catch (error) {
        setError("Failed to fetch profile data");
      } finally {
        setLoading(false);
      }
    };

    handleLogin();
  }, []);

  if (loading) {
    return <div>Loading...</div>; //Display loading state
  }

  if (error) {
    return <div>Error: {error}</div>; //Display error message
  }

  if (!profileData) {
    return <div>No profile data found</div>; // Handle case with no data
  }

  return (
    <div className="Profile-Full-Container">
      <Header />;
      <div className="profile-container">
        <h2>Profile</h2>
        <form className="profile-form">
          <div className="ProfileMainContainer">
            <div className="profile-FormContainer">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={profileData.fullName}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email ID:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={profileData.email}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact" className="form-label">
                  Contact Info:
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  className="form-input"
                  value={profileData.contact_no}
                  readOnly
                />
              </div>

              <div className="forgot-logout-btn-container">
                <div className="forgot-password-container">
                  <Link
                    to="/admin/Updatepassword"
                    className="forgot-password-btn"
                  >
                    Update Password
                  </Link>
                </div>
              </div>
            </div>
            <div className="form-group profile-photo-container">
              <label htmlFor="profilePhoto" className="form-label"></label>
              <div className="photo-preview">
                <img
                  src={profileData.profilePhoto}
                  alt="Profile"
                  className="photo-preview-img"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminProfile;
