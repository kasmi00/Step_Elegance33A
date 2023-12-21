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
            <form><input type="text" placeholder="Search..." />
            </form>
            </div>
            <button type="submit">Search</button>
        </div>
        </div>
      </nav>
      <div className="container">
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
      </div>
    </>
  );
}
export default home;