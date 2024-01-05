import "./MenPage.css";
import TopBar from "./topBar";
import FooterComp from "./footerComp";
import Logo from "../assets/logo.png";
import Erke from "../assets/Shoe/Erke.jpg";
import Peak from "../assets/Shoe/Peak.jpg";
import LS from "../assets/Shoe/LS.jpg";
import Fandei from "../assets/Shoe/Fandei.jpg";
import TW from "../assets/Shoe/TW.jpg";
import TW2 from "../assets/Shoe/Tw2.jpg";
import WFK from "../assets/Shoe/WFK.jpg";
import yeezy from "../assets/Shoe/yeezy.jpg";


function MenPage() {
  return (
    <>
      <TopBar />

      <div>
      <div className="container">
        <section className="container-card1">
          <div className="card">
            <div className="image">
              <img src={Erke}/>
            </div>
            <div className="Title">
            <h2>Erke C0147</h2>
            </div>
            
            <p>
              High quality fibre material
              Sizes available 39-43
              Limited pieces available
              Hurryup and grab it soon 

            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
            <div className="image">
              <img src={Peak}/></div>
            <h2>Peak 2741</h2>
            <p>
              High quality pure genuine leather
              Sizes available 39-43
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
          <div className="image">
              <img src={LS}/></div>
            <h2>Lineseven 0035</h2>
            <p>
            High quality fibre material
              Sizes available 39-43
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
          <div className="image">
              <img src={Fandei}/></div>
            <h2>Fandei 227</h2>
            <p>
            High quality fibre material
              Sizes available 39-43
            </p>
            <a href="">BUY NOW</a>
          </div>
        </section>
        <section className="container-card2">
          <div className="card">
          <div className="image">
              <img src={TW}/></div>
            <h2>Warrior Trekking 537</h2>
            <p>
            High quality fibre material
              Sizes available 39-43
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
          <div className="image">
              <img src={TW2}/></div>
            <h2>Warrior Trekking 537</h2>
            <p>
            High quality fibre material
              Sizes available 39-43
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
          <div className="image">
              <img src={WFK}/></div>
            <h2>WFK 220</h2>
            <p>
            High quality fibre material
              Sizes available 39-43
            </p>
            <a href="">BUY NOW</a>
          </div>
          <div className="card">
          <div className="image">
              <img src={yeezy}/></div>
            <h2>Yeezy 888</h2>
            <p>
            High quality fibre material
              Sizes available 39-43
            </p>
            <a href="">BUY NOW</a>
          </div>
        </section>
      </div>
      
   

      </div>
    </>
  );
}
export default MenPage;
