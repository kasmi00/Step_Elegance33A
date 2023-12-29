// import "./WomenPage.css";
// import Logo from "../assets/logo.png";
// import S1 from "../assets/Shoe/S1.jpg";
// import S2 from "../assets/Shoe/S2.jpg";
// import S3 from "../assets/Shoe/S3.jpg";
// import S4 from "../assets/Shoe/S4.jpg";
// import S5 from "../assets/Shoe/S5.jpg";
// import S6 from "../assets/Shoe/S6.jpg";
// import S7 from "../assets/Shoe/S7.jpg";
// import S8 from "../assets/Shoe/S8.jpg";





// function WomenPage() {
//   return (
//     <>
//       <nav>
//         <div className="logo">
//           <a href="/">
//             <img src={Logo} alt="Logo" height="70px" width="70px" />
//           </a>
//         </div>
//         <div className="navcontainer">
//         <div className="navbox">
//           <div className="nav-items">
//             <li><a href="#">Home</a></li>
//             <li><a href="#">New</a></li>
//             <li><a href="#">Mens</a></li>
//             <li><a href="#">Womens</a></li>
//             <li><a href="#">Kids</a></li>
//             <li><a href="#">Sales</a></li>
//           </div>
//         </div>

//         <div className="searchbox">
//           <div className="search-container">
//             <form><input type="text" placeholder="Search..." />
//             </form>
//             </div>
//             <button type="submit">Search</button>
//         </div>
//         </div>
//       </nav>
//       <div className="container">
//         <section className="container-card1">
//           <div className="card">
//             <div className={S1}></div>
//             <h2>Title</h2>
//             <p>
//               discription
//             </p>
//             <a href="">BUY NOW</a>
//           </div>
//           <div className="card">
//             <div className={S2}></div>
//             <h2>Title</h2>
//             <p>
//               discription
//             </p>
//             <a href="">BUY NOW</a>
//           </div>
//           <div className="card">
//             <div className={S3}></div>
//             <h2>Title</h2>
//             <p>
//               discription
//             </p>
//             <a href="">BUY NOW</a>
//           </div>
//           <div className="card">
//             <div className={S4}></div>
//             <h2>Title</h2>
//             <p>
//               discription
//             </p>
//             <a href="">BUY NOW</a>
//           </div>
//         </section>
//         <section className="container-card2">
//           <div className="card">
//             <div className={S5}></div>
//             <h2>Title</h2>
//             <p>
//               discription
//             </p>
//             <a href="">BUY NOW</a>
//           </div>
//           <div className="card">
//             <div className={S6}></div>
//             <h2>Title</h2>
//             <p>
//               discription
//             </p>
//             <a href="">BUY NOW</a>
//           </div>
//           <div className="card">
//             <div className={S7}></div>
//             <h2>Title</h2>
//             <p>
//               discription
//             </p>
//             <a href="">BUY NOW</a>
//           </div>
//           <div className="card">
//             <div className={S8}></div>
//             <h2>Title</h2>
//             <p>
//               discription
//             </p>
//             <a href="">BUY NOW</a>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }
// export default WomenPage;



import "./WomenPage.css";
import Logo from "../assets/logo.png";
import S1 from "../assets/Shoe/S1.jpg";
import S2 from "../assets/Shoe/S2.jpg";
import S3 from "../assets/Shoe/S3.jpg";
import S4 from "../assets/Shoe/S4.jpg";
import S5 from "../assets/Shoe/S5.jpg";
import S6 from "../assets/Shoe/S6.jpg";
import S7 from "../assets/Shoe/S7.jpg";
import S8 from "../assets/Shoe/S8.jpg";



function WomenPage() {
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
        
      </div>
      <div>
      <div className="container">
        <section className="container-card1">
          <div className="card">
            <div className="image">
              <img src={S1}/>
            </div>
            <h2>Fandei</h2>
            <p>
              discription
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
            <div className="image">
              <img src={S2}/></div>
            <h2>Title</h2>
            <p>
              discription
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
            <div className="image">
              <img src={S3}/>
            </div>
            <h2>Title</h2>
            <p>
              discription
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
            <div className="image">
              <img src={S4}/></div>
            <h2>Title</h2>
            <p>
              discription
            </p>
            <a href="">BUY NOW</a>
          </div>
        </section>
        <section className="container-card2">
          <div className="card">
            <div className="image">
              <img src={S5}/></div>
            <h2>Title</h2>
            <p>
              discription
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
            <div className="image">
              <img src={S6}/></div>
            <h2>Title</h2>
            <p>
              discription
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
            <div className="image">
              <img src={S7}/></div>
            <h2>Title</h2>
            <p>
              discription
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
            <div className="image">
              <img src={S8}/></div>
            <h2>Title</h2>
            <p>
              discription
            </p>
            <a href="">BUY NOW</a>
          </div>
        </section>
      </div>
      
   

      </div>
    </>
  );
}
export default WomenPage;
