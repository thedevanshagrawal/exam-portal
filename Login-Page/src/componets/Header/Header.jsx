import React from "react";
import "./Header.css";

function Header() {
  return (
   /* <>
    <header className="ExamPage-upperHeader">
      <div className="ExamPage-upperleftNav"> Exam Portal</div>
      <div className="ExamPage-upperrightNav">
        <ul>
          <li>
               <a href="/">Home</a>
            </li>
           <li>
               <a href="/Login">Login</a>
            </li>
          

         </ul>
      </div>
      
    
      </> */


  <>
    <header className="ExamPage-Headers-navbar">
        <div className="ExamPage-Headers-logo">
             Exam Portal
        </div>
        <ul className="ExamPage-Headers-nav-links">
          <li>
             <a href="/">Home</a>
          </li>
          <li>
             <a href="/Login">Login</a>
          </li>
        </ul>
       
    </header>
  </>



  );
}



export default Header;
