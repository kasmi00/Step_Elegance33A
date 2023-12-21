import "./home.css";
import Logo from "../assets/logo.png";
// import shoe from "../assets/shoe1.jpg"
function home() {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Logo" height="70px" width="70px" />
          </a>
        </div>
        <div className="navcontainer">
          <div className="navbox">
            <div className="nav-items">
              <li><a href="#">Home</a></li>
              <li><a href="#">New</a></li>
              <li><a href="#">Mens</a></li>
              <li><a href="#">Womens</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Sales</a></li>
            </div>
          </div>
          <div className="searchbox">
            <div className="search-container">
              <form>
                <div className="inputbtt">
                  <input className="searchinput" type="text" placeholder="Search..." />
                  <button type="submit">Search</button>
                </div>

              </form>
            </div>

          </div>

          {/* 
            <div className="sidebar">
              <div className="wrapper">
                <input type="checkbox" id="btn" hidden />
                <label htmlFor="btn" className="menu-btn">
                  <i className="fas fa-bars" />
                  <i className="fas fa-times" />
                </label>
                <nav id="sidebar">
                  <div className="title">Side Menu</div>
                  <ul className="list-items">
                    <li><a href="#"><i className="fas fa-home" />Home</a></li>
                    <li><a href="#"><i className="fas fa-sliders-h" />About Us</a></li>
                    <li><a href="#"><i className="fas fa-envelope" />Contact us</a></li>
                  </ul>
                </nav>
              </div>

            </div>
          </div> */}
        </div>
        <div className="menubox">
          <input type="checkbox" id="menubtn" />
        <label htmlFor="menubtn" className="menu-bttn">
            <i className="fas fa-bars"></i>
          </label>

          <nav id="sidebar">
            <div className="title">
              <ul className="list-items">
                <li><a href="#"><i className="fas fa-user"></i> Profile</a></li>
                <li><a href="#"><i className="fas fa-book"></i> About Us</a></li>
                <li><a href="#"><i className="fas fa-map"></i> Location</a></li>
                <li><a href="#"><i className="fas fa-globe-asia"></i> Find Us On</a></li>
                <li><a href="#"><i className="fas fa-phone"></i> Contact Us</a></li>
              </ul>
              </div>
            
          </nav>
        </div>
      </nav>
      {/* <div className="container">
        <section className="container-card1">
          <div className="card">
            <div className="cardimg1"></div>
            <h2>Title</h2>
            <p>
              discription
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
            <div className="cardimg2"></div>
            <h2>Title</h2>
            <p>
              discription
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
            <div className="cardimg3"></div>
            <h2>Title</h2>
            <p>
              discription
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
            <div className="cardimg4"></div>
            <h2>Title</h2>
            <p>
              discription
            </p>
            <a href="">BUY NOW</a>
          </div>
        </section>
        <section className="container-card2">
          <div className="card">
            <div className="cardimg1"></div>
            <h2>Title</h2>
            <p>
              discription
            </p>
            <a href="">BUY NOW</a>
          </div>
        </section>
      </div> */}
    </>
  );
}
export default home;