import React, { useState } from "react";
import "./EnrollStudent.css";
import Header from "../Header/Header";

function EnrollStudent() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [StudentClass, setStudentClass] = useState("");
  const [fathers_name, setFathers_name] = useState("");
  const [dob, setDOB] = useState("");
  const [contact_no, setContact_no] = useState("");
  const [gender, setGender] = useState("");
  const [user_id, setUser_id] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState(null); // Set to null initially for the file
  const [password, setPassword] = useState("12345");
  const [selectDashboard, setSelectDashboard] = useState("student");

  const handleEnrollStudent = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Create a new FormData object
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("StudentClass", StudentClass);
    formData.append("fathers_name", fathers_name);
    formData.append("dob", dob);
    formData.append("gender", gender);
    formData.append("contact_no", contact_no);
    formData.append("user_id", user_id);
    formData.append("address", address);
    formData.append("selectDashboard", selectDashboard);
    if (avatar) {
      formData.append("avatar", avatar); // Append the file to FormData
    }

    const response = await fetch("/users/registerStudent", {
      method: "POST",
      body: formData, // Send FormData, no need for Content-Type header
    });

    if (response.ok) {
      const data = await response.json();
      alert("Student Registered Successfully");
      localStorage.setItem("authToken", data.token);
    } else {
      const errorText = await response.text();
      alert(errorText);
    }
  };

  return (
    <div className="EnrollStudent-FormMainContainer">
      <Header />
      <div className="EnrollStudent-form-container">
        <h1 className="EnrollStudent-form-title">Student Enrollment Form</h1>
        <form
          className="EnrollStudent-enrollment-form"
          encType="multipart/form-data"
          onSubmit={handleEnrollStudent}
        >
          <div className="EnrollStudent-form-group">
            <label htmlFor="name" className="EnrollStudent-form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="EnrollStudent-form-input"
              required
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="EnrollStudent-form-group">
            <label htmlFor="enrollId" className="EnrollStudent-form-label">
              Enroll ID:
            </label>
            <input
              type="text"
              id="enrollId"
              name="enrollId"
              className="EnrollStudent-form-input"
              required
              onChange={(e) => setUser_id(e.target.value)}
            />
          </div>

          <div className="EnrollStudent-form-group">
            <label htmlFor="DOB" className="EnrollStudent-form-label">
              DOB:
            </label>
            <input
              type="date"
              id="DOB"
              name="DOB"
              className="EnrollStudent-form-input"
              required
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>

          <div className="EnrollStudent-form-group">
            <label htmlFor="gender" className="EnrollStudent-form-label">
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              className="EnrollStudent-form-input"
              required
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="EnrollStudent-form-group">
            <label htmlFor="email" className="EnrollStudent-form-label">
              Email ID:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="EnrollStudent-form-input"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="EnrollStudent-form-group">
            <label htmlFor="contact" className="EnrollStudent-form-label">
              Contact Info:
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              className="EnrollStudent-form-input"
              required
              onChange={(e) => setContact_no(e.target.value)}
            />
          </div>

          <div className="EnrollStudent-form-group">
            <label htmlFor="address" className="EnrollStudent-form-label">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="EnrollStudent-form-input"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="EnrollStudent-form-group">
            <label htmlFor="className" className="EnrollStudent-form-label">
              Class:
            </label>
            <input
              type="text"
              id="className"
              name="className"
              className="EnrollStudent-form-input"
              required
              onChange={(e) => setStudentClass(e.target.value)}
            />
          </div>

          <div className="EnrollStudent-form-group">
            <label htmlFor="parentsName" className="EnrollStudent-form-label">
              Father's Name:
            </label>
            <input
              type="text"
              id="parentsName"
              name="parentsName"
              className="EnrollStudent-form-input"
              required
              onChange={(e) => setFathers_name(e.target.value)}
            />
          </div>

          <div className="EnrollStudent-form-group">
            <label htmlFor="avatar" className="EnrollStudent-form-label">
              Upload Photo:
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className="EnrollStudent-form-input"
              onChange={(e) => setAvatar(e.target.files[0])} // Capture the file
            />
          </div>

          <div className="EnrollStudent-form-button-container">
            <button type="submit" className="EnrollStudent-form-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EnrollStudent;
