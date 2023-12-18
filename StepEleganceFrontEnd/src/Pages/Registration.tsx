import "./Registration.css";
import axios from "axios";
import React, { useState } from "react";
// import myImage from '../assets/images/registrationbg.png';


interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  gender: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    gender: '',
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
      const response = await axios.post('http://localhost:8087/user/save', formData);

      // Handle the response as needed
      console.log('Registration successful:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Registration failed:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="text"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
        // onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};




function Registration() {


  return (
    <>
      <div className='registrationbg'>
        <div className='mainbox'>
          <div className="header">
            <h2>REGISTRATION PAGE</h2>
          </div>
          <div className="below">
            <form className="regform">
              {/* <img src={myImage} alt='shoe bg' /> */}
              <div className='fecd'>
                <div className='fname'>
                  <label>First Name:</label>
                  <input type='text' placeholder=' FIRST NAME ' required />
                </div>
                <div className='email'>
                  <label>Email:</label>
                  <input type='text' placeholder=' EMAIL ' required />
                </div>
                <div className='confirmpassword'>
                  <label>Confirm Password:</label>
                  <input type='password' placeholder=' PASSWORD ' required />
                </div>
                <div className='date'>
                  <label>Date Of Birth:</label>
                  <input type='date' required />
                </div>
              </div>
              <div className='lpg'>
                <div className='lname'>
                  <label>Last Name:</label>
                  <input type='text' placeholder=' LAST NAME' required />
                </div>
                <div className='password'>
                  <label>Password:</label>
                  <input type='password' placeholder=' CONFIRM PASSWORD ' required />
                </div>
                <div className='phonenumber'>
                  <label>Phone Number:</label>
                  <input type='pnumber' placeholder=' PHONE NUMBER ' required />
                </div>
                <div className='gender'>
                  <label>Gender:</label>
                  <select>
                    <option value="">--- Select---</option>
                    <option value="option1">Male</option>
                    <option value="option2">Female</option>
                  </select>
                </div>
              </div>
            </form>
            <div className='cs'>
              <div className='confirmbttn'>
                <button>Confirm</button>
              </div>
              <div className='signin'>
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
