import { Routes, Route } from "react-router-dom";
import Content from "../Content/Content";

function AdminCombined() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </div>
  );
}

export default AdminCombined;
