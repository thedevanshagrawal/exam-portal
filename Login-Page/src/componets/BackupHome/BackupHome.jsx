import "./BackupHome.css";

function BackupHome(){
  return (
     
      <div className="home-container">
          <header className="home-header">
              <h1 className="home-title">Welcome to the Exam Portal</h1>
          </header>
          <main className="home-main">
              <div className="home-dashboard admin-dashboard">
                  <h2 className="dashboard-title">Admin Dashboard</h2>
                  <a href="admin-login.html" className="dashboard-link">Go to Admin Login</a>
              </div>
              <div className="home-dashboard school-dashboard">
                  <h2 className="dashboard-title">School Dashboard</h2>
                  <a href="school-login.html" className="dashboard-link">Go to School Login</a>
              </div>
              <div className="home-dashboard student-dashboard">
                  <h2 className="dashboard-title">Student Dashboard</h2>
                  <a href="student-login.html" className="dashboard-link">Go to Student Login</a>
              </div>
          </main>
          <footer className="home-footer">
              <p className="footer-text">&copy; 2024 Exam Portal. All rights reserved.</p>
          </footer>
      </div>
  )
}

export default BackupHome;