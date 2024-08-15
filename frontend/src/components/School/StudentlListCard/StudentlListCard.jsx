// Cards.jsx

import React from "react";
import "./StudentlListCard.css";
import { Link } from "react-router-dom";

function StudentlListCard({
  title,
  userLinks,
  cardImagelink,
  SchoolId,
  ClassDetails,
}) {
  return (
    <>
      <div className="StudentlListCard">
        <div className="StudentlListCardImage-container">
          <img src={cardImagelink} alt="Laptop" className="card-image" />
        </div>
        <div>
          <div className="StudentlListCardContent">
            <h1 className="StudentlListCardTitle">{title}</h1>
            <p className="StudentlListCardTitle">Enroll Id: {SchoolId}</p>
            <p className="StudentlListCardTitle">Class : {ClassDetails}</p>
          </div>

          <div className="StudentlListCardButton">
            <Link to={userLinks} className="StudentlListCard-read-more-link">
              Read More
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default StudentlListCard;
