import React, { useState } from "react";

function DeleteSubject({ subjects, setSubjects }) {
  const [selectedSubject, setSelectedSubject] = useState("");

  const deleteSubject = () => {
    setSubjects(subjects.filter((subject) => subject !== selectedSubject));
  };

  return (
    <div className="QuestionPaper-delete-subject">
      <select
        className="QuestionPaper-select-input-option"
        onChange={(e) => setSelectedSubject(e.target.value)}
      >
        <option className="QuestionPaper-select-input-option" value="">
          Select Subject
        </option>
        {subjects.map((subject) => (
          <option
            className="QuestionPaper-select-input-option"
            key={subject}
            value={subject}
          >
            {subject}
          </option>
        ))}
      </select>
      <button
        className="QuestionPaper-button QuestionPaper-delete-sub-btn"
        onClick={deleteSubject}
      >
        Delete Subject
      </button>
    </div>
  );
}

export default DeleteSubject;
