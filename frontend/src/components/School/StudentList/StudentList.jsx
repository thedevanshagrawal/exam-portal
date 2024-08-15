import Header from "../Header/Header";
import StudentlListCard from "../StudentlListCard/StudentlListCard";
import "./StudentList.css";
function StudentList() {
  return (
    <>
    <Header/>
      <div className="StudentMainConteiner">
        <div className="StudentSectionContainer">
          <StudentlListCard
            title="Student Name"
            cardImagelink="https://cdn-icons-png.freepik.com/256/10263/10263076.png?uid=R141820177&ga=GA1.1.982140200.1719828473&semt=ais_hybrid"
            SchoolId="12345"
            WebSiteLink="www.12345.com"
            ClassDetails="BCA"
            userLinks="/StudentDetails"
          />
          <StudentlListCard
            title="Student Name"
            cardImagelink="https://cdn-icons-png.freepik.com/256/10263/10263076.png?uid=R141820177&ga=GA1.1.982140200.1719828473&semt=ais_hybrid"
            SchoolId="12345"
            WebSiteLink="www.12345.com"
            ClassDetails="BCA"
            userLinks="/StudentDetails"
          />
          <StudentlListCard
            title="Student Name"
            cardImagelink="https://cdn-icons-png.freepik.com/256/10263/10263076.png?uid=R141820177&ga=GA1.1.982140200.1719828473&semt=ais_hybrid"
            SchoolId="12345"
            WebSiteLink="www.12345.com"
            ClassDetails="BCA"
            userLinks="/StudentDetails"
          />
        </div>

        <div className="StudentSectionContainer">
          <StudentlListCard
            title="Student Name"
            cardImagelink="https://cdn-icons-png.freepik.com/256/10263/10263076.png?uid=R141820177&ga=GA1.1.982140200.1719828473&semt=ais_hybrid"
            SchoolId="12345"
            WebSiteLink="www.12345.com"
            ClassDetails="BCA"
            userLinks="/StudentDetails"
          />
          <StudentlListCard
            title="Student Name"
            cardImagelink="https://cdn-icons-png.freepik.com/256/10263/10263076.png?uid=R141820177&ga=GA1.1.982140200.1719828473&semt=ais_hybrid"
            SchoolId="12345"
            WebSiteLink="www.12345.com"
            ClassDetails="BCA"
            userLinks="/StudentDetails"
          />
          <StudentlListCard
            title="Student Name"
            cardImagelink="https://cdn-icons-png.freepik.com/256/10263/10263076.png?uid=R141820177&ga=GA1.1.982140200.1719828473&semt=ais_hybrid"
            SchoolId="12345"
            WebSiteLink="www.12345.com"
            ClassDetails="BCA"
            userLinks="/StudentDetails"
          />
        </div>
      </div>
    </>
  );
}

export default StudentList;
