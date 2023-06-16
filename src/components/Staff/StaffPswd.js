import React, { useState } from "react";
import axios from "axios";
import style from "./style.css";

const StaffPswd = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password and confirm password
    if (password !== cpassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      // Send email and password to the backend API for adding
      await axios.post("http://localhost:5000/api/auth/staff/set-password", {
        email,
        password,
        cpassword,
      });

      // Password added successfully
      alert("Password added successfully");

      // Reset form fields and error message
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("");

      // Close the page (may not work in all scenarios due to browser restrictions)
      window.close();
    } catch (error) {
      // Handle error response
      console.log(error);
      setErrorMessage("Error adding password. Please try again.");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-5 mt-5">
            <div id="spacer">
              <h2 className="text-center">Add Staff Password</h2>
              {errorMessage && <p>{errorMessage}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    name="cpassword"
                    value={cpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Password
                </button>
              </form>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </div>
  );
};

export default StaffPswd;
