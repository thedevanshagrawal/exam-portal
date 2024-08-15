import "./ReportSectionCard.css";
import { Link } from "react-router-dom";

function ReportSectionCard({ title, userLinks, SchoolId, SchoolAddress }){
  return(
    <div className="ReportSectionCard">
      <div className="ReportSectionCardcontent">
        <Link to={userLinks} className="ReportSectionCardcard-title-link">
          <h2 className="ReportSectionCardtitle-h2">{title}</h2>
        </Link>
        <Link to={userLinks} className="ReportSectionCardcard-title-link">
          <h2 className="ReportSectionCardtitle-h2">{SchoolId}</h2>
        </Link>
        <Link to={userLinks} className="ReportSectionCardcard-title-link">
          <h2 className="ReportSectionCardtitle-h2">{SchoolAddress}</h2>
        </Link>
      </div>
      <div className="ReportSectionCardbutton">
        <Link to={userLinks} className="ReportSectionCardcard-read-more-link">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default ReportSectionCard;