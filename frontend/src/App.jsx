import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CombinedLogin from "./components/Login/CombinedLogin/CombinedLogin";
import Footer from "./components/Login/Footer/Footer";
import Login from "./components/Login/Login/Login";
import AdminCombined from "./components/Admin/AdminCombined/AdminCombined";
import SchoolCombined from "./components/School/SchoolCombined/SchoolCombined";
import StudentCombined from "./components/Student/StudentCombined/StudentCombined";
import { AuthProvider } from "./Authentication/AuthContext";
import ProtectedRoute from "./Authentication/ProtectedRoute";
import Profile from "./components/Student/Profile/Profile";
import QuestionPaper from "./components/Student/QuestionPaper/QuestionPaper";
import StudentReport from "./components/Student/StudentReport/StudentReport";
import Updatepassword from "./components/Student/Updatepassword/Updatepassword";
import AdminProfile from "./components/Admin/Profile/Profile";
import EnrollNewschool from "./components/Admin/EnrollNewschool/EnrollNewschool";
import SchoolList from "./components/Admin/SchoolList/SchoolList";
import SchoolDetails from "./components/Admin/SchoolDetails/SchoolDetails";
import ReportCard from "./components/Admin/ReportCard/ReportCard";
import AdminQuestionPaper from "./components/Admin/QuestionPaper/QuestionPaper";
import HomeContent from "./components/Student/HomeContent/HomeContent";
import Content from "./components/Admin/Content/Content";
import HomePage from "./components/School/HomePage/HomePage";
import EnrollStudent from "./components/School/EnrollStudent/EnrollStudent";
import StudentList from "./components/School/StudentList/StudentList";
import ExamSchedulingPortal from "./components/School/ExamScheduler/ExamScheduler";
import StudentReportLists from "./components/School/StudentReport/StudentReport";
import SchoolProfile from "./components/School/Profile/Profile";
import AdminPasswordUpdate from "./components/Admin/AdminPasswordUpdate/AdminPasswordUpdate";
import SchoolPasswordUpdate from "./components/School/SchoolPasswordUpdate/SchoolPasswordUpdate";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<CombinedLogin />} />
          <Route path="/admin/*" element={<AdminCombined />} />
          <Route path="/school/*" element={<SchoolCombined />} />
          <Route path="/student/*" element={<StudentCombined />} />

          {/* Student Route */}
          <Route
            path="/student/dashboard"
            element={<ProtectedRoute element={<HomeContent />} />}
          />
          <Route
            path="/student/QuestionPaper"
            element={<ProtectedRoute element={<QuestionPaper />} />}
          />
          <Route
            path="/student/Report"
            element={<ProtectedRoute element={<StudentReport />} />}
          />
          <Route
            path="/student/Profile"
            element={<ProtectedRoute element={<Profile />} />}
          />
          <Route
            path="/student/Updatepassword"
            element={<ProtectedRoute element={<Updatepassword />} />}
          />

          {/* Admin Route */}
          <Route
            path="/admin/dashboard"
            element={<ProtectedRoute element={<Content />} />}
          />
          <Route
            path="/admin/EnrollNewschool"
            element={<ProtectedRoute element={<EnrollNewschool />} />}
          />
          <Route
            path="/admin/SchoolList"
            element={<ProtectedRoute element={<SchoolList />} />}
          />
          <Route
            path="/admin/SchoolDetails"
            element={<ProtectedRoute element={<SchoolDetails />} />}
          />
          <Route
            path="/admin/Reports"
            element={<ProtectedRoute element={<ReportCard />} />}
          />
          <Route
            path="/admin/Questionpaper"
            element={<ProtectedRoute element={<AdminQuestionPaper />} />}
          />
          <Route
            path="/admin/AdminProfile"
            element={<ProtectedRoute element={<AdminProfile />} />}
          />
          <Route
            path="/admin/Updatepassword"
            element={<ProtectedRoute element={<AdminPasswordUpdate />} />}
          />

          {/* School Route */}
          <Route
            path="/school/dashboard"
            element={<ProtectedRoute element={<HomePage />} />}
          />
          <Route
            path="/school/EnrollStudent"
            element={<ProtectedRoute element={<EnrollStudent />} />}
          />
          <Route
            path="/school/StudentList"
            element={<ProtectedRoute element={<StudentList />} />}
          />
          <Route
            path="/school/ScheduleExam"
            element={<ProtectedRoute element={<ExamSchedulingPortal />} />}
          />
          <Route
            path="/school/Report"
            element={<ProtectedRoute element={<StudentReportLists />} />}
          />
          <Route
            path="/school/SchoolProfile"
            element={<ProtectedRoute element={<SchoolProfile />} />}
          />
          <Route
            path="/school/Updatepassword"
            element={<ProtectedRoute element={<SchoolPasswordUpdate />} />}
          />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
