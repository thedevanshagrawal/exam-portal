import React, { useState, useEffect } from "react";
import "./ExamScheduler.css";
import Header from "../Header/Header";

function ExamSchedulingPortal() {
  const [selectedClass, setSelectedClass] = useState("");
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [totalQuestions, setTotalQuestions] = useState("");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [difficulty_level, setDifficulty_level] = useState("easy");
  const [examDate, setExamDate] = useState("");
  const [examTime, setExamTime] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (subject) {
      fetchTopic(subject);
    } else {
      setTopic([]);
    }
  }, [subject]);

  const fetchTopic = async (subject) => {
    try {
      const response = await fetch("/users/viewSubjectAndTopic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subject: subject }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.status === 404) {
        setError(data.message);
        setTopic([]);
      } else {
        // Assuming data.data is an array of objects with _id and topic fields
        setTopic(
          data.data.map((topic) => ({ _id: topic._id, topic: topic.topic }))
        );
        setError(null);
      }
    } catch (error) {
      console.error("Error fetching topic:", error.message);
      setError("Error fetching data");
      setTopic([]);
    }
  };

  const createQuestionBank = async () => {
    const response = await fetch("/users/createquestionBank", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: subject,
        question: question,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
      }),
    });
  };

  const handleSubjectChange = (event) => {
    const selectedSubject = event.target.value;
    setSubject(selectedSubject);
    setSelectedTopic(""); // Reset the topic selection when subject changes
  };

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value); // Set the selected topic's _id
  };

  const handleExamDateChange = (event) => {
    setExamDate(event.target.value);
  };

  const handleExamTimeChange = (event) => {
    setExamTime(event.target.value);
  };

  const handleExamScheduling = async (event) => {
    event.preventDefault();

    const selectedTopicData = topic.find((t) => t._id === selectedTopic);

    const response = await fetch("/users/scheduleQuestionPaper", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // studentClass,
        subject,
        createQuestionBank,
        topic: selectedTopicData ? selectedTopicData.topic : "",
        difficulty_level,
        totalQuestions,
        examDate,
        examTime,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      alert("Question paper created successfully");
      localStorage.setItem("authToken", data.token);
    }
  };

  return (
    <div className="ExamScheduling-form-Main-Container">
      <Header />
      <h1 className="ExamScheduling-form-h1">Exam Scheduling Portal</h1>
      <form className="ExamScheduling-form" onSubmit={handleExamScheduling}>
        {/* <label className="">Class:</label>
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
        </select> */}

        <div className="question-paper-add-question-paper">
          <label>Select Subject:</label>
          <select
            className="addquestionpaper"
            value={subject}
            onChange={handleSubjectChange}
          >
            <option value="">Select a subject</option>
            <option value="maths">Maths</option>
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
            {/* Add more subjects as needed */}
          </select>
        </div>

        <div className="question-paper-add-question-paper">
          <label>Select Topic:</label>
          <select
            className="addquestionpaper"
            value={selectedTopic}
            onChange={handleTopicChange}
            disabled={!subject || topic.length === 0}
          >
            <option value="">Select a topic</option>
            {topic.map((topic) => (
              <option key={topic._id} value={topic._id}>
                {topic.topic}
              </option>
            ))}
          </select>
        </div>

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
              type="text"
              value={difficulty_level}
              onChange={(e) => setDifficulty_level(e.target.value)}
            />
          </div>
          {/* <div className="ExamScheduling-difficulty-group">
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
          </div> */}
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
