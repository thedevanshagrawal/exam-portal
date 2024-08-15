import React, { useState } from "react";
import "./QuestionPaper.css";
import Header from "../Header/Header";

const subjects = [
  {
    name: "Math 101",
    time: "9:00 AM",
    code: "M101",
    samplePaper: "sample-math101.pdf",
  },
  {
    name: "Science 101",
    time: "10:30 AM",
    code: "S101",
    samplePaper: "sample-science101.pdf",
  },

  {
    name: "Math 201",
    time: "9:00 AM",
    code: "M201",
    samplePaper: "sample-math201.pdf",
  },
  {
    name: "Science 201",
    time: "10:30 AM",
    code: "S201",
    samplePaper: "sample-science201.pdf",
  },

  {
    name: "Math 301",
    time: "9:00 AM",
    code: "M301",
    samplePaper: "sample-math301.pdf",
  },
  {
    name: "Science 301",
    time: "10:30 AM",
    code: "S301",
    samplePaper: "sample-science301.pdf",
  },
];

function QuestionPaper() {
  const [level, setLevel] = useState("beginner");
  const [selectedSubject, setSelectedSubject] = useState(null);

  const openModal = (subject) => {
    setSelectedSubject(subject);
  };

  const closeModal = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="Exam-Main-Container">
      <Header />
      <div className="exam-container">
        <div className="subject-list">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="subject-card"
              onClick={() => openModal(subject)}
            >
              <h2 className="subject-name">{subject.name}</h2>
              <p className="subject-time">Time: {subject.time}</p>
              <p className="subject-code">Code: {subject.code}</p>
            </div>
          ))}
        </div>
        {selectedSubject && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2>{selectedSubject.name}</h2>
              <p>Time: {selectedSubject.time}</p>
              <p>Code: {selectedSubject.code}</p>

              <button className="start-exam-button">Start Exam</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionPaper;
