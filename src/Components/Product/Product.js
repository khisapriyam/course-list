import React from 'react';
import './Product.css';
import { Button } from 'react-bootstrap';

const Product = (props) => {
    const {name, price, seller} = props.course; 
    return (
        <div className = "products">
            <h3>Course Name : {name}</h3>
            <p>Price: ${price}</p>
            <Button className = "button" variant="primary"
            onClick = {() => props.handleAddCourse(props.course)}
            >Enroll Now</Button> {' '} 
             
        </div>
    );
};

export default Product;