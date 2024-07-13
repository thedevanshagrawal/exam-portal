import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StudentList from './components/StudentList/StudentList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import EnrollStudent from './components/EnrollStudent/EnrollStudent';
import StudentDetails from './components/StudentDetails/StudentDetails';

import StudentReport from './components/StudentReport/StudentReport';
import HomePage from './components/HomePage/HomePage';
import Profile from './components/Profile/Profile';
import ExamScheduler from './components/ExamScheduler/ExamScheduler';


function App() {
  return (
    <div className="fullContainer">
         <Router>
         <Header />
           <Routes>
              <Route path="/" element={<HomePage />} />
               <Route path="/EnrollStudent" element={<EnrollStudent />} />
              <Route path="/StudentList" element={<StudentList />} />
              <Route path="/StudentDetails" element={<StudentDetails />} />
              <Route path="/ScheduleExam" element={<ExamScheduler />} />
              <Route path="/Report" element={<StudentReport />} />
              <Route path="/Profile" element={<Profile />} />
           </Routes>
           </Router>
         <Footer/>
    </div>
  );
}

export default App;
