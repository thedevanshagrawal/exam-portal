import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
    <header className="upperHeader">
      <div className="upperleftNav">School Portal</div>
      <div className="upperrightNav">
        School Name
      </div>
    </header>
    <header className="bottomHeader" >
      <div className="bottomHead">
        <ul>

          <li>
               <a href="/">Home </a>
            </li>
          
          
          <li>
               <a href="/EnrollStudent">Enroll Student</a>
            </li>
            <li>
              <a href="/StudentList">Student List</a>
            </li>
            <li>
              <a href="/ScheduleExam">Schedule Exam</a>
            </li>
            
            <li>
              <a href="/Report">Report</a>
            </li>
         </ul>
      </div>
    </header>
      </>

    
    
  );
}


export default Header;
