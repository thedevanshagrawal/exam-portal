import React, { useState } from 'react';

function AddTopic({ subjects, topics, setTopics }) {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [newTopic, setNewTopic] = useState('');

  const addTopic = () => {
    setTopics(prev => ({
      ...prev,
      [selectedSubject]: [...(prev[selectedSubject] || []), newTopic]
    }));
    setNewTopic('');
  };

  return (
    <div className="QuestionPaper-add-topic">
      <select className='QuestionPaper-select-input-option' onChange={(e) => setSelectedSubject(e.target.value)}>
        <option className='QuestionPaper-select-input-option' value="">Select Subject</option>
        {subjects.map(subject => (
          <option key={subject} value={subject}>{subject}</option>
        ))}
      </select>
      <input className='QuestionPaper-select-input-option'
        type="text"
        value={newTopic}
        onChange={(e) => setNewTopic(e.target.value)}
        placeholder="New Topic"
      />
      <button className='QuestionPaper-button QuestionPaper-add-sub-btn' onClick={addTopic}>Add Topic</button>
    </div>
  );
}

export default AddTopic;
