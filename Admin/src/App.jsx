// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from './componets/Content/Content';
import EnrollNewschool from './componets/EnrollNewschool/EnrollNewschool';
import SchoolList from './componets/SchoolList/SchoolList';
import Header from './componets/Header/Header';
import Footer from './componets/Footer/Footer';
import SchoolDetails from './componets/SchoolDetails/SchoolDetails';
import ReportCard from './componets/ReportCard/ReportCard';
import QuestionPaper from './componets/QuestionPaper/QuestionPaper';
import Profile from './componets/Profile/Profile';
import AdminReports from './componets/AdminReports/AdminReports';

function App() {
  return (
       <div className="fullContainer">
         <Router>
         <Header />
           <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/EnrollNewschool" element={<EnrollNewschool />} />
              <Route path="/SchoolList" element={<SchoolList />} />
             <Route path="/SchoolDetails" element={<SchoolDetails />} />
             <Route path="/Reports" element={<ReportCard />} />
             <Route path="/Questionpaper" element={< QuestionPaper />} />
             <Route path="/AdminReports" element={<AdminReports />} />
             <Route path="/Profile" element={<Profile />} />
           </Routes>
           </Router>
         <Footer/>
    </div>
  );
}

export default App;
