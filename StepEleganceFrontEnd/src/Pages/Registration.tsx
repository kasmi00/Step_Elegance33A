import "./Registration.css";
import axios from "axios";
import React, { useState } from "react";
// import myImage from '../assets/images/registrationbg.png';

function Registration() {
  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    dateOfBirth: string;
    gender: string;
    phone: string;
  }

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    try {
      // Assuming you have a running server at http://localhost:8087
      const response = await axios.post(
        "http://localhost:8087/user/save",
        formData
      );

      // Handle the response as needed
      console.log("Registration successful:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Registration failed:", error);
    }
  };

  return (
    <>
      <div className="registrationbg">
        <div className="mainbox">
          <div className="header">
            <h2>REGISTRATION PAGE</h2>
          </div>
          <div className="below">
            <form className="regform" onSubmit={handleSubmit}>
              {/* <img src={myImage} alt='shoe bg' /> */}
              <div className="fecd">
                <div className="fname">
                  <label>First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder=" FIRST NAME "
                    required
                  />
                </div>
                <div className="email">
                  <label>Email:</label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" EMAIL "
                    required
                  />
                </div>
                <div className="confirmpassword">
                  <label>Confirm Password:</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    placeholder=" PASSWORD "
                    required
                  />
                </div>
                <div className="date">
                  <label>Date Of Birth:</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="lpg">
                <div className="lname">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder=" LAST NAME"
                    required
                  />
                </div>
                <div className="password">
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder=" CONFIRM PASSWORD "
                    required
                  />
                </div>
                <div className="phonenumber">
                  <label>Phone Number:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=" PHONE NUMBER "
                    required
                  />
                </div>
                <div className="gender">
                  <label>Gender:</label>
                  <select name="gender" value={formData.gender} required>
                    <option value="">--- Select---</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="cs">
              <div className="confirmbttn">
                <button>Confirm</button>
              </div>
              <div className="signin">
                <label>Already have an account? </label>
                <a href="/login">
                  <button className="Signin"> Sign-In </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
