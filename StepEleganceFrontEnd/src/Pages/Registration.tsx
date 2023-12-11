import "./Registration.css";
import axios from "axios";
import React, {useState} from "react";


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
          onChange={handleChange}
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
  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    dateOfBirth: string;
    gender: string;
  }
  return (
    <>
      <div>
        <h2>Registration Page</h2>
        <div className="Registration_Form">
          <div className="form-group">
            <label>
              First Name: <input type="text" name="First Name" />
            </label>
          </div>
          <div className="form-group">
            <label>
              Last Name: <input type="text" name="Last Name" />
            </label>
          </div>
          <div className="form-group">
            <label>
              Email: <input type="text" name="Email" />
            </label>
          </div>
          <div className="form-group">
            <label>
              Password: <input type="password" name="Password" />
            </label>
          </div>
          <div className="form-group">
            <label>
              Repeat Password: <input type="password" name="Repeat Password" />
            </label>
          </div>
          <div className="form-group">
            <label>
              Gender:{" "}
              <select>
                <option value="">-- Select --</option>
                <option value="option1">Male</option>
                <option value="option2">Female</option>
              </select>{" "}
            </label>
          </div>
          <div className="form-group">
            <label>
              Date.Of.Birth: <input type="date" />{" "}
            </label>
          </div>
          <div id="confirm " className="form-group">
            <button> Confirm </button>
          </div>
          <div id="signin" className="form-group">
            <label>
              {" "}
              Already have an account? <button> Sign-In</button>{" "}
            </label>
            <a href="login.tsx">
              {" "}
              <button> Sign-In</button>{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Registration;
