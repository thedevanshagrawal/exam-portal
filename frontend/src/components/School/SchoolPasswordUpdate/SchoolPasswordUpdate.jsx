import React, { useEffect, useState } from "react";
import "./SchoolPasswordUpdate.css";
import Header from "../Header/Header";

const SchoolPasswordUpdate = () => {
  const [password, setPassword] = useState("");

  const handleUpdatePassword = async (event) => {
    event.preventDefault();

    const response = await fetch("/users/updatePassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      alert("Password is upddated");
      localStorage.setItem("authToken", data.token);
    } else {
      const errorText = await response.text();
      alert(errorText);
    }
  };

  return (
    <div className="UpdatePassword-Full-Main-Container">
      <Header />
      <div className="UpdatePassword-Full-Container">
        <div className="update-password-container">
          <h2>Update Password</h2>
          <form
            className="update-password-form"
            onSubmit={handleUpdatePassword}
          >
            <div className="form-group">
              <label htmlFor="Newpassword" className="form-label">
                New Passowrd:
              </label>
              <input
                type="password"
                id="Newpassword"
                name="Newpassword"
                className="form-input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-button-container">
              <button type="submit" className="form-button">
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SchoolPasswordUpdate;
