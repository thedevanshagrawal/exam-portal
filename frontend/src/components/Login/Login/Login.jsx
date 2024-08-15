import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectDashboard, setSelectDashboard] = useState("admin");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const response = await fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, selectDashboard }),
    });

    if (response.ok) {
      const data = await response.json();
      const { selectDashboard } = data;

      // Store the token and selectDashboard in localStorage
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("selectDashboard", data.selectDashboard);

      // Redirect based on user role
      switch (selectDashboard) {
        case "admin":
          navigate("/admin");
          break;
        case "school":
          navigate("/school ");
          break;
        case "student":
          navigate("/student");
          break;
        default:
          alert("No dashboard available");
          break;
      }
    } else {
      const errorText = await response.text();
      alert(errorText);
    }
  };

  return (
    <div className="Login-Main-Container">
      <div className="Logincontainer">
        <div className="Loginform-container">
          <h2 className="Loginform-title">Exam Portal Login</h2>
          <form id="login-form" onSubmit={handleLogin}>
            <label htmlFor="username" className="Loginform-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="Loginform-input"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="Loginform-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="Loginform-input"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="dashboard" className="Loginform-label">
              Select Dashboard
            </label>
            <select
              id="dashboard"
              name="dashboard"
              className="Loginform-input"
              required
              onChange={(e) => setSelectDashboard(e.target.value)}
              value={selectDashboard}
            >
              <option value="admin">admin</option>
              <option value="school">school</option>
              <option value="student">student</option>
            </select>

            <Link to="/Forgotpassword" className="Registerbtn">
              <div className="Loginform-button LoginBtn">Forgot Password</div>
            </Link>

            <button type="submit" className="Loginform-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
