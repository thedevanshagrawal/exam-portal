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
    <div className="FormMainContainer">
      <div className="form-container">
        <h1 className="form-title">Student Enrollment Form</h1>
        <form className="enrollment-form">
          {/* Existing form fields */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="enrollId" className="form-label">
              Enroll ID:
            </label>
            <input
              type="text"
              id="enrollId"
              name="enrollId"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="DOB" className="form-label">
              DOB:
            </label>
            <input
              type="date"
              id="DOB"
              name="DOB"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender" className="form-label">
              Gender:
            </label>
            <select id="gender" name="gender" className="form-input" required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email ID:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact" className="form-label">
              Contact Info:
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" className="form-label">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="className" className="form-label">
              Class:
            </label>
            <input
              type="text"
              id="className"
              name="className"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="parentsName" className="form-label">
              Father's Name:
            </label>
            <input
              type="text"
              id="parentsName"
              name="parentsName"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="parentsName" className="form-label">
              Mother's Name:
            </label>
            <input
              type="text"
              id="parentsName"
              name="parentsName"
              className="form-input"
              required
            />
          </div>

         

          <div className="form-group">
            <label htmlFor="profilePhoto" className="form-label">
              Upload Photo:
            </label>
            <input
              type="file"
              id="profilePhoto"
              name="profilePhoto"
              className="form-input"
              accept="image/*"
              onChange={handlePhotoUpload}
            />
            {profilePhoto && (
              <div className="photo-preview">
                <img src={profilePhoto} alt="Profile Preview" className="photo-preview-img" />
              </div>
            )}
          </div>

          <div className="form-button-container">
            <button type="submit" className="form-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EnrollStudent;
