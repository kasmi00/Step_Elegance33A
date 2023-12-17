import "./home.css";
import Logo from "../assets/StepEleganceLogo.png";
import Menu from "../assets/menu.png";

function home() {
  return (
    <>
      <div className='maindash'>
        <div className="nav">
          <div className="logoimg">
          <img src={Logo} alt='logo' />
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
          <a href="/">
            <img src={Menu} alt='menu' />
            </a>
          </div>
        </div>
        <div className="productinfo">
          <div className="product-section">
            <h2>Product Section</h2>
            <div className="product-item">
              {/* <img src="shoe1.jpg" alt="Shoe 1"> */}
              <p>Shoe Name 1</p>
              <p>$99.99</p>
            </div>
            <div className="product-item">
              {/* <img src="shoe2.jpg" alt="Shoe 2"> */}
              <p>Shoe Name 2</p>
              <p>$79.99</p>
            </div>
            {/* <!-- Add more product items as needed --> */}
          </div>

          <div className="sales-summary">
            <h2>Sales Summary</h2>
            <p>Total Sales: $5000</p>
            <p>Today's Sales: $1000</p>
            <p>Monthly Sales: $20000</p>
          </div>

        </div>


      </div>
    </>
  );
}
export default home;
