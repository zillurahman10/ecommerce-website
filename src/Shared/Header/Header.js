import React from 'react';
import './Header.css'

const Header = () => {
    // const handleHamburger = () => {
    //     const container = document.getElementById("container");
    //     container.classNameList.toggle("active");
    // }
    return (
        <body>
            <div id="container">
                <div className="navbar">
                    <div className="menu">
                        <h3 className="logo">Brand<span>Name</span></h3>
                        <div id="hamburger-menu">
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>

                <div className="main-container">
                    <div className="main">
                        <header>
                            <div className="overlay">
                                <div className="inner">
                                    <h2 className="title">Future is here</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Laudantium illum tenetur consequatur veritatis?
                                    </p>
                                    <button className="btn">Read more</button>
                                </div>
                            </div>
                        </header>
                    </div>

                    <div className="shadow one"></div>
                    <div className="shadow two"></div>
                </div>

                <div className="links">
                    <ul>
                        {/* <li>
                            <a href="" style="--i: 0.05s;">Home</a>
                        </li>
                        <li>
                            <a href="" style="--i: 0.1s;">Services</a>
                        </li>
                        <li>
                            <a href="" style="--i: 0.15s;">Portfolio</a>
                        </li>
                        <li>
                            <a href="" style="--i: 0.2s;">Testimonials</a>
                        </li>
                        <li>
                            <a href="#" style="--i: 0.25s;">About</a>
                        </li>
                        <li>
                            <a href="#" style="--i: 0.3s;">Contact</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </body>
    );
};

export default Header;