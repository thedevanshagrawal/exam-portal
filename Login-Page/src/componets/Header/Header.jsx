import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
    <header className="upperHeader">
      <div className="upperleftNav"> Exam Portal</div>
      
    </header>
    <header className="LoginbottomHeader" >
      <div className="bottomHead">
        <ul>
          <li>
               <a href="/">Home</a>
            </li>
           <li>
               <a href="/Login">Login</a>
            </li>
          {/*
            <li>
              <a href="/SchoolList">School List</a>
            </li>
            <li>
              <a href="/PreviousYearQnA">Previous Year QnA</a>
            </li>
          <li>
            <a href="/Reports">Reports</a>
          </li> */}
         </ul>
      </div>
    </header>
      </>



  );
}



export default Header;
