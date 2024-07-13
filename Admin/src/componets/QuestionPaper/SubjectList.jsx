import React from 'react';

function SubjectList({ subjects, topics }) {
  return (
    <div className="QuestionPaper-subject-list">
      {subjects.map(subject => (
        <div key={subject} className="QuestionPaper-subject">
          {subject}
          <div className="QuestionPaper-topic-list">
            {(topics[subject] || []).map(topic => (
              <div key={topic} className="QuestionPaper-topic">
                {topic}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubjectList;
