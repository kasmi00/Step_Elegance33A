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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import footerComp from "./footerComp";

function MenPage() {
  enum ProductType{
    SHOE = "SHOE",
    ACCESSORIES = "ACCESSORIES"
  }
  enum ProductCategory{
    MEN = "MEN",
    WOMEN = "WOMEN",
    KIDS = "KIDS"
  }
  interface ProductData{
    productId: number;
    productName: string;
    description: string;
    price: number;
    quantity: number;
    size: number;
    type: ProductType;
    category: ProductCategory;
  }
  const { data } = useQuery({
    queryKey: ["GET_DATA"],
    queryFn() {
      return axios.get("http://localhost:8087/product/getAll");
    },
  });

  console.log(data);

  return (
    <>
      <TopBar />
        <div className="men-container">
            {data?.data.map((i :ProductData) => {
              return (
                <>
                  <div className="men-card">
                    <div className="image-menshoe">
                      <img src={Erke} alt="erick"/>
                    </div>
                    <div className="Title">
                      <h2>{i?.productName}</h2>
                    </div>
                    <p>{i?.description} </p>
                    <a href="">BUY NOW</a>
                  </div>
                  ;
                </>
              );
            })}
        </div>

        <FooterComp />
    </>
  );
}
export default MenPage;
