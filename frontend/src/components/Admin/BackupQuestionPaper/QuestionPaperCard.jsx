import "./QuestionPaperCard.css";

import React from 'react';

const QuestionPaperCard = ({ questions, onEdit, onDelete }) => {
    return (
        <div className="question-list">
            {questions.map((question, index) => (
                <div key={index} className="question-item">
                    <div className="question-text">{question.question}</div>
                    <button onClick={() => onEdit(index)} className="edit-button">Edit</button>
                    <button onClick={() => onDelete(index)} className="delete-button">Delete</button>
                </div>
            ))}
        </div>
    );
};

export default QuestionPaperCard;