import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <form className='d-flex justify-content-center'>
            <div>
                <h2>Please Login</h2>
                <input className='email-input' type="email" name="email" id="" required />
                <br />
                <input type="password" name="password" id="" required />
                <br />
                <input type="submit" value="Login" />
            </div>
        </form>
    );
};

export default Login;