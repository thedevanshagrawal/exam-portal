import React, { useState, useEffect } from 'react';
import './MCQsection.css';


const MCQsection = ({ onAddQuestion, editingQuestion }) => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctOptionIndex, setCorrectOptionIndex] = useState(null);

    useEffect(() => {
        if (editingQuestion) {
            setQuestion(editingQuestion.question);
            setOptions(editingQuestion.options);
            setCorrectOptionIndex(editingQuestion.correctOptionIndex);
        } else {
            setQuestion('');
            setOptions(['', '', '', '']);
            setCorrectOptionIndex(null);
        }
    }, [editingQuestion]);

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddQuestion({ question, options, correctOptionIndex });
        setQuestion('');
        setOptions(['', '', '', '']);
        setCorrectOptionIndex(null);
    };

    return (
        <form onSubmit={handleSubmit} className="question-form">
            <h2>{editingQuestion ? 'Edit' : 'Enter your'} MCQ</h2>
            <div className="form-group">
                <label>Question:</label>
                <input 
                    type="text" 
                    value={question} 
                    onChange={(e) => setQuestion(e.target.value)} 
                    required 
                />
            </div>
            {options.map((option, index) => (
                <div key={index} className="form-group">
                    <label>Option {index + 1}:</label>
                    <input 
                        type="text" 
                        value={option} 
                        onChange={(e) => handleOptionChange(index, e.target.value)} 
                        required 
                    />
                    <input 
                        type="radio" 
                        name="correctOption" 
                        checked={correctOptionIndex === index} 
                        onChange={() => setCorrectOptionIndex(index)} 
                        required 
                    />
                    Correct Answer
                </div>
            ))}
            
            <button type="submit" className="submit-button">Submit</button>
                
            </form>
    );
};

export default MCQsection;
