import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Content from './components/Content/Content';
import StudentList from './components/StudentList/StudentList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import EnrollStudent from './components/EnrollStudent/EnrollStudent';
import StudentDetails from './components/StudentDetails/StudentDetails';
import ScheduleExam from './components/ScheduleExam/ScheduleExam';

import StudentReport from './components/StudentReport/StudentReport';


function App() {
  return (
    <div className="fullContainer">
         <Router>
         <Header />
           <Routes>
              <Route path="/" element={<Content />} />
               <Route path="/EnrollStudent" element={<EnrollStudent />} />
              <Route path="/StudentList" element={<StudentList />} />
              <Route path="//StudentDetails" element={<StudentDetails />} />
              <Route path="//ScheduleExam" element={<ScheduleExam />} />
              <Route path="/Report" element={<StudentReport />} />
           </Routes>
           </Router>
         <Footer/>
    </div>
  );
}

export default App;
