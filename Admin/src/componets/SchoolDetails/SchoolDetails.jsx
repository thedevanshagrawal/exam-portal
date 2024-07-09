import "./SchoolDetails.css";

function SchoolDetails(){
  return (
    <div className="details-container">
      <h1 className="details-title">Student Enrollment Details</h1>
      <div className="details-content">
        <div className="details-group">
          <span className="details-label">Name:</span>
          <span className="details-data">John Doe</span>
        </div>

        <div className="details-group">
          <span className="details-label">Enroll ID:</span>
          <span className="details-data">123456</span>
        </div>

        <div className="details-group">
          <span className="details-label">Gender:</span>
          <span className="details-data">Male</span>
        </div>

        <div className="details-group">
          <span className="details-label">Email ID:</span>
          <span className="details-data">johndoe@example.com</span>
        </div>

        <div className="details-group">
          <span className="details-label">Contact Info:</span>
          <span className="details-data">+1234567890</span>
        </div>

        <div className="details-group">
          <span className="details-label">Address:</span>
          <span className="details-data">123 Main St, Springfield, USA</span>
        </div>

        <div className="details-group">
          <span className="details-label">Aadhar:</span>
          <span className="details-data">1234 5678 9012</span>
        </div>

        <div className="details-group">
          <span className="details-label">Class:</span>
          <span className="details-data">10th Grade</span>
        </div>

        <div className="details-group">
          <span className="details-label">Age:</span>
          <span className="details-data">15</span>
        </div>

        <div className="details-group">
          <span className="details-label">Parents Info:</span>
          <span className="details-data">Jane Doe & John Doe Sr.</span>
        </div>
      </div>
    </div>

  )
}

export default SchoolDetails;