import React from "react";
import {Link} from "react-router-dom"
import "./Profile.css";

const Profile = () => {
  // Static profile data
  const staticProfile = {
    name: "John Doe",
    enrollId: "12345",
    DOB: "2005-08-15",
    gender: "Male",
    email: "johndoe@example.com",
    contact: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    className: "10th Grade",
    parentsName: "Jane Doe",
    parentContact: "098-765-4321",
    profilePhoto: "https://images.pexels.com/photos/17238245/pexels-photo-17238245/free-photo-of-man-posing-in-shirt-on-grassland.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // Replace with your static photo URL
  };

  return (
    <div className="Profile-Full-Container">
      <div className="profile-container">
        <h2>Profile</h2>
        <form className="profile-form">
          <div className="ProfileMainContainer">
            <div className="profile-FormContainer">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={staticProfile.name}
                  readOnly
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
                  value={staticProfile.enrollId}
                  readOnly
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
                  value={staticProfile.DOB}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender" className="form-label">
                  Gender:
                </label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  className="form-input"
                  value={staticProfile.gender}
                  readOnly
                />
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
                  value={staticProfile.email}
                  readOnly
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
                  value={staticProfile.contact}
                  readOnly
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
                  value={staticProfile.address}
                  readOnly
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
                  value={staticProfile.className}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label htmlFor="parentsName" className="form-label">
                  Father/Mother/Guardian Name:
                </label>
                <input
                  type="text"
                  id="parentsName"
                  name="parentsName"
                  className="form-input"
                  value={staticProfile.parentsName}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label htmlFor="parentContact" className="form-label">
                  Father/Mother/Guardian Contact:
                </label>
                <input
                  type="tel"
                  id="parentContact"
                  name="parentContact"
                  className="form-input"
                  value={staticProfile.parentContact}
                  readOnly
                />
              </div>

              <div className="forgot-logout-btn-container" >
                <div className="forgot-password-container">

                  <Link to="/Updatepassword" className="forgot-password-btn" >Forgot Password</Link>
                </div>
                
              </div>
            </div>
            <div className="form-group profile-photo-container">
              <label htmlFor="profilePhoto" className="form-label">
               
              </label>
              <div className="photo-preview">
                <img
                  src={staticProfile.profilePhoto}
                  alt="Profile"
                  className="photo-preview-img"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
