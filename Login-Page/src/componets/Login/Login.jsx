import "./Login.css";

function Login(){
  return(
    <div className="Logincontainer">
        <div className="Loginform-container">
            <h2 className="Loginform-title">Exam Portal Login</h2>
            <form id="login-form">
                <label htmlFor="username" className="Loginform-label">Username</label>
                <input type="text" id="username" name="username" className="Loginform-input" required/>

                <label htmlFor="password" className="Loginform-label">Password</label>
                <input type="password" id="password" name="password" className="Loginform-input" required/>

                <label htmlFor="dashboard" className="Loginform-label">Select Dashboard</label>
                <select id="dashboard" name="dashboard" className="Loginform-input" required>
                    <option value="admin">Admin</option>
                    <option value="school">School</option>
                    <option value="student">Student</option>
                </select>

                <button type="submit" className="Loginform-button">Login</button>
            </form>
        </div>
    </div>

  )
}

export default Login;