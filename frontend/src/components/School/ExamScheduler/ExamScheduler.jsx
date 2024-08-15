import React, { useState } from "react";
import "./ExamScheduler.css";
import Header from "../Header/Header";

function ExamSchedulingPortal() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState("");
  const [levels, setLevels] = useState({
    beginner: "",
    intermediate: "",
    advance: "",
  });
  const [examDate, setExamDate] = useState("");
  const [examTime, setExamTime] = useState("");

  const classes = ["Class 1", "Class 2", "Class 3"];
  const subjects = ["Math", "Science", "English"];
  const topics = [
    { subject: "Math", topics: ["Algebra", "Geometry", "Calculus"] },
    { subject: "Science", topics: ["Biology", "Chemistry", "Physics"] },
    { subject: "English", topics: ["Grammar", "Literature", "Composition"] },
  ];

  const handleLevelChange = (level, value) => {
    const updatedLevels = { ...levels, [level]: value };
    const totalLevelQuestions = Object.values(updatedLevels).reduce(
      (a, b) => a + b,
      0
    );
    if (totalLevelQuestions <= totalQuestions) {
      setLevels(updatedLevels);
    }
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleTopicChange = (event) => {
    const topic = event.target.value;
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleExamDateChange = (event) => {
    setExamDate(event.target.value);
  };

  const handleExamTimeChange = (event) => {
    setExamTime(event.target.value);
  };

  return (
    <div className="ExamScheduling-form-Main-Container">
      <Header />
      <h1 className="ExamScheduling-form-h1">Exam Scheduling Portal</h1>
      <form className="ExamScheduling-form">
        <label className="">Class:</label>
        <select
          className="ExamScheduling-form-select"
          value={selectedClass}
          onChange={handleClassChange}
        >
          {classes.map((classOption) => (
            <option key={classOption} value={classOption}>
              {classOption}
            </option>
          ))}
        </select>

        <label className="">Subject:</label>
        <select
          className="ExamScheduling-form-select"
          value={selectedSubject}
          onChange={handleSubjectChange}
        >
          {subjects.map((subjectOption) => (
            <option key={subjectOption} value={subjectOption}>
              {subjectOption}
            </option>
          ))}
        </select>

        <label className="">Topics:</label>
        {topics
          .filter((topic) => topic.subject === selectedSubject)
          .map((topic) => (
            <div key={topic.topics[0]}>
              <input
                className="ExamScheduling-form-input"
                type="checkbox"
                value={topic.topics[0]}
                checked={selectedTopics.includes(topic.topics[0])}
                onChange={handleTopicChange}
              />
              <span>{topic.topics[0]}</span>
            </div>
          ))}

        <div className="ExamScheduling-form-group">
          <label className="">Total Number of Questions:</label>
          <input
            className="ExamScheduling-form-control ExamScheduling-form-input"
            type="number"
            value={totalQuestions}
            onChange={(e) => setTotalQuestions(Number(e.target.value))}
          />
        </div>
        <div className="ExamScheduling-form-group">
          <label className="">Difficulty Levels:</label>
          <div className="ExamScheduling-difficulty-group">
            <label className="">Beginner:</label>
            <input
              className="ExamScheduling-form-control ExamScheduling-form-input"
              type="number"
              value={levels.beginner}
              onChange={(e) =>
                handleLevelChange("beginner", Number(e.target.value))
              }
            />
          </div>
          <div className="ExamScheduling-difficulty-group">
            <label className="">Intermediate:</label>
            <input
              className="ExamScheduling-form-control ExamScheduling-form-input"
              type="number"
              value={levels.intermediate}
              onChange={(e) =>
                handleLevelChange("intermediate", Number(e.target.value))
              }
            />
          </div>
          <div className="ExamScheduling-difficulty-group">
            <label className="">Advance:</label>
            <input
              className="ExamScheduling-form-control ExamScheduling-form-input"
              type="number"
              value={levels.advance}
              onChange={(e) =>
                handleLevelChange("advance", Number(e.target.value))
              }
            />
          </div>
        </div>

        <label className="">Exam Date:</label>
        <input
          className="ExamScheduling-form-input"
          type="date"
          value={examDate}
          onChange={handleExamDateChange}
        />

        <label className="ExamScheduling-form-label">Exam Time:</label>
        <input
          className="ExamScheduling-form-input"
          type="time"
          value={examTime}
          onChange={handleExamTimeChange}
        />

        <button className="ExamScheduling-form-btn" type="submit">
          Schedule Exam
        </button>
      </form>
    </div>
  );
}

export default ExamSchedulingPortal;
