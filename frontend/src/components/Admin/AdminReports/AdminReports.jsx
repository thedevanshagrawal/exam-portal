import React from "react";
import "./AdminReports.css";
import Header from "../Header/Header";

const AdminReports = () => {
  // Sample static data for reports
  const reports = [
    {
      id: 1,
      schoolName: "----------",
      submittedBy: "-------",
      email: "--------",
      subject: "Monthly Report",
      reportContent: "This is the content of the monthly report...",
      attachment: "report1.pdf",
      submissionDate: "-------",
    },
    {
      id: 1,
        schoolName: "----------",
        submittedBy: "-------",
        email: "--------",
        subject: "Quatarly Report",
        reportContent: "This is the content of the monthly report...",
        attachment: "report2.pdf",
        submissionDate: "-------",
    },
    // Add more reports as needed
  ];

  return (
    <div className="AdminReports-Full-Container">
      <Header/>
      <div className="admin-reports-container">
        <h2>Submitted Reports</h2>
        <div className="reports-list">
          {reports.map((report) => (
            <div key={report.id} className="report-card">
              <h3>{report.subject}</h3>
              <p><strong>School:</strong> {report.schoolName}</p>
              <p><strong>Submitted By:</strong> {report.submittedBy}</p>
              <p><strong>Email:</strong> {report.email}</p>
              <p><strong>Date:</strong> {report.submissionDate}</p>
              <p><strong>Content:</strong> {report.reportContent}</p>
              {report.attachment && (
                <p>
                  <strong>Attachment:</strong> <a href={`path/to/${report.attachment}`} download>{report.attachment}</a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminReports;
