import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Header from "../Header/Header";
import Login from "../Login/Login";

function CombinedLogin() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default CombinedLogin;
