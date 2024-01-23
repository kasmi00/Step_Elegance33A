import "./KidsPage.css";
import Logo from "../assets/logo.png";
import K1 from "../assets/Shoe/K1.jpg";
import K2 from "../assets/Shoe/K2.jpg";
import K3 from "../assets/Shoe/K3.jpg";
import K4 from "../assets/Shoe//K4.jpg";
import K5 from "../assets/Shoe/K5.jpg";
import K6 from "../assets/Shoe/K6.jpg";
import K7 from "../assets/Shoe/K7.jpg";
import K8 from "../assets/Shoe/K8.jpg";


function KidsPage() {
  return (
    <>
      <div className='maindash'>
        <div className="nav">
          <div className="logoimg">
            <img src={Logo} alt='shoelogo' />
          </div>
          <div className="navchild">
            <nav>
              <a href="men">Men</a>
              <a href="women">Women</a>
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
        
      </div>
      <div>
      <div className="container">
        <section className="container-card1">
          <div className="card">
            <div className="image">
              <img src={K1}/>
            </div>
            <div className="Title">
            <h2>Nike 007</h2>
            </div>
            
            <p>
              High quality shoe for your kids
              Sizes available for 4-7 years old 

            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
            <div className="image">
              <img src={K2}/></div>
            <h2>Casual 057</h2>
            <p>
            High quality shoe for your kids
              Sizes available for 2-4 years old 
             
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
          <div className="image">
              <img src={K3}/></div>
            <h2>Leather 703</h2>
            <p>
            High quality genuine leather shoe for your kids
              Sizes available for 3-6 years old 
            
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
          <div className="image">
              <img src={K4}/></div>
            <h2>Sports 203</h2>
            <p>
            High quality shoe for your kids
              Sizes available for 4-8 years old 
            
            </p>
            <a href="">BUY NOW</a>
          </div>
        </section>
        <section className="container-card2">
          <div className="card">
          <div className="image">
              <img src={K5}/></div>
            <h2></h2>
            <p>
            High quality shoe for your kids
              Sizes available for 4-7 years old 
            
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
          <div className="image">
              <img src={K6}/></div>
            <h2>Warrior Trekking 537</h2>
            <p>
            High quality shoe for your kids
              Sizes available for 4-7 years old 
            
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
          <div className="image">
              <img src={K7}/></div>
            <h2>WFK 220</h2>
            <p>
            High quality shoe for your kids
              Sizes available for 4-7 years old 
            
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
          <div className="image">
              <img src={K8}/></div>
            <h2>Yeezy 888</h2>
            <p>
            High quality shoe for your kids
              Sizes available for 4-7 years old 
            
            </p>
            <a href="">BUY NOW</a>
          </div>
        </section>
      </div>
      
   

      </div>
    </>
  );
}
export default KidsPage;
