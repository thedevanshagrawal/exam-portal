import React, { useEffect, useState } from "react";
import "./AddQuestionPaper.css";
import axios from "axios";

function AddQuestionPaper({ subjects, topics }) {
  const [subjectTopicDatas, setSubjectTopicDatas] = useState([]);
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");
  const [difficulty_level, setDifficulty_level] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAddQuestionPaper = async (event) => {
    event.preventDefault();
    const response = await fetch("/users/createquestionBank", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject,
        question,
        answer,
        option1,
        option2,
        option3,
        option4,
        topic,
        difficulty_level,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      alert("Question added successfully");
      localStorage.setItem("authToken", data.token);
    } else {
      const errorText = await response.text();
      alert(errorText);
    }
  };

  useEffect(() => {
    const viewSubjectAndTopic = async () => {
      try {
        const response = await fetch("/users/viewSubjectAndTopic", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const chapterDatas = await response.json();
          // console.log("profile", chapterDatas);

          setSubjectTopicDatas(chapterDatas.data);
          localStorage.setItem("authToken", chapterDatas.token);
        } else {
          const errorText = await response.text();
          alert(errorText);
        }
      } catch (error) {
        setError("Failed to fetch profile data");
      } finally {
        setLoading(false);
      }
    };

    viewSubjectAndTopic();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("/users/viewSubjectAndTopic")
  //     .then((response) => {
  //       console.log("Response data", response.data); // Check if this is an array
  //       setSubjectTopicDatas(response.data); // Set the data only if it's an array
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  // console.log("subjectTopicDatas: ", subjectTopicDatas);

  if (loading) {
    return <div>Loading...</div>; //Display loading state
  }

  if (error) {
    return <div>Error: {error}</div>; //Display error message
  }

  if (!subjectTopicDatas) {
    return <div>No profile data found</div>; // Handle case with no data
  }

  return (
    <form onSubmit={handleAddQuestionPaper}>
      <div className="question-paper-add-question-paper">
        <select
          className="question-paper-add-question-paper-select"
          onChange={(e) => setSubject(e.target.value)}
        >
          <option className="question-paper-add-question-paper-option" value="">
            Select Subject
          </option>
          {subjectTopicDatas.map((sub) => (
            <option
              className="question-paper-add-question-paper-option"
              key={sub._id}
              value={sub.subject}
            >
              {sub.subject}
            </option>
          ))}
        </select>
        <select
          className="question-paper-add-question-paper-select"
          onChange={(e) => setTopic(e.target.value)}
        >
          <option className="question-paper-add-question-paper-option" value="">
            Select Topic
          </option>
          {subjectTopicDatas.map((top) => (
            <option
              className="question-paper-add-question-paper-option"
              key={top._id}
              value={top.topic}
            >
              {subject ? top.topic : ""}
            </option>
          ))}
        </select>
        <div className="question-paper-question-details">
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
          <input
            className="question-paper-question-details-question-option-answer"
            type="text"
            name="difficulty_level"
            onChange={(e) => setDifficulty_level(e.target.value)}
            placeholder="Difficulty level"
          />
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
        </div>
      </div>
    </form>
  );
}

export default AddQuestionPaper;
