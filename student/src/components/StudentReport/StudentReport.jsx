import React from "react";
import "./StudentReport.css";

function StudentReport() {
  return (
 
      <div className="StudentReportDashboard">
      <div className="StudentDashboard">
        <div className="current-semester">
          <h2>Current Semester</h2>
          <table>
            <tr>
              <th>Subject Name</th>
              <th>Marks obtained if attended, if not then show N/A</th>
            </tr>
            <tr>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td>---</td>
              <td>---</td>
            </tr>
          </table>
        </div>
      </div>
      </div>
    
  );
}

export default StudentReport;

