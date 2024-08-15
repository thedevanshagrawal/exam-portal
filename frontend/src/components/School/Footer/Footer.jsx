import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <img src="/logo.jpg" alt="" className="footer-img" />
        <b>Exam Portal</b>

        <p className="Copyright-footer">
          Copyright &#169; 2024 examportal.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
