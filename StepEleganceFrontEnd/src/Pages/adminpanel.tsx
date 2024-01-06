import axios from "axios";
import "./adminpanel.css";
import { useQuery } from "@tanstack/react-query";


function adminpanel() {
    const { data } = useQuery({
        queryKey: ["GET_DATA"],
        queryFn() {
          return axios.get("http://localhost:8087/product/getAll");
        },
      });
    
      console.log(data);
    return (
        <>
        <header className="headadmin">Admin Panel</header>
            <div className="adminbox">
                <div className="buttonsleft">
                    <button className="product-bttn">
                        Add Product
                    </button>
                    <button className="product-bttn">
                        Update Product
                    </button>
                    <button className="product-bttn">
                        Delete Product
                    </button>
                </div>
                <form action="" className="adminform">

                    <div className="addproducts">
                        <input className="detail-product-add" type="text" placeholder="Product Name" />
                        <input className="detail-product-add" type="text" placeholder="Category" />
                        <input className="detail-product-add" type="text" placeholder="Type" />
                        <input className="detail-product-add" type="number" placeholder="Quantity" />
                        <input className="detail-product-add" type="text" placeholder="Price" />
                    </div>

                    <div className="addimg-product">
                        <input className="img-product-add" type="text" placeholder="Image" />
                        <input className="description-product-add" type="text" placeholder="Description" />
                        <button className="add-bttn-submit">Submit</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default adminpanel;
