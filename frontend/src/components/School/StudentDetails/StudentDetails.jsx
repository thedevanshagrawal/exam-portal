import Header from "../Header/Header";
import "./StudentDetails.css";

function StudentDetails() {
  return (
    <div className="details-container">
      <Header/>
      <h1 className="details-title">Student Enrollment Details</h1>
      <div className="details-content">
        <div className="details-group">
          <span className="details-label">Name:</span>
          <span className="details-data">------</span>
        </div>

        <div className="details-group">
          <span className="details-label">Enroll ID:</span>
          <span className="details-data">------</span>
        </div>

        <div className="details-group">
          <span className="details-label">Gender:</span>
          <span className="details-data">------</span>
        </div>

        <div className="details-group">
          <span className="details-label">Email ID:</span>
          <span className="details-data">------</span>
        </div>

        <div className="details-group">
          <span className="details-label">Contact Info:</span>
          <span className="details-data">------</span>
        </div>

        <div className="details-group">
          <span className="details-label">Address:</span>
          <span className="details-data">------</span>
        </div>

        <div className="details-group">
          <span className="details-label">Aadhar:</span>
          <span className="details-data">------</span>
        </div>

        <div className="details-group">
          <span className="details-label">Class:</span>
          <span className="details-data">------</span>
        </div>

        <div className="details-group">
          <span className="details-label">DOB:</span>
          <span className="details-data">------</span>
        </div>

        <div className="details-group">
          <span className="details-label">Father's Name:</span>
          <span className="details-data">------</span>
        </div>
        <div className="details-group">
          <span className="details-label">Father's contact:</span>
          <span className="details-data">------</span>
        </div>
        <div className="details-group">
          <span className="details-label">Mother's Name:</span>
          <span className="details-data">------</span>
        </div>
        <div className="details-group">
          <span className="details-label">Mother's contact:</span>
          <span className="details-data">------</span>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
