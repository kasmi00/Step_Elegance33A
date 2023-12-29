import { useRef, useState } from "react";
import "./about.css";
import Logo from "../assets/logo.png";

function about() {
  const[open,setOpen]=useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null)
  const handleDropdown=(State: boolean)=>{
    setOpen(!State)
  };
  const handleClickoutsideDropdown = (e:any)=>{
    if (open && !dropdownRef.current?.contains(e.target as Node)){
      console.log("Clicked active");
    }
  }
  window.addEventListener("click",handleClickoutsideDropdown)
  console.log(open);
  
  return (
  <>
    <nav className="navbar">
      <div className="logo-container">
        <a href="/"><img src={Logo} alt="Logo" height="70px" width="70px" /></a>
      </div>
      <div className="section-container">
        <li><a href="/">Home</a></li>
        <li><a href="#">New</a></li>
        <li><a href="#">Mens</a></li>
        <li><a href="#">Womens</a></li>
        <li><a href="#">Kids</a></li>
        <li><a href="#">Sales</a></li>
      </div>
      <form>
        <div className="inputbtt">
          <input className="searchinput" type="text" placeholder="Search..." />
          <label htmlFor="searchbttn" className="search-bttn">
            <i className="fas fa-search"></i>
          </label>
        </div>
      </form>
      <div className="menubox" ref={dropdownRef}>
        <button onClick={e=> handleDropdown(open)}>
        <i className="fas fa-bars"></i></button>
        {open&&(
          <div className="bars">
        <ul>
              <li><a href="#"><i className="fas fa-user"></i> Profile</a></li>
              <li><a href="/about"><i className="fas fa-book"></i> About Us</a></li>
              <li><a href="#"><i className="fas fa-map"></i> Location</a></li>
              <li><a href="#"><i className="fas fa-globe-asia"></i> Find Us On</a></li>
              <li><a href="#"><i className="fas fa-phone"></i> Contact Us</a></li>
        </ul>
        </div>
        )}
      </div>
  </nav >
  <div className="about">
    <h2>About Page</h2>
    <div className="box1">
    <div className="description">
      <p>
      Welcome to Shoe Elegance, where fashion meets comfort! At Shoe Elegance, we believe
        that the right pair of shoes can elevate your style and keep you comfortable
        throughout the day.
          <br />
        Our mission is to provide a wide range of high-quality footwear for every
        occasion. Whether you're looking for trendy sneakers, running shoes for your
        active lifestyle, or stylish sandals for casual outings, we have it all.
        <br />        
        </p>
        </div>
        <div className="img">
        <img src={Logo} alt="" />     
        </div>
    </div>
    </div>
        <div className="ourservices">
          <h2 className="services">
            Our Services
          </h2>
          <p>
          Embrace the experience and let us elevate your journey towards fashion.
          </p>
          <div className="gridbox">
            <div className="truckimg">
            <i className="fa-solid fa-truck-fast"></i>
            <div className="deliveryinfo">
            <h2>D2D Delivery</h2>
            <p>We provide Door to Door delivery in almost all part of Nepal.</p>
            </div>
            </div>
          </div>
    </div>
    <footer>
    <div className="footercontainer">
      <div className="footernav">
        <ul>
          <li><a href="">Gift Card</a></li>
          <li><a href="">Find Store</a></li>
          <li><a href="">Become a member</a></li>
          <li><a href="">Get Help</a></li>
          <li><a href="">Promotion & Discount</a></li>
        </ul>
      </div>
    </div>
    <div className="footerbottom">
        <p>Copyright &copy; 2023 Designed by <span className="Designer">Step Elegance Member</span>
        </p>
      </div>
    </footer>
      </>
    )
};
export default about;