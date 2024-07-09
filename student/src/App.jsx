import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentReport from "./components/StudentReport/StudentReport";
import QuestionPaper from "./components/QuestionPaper/QuestionPaper";
import Profile from "./components/Profile/Profile";




export default function App() {
  return (
    <div className="fullContainer">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/QuestionPaper" element={<QuestionPaper />} />
          <Route path="/Report" element={<StudentReport />} />
          <Route path="/Profile" element={<Profile/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
