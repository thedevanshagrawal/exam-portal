import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
    <header className="upperHeader">
      <div className="upperleftNav">Student's Dasboard</div>
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
            <a href="/QuestionPaper">Question Paper</a>
          </li>
          <li>
            <a href="/Report">Report</a>
          </li>
          <li>
            <a href="/Profile">Profile</a>
          </li>
         </ul>
      </div>
    </header>
      </>



  );
}



export default Header;
