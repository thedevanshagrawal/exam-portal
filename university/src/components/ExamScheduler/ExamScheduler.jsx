import React, { useState } from 'react';
import  "./ExamScheduler.css"

function ExamSchedulingPortal() {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState("");
  const [levels, setLevels] = useState({ beginner: "", intermediate: "", advance: "" });
  const [examDate, setExamDate] = useState('');
  const [examTime, setExamTime] = useState('');

  const classes = ['Class 1', 'Class 2', 'Class 3'];
  const subjects = ['Math', 'Science', 'English'];
  const topics = [
    { subject: 'Math', topics: ['Algebra', 'Geometry', 'Calculus'] },
    { subject: 'Science', topics: ['Biology', 'Chemistry', 'Physics'] },
    { subject: 'English', topics: ['Grammar', 'Literature', 'Composition'] },
  ];

  const handleLevelChange = (level, value) => {
    const updatedLevels = { ...levels, [level]: value };
    const totalLevelQuestions = Object.values(updatedLevels).reduce((a, b) => a + b, 0);
    if (totalLevelQuestions <= totalQuestions) {
      setLevels(updatedLevels);
    }
  }

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
    <div>
      <h1>Exam Scheduling Portal</h1>
      <form>
        <label>Class:</label>
        <select value={selectedClass} onChange={handleClassChange}>
          {classes.map((classOption) => (
            <option key={classOption} value={classOption}>
              {classOption}
            </option>
          ))}
        </select>

        <label>Subject:</label>
        <select value={selectedSubject} onChange={handleSubjectChange}>
          {subjects.map((subjectOption) => (
            <option key={subjectOption} value={subjectOption}>
              {subjectOption}
            </option>
          ))}
        </select>

        <label>Topics:</label>
        {topics
          .filter((topic) => topic.subject === selectedSubject)
          .map((topic) => (
            <div key={topic.topics[0]}>
              <input
                type="checkbox"
                value={topic.topics[0]}
                checked={selectedTopics.includes(topic.topics[0])}
                onChange={handleTopicChange}
              />
              <span>{topic.topics[0]}</span>
            </div>
          ))}

        <div className="form-group">
          <label>Total Number of Questions:</label>
          <input
            type="number"
            value={totalQuestions}
            onChange={(e) => setTotalQuestions(Number(e.target.value))}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Difficulty Levels:</label>
          <div className="difficulty-group">
            <label>Beginner:</label>
            <input
              type="number"
              value={levels.beginner}
              onChange={(e) => handleLevelChange('beginner', Number(e.target.value))}
              className="form-control"
            />
          </div>
          <div className="difficulty-group">
            <label>Intermediate:</label>
            <input
              type="number"
              value={levels.intermediate}
              onChange={(e) => handleLevelChange('intermediate', Number(e.target.value))}
              className="form-control"
            />
          </div>
          <div className="difficulty-group">
            <label>Advance:</label>
            <input
              type="number"
              value={levels.advance}
              onChange={(e) => handleLevelChange('advance', Number(e.target.value))}
              className="form-control"
            />
          </div>
        </div>

        <label>Exam Date:</label>
        <input
          type="date"
          value={examDate}
          onChange={handleExamDateChange}
        />

        <label>Exam Time:</label>
        <input
          type="time"
          value={examTime}
          onChange={handleExamTimeChange}
        />

        <button type="submit">Schedule Exam</button>
      </form>
    </div>
  );
}

export default ExamSchedulingPortal;