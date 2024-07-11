import React, { useState } from 'react';
import MCQsection from './MCQsection';
import QuestionPaperCard from './QuestionPaperCard';
import './QuestionPaper.css';

const QuestionPaper = () => {
    const [questions, setQuestions] = useState([]);
    const [editingQuestion, setEditingQuestion] = useState(null);

    const handleAddQuestion = (question) => {
        if (editingQuestion !== null) {
            const updatedQuestions = questions.map((q, index) =>
                index === editingQuestion ? question : q
            );
            setQuestions(updatedQuestions);
        } else {
            setQuestions([...questions, question]);
        }
        setEditingQuestion(null);
    };

    const handleEditQuestion = (index) => {
        setEditingQuestion(index);
    };

    const handleDeleteQuestion = (index) => {
        const updatedQuestions = questions.filter((_, i) => i !== index);
        setQuestions(updatedQuestions);
    };

    return (
        <div className="app-container">
            <div className="question-form-container">
                <MCQsection
                    onAddQuestion={handleAddQuestion}
                    editingQuestion={editingQuestion !== null ? questions[editingQuestion] : null}
                />
            </div>
            
        <div className="question-list-container">
            <div className='create-btn-div'>
            <button onClick={() => setEditingQuestion(null)} className="create-question-button">
                Create Question
            </button>
            </div>
            <QuestionPaperCard
                questions={questions}
                onEdit={handleEditQuestion}
                onDelete={handleDeleteQuestion}
            />
        
        </div>
            </div>

    );
};

export default QuestionPaper;
