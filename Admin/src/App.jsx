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
import ReportSection from './componets/ReportSection/ReportSection';
import ReportCard from './componets/ReportCard/ReportCard';
import QuestionPaper from './componets/QuestionPaper/QuestionPaper';

function App() {
  return (
       <div className="fullContainer">
         <Router>
         <Header />
           <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/EnrollNewschool" element={<EnrollNewschool />} />
              <Route path="/SchoolList" element={<SchoolList />} />
             <Route path="//SchoolDetails" element={<SchoolDetails />} />
             <Route path="/Reports" element={<ReportCard />} />
             <Route path="/Questionpaper" element={< QuestionPaper />} />
             <Route path="//ReportSection" element={<ReportSection />} />
           </Routes>
           </Router>
         <Footer/>
    </div>
  );
}

export default App;
