import React, { useState } from "react";
import "./QuestionPaper.css";
import AddQuestionPaper from "./AddQuestionPaper";
import SubjectList from "./SubjectList";
import Header from "../Header/Header";
import AddSubject from "./AddSubject";

function AdminQuestionPaper() {
  const [subjects, setSubjects] = useState([]);
  const [topic, setTopic] = useState({});

  return (
    <div className="QuestionPaper-container">
      <Header />
      <div className="QuestionPaper-subject-section">
        <h2>Subjects</h2>
        <SubjectList subjects={subjects} topic={topic} />
        <div className="QuestionPaper-actions">
          <AddSubject setSubjects={setSubjects} />
        </div>
      </div>
      <div className="QuestionPaper-question-paper-section">
        <h2>Add Question Paper</h2>
        <AddQuestionPaper subjects={subjects} topic={topic} />
      </div>
    </div>
  );
}

export default AdminQuestionPaper;
