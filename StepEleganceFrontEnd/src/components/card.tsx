import React, { useEffect, useState } from 'react';
import "./card.css"
import axios from 'axios';


interface Product {
    id: number;
    productImage:string;
    productName: string;
    price: number;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
    <div className="hello">
        <img src={`http://localhost:8087/product/getImage/${product.productImage}`} alt='productImg' />
        <h3>{product.productName}</h3>
        <p className='priceofproduct'>Price: Rs.{product.price}</p>
        {/* Add more product details as needed */}
        <div className="buttntobuy">
        <button className='addcartbttn'>
            Buy Now
            </button>
        <button className='addcartbttn'>
            Add to Cart</button>
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
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="containeroftheproduct">
                {products && products?.map((product:Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <ul>
                {/* Render your shopping cart items here if needed */}
            </ul>
        </>
    );
};

export default Products;
