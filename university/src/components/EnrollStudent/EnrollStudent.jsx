import React, { useState } from "react";
import "./EnrollStudent.css";

function EnrollStudent() {
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="EnrollStudent-FormMainContainer">
      <div className="EnrollStudent-form-container">
        <h1 className="EnrollStudent-form-title">Student Enrollment Form</h1>
        <form className="EnrollStudent-enrollment-form">
          {/* Existing form fields */}
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
            />
          </div>

          <div className="EnrollStudent-form-group">
            <label htmlFor="gender" className="EnrollStudent-form-label">
              Gender:
            </label>
            <select id="gender" name="gender" className="EnrollStudent-form-input" required>
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
            />
          </div>

          <div className="EnrollStudent-form-group">
            <label htmlFor="className" EnrollStudent-className="EnrollStudent-form-label">
              Class:
            </label>
            <input
              type="text"
              id="className"
EnrollStudent-              name="className"
EnrollStudent-              className="EnrollStudent-form-input"
              required
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
            />
          </div>

          <div className="EnrollStudent-form-group">
            <label htmlFor="parentsName" className="EnrollStudent-form-label">
              Mother's Name:
            </label>
            <input
              type="text"
              id="parentsName"
              name="parentsName"
              className="EnrollStudent-form-input"
              required
            />
          </div>

         

          <div className="EnrollStudent-form-group">
            <label htmlFor="profilePhoto" className="EnrollStudent-form-label">
              Upload Photo:
            </label>
            <input
              type="file"
              id="profilePhoto"
              name="profilePhoto"
              className="EnrollStudent-form-input"
              accept="image/*"
              onChange={handlePhotoUpload}
            />
            {profilePhoto && (
              <div className="EnrollStudent-photo-preview">
                <img src={profilePhoto} alt="Profile Preview" className="EnrollStudent-photo-preview-img" />
              </div>
            )}
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
