import React from 'react';
import "./card.css"


interface Product {
    id: number;
    name: string;
    price: number;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
    <div className="hello">
        <h3>{product.name}</h3>
        <p className='priceofproduct'>Price: ${product.price}</p>
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
    const products: Product[] = [
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 },
        // Add more products as needed
        { id: 3, name: 'Product 3', price: 39.99 },
        { id: 4, name: 'Product 4', price: 49.99 },
        { id: 5, name: 'Product 5', price: 59.99 },
        { id: 6, name: 'Product 6', price: 69.99 },
        { id: 7, name: 'Product 7', price: 79.99 },
        { id: 8, name: 'Product 8', price: 89.99 },
        { id: 9, name: 'Product 9', price: 99.99 },
        { id: 10, name: 'Product 10', price: 109.99 },
    ];

    return (
        <>
            <div className=" containeroftheproduct">
                {products.map((product) => (
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