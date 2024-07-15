import React, { useState } from 'react';

function DeleteTopic({ subjects, topics, setTopics }) {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  const deleteTopic = () => {
    setTopics(prev => ({
      ...prev,
      [selectedSubject]: prev[selectedSubject].filter(topic => topic !== selectedTopic)
    }));
    setSelectedTopic('');
  };

  return (
    <div className="QuestionPaper-delete-topic">
      <select className="QuestionPaper-select-input-option" onChange={(e) => setSelectedSubject(e.target.value)}>
        <option className="QuestionPaper-select-input-option" value="">Select Subject</option>
        {subjects.map(subject => (
          <option key={subject} value={subject}>{subject}</option>
        ))}
      </select>
      <select className="QuestionPaper-select-input-option" onChange={(e) => setSelectedTopic(e.target.value)}>
        <option className="QuestionPaper-select-input-option" value="">Select Topic</option>
        {(topics[selectedSubject] || []).map(topic => (
          <option key={topic} value={topic}>{topic}</option>
        ))}
      </select>
      <button className="QuestionPaper-button QuestionPaper-delete-topic-btn" onClick={deleteTopic}>Delete Topic</button>
    </div>
  );
}

export default DeleteTopic;
