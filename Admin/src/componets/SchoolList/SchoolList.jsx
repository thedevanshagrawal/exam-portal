import SchoolListCard from "../StudentlListCard/SchoolListCard";
import "./SchoolList.css";

function SchoolList() {
  return (
    <>
      <div className="SchoolMainConteiner">
   <SchoolListCard title="School Name" cardImagelink="https://img.freepik.com/free-vector/futuristic-science-lab-background_23-2148490234.jpg?semt=ais_user" SchoolId="12345" WebSiteLink="www.12345.com" ContactDetails="school name" userLinks="/SchoolDetails" />
   
   <SchoolListCard title="School Name" cardImagelink="https://img.freepik.com/free-vector/futuristic-science-lab-background_23-2148490234.jpg?semt=ais_user" SchoolId="12345" WebSiteLink="www.12345.com" ContactDetails="school name" userLinks="/SchoolDetails" />
   
   <SchoolListCard title="School Name" cardImagelink="https://img.freepik.com/free-vector/futuristic-science-lab-background_23-2148490234.jpg?semt=ais_user" SchoolId="12345" WebSiteLink="www.12345.com" ContactDetails="school name" userLinks="/SchoolDetails" />
   
      </div>
      </>
  );
}

export default SchoolList;
