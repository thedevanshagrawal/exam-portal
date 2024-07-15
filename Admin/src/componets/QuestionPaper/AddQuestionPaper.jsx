// import React, { useState } from 'react';

// function AddQuestionPaper({ subjects, topics }) {
//   const [selectedSubject, setSelectedSubject] = useState('');
//   const [selectedTopic, setSelectedTopic] = useState('');
//   const [questionDetails, setQuestionDetails] = useState({
//     type: 'beginner',
//     question: '',
//     options: ['', '', '', ''],
//     answer: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setQuestionDetails(prev => ({ ...prev, [name]: value }));
//   };

//   const handleOptionChange = (index, value) => {
//     const newOptions = [...questionDetails.options];
//     newOptions[index] = value;
//     setQuestionDetails(prev => ({ ...prev, options: newOptions }));
//   };

//   const submitQuestion = () => {
//     // Implement the logic to submit the question details
//   };

//   return (
//     <div className="QuestionPaper-add-question-paper">
//       <select className="QuestionPaper-add-question-paper-select" onChange={(e) => setSelectedSubject(e.target.value)}>
//         <option className="QuestionPaper-add-question-paper-option" value="">Select Subject</option>
//         {subjects.map(subject => (
//           <option className="QuestionPaper-add-question-paper-option" key={subject} value={subject}>{subject}</option>
//         ))}
//       </select>
//       <select className="QuestionPaper-add-question-paper-select" onChange={(e) => setSelectedTopic(e.target.value)}>
//         <option className="QuestionPaper-add-question-paper-option"  value="">Select Topic</option>
//         {(topics[selectedSubject] || []).map(topic => (
//           <option className="QuestionPaper-add-question-paper-option" key={topic} value={topic}>{topic}</option>
//         ))}
//       </select>
//       <div className="QuestionPaper-question-details">
//         <input
//           classname="QuestionPaper-question-details-QuestionOptionAnswer"
//           type="text"
//           name="question"
//           value={questionDetails.question}
//           onChange={handleInputChange}
//           placeholder="Question"
//         />
//         {questionDetails.options.map((option, index) => (
//           <input
//             classname="QuestionPaper-question-details-QuestionOptionAnswer"
//             key={index}
//             type="text"
//             value={option}
//             onChange={(e) => handleOptionChange(index, e.target.value)}
//             placeholder={`Option ${index + 1}`}
//           />
//         ))}
//         <input
//           classname="QuestionPaper-question-details-QuestionOptionAnswer"
//           type="text"
//           name="answer"
//           value={questionDetails.answer}
//           onChange={handleInputChange}
//           placeholder="Answer"
//         />
//         <div className="QuestionPaper-question-type">
//           <label>
//             <input
//               type="radio"
//               name="type"
//               value="beginner"
//               checked={questionDetails.type === 'beginner'}
//               onChange={handleInputChange}
//             />
//             Beginner
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="type"
//               value="intermediate"
//               checked={questionDetails.type === 'intermediate'}
//               onChange={handleInputChange}
//             />
//             Intermediate
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="type"
//               value="advance"
//               checked={questionDetails.type === 'advance'}
//               onChange={handleInputChange}
//             />
//             Advance
//           </label>
//         </div>
//       </div>
//       <button className='QuestionPaper-button QuestionPaper-submit-btn' onClick={submitQuestion}>Submit</button>
//     </div>
//   );
// }

// export default AddQuestionPaper;





import React, { useState } from 'react';
import './AddQuestionPaper.css';

function AddQuestionPaper({ subjects, topics })
  {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [questionDetails, setQuestionDetails] = useState({
    type: 'beginner',
    question: '',
    options: ['', '', '', ''],
    answer: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestionDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...questionDetails.options];
    newOptions[index] = value;
    setQuestionDetails(prev => ({ ...prev, options: newOptions }));
  };

  const submitQuestion = () => {
    // Implement the logic to submit the question details
  };

  const viewQuestions = () => {
    // Implement the logic to view the questions
  };

  return (
    <div className="question-paper-add-question-paper">
      <select className="question-paper-add-question-paper-select" onChange={(e) => setSelectedSubject(e.target.value)}>
        <option className="question-paper-add-question-paper-option" value="">Select Subject</option>
        {subjects.map(subject => (
          <option className="question-paper-add-question-paper-option" key={subject} value={subject}>{subject}</option>
        ))}
      </select>
      <select className="question-paper-add-question-paper-select" onChange={(e) => setSelectedTopic(e.target.value)}>
        <option className="question-paper-add-question-paper-option" value="">Select Topic</option>
        {(topics[selectedSubject] || []).map(topic => (
          <option className="question-paper-add-question-paper-option" key={topic} value={topic}>{topic}</option>
        ))}
      </select>
      <div className="question-paper-question-details">
        <input
          className="question-paper-question-details-question-option-answer"
          type="text"
          name="question"
          value={questionDetails.question}
          onChange={handleInputChange}
          placeholder="Question"
        />
        {questionDetails.options.map((option, index) => (
          <input
            className="question-paper-question-details-question-option-answer"
            key={index}
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            placeholder={`Option ${index + 1}`}
          />
        ))}
        <input
          className="question-paper-question-details-question-option-answer"
          type="text"
          name="answer"
          value={questionDetails.answer}
          onChange={handleInputChange}
          placeholder="Answer"
        />
        <div className="question-paper-question-type">
          <label>
            <input
              type="radio"
              name="type"
              value="beginner"
              checked={questionDetails.type === 'beginner'}
              onChange={handleInputChange}
            />
            Beginner
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="intermediate"
              checked={questionDetails.type === 'intermediate'}
              onChange={handleInputChange}
            />
            Intermediate
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="advance"
              checked={questionDetails.type === 'advance'}
              onChange={handleInputChange}
            />
            Advance
          </label>
        </div>
      </div>
      <div className="question-paper-buttons">
        <button className="question-paper-button question-paper-submit-btn" onClick={submitQuestion}>Submit</button>
        <button className="question-paper-button question-paper-view-btn" onClick={viewQuestions}>View</button>
      </div>
    </div>
  );
}

export default AddQuestionPaper;
