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
         
         </ul>
      </div>
    </header>
      </>



  );
}



export default Header;
