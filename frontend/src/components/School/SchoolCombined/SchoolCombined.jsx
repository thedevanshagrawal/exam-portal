import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

function SchoolCombined() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default SchoolCombined;
