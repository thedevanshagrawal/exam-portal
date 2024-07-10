import React from "react";
import "./StudentReport.css";

const StudentReport = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    alert("Report submitted successfully!");
  };

  return (
    <div className="Report-Full-Container">
      <div className="report-container">
        <h2>Submit Report</h2>
        <form className="report-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Your Name:
            </label>
            <input type="text" id="name" name="name" className="form-input" required />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Your Email:
            </label>
            <input type="email" id="email" name="email" className="form-input" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">
              Subject:
            </label>
            <input type="text" id="subject" name="subject" className="form-input" required />
          </div>

          <div className="form-group">
            <label htmlFor="report" className="form-label">
              Report:
            </label>
            <textarea id="report" name="report" className="form-input" rows="5" required></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="attachment" className="form-label">
              Attachment:
            </label>
            <input type="file" id="attachment" name="attachment" className="form-input" />
          </div>

          <div className="form-button-container">
            <button type="submit" className="form-button">
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentReport;
