import Header from "../Header/Header";
import SchoolListCard from "../StudentlListCard/SchoolListCard";
import "./SchoolList.css";

function SchoolList() {
  return (
    <>
    <Header/>
      <div className="SchoolMainConteiner">
   <SchoolListCard title="School Name" cardImagelink="https://cdn-icons-png.freepik.com/256/16964/16964365.png?uid=R141820177&ga=GA1.1.982140200.1719828473&semt=ais_hybrid" SchoolId="12345" WebSiteLink="www.12345.com" ContactDetails="school name" userLinks="/SchoolDetails" />
   
   <SchoolListCard title="School Name" cardImagelink="https://cdn-icons-png.freepik.com/256/16964/16964365.png?uid=R141820177&ga=GA1.1.982140200.1719828473&semt=ais_hybrid" SchoolId="12345" WebSiteLink="www.12345.com" ContactDetails="school name" userLinks="/SchoolDetails" />
   
   <SchoolListCard title="School Name" cardImagelink="https://cdn-icons-png.freepik.com/256/16964/16964365.png?uid=R141820177&ga=GA1.1.982140200.1719828473&semt=ais_hybrid" SchoolId="12345" WebSiteLink="www.12345.com" ContactDetails="school name" userLinks="/SchoolDetails" />
   
      </div>
      </>
  );
}

export default SchoolList;
