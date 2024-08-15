import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./EnrollNewschool.css";

function EnrollNewschool() {
  const [schoolName, setSchoolName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_no, setContact_no] = useState("");
  const [user_id, setUser_id] = useState("");
  const [address, setAddress] = useState("");
  const [spoc_name, setSpoc_name] = useState("");
  const [spoc_email, setSpoc_email] = useState("");
  // const [spoc_password, setSpoc_password] = useState("");
  const [principal_name, setPrincipal_name] = useState("");
  const [principal_email, setPrincipal_email] = useState("");
  const [principal_id, setPrincipal_id] = useState("");
  // const [principal_password, setPrincipal_password] = useState("");
  const [password, setPassword] = useState("12345");
  const [selectDashboard, setSelectDashboard] = useState("school");

  const handleEnrollSchool = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const response = await fetch("/users/registerSchool", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        schoolName,
        email,
        contact_no,
        user_id,
        address,
        spoc_name,
        // spoc_password,
        spoc_email,
        principal_name,
        principal_id,
        principal_email,
        // principal_password,
        password,
        selectDashboard,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      alert("School Registered Successfully");
      localStorage.setItem("authToken", data.token);
    } else {
      const errorText = await response.text();
      alert(errorText);
    }
  };

  return (
    <div className="FormMainContainer">
      <Header />
      <div className="form-container">
        <h1 className="form-title">School Details Form</h1>
        <form className="university-form" onSubmit={handleEnrollSchool}>
          <div className="form-group">
            <label htmlFor="universityName" className="form-label">
              School Name:
            </label>
            <input
              type="text"
              id="universityName"
              name="universityName"
              className="form-input"
              required
              onChange={(e) => setSchoolName(e.target.value)}
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
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactDetails" className="form-label">
              Contact Details:
            </label>
            <input
              type="tel"
              id="contactDetails"
              name="contactDetails"
              className="form-input"
              required
              onChange={(e) => setContact_no(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="uniId" className="form-label">
              School's Registration ID:
            </label>
            <input
              type="text"
              id="uniId"
              name="uniId"
              className="form-input"
              required
              onChange={(e) => setUser_id(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" className="form-label">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="form-input"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <h2 className="form-subtitle">Principal's Details</h2>

          <div className="form-group">
            <label htmlFor="vcName" className="form-label">
              Principal's Name:
            </label>
            <input
              type="text"
              id="vcName"
              name="vcName"
              className="form-input"
              required
              onChange={(e) => setPrincipal_name(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="vcEmail" className="form-label">
              Principal's Email:
            </label>
            <input
              type="email"
              id="vcEmail"
              name="vcEmail"
              className="form-input"
              required
              onChange={(e) => setPrincipal_email(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="vcId" className="form-label">
              Principal's Id:
            </label>
            <input
              type="text"
              id="vcId"
              name="vcId"
              className="form-input"
              required
              onChange={(e) => setPrincipal_id(e.target.value)}
            />
          </div>

          <h2 className="form-subtitle">spoc Details</h2>

          <div className="form-group">
            <label htmlFor="vcName" className="form-label">
              spoc Name:
            </label>
            <input
              type="text"
              id="vcName"
              name="vcName"
              className="form-input"
              required
              onChange={(e) => setSpoc_name(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="vcEmail" className="form-label">
              spoc Email:
            </label>
            <input
              type="email"
              id="vcEmail"
              name="vcEmail"
              className="form-input"
              required
              onChange={(e) => setSpoc_email(e.target.value)}
            />
          </div>

          <div className="form-button-container">
            <button type="submit" className="form-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EnrollNewschool;
