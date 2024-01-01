import "./contactUs.css";
import { useState, useRef } from "react";
import Logo from "../assets/logo.png";
import axios from "axios";

function contactUs() {
  interface contactUSFourum {
    fullName: string;
    email: string;
    subject: string;
    message: string;
  }
  const [formData, setFormData] = useState<contactUSFourum>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response: string = await axios.post(
        "http://localhost:8087/contact-us/save",
        formData
      );
      console.log("Contact Us response: ", response);
    } catch (error) {
      console.error("Contact us error", error);
    }
  };

  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleDropdown = (State: boolean) => {
    setOpen(!State);
  };
  const handleClickoutsideDropdown = (e: any) => {
    if (open && !dropdownRef.current?.contains(e.target as Node)) {
      console.log("Clicked active");
    }
  };
  window.addEventListener("click", handleClickoutsideDropdown);
  console.log(open);
  return (
    <>
      <div className="body">
        <div className="top-nav">
          <nav className="navbar">
            <div className="logo-container">
              <a href="/">
                <img src={Logo} alt="Logo" height="70px" width="70px" />
              </a>
            </div>
            <div className="section-container">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">New</a>
              </li>
              <li>
                <a href="#">Mens</a>
              </li>
              <li>
                <a href="#">Womens</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
            </div>
            <form>
              <div className="inputbtt">
                <input
                  className="searchinput"
                  type="text"
                  placeholder="Search..."
                />
                <label htmlFor="searchbttn" className="search-bttn">
                  <i className="fas fa-search"></i>
                </label>
              </div>
            </form>
            <div className="menubox" ref={dropdownRef}>
              <button onClick={(e) => handleDropdown(open)}>
                <i className="fas fa-bars"></i>
              </button>
              {open && (
                <div className="bars">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-user"></i> Profile
                      </a>
                    </li>
                    <li>
                      <a href="/about">
                        <i className="fas fa-book"></i> About Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-map"></i> Location
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-globe-asia"></i> Find Us On
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-phone"></i> Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </div>
        <div className="forum">
          <form onSubmit={handleSubmit}>
            <div className="title">
              <h1>Contact Us</h1>
            </div>
            <div className="title-message">
              <h2 className="message">We would love to hear from you!</h2>
            </div>
            <div className="feedbackInputs">
              <div className="fullNameInput">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="emailInput">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="subjectInput">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="messageInput">
                <textarea
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sendButton">
                <button> Send </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default contactUs;
