import React from "react";
import "./StudentReport.css";
import Header from "../Header/Header";

const StudentReportLists = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    alert("Report submitted successfully!");
  };

  return (
    <div className="Student-Report-Full-Container">
      <Header/>
      <div className="Student-report-container">
        <h2>Submit Report</h2>
        <form className="Student-report-form" onSubmit={handleSubmit}>
          <div className="Student-form-group">
            <label htmlFor="name" className="Student-form-label">
              Your Name:
            </label>
            <input type="text" id="name" name="name" className="Student-form-input" required />
          </div>

          <div className="Student-form-group">
            <label htmlFor="email" className="Student-form-label">
              Your Email:
            </label>
            <input type="email" id="email" name="email" className="Student-form-input" required />
          </div>

          <div className="Student-form-group">
            <label htmlFor="subject" className="Student-form-label">
              Subject:
            </label>
            <input type="text" id="subject" name="subject" className="Student-form-input" required />
          </div>

          <div className="Student-form-group">
            <label htmlFor="report" className="Student-form-label">
              Report:
            </label>
            <textarea id="report" name="report" className="Student-form-input" rows="5" required></textarea>
          </div>

          <div className="Student-form-group">
            <label htmlFor="attachment" className="Student-form-label">
              Attachment:
            </label>
            <input type="file" id="attachment" name="attachment" className="Student-form-input" />
          </div>

          <div className="Student-form-button-container">
            <button type="submit" className="Student-form-button">
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentReportLists;
