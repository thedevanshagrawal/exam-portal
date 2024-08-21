import React, { useState } from "react";
import "./AddQuestionPaper.css";

function AddSubject() {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");

  const createSubjectAndTopic = async (event) => {
    event.preventDefault();

    const response = await fetch("/users/createnewsubjectandtopic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject,
        topic,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      alert("Subject and Topic added successfully");
      localStorage.setItem("authToken", data.token);
    }
  };

  return (
    <div className="QuestionPaper-add-subject">
      <form onSubmit={createSubjectAndTopic}>
        <div className="addSubjectSection">
          <label htmlFor="subject"></label>
          <input
            className="QuestionPaper-select-input-option"
            type="text"
            id="subject"
            name="subject"
            onChange={(e) => setSubject(e.target.value)}
            placeholder="New Subject"
            required
          />
        </div>

        <div className="addSubjectSection">
          <label htmlFor="topic"></label>
          <input
            className="QuestionPaper-select-input-option"
            type="text"
            id="topic"
            name="topic"
            onChange={(e) => setTopic(e.target.value)}
            placeholder="New Topic"
            required
          />
        </div>
        <button
          className="QuestionPaper-button QuestionPaper-add-sub-btn"
          type="submit"
        >
          Add Subject
        </button>
      </form>
    </div>
  );
}

export default AddSubject;
