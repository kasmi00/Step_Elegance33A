import { useEffect, useState } from "react";
import "./card.css";
import axios from "axios";
import { toast } from "react-toastify";

interface Product {
  id: number;
  productImage: string;
  productName: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

// const [isLoading,setIsLoading] = useState<boolean>(false)

// try {
//   const res = await axios.post('http://localhost:8087/product/save',{
//       headers: {
//           'Content-Type': 'multipart/form-data'
//       },
//   });
//   console.log('res', res);

//   const data = res.data;
//   console.log('data', data);
//   toast.success(res.data);


// } catch (error) {
//   console.error('Error:', error);
//   toast.error('An error occurred while saving the product.');
// setIsLoading(false)

// }

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="hello">
    <img
      src={`http://localhost:8087/${product.productImage}`}
      width={100} height={100}
      alt="productImg"
    />
    <h3 className="productheadername">{product.productName}</h3>
    <p className="priceofproduct">Price: Rs.{product.price}</p>
    <div className="buttntobuy">
      <button className="addcartbttn" type="submit"> {false && <span>Loading....</span>} Buy Now</button>
      <button className="addcartbttn">Add to Cart</button>
    </div>
  </div>
);

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8087/product/getAll");

        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="containeroftheproduct">
       {products && products.length > 0 ? (
        products?.map((product:Product)=>(
          <ProductCard key={product.id} product={product} />

        ))
       ):(
        <h1>No Data found</h1>
       )}
      </div>
    </>
  );
};

export default Products;
