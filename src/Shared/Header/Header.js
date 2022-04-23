import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='d-flex justify-content-between container mt-3'>
            <div className=''>
                <Link className='text-decoration-none text-dark' to='/'>
                    <h3>LOGO</h3>
                </Link>
            </div>
            <div className='links-section'>
                <Link className='text-decoration-none' to='/'>Home</Link>
                <Link className='text-decoration-none' to='/about'>About</Link>
                <Link className='text-decoration-none' to="help">Help</Link>
                <Link className='text-decoration-none' to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Header;