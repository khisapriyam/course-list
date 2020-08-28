import React from 'react';
import './Cart.css';
import { Button } from 'react-bootstrap';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.price;

    }
    const tax = total/15;
    //const grandTotal =(total + Number(tax)).toFixed(2);
    const grandTotal = total + tax;
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Courses Ordered : {cart.length} </p>
            <p>Course Price : {formatNumber(total)}</p>
            <p>Tax & Vat : {formatNumber(tax)}</p>
            <p>Total Price : {formatNumber(grandTotal)} </p>
            <Button className = 'buy-now-btn' variant="success">Buy Now</Button>{' '}
            
        </div>
    );
};

export default Cart;