import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    //console.log(fakeData);
    const first15 = fakeData.slice(0, 15);
    const [courses, setcourses] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) =>{
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    courses.map(prd => <Product 
                        handleAddCourse = {handleAddCourse}
                        course = {prd}>    
                        </Product>)    
                }
            </div>
            <div className = "cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;