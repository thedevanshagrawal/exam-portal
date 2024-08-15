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
        <div className="Headers-logo">School Portal</div>
        <ul className="Headers-nav-links">
          <li>
            <Link to="/school/dashboard">Home</Link>
          </li>
          <li>
            <Link to="/school/EnrollStudent">Enroll Student</Link>
          </li>
          <li>
            <Link to="/school/StudentList">Student List</Link>
          </li>
          <li>
            <Link to="/school/ScheduleExam">Schedule Exam</Link>
          </li>
          <li>
            <Link to="/school/Report">Report</Link>
          </li>
          <li>
            <Link to="/school/SchoolProfile">Profile</Link>
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
