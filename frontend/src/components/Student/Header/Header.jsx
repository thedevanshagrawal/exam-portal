import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

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
        <div className="Headers-logo">Student Portal</div>
        <ul className="Headers-nav-links">
          <li>
            <Link to="/student/dashboard">Home</Link>
          </li>

          <li>
            <Link to="/student/QuestionPaper">Question Paper</Link>
          </li>
          <li>
            <Link to="/student/Report">Report card</Link>
          </li>
          <li>
            <Link to="/student/Profile">Profile</Link>
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
