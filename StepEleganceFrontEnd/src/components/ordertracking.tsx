import React, { useState } from 'react';
import './ordertracking.css'; 

interface Order {
    id: number;
    customerName: string;
    product: string;
    quantity: number;
    status: string;
}

interface OrderTrackingProps {
    orders: Order[];
}

const OrderTracking: React.FC<OrderTrackingProps> = ({ orders }) => {
    return (
        <div className="order-tracking-container">
            <h2>Order Tracking</h2>
            <table className="order-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer Name</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customerName}</td>
                            <td>{order.product}</td>
                            <td>{order.quantity}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderTracking;
