import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
    <header className="upperHeader">
      <div className="upperleftNav">Admin Portal</div>
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
               <a href="/EnrollNewschool">Enroll School </a>
            </li>
            <li>
              <a href="/SchoolList">School List</a>
            </li>
            <li>
              <a href="/Questionpaper">Question paper's</a>
            </li>
          <li>
            <a href="/Reports">Reports</a>
          </li>
         </ul>
      </div>
    </header>
      </>



  );
}



export default Header;
