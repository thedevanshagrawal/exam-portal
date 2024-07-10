import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentReport from "./components/StudentReport/StudentReport";
import QuestionPaper from "./components/QuestionPaper/QuestionPaper";
import Profile from "./components/Profile/Profile";
import HomeContent from "./components/HomeContent/HomeContent";
import Updatepassword from "./components/Updatepassword/Updatepassword";




export default function App() {
  return (
    <div className="fullContainer">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/QuestionPaper" element={<QuestionPaper />} />
          <Route path="/Report" element={<StudentReport />} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Updatepassword" element={<Updatepassword/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
