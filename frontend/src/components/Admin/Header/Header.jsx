import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");

    navigate("/login");
  };
  return (
    <>
      <header className="Headers-navbar">
        <div className="Headers-logo">Admin Portal</div>
        <ul className="Headers-nav-links">
          <li>
            <Link to="/admin/dashboard">Home</Link>
          </li>
          <li>
            <Link to="/admin/EnrollNewschool">Enroll School</Link>
          </li>
          <li>
            <Link to="/admin/SchoolList">School List</Link>
          </li>
          <li>
            <Link to="/admin/Questionpaper">Question paper's</Link>
          </li>
          <li>
            <Link to="/admin/Reports">Reports</Link>
          </li>

          <li>
            <Link to="/admin/AdminProfile">Profile</Link>
          </li>
        </ul>
        <div className="Headers-nav-icons">
          <div className="logout-profile-container">
            <button onClick={handleLogout} className="logout-profile-btn">
              logout
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
