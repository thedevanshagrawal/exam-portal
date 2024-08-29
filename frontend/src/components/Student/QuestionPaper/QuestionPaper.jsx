import React, { useState, useEffect } from "react";
import "./QuestionPaper.css";

const QuestionPaper = () => {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
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
      const response = await fetch("/users/getQuestionPaper", {
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

  const handleSubjectChange = (event) => {
    const selectedSubject = event.target.value;
    setSubject(selectedSubject);
    setSelectedTopic(""); // Reset the topic selection when subject changes
  };

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value); // Set the selected topic's _id
  };

  return (
    <div>
      <form>
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

        <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={subject.questionsData}
                  readOnly
                />

        {/* <div className="question-paper-add-question-paper">
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

        <div className="question-paper-question-details">
          <input
            className="question-paper-question-details-question-option-answer"
            type="text"
            name="studentclass"
            onChange={(e) => setStudentClass(e.target.value)}
            placeholder="class"
          />

          <input
            className="question-paper-question-details-question-option-answer"
            type="text"
            name="question"
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Question"
          />

          <input
            className="question-paper-question-details-question-option-answer"
            type="text"
            name="option1"
            onChange={(e) => setOption1(e.target.value)}
            placeholder="option 1"
          />
          <input
            className="question-paper-question-details-question-option-answer"
            type="text"
            name="option2"
            onChange={(e) => setOption2(e.target.value)}
            placeholder="option 2"
          />
          <input
            className="question-paper-question-details-question-option-answer"
            type="text"
            name="option3"
            onChange={(e) => setOption3(e.target.value)}
            placeholder="option 3"
          />
          <input
            className="question-paper-question-details-question-option-answer"
            type="text"
            name="option4"
            onChange={(e) => setOption4(e.target.value)}
            placeholder="option 4"
          />

          <input
            className="question-paper-question-details-question-option-answer"
            type="text"
            name="answer"
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Answer"
          />
          <select
            className="addquestionpaper"
            onChange={(e) => setDifficulty_level(e.target.value)}
            value={difficulty_level}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        <div className="question-paper-buttons">
          <button
            type="submit"
            className="question-paper-button question-paper-submit-btn"
          >
            Submit
          </button>
          <button className="question-paper-button question-paper-view-btn">
            View
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default QuestionPaper;
