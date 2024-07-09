import React, { useState } from "react";
import "./ScheduleExam.css";

const ScheduleExam = () => {
    const [subjects, setSubjects] = useState([]);
    const [formData, setFormData] = useState({
        time: "",
        date: "",

        className: "",
        subjectName: "",
        subjectCode: "",
        ChapterName: "",
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            const updatedSubjects = subjects.map((subject, index) =>
                index === editIndex ? formData : subject,
            );
            setSubjects(updatedSubjects);
            setIsEditing(false);
            setEditIndex(null);
        } else {
            setSubjects([...subjects, formData]);
        }
        setFormData({
            time: "",
            date: "",

            className: "",
            subjectName: "",
            subjectCode: "",
            ChapterName: "",
        });
    };

    const handleEdit = (index) => {
        setFormData(subjects[index]);
        setIsEditing(true);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedSubjects = subjects.filter((_, i) => i !== index);
        setSubjects(updatedSubjects);
    };

    return (
        <div className="schedule-exam-wrapper">
            <h1 className="schedule-exam-title">Class Information</h1>
            <form onSubmit={handleSubmit} className="schedule-exam-form">
                <div className="schedule-exam-form">
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="schedule-exam-form-input"
                        required
                    />
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="schedule-exam-form-input"
                        required
                    />

                    <input
                        type="Number"
                        name="className"
                        value={formData.className}
                        onChange={handleChange}
                        className="schedule-exam-form-input"
                        placeholder="Class"
                        required
                    />

                    <select
                        type="text"
                        name="subjectName"
                        value={formData.subjectName}
                        onChange={handleChange}
                        className="schedule-exam-form-input"
                        placeholder="Subject Name"
                        required
                    >
                        <option value="">Select Subject </option>
                        <option value="physics">Physics</option>
                        <option value="english">English</option>
                        <option value="maths">Maths</option>
                        <option value="hindi">Hindi</option>
                        <option value="chemmistry">Chemistry</option>
                        <option value="biology">Biology</option>
                        <option value="sanskrit">Sanskrit</option>
                        <option value="geography">Geography</option>
                        <option value="history">History</option>
                        <option value="civics">Civics</option>
                        <option value="economics">Economics</option>
                        <option value="accounting">Accounting</option>
                        <option value="finance">Finance</option>
                        <option value="management">Management</option>
                        <option value="marketing">Marketing</option>
                        <option value="banking and financial service">
                            Banking and Financial Service
                        </option>
                        <option value="e-commerce">E-commerce</option>
                    </select>

                    <select
                        type="text"
                        name="subjectCode"
                        value={formData.subjectCode}
                        onChange={handleChange}
                        className="schedule-exam-form-input"
                        placeholder="subject Code"
                        required
                    >
                        <option value="">Select Subject Code</option>
                        <option value="Phy101">Phy101</option>
                        <option value="Eng101">Eng101</option>
                        <option value="Math101">Math101</option>
                        <option value="Hindi101">Hindi101</option>
                        <option value="Chem101">Chem101</option>
                        <option value="Bio101">Bio101</option>
                        <option value="Sanskrit101">Sanskrit101</option>
                        <option value="Geography101">Geography101</option>
                        <option value="History101">History101</option>
                        <option value="Civics101">Civics101</option>
                        <option value="Economics101">Economics101</option>
                        <option value="Accounting101">Accounting101</option>
                        <option value="Finance101">Finance101</option>
                        <option value="Management101">Management101</option>
                        <option value="Marketing101">Marketing101</option>
                        <option value="BFS101">
                            BFS101
                        </option>
                        <option value="e-commerce">E-commerce101</option>
                    </select>

                    <input
                        type="text"
                        name="ChapterName"
                        value={formData.ChapterName}
                        onChange={handleChange}
                        className="schedule-exam-form-input"
                        placeholder="Chapter Name"
                        required
                    />

                    <div className="schedule-exam-button-wrapper">
                        <button type="submit" className="schedule-exam-button">
                            {isEditing ? "Update Subject" : "Add Subject"}
                        </button>
                    </div>
                </div>
            </form>
            {subjects.map((subject, index) => (
                <div key={index} className="schedule-exam-details">
                    <div>
                        <span className="schedule-exam-label">Time:</span>
                        {subject.time}
                    </div>
                    <div>
                        <span className="schedule-exam-label">Date:</span>
                        {subject.date}
                    </div>

                    <div>
                        <span className="schedule-exam-label">Class:</span>
                        {subject.className}
                    </div>
                    <div>
                        <span className="schedule-exam-label">
                            Subject Name:
                        </span>
                        {subject.subjectName}
                    </div>
                    <div>
                        <span className="schedule-exam-label">
                            Subject Code:
                        </span>
                        {subject.subjectCode}
                    </div>
                    <div>
                        <span className="schedule-exam-label">
                            Chapter Name:
                        </span>
                        {subject.ChapterName}
                    </div>

                    <div className="schedule-exam-button-container">
                        <button
                            className="schedule-exam-edit-button"
                            onClick={() => handleEdit(index)}
                        >
                            Edit
                        </button>
                        <button
                            className="schedule-exam-delete-button"
                            onClick={() => handleDelete(index)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ScheduleExam;
