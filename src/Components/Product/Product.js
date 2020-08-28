import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, price, seller} = props.course;
    return (
        <div className = "products">
            <h3>Course Name : {name}</h3>
            <p>Price: ${price}</p>
            <button className = "button" 
            onClick = {() => props.handleAddCourse(props.course)}
            >Enroll Now</button>  
        </div>
    );
};

export default Product;