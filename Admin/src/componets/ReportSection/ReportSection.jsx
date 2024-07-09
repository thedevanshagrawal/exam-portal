{/*
import "./ReportSection.css";

function ReportSection(){
  return(
   <div class="enhanced-dashboard-wrapper">
        <header class="enhanced-dashboard-header">
            <h1>Multi-Schools Dashboard</h1>
            <div class="enhanced-dashboard-date">July 5, 2024</div>
        </header>
        <nav class="enhanced-dashboard-nav">
            <ul>
                <li><a href="#school1">School 1</a></li>
                <li><a href="#school2">School 2</a></li>
                <li><a href="#school3">School 3</a></li>
            </ul>
        </nav>
        <main class="enhanced-dashboard-main">
            <section id="school1" class="enhanced-dashboard-section">
                <h2>School 1 Dashboard</h2>
                <div class="enhanced-dashboard-report">
                    <h3>Attendance Overview</h3>
                    <div class="enhanced-dashboard-chart">Attendance Chart for School 1</div>
                    <div class="enhanced-dashboard-details">Detailed attendance data for School 1...</div>
                </div>
                <div class="enhanced-dashboard-report">
                    <h3>Academic Performance</h3>
                    <div class="enhanced-dashboard-chart">Grade Distribution Chart for School 1</div>
                    <div class="enhanced-dashboard-details">Detailed academic performance data for School 1...</div>
                </div>
                <div class="enhanced-dashboard-report">
                    <h3>Behavior Reports</h3>
                    <div class="enhanced-dashboard-chart">Behavioral Incidents Chart for School 1</div>
                    <div class="enhanced-dashboard-details">Detailed behavior report data for School 1...</div>
                </div>
                <div class="enhanced-dashboard-report">
                    <h3>Assessment Results</h3>
                    <div class="enhanced-dashboard-chart">Test Scores Chart for School 1</div>
                    <div class="enhanced-dashboard-details">Detailed assessment data for School 1...</div>
                </div>
                <div class="enhanced-dashboard-report">
                    <h3>Custom Reports</h3>
                    <div class="enhanced-dashboard-details">Custom report data for School 1...</div>
                </div>
            </section>
            <section id="school2" class="enhanced-dashboard-section">
                <h2>School 2 Dashboard</h2>
                <div class="enhanced-dashboard-report">
                    <h3>Attendance Overview</h3>
                    <div class="enhanced-dashboard-chart">Attendance Chart for School 2</div>
                    <div class="enhanced-dashboard-details">Detailed attendance data for School 2...</div>
                </div>
                <div class="enhanced-dashboard-report">
                    <h3>Academic Performance</h3>
                    <div class="enhanced-dashboard-chart">Grade Distribution Chart for School 2</div>
                    <div class="enhanced-dashboard-details">Detailed academic performance data for School 2...</div>
                </div>
                <div class="enhanced-dashboard-report">
                    <h3>Behavior Reports</h3>
                    <div class="enhanced-dashboard-chart">Behavioral Incidents Chart for School 2</div>
                    <div class="enhanced-dashboard-details">Detailed behavior report data for School 2...</div>
                </div>
                <div class="enhanced-dashboard-report">
                    <h3>Assessment Results</h3>
                    <div class="enhanced-dashboard-chart">Test Scores Chart for School 2</div>
                    <div class="enhanced-dashboard-details">Detailed assessment data for School 2...</div>
                </div>
                <div class="enhanced-dashboard-report">
                    <h3>Custom Reports</h3>
                    <div class="enhanced-dashboard-details">Custom report data for School 2...</div>
                </div>
            </section>
            <section id="school3" class="enhanced-dashboard-section">
                <h2>School 3 Dashboard</h2>
                <div class="enhanced-dashboard-report">
                    <h3>Attendance Overview</h3>
                    <div class="enhanced-dashboard-chart">Attendance Chart for School 3</div>
                    <div class="enhanced-dashboard-details">Detailed attendance data for School 3...</div>
                </div>
                <div class="enhanced-dashboard-report">
                    <h3>Academic Performance</h3>
                    <div class="enhanced-dashboard-chart">Grade Distribution Chart for School 3</div>
                    <div class="enhanced-dashboard-details">Detailed academic performance data for School 3...</div>
                </div>
                <div class="enhanced-dashboard-report">
                    <h3>Behavior Reports</h3>
                    <div class="enhanced-dashboard-chart">Behavioral Incidents Chart for School 3</div>
                    <div class="enhanced-dashboard-details">Detailed behavior report data for School 3...</div>
                </div>
                <div class="enhanced-dashboard-report">
                    <h3>Assessment Results</h3>
                    <div class="enhanced-dashboard-chart">Test Scores Chart for School 3</div>
                    <div class="enhanced-dashboard-details">Detailed assessment data for School 3...</div>
                </div>
                <div class="enhanced-dashboard-report">
                    <h3>Custom Reports</h3>
                    <div class="enhanced-dashboard-details">Custom report data for School 3...</div>
                </div>
            </section>
        </main>
        <aside class="enhanced-dashboard-sidebar">
            <div class="enhanced-dashboard-alerts">Alerts and Notifications</div>
            <div class="enhanced-dashboard-upcoming-events">Upcoming Events</div>
        </aside>
    </div>


    



  )
}

export default ReportSection;
*/}


import React, { useState, useEffect } from "react";
import "./ReportSection.css"; // Assume your CSS file

const ReportSection = () => {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        // Simulated fetch function to get data from a backend API
        const fetchSchoolData = async () => {
            try {
                // Assuming endpoint returns data for multiple schools
                const response = await fetch("/api/schools");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setSchools(data); // Update state with fetched data
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle error states if necessary
            }
        };

        fetchSchoolData(); // Call the fetch function
    }, []);

    return (
        <div className="enhanced-dashboard-wrapper">
            <header className="enhanced-dashboard-header">
                <h1>Multi-Schools Dashboard</h1>
                <div className="enhanced-dashboard-date">July 5, 2024</div>
            </header>
            <nav className="enhanced-dashboard-nav">
                <ul>
                    {schools.map((school) => (
                        <li key={school.id}>
                            <a href={`#${school.id}`}>{school.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <main className="enhanced-dashboard-main">
                {schools.map((school) => (
                    <section id={school.id} key={school.id} className="enhanced-dashboard-section">
                        <h2>{school.name} Dashboard</h2>
                        {school.reports.map((report) => (
                            <div key={report.id} className="enhanced-dashboard-report">
                                <h3>{report.title}</h3>
                                <div className="enhanced-dashboard-chart">Chart Placeholder for {report.title}</div>
                                <div className="enhanced-dashboard-details">{report.details}</div>
                            </div>
                        ))}
                    </section>
                ))}
            </main>
            <aside className="enhanced-dashboard-sidebar">
                <div className="enhanced-dashboard-alerts">Alerts and Notifications</div>
                <div className="enhanced-dashboard-upcoming-events">Upcoming Events</div>
            </aside>
        </div>
    );
};

export default ReportSection;
