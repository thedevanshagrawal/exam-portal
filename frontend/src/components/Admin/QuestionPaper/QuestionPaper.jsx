import React, { useState } from 'react';
import './QuestionPaper.css';
import AddSubject from './AddSubject';
import DeleteSubject from './DeleteSubject';
import AddTopic from './AddTopic';
import DeleteTopic from './DeleteTopic';
import AddQuestionPaper from './AddQuestionPaper';
import SubjectList from './SubjectList';
import Header from '../Header/Header';

function AdminQuestionPaper() {
  const [subjects, setSubjects] = useState([]);
  const [topics, setTopics] = useState({});

  return (
    <div className="QuestionPaper-container">
      <Header/>
      <div className="QuestionPaper-subject-section">
        <h2>Subjects</h2>
        <SubjectList subjects={subjects} topics={topics} />
        <div className="QuestionPaper-actions">
          <AddSubject setSubjects={setSubjects} />
           <AddTopic subjects={subjects} topics={topics} setTopics={setTopics} />
          <DeleteSubject subjects={subjects} setSubjects={setSubjects} />
          <DeleteTopic subjects={subjects} topics={topics} setTopics={setTopics} />
        </div>
      </div>
      <div className="QuestionPaper-question-paper-section">
        <h2>Add Question Paper</h2>
        <AddQuestionPaper subjects={subjects} topics={topics} />
      </div>
    </div>
  );
}

export default AdminQuestionPaper;
