import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>List of Courses</h1>
            <nav>
                <a href="/programming courses">Programming Courses</a>
                <a href="/photoshop">Photoshop Courses</a>
                <a href="/graphics">Graphic Design Courses</a>
            </nav>
        </div>
    );
};

export default Header;