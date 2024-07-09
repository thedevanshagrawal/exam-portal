// Cards.jsx

import React from "react";
import "./SchoolListCard.css";
import { Link } from "react-router-dom";

function SchoolListCard({
  title,
  userLinks,
  cardImagelink,
  SchoolId,
  WebSiteLink,
  ContactDetails,
}) {
  return (
    <>
      <div className="SchoolListCard">
        <div className="SchoolListCardImage-container">
          <img src={cardImagelink} alt="Laptop" className="SchoolListCard-image" />
        </div>
        <div>
          <div className="SchoolListCardContent">
            <h1 className="SchoolListCardTitle">{title}</h1>
            <p className="SchoolListCardTitle">School Id: {SchoolId}</p>
            <p className="SchoolListCardTitle">{WebSiteLink}</p>
            <p className="SchoolListCardTitle">Contact Details : {ContactDetails}</p>
          </div>

          <div className="SchoolListCardBtn">
            <Link to={userLinks} className="SchoolListCard-read-more-link">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SchoolListCard;
