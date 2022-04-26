import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorElement, setErrorElement] = useState("")
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/')
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} className='d-flex justify-content-center'>
                    <div>
                        <h2>Please Login</h2>
                        <input onBlur={handleEmail} className='email-input' type="email" name="email" id="" required />
                        <br />
                        <input onBlur={handlePassword} type="password" name="password" id="" required />
                        <br />
                        <input className='w-50' type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center'>New in ecommerce? <Link to="/signup">Create a new account</Link></p>
            </div>
        </div>
    );
};

export default Login;