import { Routes, Route } from "react-router-dom";
import HomeContent from "../HomeContent/HomeContent";

function StudentCombined() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeContent />} />
      </Routes>
    </div>
  );
}

export default StudentCombined;
