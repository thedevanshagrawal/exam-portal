import Header from "../Header/Header";
import "./SchoolDetails.css";

function SchoolDetails() {
  return (
    <>
      <Header />
      <div className="details-container">
        <h1 className="details-title">School Details</h1>
        <div className="details-content">
          <div className="details-group">
            <span className="details-label">Name:</span>
            <span className="details-data">-------</span>
          </div>

          <div className="details-group">
            <span className="details-label">Registation ID:</span>
            <span className="details-data">-----</span>
          </div>

          <div className="details-group">
            <span className="details-label">Email ID:</span>
            <span className="details-data">-----</span>
          </div>

          <div className="details-group">
            <span className="details-label">Contact Info:</span>
            <span className="details-data">-------</span>
          </div>

          <div className="details-group">
            <span className="details-label">Address:</span>
            <span className="details-data">-----------</span>
          </div>

          <div className="details-group">
            <span className="details-label">Principal's Name:</span>
            <span className="details-data">------</span>
          </div>

          <div className="details-group">
            <span className="details-label">Principal's Contact no.:</span>
            <span className="details-data">------</span>
          </div>

          <div className="details-group">
            <span className="details-label">Principal's Email Id:</span>
            <span className="details-data">------</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SchoolDetails;
