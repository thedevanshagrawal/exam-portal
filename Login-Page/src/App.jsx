import "./App.css";
import Footer from './componets/Footer/Footer';
import Header from './componets/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componets/Login/Login";
import Registration from "./componets/Registration/Registration";
import HomePage from "./componets/HomePage/HomePage";
import Updatepassword from "./componets/Updatepassword/Updatepassword";

export default function App() {
  return (
    <div className="fullContainer">
         <Router>
         <Header />
           <Routes>
             
              <Route path="/" element={<HomePage />} />     
              <Route path="/Login" element={<Login />} />     
             <Route path="/Registration" element={<Registration />} /> 
             <Route path="/Forgotpassword" element={<Updatepassword />} /> 
            
           </Routes>
           </Router>
         <Footer/>
    </div>
  )
}
