import ReportSectionCard from "../ReportSectionCard/ReportSectionCard";
import "./ReportCard.css";

function ReportCard(){
  return(
    
      <div className="ReportMainContainer" >
        <div className="ReportContainer" >
      <ReportSectionCard title="School 1" SchoolId="12345" SchoolAddress="Raigarh" userLinks="/ReportSection" />
      <ReportSectionCard title="School 2" SchoolId="12345" SchoolAddress="Raigarh" userLinks="/ReportSection" />
      <ReportSectionCard title="School 2" SchoolId="12345" SchoolAddress="Raigarh" userLinks="/ReportSection" />
      <ReportSectionCard title="School 1" SchoolId="12345" SchoolAddress="Raigarh" userLinks="/ReportSection" />
      <ReportSectionCard title="School 2" SchoolId="12345" SchoolAddress="Raigarh" userLinks="/ReportSection" />
      <ReportSectionCard title="School 2" SchoolId="12345" SchoolAddress="Raigarh" userLinks="/ReportSection" />
          </div>
        
        <div className="ReportContainer" >
      <ReportSectionCard title="School 1" SchoolId="12345" SchoolAddress="Raigarh" userLinks="/ReportSection" />
      <ReportSectionCard title="School 2" SchoolId="12345" SchoolAddress="Raigarh" userLinks="/ReportSection" />
      <ReportSectionCard title="School 2" SchoolId="12345" SchoolAddress="Raigarh" userLinks="/ReportSection" />
      <ReportSectionCard title="School 1" SchoolId="12345" SchoolAddress="Raigarh" userLinks="/ReportSection" />
      <ReportSectionCard title="School 2" SchoolId="12345" SchoolAddress="Raigarh" userLinks="/ReportSection" />
      <ReportSectionCard title="School 2" SchoolId="12345" SchoolAddress="Raigarh" userLinks="/ReportSection" />
          </div>
        </div>
   
  )
}

export default ReportCard;