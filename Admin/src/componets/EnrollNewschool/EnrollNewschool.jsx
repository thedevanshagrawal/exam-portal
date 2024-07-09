                import "./EnrollNewschool.css";
                function EnrollNewschool() {
                  return (
                     <div className="FormMainContainer">
                    <div className="form-container">
                      <h1 className="form-title">School Details Form</h1>
                      <form className="university-form">
                        <div className="form-group">
                          <label for="universityName" className="form-label">School Name:</label>
                          <input type="text" id="universityName" name="universityName" className="form-input" required/>
                        </div>

                        <div className="form-group">
                          <label for="email" className="form-label">Email:</label>
                          <input type="email" id="email" name="email" className="form-input" required/>
                        </div>

                        <div className="form-group">
                          <label for="contactDetails" className="form-label">Contact Details:</label>
                          <input type="tel" id="contactDetails" name="contactDetails" className="form-input" required/>
                        </div>

                        <div className="form-group">
                          <label for="uniId" className="form-label">School's Registration ID:</label>
                          <input type="text" id="uniId" name="uniId" className="form-input" required/>
                        </div>

                        <div className="form-group">
                          <label for="address" className="form-label">Address:</label>
                          <input type="text" id="address" name="address" className="form-input" required/>
                        </div>

                        <h2 className="form-subtitle">Principal's Details</h2>

                        <div className="form-group">
                          <label for="vcName" className="form-label">Principal's  Name:</label>
                          <input type="text" id="vcName" name="vcName" className="form-input" required/>
                        </div>

                        <div className="form-group">
                          <label for="vcContact" className="form-label">Principal's Contact:</label>
                          <input type="tel" id="vcContact" name="vcContact" className="form-input" required/>
                        </div>

                        <div className="form-group">
                          <label for="vcEmail" className="form-label">Principal's Email:</label>
                          <input type="email" id="vcEmail" name="vcEmail" className="form-input" required/>
                        </div>

                        <div className="form-button-container">
                          <button type="submit" className="form-button">Submit</button>
                        </div>
                      </form>
                    </div>
                    </div>
                  );
                }

                export default EnrollNewschool;
