import React, { useState } from 'react';
import './productaddtable.css';


interface ProductAddFormProps {
    onAddProduct: (product: Product) => void;
    productData: Product[];
}

const ProductAddForm: React.FC<ProductAddFormProps> = ({ onAddProduct, productData }) => {
    const [newProduct, setNewProduct] = useState<Product>({
        id: 0,
        productImage: '',
        name: '',
        description: '',
        price: 0,
        quantity: 0,
        size: '',
        type: '',
        category: '',
    });

    const handleAddProduct = () => {
        const productId = new Date().getTime();
        const productToAdd: Product = { ...newProduct, id: productId };
        onAddProduct(productToAdd);
        setNewProduct({
            id: 0,
            productImage: '',
            name: '',
            description: '',
            price: 0,
            quantity: 0,
            size: '',
            type: '',
            category: '',
        });
    };

    return (
        <>
            <h2 className="table-header">Product Table</h2>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        {/* Add more columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    {productData.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>
                                <img
                                    src={product.productImage}
                                    alt={`Product ${product.id}`}
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            {/* Add more columns as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="form-container">
                <h2 className="add-product-header">Add Product</h2>
                <div className="insideformofaddproduct">

                    <label className="productlabel">Product Image:</label>
                    <input
                        className="inputforproduct"
                        type="file"
                        value={newProduct.productImage}
                        onChange={(e) => setNewProduct({ ...newProduct, productImage: e.target.value })}
                    />
                    <label className='productlabel'>Product Name:</label>
                    <input className='inputforproduct'
                        type="text"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    />
                    <label className='productlabel'>Description:</label>
                    <input className='inputforproduct'
                        value={newProduct.description}
                        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    />
                    <label className='productlabel'>Price:</label>
                    <input className='inputforproduct'
                        type="number"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: parseInt(e.target.value, 10) })}
                    />
                    <label className='productlabel'>Quantity:</label>
                    <input className='inputforproduct'
                        type="number"
                        value={newProduct.quantity}
                        onChange={(e) => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value, 10) })}
                    />
                    <label className='productlabel'>Size:</label>
                    <input className='inputforproduct'
                        type="text"
                        value={newProduct.size}
                        onChange={(e) => setNewProduct({ ...newProduct, size: e.target.value })}
                    />
                    <label className='productlabel'>Type:</label>
                    <input className='inputforproduct'
                        type="text"
                        value={newProduct.type}
                        onChange={(e) => setNewProduct({ ...newProduct, type: e.target.value })}
                    />
                    <label className='productlabel'>Category:</label>
                    <input className='inputforproduct'
                        type="text"
                        value={newProduct.category}
                        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    />
                </div>
                <button className='bttnaddproduct' onClick={handleAddProduct}>Add Product</button>
            </div>
        </>
    );
};

export default ProductAddForm;
