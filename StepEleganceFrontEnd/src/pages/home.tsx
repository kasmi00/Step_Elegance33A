import "./home.css";
import Logo from "../assets/logo.png";
function home() {
  return (
    <>
      <div className='maindash'>
        <div className="nav">
          <div className="logoimg">
            <img src={Logo} alt='shoelogo' />
          </div>
          <div className="navchild">
            <nav>
              <a href="mens">Mens</a>
              <a href="womens">Womens</a>
              <a href="kids">Kids</a>
              <a href="sales">Sales</a>
            </nav>
          </div>
          <div className="search">
            <input type="text" id="search-box" placeholder="Search..." />
            <button id="search-button"> Search</button>
          </div>
          <div className="icons">
            <nav >
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" display="flex" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
              <ul className="menu" >
                <></>
                <li><a href="#">PROFILE</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">SUPPORT</a></li>
                <li><a href="#">LOG-IN</a></li>
                <li><a href="#">SIGN-IN</a></li>
                <li><a href="#">LOCATION</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="productinfo">
          <div className="productsection">
            <h2>Product Section</h2>
            <div className="product-item">
              {/* <img src="shoe1.jpg" alt="Shoe 1"> */}
            </div>
            <div className="product-item">
              {/* <img src="shoe2.jpg" alt="Shoe 2"> */}
            </div>
            {/* <!-- Add more product items as needed --> */}
          </div>
          <div className="sales-summary">
            <h2>Sales Summary</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default home;
