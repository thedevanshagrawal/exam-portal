import React, { useState } from 'react';
import './QuestionPaper.css';

function QuestionPaper() {
  const [formData, setFormData] = useState({
    paperType: '',
    subjectName: '',
    subjectCode: '',
    questionPaper: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="QuestionPaperform-container">
      <h1 className="QuestionPaperform-title">Test Form</h1>
      <form className="QuestionPapertest-form" onSubmit={handleSubmit}>
        <div className="QuestionPaperform-field">
          <label className="QuestionPaperform-label">Paper Type:</label>
          <select 
            className="QuestionPaperpaper-type-select" 
            name="paperType" 
            value={formData.paperType} 
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="basic">Basic</option>
            <option value="intermediate">Intermediate</option>
            <option value="advance">Advance</option>
          </select>
        </div>
        <div className="QuestionPaperform-field">
          <label className="QuestionPaperform-label">Subject Name:</label>
          <input 
            type="text" 
            className="QuestionPapersubject-name-input" 
            name="subjectName" 
            value={formData.subjectName} 
            onChange={handleChange} 
          />
        </div>
        <div className="QuestionPaperform-field">
          <label className="QuestionPaperform-label">Subject Code:</label>
          <input 
            type="text" 
            className="QuestionPapersubject-code-input" 
            name="subjectCode" 
            value={formData.subjectCode} 
            onChange={handleChange} 
          />
        </div>
        <div className="QuestionPaperform-field">
          <label className="QuestionPaperform-label">Upload Question Paper:</label>
          <input 
            type="file" 
            className="QuestionPaperquestion-paper-upload" 
            name="questionPaper" 
            onChange={handleChange} 
          />
        </div>
        <button type="submit" className="QuestionPapersubmit-button">Submit</button>
      </form>
    </div>
  );
}

export default QuestionPaper;
