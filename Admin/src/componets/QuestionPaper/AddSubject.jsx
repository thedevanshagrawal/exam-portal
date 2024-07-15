import React, { useState } from 'react';

function AddSubject({ setSubjects }) {
  const [newSubject, setNewSubject] = useState('');

  const addSubject = () => {
    setSubjects(prev => [...prev, newSubject]);
    setNewSubject('');
  };

  

  return (
    <div className="QuestionPaper-add-subject">
      <input className='QuestionPaper-select-input-option'
        type="text"
        value={newSubject}
        onChange={(e) => setNewSubject(e.target.value)}
        placeholder="New Subject"
      />
      <button className='QuestionPaper-button QuestionPaper-add-sub-btn' onClick={addSubject}>Add Subject</button>
    </div>
  );
}

export default AddSubject;
